let currentLanguage = 'en';
let totalPlayers = 0;
let remainingCards = [];

const roles = ['Werewolf', 'Villager', 'Seer', 'Doctor', 'Hunter', 'Witch', 'Little Girl', 'Cupid'];

const roleInfo = {
    Werewolf: {
        en: {
            name: "Werewolf",
            description: "You are a Werewolf. Your goal is to eliminate all villagers.",
            action: "Each night, wake up with other werewolves and choose a villager to eliminate.",
            tips: "Try to blend in during the day. Accuse others to divert suspicion."
        },
        fr: {
            name: "Loup-Garou",
            description: "Vous êtes un Loup-Garou. Votre but est d'éliminer tous les villageois.",
            action: "Chaque nuit, réveillez-vous avec les autres loups-garous et choisissez un villageois à éliminer.",
            tips: "Essayez de vous fondre dans la masse pendant la journée. Accusez les autres pour détourner les soupçons."
        },
        es: {
            name: "Hombre Lobo",
            description: "Eres un Hombre Lobo. Tu objetivo es eliminar a todos los aldeanos.",
            action: "Cada noche, despierta con otros hombres lobo y elige a un aldeano para eliminar.",
            tips: "Intenta mezclarte durante el día. Acusa a otros para desviar sospechas."
        },
        zh: {
            name: "狼人",
            description: "你是狼人。你的目标是消灭所有村民。",
            action: "每天晚上，和其他狼人一起醒来，选择一个村民消灭。",
            tips: "白天尽量融入村民。指责他人以转移怀疑。"
        }
    },
    Villager: {
        en: {
            name: "Villager",
            description: "You are a Villager. Your goal is to identify and eliminate the werewolves.",
            action: "During the day, discuss with other players and vote to eliminate suspected werewolves.",
            tips: "Pay attention to players' behaviors and arguments. Trust your instincts."
        },
        fr: {
            name: "Villageois",
            description: "Vous êtes un Villageois. Votre but est d'identifier et d'éliminer les loups-garous.",
            action: "Pendant la journée, discutez avec les autres joueurs et votez pour éliminer les loups-garous suspectés.",
            tips: "Faites attention aux comportements et aux arguments des joueurs. Faites confiance à votre instinct."
        },
        es: {
            name: "Aldeano",
            description: "Eres un Aldeano. Tu objetivo es identificar y eliminar a los hombres lobo.",
            action: "Durante el día, discute con otros jugadores y vota para eliminar a los sospechosos de ser hombres lobo.",
            tips: "Presta atención a los comportamientos y argumentos de los jugadores. Confía en tus instintos."
        },
        zh: {
            name: "村民",
            description: "你是村民。你的目标是识别并消灭狼人。",
            action: "白天时，与其他玩家讨论并投票消灭疑似狼人。",
            tips: "注意玩家的行为和论点。相信你的直觉。"
        }
    },
    Seer: {
        en: {
            name: "Seer",
            description: "You are the Seer. You can reveal the true identity of one player each night.",
            action: "Each night, choose a player to learn their true role.",
            tips: "Use your knowledge wisely. Don't reveal your identity too early."
        },
        fr: {
            name: "Voyante",
            description: "Vous êtes la Voyante. Vous pouvez révéler la véritable identité d'un joueur chaque nuit.",
            action: "Chaque nuit, choisissez un joueur pour connaître son vrai rôle.",
            tips: "Utilisez vos connaissances avec sagesse. Ne révélez pas votre identité trop tôt."
        },
        es: {
            name: "Vidente",
            description: "Eres el Vidente. Puedes revelar la verdadera identidad de un jugador cada noche.",
            action: "Cada noche, elige a un jugador para conocer su verdadero rol.",
            tips: "Usa tu conocimiento sabiamente. No reveles tu identidad demasiado pronto."
        },
        zh: {
            name: "预言家",
            description: "你是预言家。你可以每晚揭示一名玩家的真实身份。",
            action: "每天晚上，选择一名玩家来了解他们的真实角色。",
            tips: "明智地使用你的知识。不要过早暴露你的身份。"
        }
    },
    const roleInfo = {
    Werewolf: {
        // ... (keep existing Werewolf info)
    },
    Villager: {
        // ... (keep existing Villager info)
    },
    Seer: {
        // ... (keep existing Seer info)
    },
    Hunter: {
        en: {
            name: "Hunter",
            description: "You are the Hunter. If you are eliminated, you can take one other player with you.",
            action: "If eliminated, choose one player to eliminate as well before you die.",
            tips: "Use your power wisely. Your elimination can change the game's outcome."
        },
        fr: {
            name: "Chasseur",
            description: "Vous êtes le Chasseur. Si vous êtes éliminé, vous pouvez emporter un autre joueur avec vous.",
            action: "Si vous êtes éliminé, choisissez un joueur à éliminer aussi avant de mourir.",
            tips: "Utilisez votre pouvoir avec sagesse. Votre élimination peut changer l'issue du jeu."
        },
        es: {
            name: "Cazador",
            description: "Eres el Cazador. Si eres eliminado, puedes llevarte a otro jugador contigo.",
            action: "Si eres eliminado, elige a un jugador para eliminar también antes de morir.",
            tips: "Usa tu poder sabiamente. Tu eliminación puede cambiar el resultado del juego."
        },
        zh: {
            name: "猎人",
            description: "你是猎人。如果你被淘汰，你可以带走另一名玩家。",
            action: "如果被淘汰，在死亡前选择一名玩家一起淘汰。",
            tips: "明智地使用你的能力。你的淘汰可以改变游戏结果。"
        }
    },
    Witch: {
        en: {
            name: "Witch",
            description: "You are the Witch. You have two potions: one to save a player and one to eliminate a player.",
            action: "Each night, you can choose to use one of your potions, if available.",
            tips: "Use your potions strategically. They can be game-changing if used at the right moment."
        },
        fr: {
            name: "Sorcière",
            description: "Vous êtes la Sorcière. Vous avez deux potions : une pour sauver un joueur et une pour éliminer un joueur.",
            action: "Chaque nuit, vous pouvez choisir d'utiliser l'une de vos potions, si disponible.",
            tips: "Utilisez vos potions stratégiquement. Elles peuvent changer le cours du jeu si utilisées au bon moment."
        },
        es: {
            name: "Bruja",
            description: "Eres la Bruja. Tienes dos pociones: una para salvar a un jugador y otra para eliminar a un jugador.",
            action: "Cada noche, puedes elegir usar una de tus pociones, si está disponible.",
            tips: "Usa tus pociones estratégicamente. Pueden cambiar el juego si se usan en el momento adecuado."
        },
        zh: {
            name: "女巫",
            description: "你是女巫。你有两瓶药水：一瓶可以救活一名玩家，一瓶可以消灭一名玩家。",
            action: "每天晚上，你可以选择使用一瓶药水，如果还有的话。",
            tips: "战略性地使用你的药水。在正确的时机使用可以改变游戏走向。"
        }
    },
    "Little Girl": {
        en: {
            name: "Little Girl",
            description: "You are the Little Girl. You can peek during the Werewolves' turn to gather information.",
            action: "During the night, you may peek to see who the Werewolves are, but be careful not to get caught!",
            tips: "Be very discreet when peeking. If the Werewolves catch you, you're in danger!"
        },
        fr: {
            name: "Petite Fille",
            description: "Vous êtes la Petite Fille. Vous pouvez espionner pendant le tour des Loups-Garous pour recueillir des informations.",
            action: "Pendant la nuit, vous pouvez jeter un coup d'œil pour voir qui sont les Loups-Garous, mais attention à ne pas vous faire prendre !",
            tips: "Soyez très discrète en espionnant. Si les Loups-Garous vous attrapent, vous êtes en danger !"
        },
        es: {
            name: "Niña Pequeña",
            description: "Eres la Niña Pequeña. Puedes espiar durante el turno de los Hombres Lobo para recopilar información.",
            action: "Durante la noche, puedes echar un vistazo para ver quiénes son los Hombres Lobo, ¡pero ten cuidado de que no te atrapen!",
            tips: "Sé muy discreta al espiar. ¡Si los Hombres Lobo te atrapan, estás en peligro!"
        },
        zh: {
            name: "小女孩",
            description: "你是小女孩。你可以在狼人回合偷看以收集信息。",
            action: "在夜晚，你可以偷看来确定谁是狼人，但要小心不要被抓到！",
            tips: "偷看时要非常谨慎。如果狼人发现你，你就危险了！"
        }
    },
    Cupid: {
        en: {
            name: "Cupid",
            description: "You are Cupid. You can choose two players to fall in love. Their fates will be linked.",
            action: "On the first night, choose two players to be lovers. If one dies, the other dies too.",
            tips: "Your choice can greatly impact the game. Choose wisely!"
        },
        fr: {
            name: "Cupidon",
            description: "Vous êtes Cupidon. Vous pouvez choisir deux joueurs qui tomberont amoureux. Leurs destins seront liés.",
            action: "La première nuit, choisissez deux joueurs pour être amoureux. Si l'un meurt, l'autre meurt aussi.",
            tips: "Votre choix peut grandement influencer le jeu. Choisissez judicieusement !"
        },
        es: {
            name: "Cupido",
            description: "Eres Cupido. Puedes elegir a dos jugadores para que se enamoren. Sus destinos estarán vinculados.",
            action: "En la primera noche, elige a dos jugadores para que sean amantes. Si uno muere, el otro también muere.",
            tips: "Tu elección puede tener un gran impacto en el juego. ¡Elige sabiamente!"
        },
        zh: {
            name: "丘比特",
            description: "你是丘比特。你可以选择两名玩家坠入爱河。他们的命运将会联系在一起。",
            action: "在第一个夜晚，选择两名玩家成为恋人。如果一个人死亡，另一个也会死亡。",
            tips: "你的选择可能会极大地影响游戏。明智地选择！"
        }
    },
    Doctor: {
        en: {
            name: "Doctor",
            description: "You are the Doctor. You can protect one player each night from elimination.",
            action: "Each night, choose one player to protect from the Werewolves' attack.",
            tips: "Pay attention to the discussions during the day to guess who might be targeted."
        },
        fr: {
            name: "Docteur",
            description: "Vous êtes le Docteur. Vous pouvez protéger un joueur chaque nuit contre l'élimination.",
            action: "Chaque nuit, choisissez un joueur à protéger de l'attaque des Loups-Garous.",
            tips: "Faites attention aux discussions pendant la journée pour deviner qui pourrait être ciblé."
        },
        es: {
            name: "Doctor",
            description: "Eres el Doctor. Puedes proteger a un jugador cada noche de ser eliminado.",
            action: "Cada noche, elige a un jugador para protegerlo del ataque de los Hombres Lobo.",
            tips: "Presta atención a las discusiones durante el día para adivinar quién podría ser el objetivo."
        },
        zh: {
            name: "医生",
            description: "你是医生。你可以每晚保护一名玩家免于被淘汰。",
            action: "每天晚上，选择一名玩家保护他们免受狼人的攻击。",
            tips: "注意白天的讨论，以猜测谁可能成为目标。"
        }
    }
};

const translations = {
    en: {
        setupTitle: "Set number of players",
        setPlayers: "Set Players",
        drawCard: "Draw Card",
        playersRemaining: "Players remaining",
        yourRole: "Your Role",
        roleDescription: "Role Description",
        action: "Action",
        tips: "Tips"
    },
    fr: {
        setupTitle: "Définir le nombre de joueurs",
        setPlayers: "Définir les joueurs",
        drawCard: "Tirer une carte",
        playersRemaining: "Joueurs restants",
        yourRole: "Votre Rôle",
        roleDescription: "Description du Rôle",
        action: "Action",
        tips: "Conseils"
    },
    es: {
        setupTitle: "Establecer número de jugadores",
        setPlayers: "Establecer Jugadores",
        drawCard: "Robar Carta",
        playersRemaining: "Jugadores restantes",
        yourRole: "Tu Rol",
        roleDescription: "Descripción del Rol",
        action: "Acción",
        tips: "Consejos"
    },
    zh: {
        setupTitle: "设置玩家人数",
        setPlayers: "设置玩家",
        drawCard: "抽卡",
        playersRemaining: "剩余玩家",
        yourRole: "你的角色",
        roleDescription: "角色描述",
        action: "行动",
        tips: "提示"
    }
};

function setLanguage(lang) {
    currentLanguage = lang;
    updateUI();
}

function setPlayerCount() {
    console.log("setPlayerCount function called");
    totalPlayers = parseInt(document.getElementById('player-count').value);
    if (totalPlayers < 7 || totalPlayers > 20) {
        alert("Please enter a number between 7 and 20");
        return;
    }
    remainingCards = generateCards(totalPlayers);
    document.getElementById('game-setup').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    updateUI();
    console.log("Game setup complete. Total players:", totalPlayers);
}

function generateCards(playerCount) {
    let cards = [];
    // Add roles based on player count
    cards.push('Werewolf', 'Werewolf', 'Seer', 'Doctor');
    for (let i = 0; i < playerCount - 4; i++) {
        cards.push('Villager');
    }
    // Shuffle the cards
    return cards.sort(() => Math.random() - 0.5);
}

function drawCard() {
    console.log("drawCard function called");
    if (remainingCards.length === 0) {
        alert("No more cards to draw!");
        return;
    }
    const role = remainingCards.pop();
    displayRoleInfo(role);
    updateUI();
    console.log("Card drawn:", role);
}

function displayRoleInfo(role) {
    const info = roleInfo[role][currentLanguage];
    const roleInfoDiv = document.getElementById('role-info');
    roleInfoDiv.innerHTML = `
        <h3>${translations[currentLanguage].yourRole}: ${info.name}</h3>
        <p><strong>${translations[currentLanguage].roleDescription}:</strong> ${info.description}</p>
        <p><strong>${translations[currentLanguage].action}:</strong> ${info.action}</p>
        <p><strong>${translations[currentLanguage].tips}:</strong> ${info.tips}</p>
    `;
}

function updateUI() {
    console.log("updateUI function called");
    document.getElementById('setup-title').textContent = translations[currentLanguage].setupTitle;
    document.getElementById('set-players-btn').textContent = translations[currentLanguage].setPlayers;
    document.getElementById('draw-card-btn').textContent = translations[currentLanguage].drawCard;
    document.getElementById('players-remaining').textContent = `${translations[currentLanguage].playersRemaining}: ${remainingCards.length}`;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setLanguage('en');
    updateUI();
});
