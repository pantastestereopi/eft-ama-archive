// ETHFan Archive - Main JavaScript

const archiveData = [
    {
        id: 1,
        number: "Vol. 1",
        title: "Foundation Lecture Series AMA's",
        description: "First AMA session - foundation introduction, tokenomics, and vision.",
        duration: "1h 27min",
        date: "July 2024",
        icon: "🎙️",
        mp3: "audio/01_ethfan_ama.mp3",
        transcript: "transcripts/01_ethfan_ama.txt",
        shortDesc: "Foundation introduction and first AMA"
    },
    {
        id: 2,
        number: "Vol. 2",
        title: "Foundation Introduction",
        description: "Deep dive into ETHFan Foundation mission, structure, and ecosystem services.",
        duration: "2h 12min",
        date: "July 2024",
        icon: "🏛️",
        mp3: "audio/02_foundation_intro.mp3",
        transcript: "transcripts/02_foundation_intro.txt",
        shortDesc: "Foundation mission and structure"
    },
    {
        id: 3,
        number: "Vol. 3",
        title: "Supply Exhaustion",
        description: "Token supply mechanics, distribution, and what happens when supply gets exhausted.",
        duration: "2h",
        date: "July 2024",
        icon: "📊",
        mp3: "audio/Supply Exhaustion： Tesla to Toilet Paper.mp3",
        transcript: "transcripts/03_supply_exhaustion.txt",
        shortDesc: "Token supply mechanics"
    },
    {
        id: 4,
        number: "Vol. 4",
        title: "Franchising 101",
        description: "The franchise model and how it applies to crypto ecosystem growth.",
        duration: "2h",
        date: "August 2024",
        icon: "🔗",
        mp3: "audio/Franchising 101.mp3",
        transcript: "transcripts/04_franchising.txt",
        shortDesc: "Franchise model for crypto"
    },
    {
        id: 5,
        number: "Vol. 5",
        title: "Tokenization: Real vs Fake RWAs",
        description: "Critical analysis of Real World Assets - legitimate tokenization vs marketing.",
        duration: "2h",
        date: "August 2024",
        icon: "🪙",
        mp3: "audio/Tokenization： What is Real & What is Fake About RWAs.mp3",
        transcript: "transcripts/05_tokenization.txt",
        shortDesc: "RWA tokenization analysis"
    },
    {
        id: 6,
        number: "Vol. 6",
        title: "Official Board Meeting",
        description: "Board meeting covering ecosystem updates, partnerships, and strategy.",
        duration: "2h 30min",
        date: "August 2024",
        icon: "📋",
        mp3: "audio/06_board_meeting.mp3",
        transcript: "transcripts/06_board_meeting.txt",
        shortDesc: "Board updates and strategy"
    },
    {
        id: 7,
        number: "Vol. 7",
        title: "AI Price Prediction",
        description: "AI's role in crypto, price prediction models, and ML with trading.",
        duration: "2h",
        date: "August 2024",
        icon: "🤖",
        mp3: "audio/07_ai_prediction.mp3",
        transcript: "transcripts/07_ai_prediction.txt",
        shortDesc: "AI and crypto prediction"
    },
    {
        id: 8,
        number: "FINALE",
        title: "Let's Talk About CEX",
        description: "The explosive finale about centralized exchanges, business models, and security risks.",
        duration: "2h 14min",
        date: "August 2024",
        icon: "💥",
        mp3: "audio/08_cex_finale.mp3",
        transcript: "transcripts/08_cex_finale.txt",
        shortDesc: "Truth about centralized exchanges"
    }
];

// Render archive cards
function renderArchive() {
    const grid = document.getElementById('archiveGrid');
    
    archiveData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'archive-card';
        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon">${item.icon}</div>
                <div>
                    <div class="card-number">${item.number}</div>
                    <div class="card-title">${item.title}</div>
                </div>
            </div>
            <div class="card-body">
                <p class="card-description">${item.description}</p>
                <div class="card-meta">
                    <span>⏱ ${item.duration}</span>
                    <span>📅 ${item.date}</span>
                </div>
                <div class="audio-player">
                    <audio controls preload="none">
                        <source src="${item.mp3}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <div class="card-actions">
                    <a href="${item.mp3}" class="btn btn-primary" download>⬇ Download</a>
                    <button class="btn btn-secondary" onclick="showTranscript(${item.id})">📖 Details</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Show transcript modal
async function showTranscript(id) {
    const item = archiveData.find(i => i.id === id);
    if (!item) return;

    const modal = document.getElementById('transcriptModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = item.title;
    modalBody.innerHTML = '<p style="text-align:center;padding:40px;">Loading transcript...</p>';
    modal.classList.add('active');

    try {
        const response = await fetch(item.transcript);
        if (response.ok) {
            const text = await response.text();
            modalBody.innerHTML = `<pre>${text}</pre>`;
        } else {
            modalBody.innerHTML = `
                <h3 style="color:var(--accent-primary);margin-bottom:12px;">${item.shortDesc}</h3>
                <p style="margin-bottom:16px;">${item.description}</p>
                <hr style="border-color:var(--border-color);margin:20px 0;">
                <p><strong>Duration:</strong> ${item.duration}</p>
                <p><strong>Date:</strong> ${item.date}</p>
                <p style="margin-top:20px;color:var(--accent-primary);">Transcript coming soon.</p>
            `;
        }
    } catch (e) {
        modalBody.innerHTML = `
            <h3 style="color:var(--accent-primary);margin-bottom:12px;">${item.shortDesc}</h3>
            <p style="margin-bottom:16px;">${item.description}</p>
            <hr style="border-color:var(--border-color);margin:20px 0;">
            <p><strong>Duration:</strong> ${item.duration}</p>
            <p><strong>Date:</strong> ${item.date}</p>
            <p style="margin-top:20px;color:var(--accent-primary);">Transcript coming soon.</p>
        `;
    }
}

// Close modal
function closeModal() {
    document.getElementById('transcriptModal').classList.remove('active');
}

// Close on outside click
document.getElementById('transcriptModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

// Close on escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// Initialize
document.addEventListener('DOMContentLoaded', renderArchive);
