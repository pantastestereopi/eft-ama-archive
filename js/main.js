const archiveData = [
    {
        id: 8,
        number: "LATEST",
        title: "Let's Talk About CEX Finale",
        description: "The explosive finale covering centralized exchanges, business models, security risks, and why they're fundamentally flawed.",
        duration: "2h 14min",
        date: "February 2026",
        mp3: "audio/08_cex_finale.mp3",
        transcript: "transcripts/08_cex_finale.txt",
        shortDesc: "Truth about centralized exchanges"
    },
    {
        id: 7,
        number: "Vol. 7",
        title: "AI Price Prediction",
        description: "AI's role in crypto, price prediction models, and ML with trading.",
        duration: "2h",
        date: "2024",
        mp3: "audio/07_ai_prediction.mp3",
        transcript: "transcripts/07_ai_prediction.txt",
        shortDesc: "AI and crypto prediction"
    },
    {
        id: 6,
        number: "Vol. 6",
        title: "Official Board Meeting",
        description: "Board meeting covering ecosystem updates, partnerships, and strategy.",
        duration: "2h 30min",
        date: "2024",
        mp3: "audio/06_board_meeting.mp3",
        transcript: "transcripts/06_board_meeting.txt",
        shortDesc: "Board updates and strategy"
    },
    {
        id: 5,
        number: "Vol. 5",
        title: "Tokenization: Real vs Fake RWAs",
        description: "Critical analysis of Real World Assets - legitimate tokenization vs marketing.",
        duration: "2h",
        date: "2024",
        mp3: "audio/Tokenization： What is Real & What is Fake About RWAs.mp3",
        transcript: "transcripts/05_tokenization.txt",
        shortDesc: "RWA tokenization analysis"
    },
    {
        id: 4,
        number: "Vol. 4",
        title: "Franchising 101",
        description: "The franchise model and how it applies to crypto ecosystem growth.",
        duration: "2h",
        date: "2024",
        mp3: "audio/Franchising 101.mp3",
        transcript: "transcripts/04_franchising.txt",
        shortDesc: "Franchise model for crypto"
    },
    {
        id: 3,
        number: "Vol. 3",
        title: "Supply Exhaustion",
        description: "Token supply mechanics, distribution, and what happens when supply gets exhausted.",
        duration: "2h",
        date: "2024",
        mp3: "audio/Supply Exhaustion： Tesla to Toilet Paper.mp3",
        transcript: "transcripts/03_supply_exhaustion.txt",
        shortDesc: "Token supply mechanics"
    },
    {
        id: 2,
        number: "Vol. 2",
        title: "Foundation Introduction",
        description: "Deep dive into ETHFan Foundation mission, structure, and ecosystem services.",
        duration: "2h 12min",
        date: "2024",
        mp3: "audio/02_foundation_intro.mp3",
        transcript: "transcripts/02_foundation_intro.txt",
        shortDesc: "Foundation mission and structure"
    },
    {
        id: 1,
        number: "Vol. 1",
        title: "Foundation Lecture Series AMA's",
        description: "First AMA session - foundation introduction, tokenomics, and vision.",
        duration: "1h 27min",
        date: "2024",
        mp3: "audio/01_ethfan_ama.mp3",
        transcript: "transcripts/01_ethfan_ama.txt",
        shortDesc: "Foundation introduction and first AMA"
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
                <img src="eftlogo.png" alt="EFT" class="card-logo">
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
