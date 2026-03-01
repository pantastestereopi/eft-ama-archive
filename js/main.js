const archiveData = [
    {
        id: 8,
        number: "LATEST",
        title: "Let's Talk About CEX Finale",
        description: "The explosive finale covering centralized exchanges, business models, security risks, and why they're fundamentally flawed.",
        duration: "2h 14min",
        date: "February 2026",
        mp3: "https://github.com/pantastestereopi/eft-ama-archive/releases/download/v1.0/08_cex_finale.mp3",
        details: "FINALE - The most anticipated episode! Deep dive into centralized exchanges (CEX). Topics include:\n\n• CEX Business Model: How exchanges make money from volume, not price\n• Banks vs CEX comparison: Why traditional banks are more trustworthy\n• Security crisis: Hot wallets holding billions as hacker targets\n• Regulation impact: How 2020+ regulations forced changes\n• Listing vs Partnership: Why signing with exchanges is often a 'death contract'\n• Famous exchanges discussed: FTX, Binance, Coinbase, OKX, MXC, MCX\n• Key quote: 'Every single exchange is Fugazi (fake)'\n• Final advice: 'Not your keys, not your crypto'\n\nThe speaker shares personal experiences and explains why he refuses to list on most exchanges. Emotional discussion about death and what comes after."
    },
    {
        id: 7,
        number: "Vol. 7",
        title: "AI Price Prediction",
        description: "AI's role in crypto, price prediction models, and ML with trading.",
        duration: "2h",
        date: "",
        mp3: "https://github.com/pantastestereopi/eft-ama-archive/releases/download/v1.0/07_ai_prediction.mp3",
        details: "Exploring the intersection of Artificial Intelligence and cryptocurrency markets:\n\n• AI-driven price prediction models and their limitations\n• Machine learning applications in trading strategies\n• How AI is reshaping the crypto landscape\n• Neural networks and market analysis\n• Real-world examples of AI trading bots\n• The future of algorithmic trading\n• Risks and benefits of AI in financial markets\n• Community Q&A on AI implementations"
    },
    {
        id: 6,
        number: "Vol. 6",
        title: "Official Board Meeting",
        description: "Board meeting covering ecosystem updates, partnerships, and strategic direction.",
        duration: "2h 30min",
        date: "",
        mp3: "https://github.com/pantastestereopi/eft-ama-archive/releases/download/v1.0/06_board_meeting.mp3",
        details: "Virtual board meeting with comprehensive ecosystem updates:\n\n• Partnership announcements and negotiations\n• Strategic direction for the foundation\n• Community growth metrics and milestones\n• Roadmap discussion for upcoming features\n• Treasury management and allocation\n• Marketing and outreach strategies\n• Technical development updates\n• Open Q&A with community members\n• Discussion of competitive landscape"
    },
    {
        id: 5,
        number: "Vol. 5",
        title: "Tokenization: Real vs Fake RWAs",
        description: "Critical analysis of Real World Assets - legitimate tokenization vs marketing.",
        duration: "2h",
        date: "",
        mp3: "https://github.com/pantastestereopi/eft-ama-archive/releases/download/v1.0/Tokenization%3A%20What%20is%20Real%20%26%20What%20is%20Fake%20About%20RWAs.mp3",
        details: "Critical analysis of Real World Assets (RWAs):\n\n• What constitutes legitimate tokenization\n• Fractional ownership and its benefits\n• Security tokens vs utility tokens\n• Real estate tokenization\n• Commodities and precious metals\n• Why most 'RWA tokens' are just marketing\n• Regulatory considerations for asset tokenization\n• Case studies of successful RWA projects\n• Warning signs of fake RWA projects\n• The future of real-world asset tokenization"
    },
    {
        id: 4,
        number: "Vol. 4",
        title: "Franchising 101",
        description: "The franchise model and how it applies to crypto ecosystem growth.",
        duration: "2h",
        date: "",
        mp3: "https://github.com/pantastestereopi/eft-ama-archive/releases/download/v1.0/Franchising%20101.mp3",
        details: "Understanding the franchise model in crypto:\n\n• Traditional franchising vs crypto franchising\n• Building scalable, community-driven projects\n• Replication strategies for ecosystem growth\n• Brand building and community management\n• Case studies of successful crypto franchises\n• Decentralized franchise models\n• Community ownership and governance\n• Economic incentives in franchise structures\n• Scaling beyond initial teams\n• Best practices for project expansion"
    },
    {
        id: 3,
        number: "Vol. 3",
        title: "Supply Exhaustion",
        description: "Token supply mechanics, distribution, and what happens when supply gets exhausted.",
        duration: "2h",
        date: "",
        mp3: "https://github.com/pantastestereopi/eft-ama-archive/releases/download/v1.0/Supply%20Exhaustion%3A%20Tesla%20to%20Toilet%20Paper.mp3",
        details: "Deep dive into token supply mechanics:\n\n• Understanding token supply and circulation\n• What happens when supply gets exhausted\n• Distribution analysis and whale behavior\n• Tokenomics deep dive: inflation, deflation\n• Supply shock impact on price\n• Case study: Tesla's supply decisions\n• Toilet paper analogy for token scarcity\n• Burn mechanisms and their effectiveness\n• Supply vs demand dynamics\n• Long-term tokenomics strategies"
    },
    {
        id: 2,
        number: "Vol. 2",
        title: "Foundation Introduction",
        description: "Deep dive into ETHFan Foundation mission, structure, and ecosystem services.",
        duration: "2h 12min",
        date: "",
        mp3: "https://github.com/pantastestereopi/eft-ama-archive/releases/download/v1.0/02_foundation_intro.mp3",
        details: "Comprehensive foundation introduction:\n\n• Mission and core values of ETHFan Foundation\n• Organizational structure and team\n• How the foundation serves the ecosystem\n• Grant programs and funding initiatives\n• Community engagement strategies\n• Technical infrastructure support\n• Educational resources and documentation\n• Partnership framework\n• Long-term vision and goals\n• Q&A about foundation operations"
    },
    {
        id: 1,
        number: "Vol. 1",
        title: "Foundation Lecture Series AMA's",
        description: "First AMA session - foundation introduction, tokenomics, and vision.",
        duration: "1h 27min",
        date: "",
        mp3: "https://github.com/pantastestereopi/eft-ama-archive/releases/download/v1.0/01_ethfan_ama.mp3",
        details: "The very first AMA session - where it all began:\n\n• Foundation introduction and team presentation\n• Tokenomics explained in detail\n• Vision for the future of ETHFan\n• Community guidelines and expectations\n• Initial roadmap and milestones\n• How to participate in the ecosystem\n• Token utility and use cases\n• Staking and reward mechanisms\n• First community questions answered\n• Setting the tone for future sessions"
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
