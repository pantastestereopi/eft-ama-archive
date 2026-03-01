const archiveData = [
    {
        id: 8,
        number: "LATEST",
        title: "Let's Talk About CEX Finale",
        description: "The explosive finale covering centralized exchanges, business models, security risks, and why they're fundamentally flawed.",
        duration: "2h 14min",
        date: "February 2026",
        mp3: "audio/08_cex_finale.mp3",
        shortDesc: "Truth about centralized exchanges",
        details: "The explosive finale of the ETHFan Foundation Lecture Series. Topics: CEX business model analysis, security risks, banking comparison, regulation impact 2020+, listing vs partnership negotiations, FTX/Binance/Coinbase/OKX discussion. Key message: 'Not your keys, not your crypto.' - The speaker explains why all centralized exchanges are fundamentally flawed and cannot scale to serve millions of users safely."
    },
    {
        id: 7,
        number: "Vol. 7",
        title: "AI Price Prediction",
        description: "AI's role in crypto, price prediction models, and ML with trading.",
        duration: "2h",
        date: "",
        mp3: "audio/07_ai_prediction.mp3",
        shortDesc: "AI and crypto prediction",
        details: "Exploring the intersection of Artificial Intelligence and cryptocurrency markets. Discussion on AI-driven price prediction models, machine learning applications in trading, and how AI is reshaping the crypto landscape."
    },
    {
        id: 6,
        number: "Vol. 6",
        title: "Official Board Meeting",
        description: "Board meeting covering ecosystem updates, partnerships, and strategy.",
        duration: "2h 30min",
        date: "",
        mp3: "audio/06_board_meeting.mp3",
        shortDesc: "Board updates and strategy",
        details: "Virtual board meeting with ecosystem updates, partnership announcements, and strategic direction for the ETHFan Foundation. Community questions and answers included."
    },
    {
        id: 5,
        number: "Vol. 5",
        title: "Tokenization: Real vs Fake RWAs",
        description: "Critical analysis of Real World Assets - legitimate tokenization vs marketing.",
        duration: "2h",
        date: "",
        mp3: "audio/Tokenization： What is Real & What is Fake About RWAs.mp3",
        shortDesc: "RWA tokenization analysis",
        details: "Critical analysis of Real World Assets (RWAs). What's legitimate tokenization vs what's just marketing? Deep dive into fractional ownership, security tokens, and the future of asset tokenization."
    },
    {
        id: 4,
        number: "Vol. 4",
        title: "Franchising 101",
        description: "The franchise model and how it applies to crypto ecosystem growth.",
        duration: "2h",
        date: "",
        mp3: "audio/Franchising 101.mp3",
        shortDesc: "Franchise model for crypto",
        details: "Understanding the franchise model and how it applies to crypto ecosystem growth. How to build scalable, community-driven crypto projects using franchise-style expansion."
    },
    {
        id: 3,
        number: "Vol. 3",
        title: "Supply Exhaustion",
        description: "Token supply mechanics, distribution, and what happens when supply gets exhausted.",
        duration: "2h",
        date: "",
        mp3: "audio/Supply Exhaustion： Tesla to Toilet Paper.mp3",
        shortDesc: "Token supply mechanics",
        details: "Comprehensive look at token supply mechanics. What happens when supply gets exhausted? Distribution analysis, tokenomics deep dive, and the impact of supply shocks on price."
    },
    {
        id: 2,
        number: "Vol. 2",
        title: "Foundation Introduction",
        description: "Deep dive into ETHFan Foundation mission, structure, and ecosystem services.",
        duration: "2h 12min",
        date: "",
        mp3: "audio/02_foundation_intro.mp3",
        shortDesc: "Foundation mission and structure",
        details: "Deep dive into the ETHFan Foundation - mission, structure, and how it serves the ecosystem. Learn about the foundation's goals and how it supports the community."
    },
    {
        id: 1,
        number: "Vol. 1",
        title: "Foundation Lecture Series AMA's",
        description: "First AMA session - foundation introduction, tokenomics, and vision.",
        duration: "1h 27min",
        date: "",
        mp3: "audio/01_ethfan_ama.mp3",
        shortDesc: "Foundation introduction and first AMA",
        details: "The very first AMA in the series. Foundation introduction, tokenomics explanation, vision for the future, and answers to community questions."
    }
];

function renderArchive() {
    const grid = document.getElementById('archiveGrid');
    
    archiveData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'archive-card';
        const dateSpan = item.date ? `<span>📅 ${item.date}</span>` : '';
        
        card.innerHTML = `
            <div class="card-header">
                <img src="logo.png" alt="EFT" class="card-logo">
                <div>
                    <div class="card-number">${item.number}</div>
                    <div class="card-title">${item.title}</div>
                </div>
            </div>
            <div class="card-body">
                <p class="card-description">${item.description}</p>
                <div class="card-meta">
                    <span>⏱ ${item.duration}</span>
                    ${dateSpan}
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

function showTranscript(id) {
    const item = archiveData.find(i => i.id === id);
    if (!item) return;

    const modal = document.getElementById('transcriptModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = item.title;
    modalBody.innerHTML = `
        <div class="modal-details">
            <p class="modal-duration">⏱ Duration: ${item.duration}</p>
            ${item.date ? `<p class="modal-date">📅 ${item.date}</p>` : ''}
            <hr>
            <h3>About this session:</h3>
            <p>${item.details}</p>
            <hr>
            <h3>Description:</h3>
            <p>${item.description}</p>
        </div>
    `;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('transcriptModal').classList.remove('active');
}

document.getElementById('transcriptModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

document.addEventListener('DOMContentLoaded', renderArchive);
