// ETHFan Archive - Main JavaScript

// Archive data - will be populated as transcripts complete
const archiveData = [
    {
        id: 1,
        number: "Vol. 1",
        title: "EthFan Token Foundation Lecture Series AMA's",
        description: "The first AMA in the series where the foundation introduces itself and answers community questions about the project, tokenomics, and vision.",
        duration: "~1h 27min",
        date: "July 2024",
        icon: "🎤",
        mp3: "01_ethfan_ama.mp3",
        transcript: "transcripts/01_ethfan_ama.txt",
        shortDesc: "Foundation introduction and first AMA session"
    },
    {
        id: 2,
        number: "Vol. 2",
        title: "EthFan Foundation Introduction",
        description: "Deep dive into the ETHFan Foundation, its mission, structure, and how it serves the ecosystem.",
        duration: "~2h",
        date: "July 2024",
        icon: "🏛️",
        mp3: "02_foundation_intro.mp3",
        transcript: "transcripts/02_foundation_intro.txt",
        shortDesc: "Foundation mission and structure explained"
    },
    {
        id: 3,
        number: "Vol. 3",
        title: "Supply Exhaustion: Tesla to Toilet Paper",
        description: "A comprehensive look at supply mechanics, token distribution, and what happens when supply gets exhausted.",
        duration: "~2h",
        date: "July 2024",
        icon: "📉",
        mp3: "03_supply_exhaustion.mp3",
        transcript: "transcripts/03_supply_exhaustion.txt",
        shortDesc: "Token supply mechanics and distribution"
    },
    {
        id: 4,
        number: "Vol. 4",
        title: "Franchising 101",
        description: "Understanding the franchise model and how it applies to crypto projects and ecosystem growth.",
        duration: "~2h",
        date: "August 2024",
        icon: "🏪",
        mp3: "04_franchising.mp3",
        transcript: "transcripts/04_franchising.txt",
        shortDesc: "Franchise model for crypto ecosystems"
    },
    {
        id: 5,
        number: "Vol. 5",
        title: "Tokenization: What is Real & What is Fake About RWAs",
        description: "Critical analysis of Real World Assets (RWAs) - what's legitimate tokenization and what's just marketing.",
        duration: "~2h",
        date: "August 2024",
        icon: "🪙",
        mp3: "05_tokenization.mp3",
        transcript: "transcripts/05_tokenization.txt",
        shortDesc: "RWA tokenization truth and fiction"
    },
    {
        id: 6,
        number: "Vol. 6",
        title: "Official Board Meeting",
        description: "Virtual board meeting covering ecosystem updates, partnerships, and strategic direction.",
        duration: "~2h",
        date: "August 2024",
        icon: "👥",
        mp3: "06_board_meeting.mp3",
        transcript: "transcripts/06_board_meeting.txt",
        shortDesc: "Board updates and ecosystem strategy"
    },
    {
        id: 7,
        number: "Vol. 7",
        title: "Artificial Intelligence's Price Prediction",
        description: "Exploring AI's role in crypto, price prediction models, and the intersection of machine learning with trading.",
        duration: "~2h",
        date: "August 2024",
        icon: "🤖",
        mp3: "07_ai_prediction.mp3",
        transcript: "transcripts/07_ai_prediction.txt",
        shortDesc: "AI and crypto price prediction"
    },
    {
        id: 8,
        number: "FINALE",
        title: "Let's Talk About CEX Finale",
        description: "The explosive finale covering centralized exchanges, their business models, security risks, and why they're fundamentally flawed.",
        duration: "~2h 14min",
        date: "August 2024",
        icon: "💥",
        mp3: "08_cex_finale.mp3",
        transcript: "transcripts/08_cex_finale.txt",
        shortDesc: "The truth about centralized exchanges"
    }
];

// Render archive cards
function renderArchive() {
    const grid = document.getElementById('archiveGrid');
    
    archiveData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'archive-card';
        card.innerHTML = `
            <div class="card-image">${item.icon}</div>
            <div class="card-content">
                <span class="card-number">${item.number}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
                <div class="card-meta">
                    <span>⏱️ ${item.duration}</span>
                    <span>📅 ${item.date}</span>
                </div>
                <div class="card-actions">
                    <a href="audio/${item.mp3}" class="btn btn-primary" download>⬇️ MP3</a>
                    <button class="btn btn-secondary" onclick="showTranscript(${item.id})">📄 Details</button>
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
    modalBody.innerHTML = '<p>Loading transcript...</p>';
    modal.classList.add('active');

    // Try to load transcript
    try {
        const response = await fetch(item.transcript);
        if (response.ok) {
            const text = await response.text();
            modalBody.innerHTML = `<pre>${text}</pre>`;
        } else {
            modalBody.innerHTML = `
                <h3>${item.shortDesc}</h3>
                <p>${item.description}</p>
                <hr style="margin: 20px 0; border-color: var(--border-color);">
                <p><strong>Duration:</strong> ${item.duration}</p>
                <p><strong>Date:</strong> ${item.date}</p>
                <p style="margin-top: 20px; color: var(--accent-primary);">Transcript will be available soon.</p>
            `;
        }
    } catch (e) {
        modalBody.innerHTML = `
            <h3>${item.shortDesc}</h3>
            <p>${item.description}</p>
            <hr style="margin: 20px 0; border-color: var(--border-color);">
            <p><strong>Duration:</strong> ${item.duration}</p>
            <p><strong>Date:</strong> ${item.date}</p>
            <p style="margin-top: 20px; color: var(--accent-primary);">Transcript will be available soon.</p>
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
