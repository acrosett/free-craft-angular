/* tslint:disable: max-line-length */
// tslint:disable: quotemark
import { ItemData } from './ItemData';

const COMMENT_CONSTRUIRE = 'Comment construire sur Free-craft ?';
const COMMENT_CONSTRUIRE_ID = 'construire';

const COMMENT_PROTEGER = 'Comment proteger son terrain sur Free-craft ?';
const COMMENT_PROTEGER_ID = 'proteger';

const COMMENT_OBTENIR_DU_CLAIM = 'Comment obtenir des blocs de claim ?';
const COMMENT_OBTENIR_DU_CLAIM_ID = 'claims';

const COMMENT_GAGNER_ARGENT = "Comment gagner de l'argent sur Free-craft ?";
const COMMENT_GAGNER_ARGENT_ID = 'argent';

const COMMENT_VOTER = "Comment voter pour le serveur ?";
const COMMENT_VOTER_ID = 'voter';

const COMMENT_SHOP = "Comment créer un shop ?";
const COMMENT_SHOP_ID = 'shop';

const COMMENT_SIGNALER = "Comment signaler un problème ?";
const COMMENT_SIGNALER_ID = 'signaler';

const COMMENT_MP = "Comment envoyer un message privé ?";
const COMMENT_MP_ID = 'msg';

const COMMENT_BANQUE = "Comment mettre son argent à la banque ?";
const COMMENT_BANQUE_ID = 'banque';

const COMMENT_IMMO = "Comment vendre un terrain ?";
const COMMENT_IMMO_ID = 'immo';

const COMMENT_HG = "Comment rejoindre un Hunger-game ?";
const COMMENT_HG_ID = 'hg';

const COMMENT_HG_QUIT = "Comment quitter un Hunger-game ?";
const COMMENT_HG_QUIT_ID = 'hg_quitter';

const COMMENT_DELETE_CLAIM = "Comment supprimer une protection ?";
const COMMENT_DELETE_CLAIM_ID = 'supprimer_claim';

const COMMENT_ACHETER = "Comment acheter des objets sur Free-craft ?";
const COMMENT_ACHETER_ID = 'acheter';

const COMMENT_REGION_RESET = "Comment fonctionne le reset sur Free-craft ?";
const COMMENT_REGION_RESET_ID = 'reset';

const COMMENT_DUREE_PROTECTION = "Combien de temps dure une zone de protection ?";
const COMMENT_DUREE_PROTECTION_ID = 'duree_protection';

const COMMENT_INTERETS = "Comment fonctionnent les intérêts sur Free-craft ?";
const COMMENT_INTERETS_ID = 'interets';

const COMMENT_DROPS = "Comment fonctionnent les drops sur Free-craft ?";
const COMMENT_DROPS_ID = 'drops';

const COMMENT_CHAT = "Comment fonctionne le chat sur Free-craft ?";
const COMMENT_CHAT_ID = 'chat';

const COMMENT_IGNORER = "Comment ignorer un joueur dans le chat ?";
const COMMENT_IGNORER_ID = 'ignorer';

const COMMENT_TRUST = "Comment donner l'accès à mon claim ?";
const COMMENT_TRUST_ID = 'trust';

const COMMENT_SWITCH = "Comment créer un bouton payant ?";
const COMMENT_SWITCH_ID = 'switch';

const COMMENT_XP = "Comment remplir une fiole d'experience ?";
const COMMENT_XP_ID = 'xp';

const COMMENT_ESCAPE = "Comment sortir d'un claim ?";
const COMMENT_ESCAPE_ID = 'piege';


const COMMENT_WATER = "Comment fonctionne l'eau et la lave sur Free Craft ?";
const COMMENT_WATER_ID = 'eau_lave';

const COMMENT_TRADE = "Comment fonctionne le trade avec les villageois sur Free Craft ?";
const COMMENT_TRADE_ID = 'trade';

const COMMENT_TP = "Comment marche la téléportation sur Free Craft ?";
const COMMENT_TP_ID = 'teleport';

const LIEN_DU_SHOP = 'Lien du shop';
const LIEN_DU_SHOP_ID = 'https://free-craft.fr/shop';



const COMMENT_REDSTONE = "Comment fonctionne la redstone sur Free Craft ?";
const COMMENT_REDSTONE_ID = 'redstone';

const COMMENT_MEMBRE = "Comment devenir membre ?";
const COMMENT_MEMBRE_ID = 'membre';

const COMMENT_TETE_CUSTOM = "Comment obtenir des tête custom ?";
const COMMENT_TETE_CUSTOM_ID = 'tetes';

const COMMENT_REFUND_TETE_CUSTOM = "Comment rembourser une tête custom ?";
const COMMENT_REFUND_TETE_CUSTOM_ID = 'changer_tete';

const COMMENT_PARTY = "Comment créer un chat privé ?";
const COMMENT_PARTY_ID = 'party';

const COMMENT_PARTY_KICK = "Comment modérer mon chat privé ?";
const COMMENT_PARTY_KICK_ID = 'party_kick';

const COMMENT_DISCORD = "Comment relier minecraft à discord ?";
const COMMENT_DISCORD_ID = 'discord';

const COMMENT_CANCEL = "Comment annuler mon abonnement membre ?";
const COMMENT_CANCEL_ID = 'cancel';

const COMMENT_PAY = "Comment payer un autre joueur ?";
const COMMENT_PAY_ID = 'pay';

const COMMENT_PORTAL = "Comment placer un portail de téléportation ?";
const COMMENT_PORTAL_ID = 'portal';


//NEW

const COMMENT_PLANTES = "Comment fonctionnent les plantes sur Free Craft ?";
const COMMENT_PLANTES_ID = 'plantes';

const MAX_CLAIM_ACCRUED_BLOCS = 3000;
const MIN_BONUS_CLAIM_BLOCS = 500;


export const items: ItemData[] = [

    {
        id: COMMENT_CONSTRUIRE_ID,
        title: COMMENT_CONSTRUIRE,

        summary: "Je n'arrive pas a placer de blocs sur le serveur free-craft.fr",


        content: "Pour construire sur le serveur Free-craft, il suffit de t'éloigner du spawn. Tu peux construire n'importe où tant que la zone n'a pas été protégée par un autre joueur. Des panneaux [RandomTP] près du spawn permettant de s'éloigner rapidement, il te suffit de faire un clic droit dessus. Tu peux aussi t'éloigner à pied pour ne pas finir trop loin.",
        links: [{link: COMMENT_PROTEGER_ID, title: COMMENT_PROTEGER }]
    },
    {
        id: COMMENT_PROTEGER_ID,
        title: COMMENT_PROTEGER,

        summary: "Je souhaite proteger mes constructions contre le grief",

        content: "La zone autour de ton premier coffre est protégée. Pour protéger une nouvelle zone tiens toi dedans, munis-toi d'une pelle en or et tape la commande /claim. Pour étendre une zone il suffit de faire un clic droit avec la pelle sur l'un de ses angles pour le déplacer (parfois deux clics sont nécessaires). Pour voir la zone protégée munie toi d'un bâton (stick) et effectue un clic droit sur le sol. La création de zone protégée nécessite des blocs de claim. Chaque zone de claim s’entend jusqu'au ciel et descend avec toi lorsque tu creuses.",
        links: [{link: COMMENT_DUREE_PROTECTION_ID, title: COMMENT_DUREE_PROTECTION },  {link: COMMENT_TRUST_ID, title: COMMENT_TRUST }, {link: COMMENT_DELETE_CLAIM_ID, title: COMMENT_DELETE_CLAIM }, {link: COMMENT_OBTENIR_DU_CLAIM_ID, title: COMMENT_OBTENIR_DU_CLAIM }]
    },
    {
        id: COMMENT_REGION_RESET_ID,
        title: COMMENT_REGION_RESET,

        summary: "Une partie du paysage s'est réinitialisée",

        content: "Une parcelle (chunk) du serveur Free-craft est réinitialisée au bout de 24h si personne ne la visite et qu'elle ne contient aucune protection. Attention, les zones protégées ont parfois une durée limitée.",
        links: [{link: COMMENT_PROTEGER_ID, title: COMMENT_PROTEGER }, {link: COMMENT_DUREE_PROTECTION_ID, title: COMMENT_DUREE_PROTECTION }]
    },    
    // {
    //     id: COMMENT_TP_ID,
    //     title: COMMENT_TP,

    //     summary: "Je souhaite rejoindre un ami",

    //     content: "Pour te téléporter sur un autre joueur tape la commande /tpa <nomDuJoueur>, il devra alors accepter à l'aide de la commande /tpaccept. Tu peux retourner à ton ancienne position à l'aide de la commande /back. Il n'est possible de se téléporter qu'une fois toute les 30 min.",
    //     links: []
    // },
    {
        id: COMMENT_TP_ID,
        title: COMMENT_TP,

        summary: "Je souhaite rejoindre un ami",

        content: "Pour te téléporter sur un autre joueur tape la commande /tpa <nomDuJoueur>, il devra alors accepter à l'aide de la commande /tpaccept. Tu peux retourner à ton ancienne position à l'aide de la commande /back. Pour retourner au spawn ou à ta maison utilise les commandes /spawn et /home. Il n'est possible de se téléporter qu'une fois toute les 30 min, sauf pour les joueurs membre qui n'ont pas besoin d'attendre entre deux téléportations.",
        links: [{link: COMMENT_MEMBRE_ID, title: COMMENT_MEMBRE}]
    },
    // {
    //     id: COMMENT_OBTENIR_DU_CLAIM_ID,
    //     title: COMMENT_OBTENIR_DU_CLAIM,

    //     summary: "Je souhaite obtenir plus de blocs de claim",


    //     content: "Tu commences sur le serveur avec 100 blocs de claim et tu en gagne 150 toutes les heures de jeu jusqu'à un maximum de " + MAX_CLAIM_ACCRUED_BLOCS + " blocs. Tu peux acheter du claim supplémentaire avec l'argent du serveur à l'aide de la commande /buyclaim, chaque bloc de claim coute $25. Tu peux voir combien de blocs de claim il te reste à l'aide de la commande /claimlist",
    //     links: [{link: COMMENT_PROTEGER_ID, title: COMMENT_PROTEGER }, {link: COMMENT_GAGNER_ARGENT_ID, title: COMMENT_GAGNER_ARGENT }]
    // },
    {
        id: COMMENT_OBTENIR_DU_CLAIM_ID,
        title: COMMENT_OBTENIR_DU_CLAIM,

        summary: "Je souhaite obtenir plus de blocs de claim",


        content: "Tu commences sur le serveur avec 100 blocs de claim et tu en gagne 150 toutes les heures de jeu jusqu'à un maximum de " + MAX_CLAIM_ACCRUED_BLOCS + " blocs. Tu peux acheter du claim supplémentaire avec l'argent du serveur à l'aide de la commande /buyclaim, chaque bloc de claim coute $25. Tu peux aussi acheter du claim supplémentaire via le shop du site. Pour voir combien de blocs de claim il te reste tape la commande /claimlist",
        links: [{link: COMMENT_PROTEGER_ID, title: COMMENT_PROTEGER }, {link: COMMENT_GAGNER_ARGENT_ID, title: COMMENT_GAGNER_ARGENT }, {link: LIEN_DU_SHOP_ID, title: LIEN_DU_SHOP }]
    },
    {
        id: COMMENT_GAGNER_ARGENT_ID,
        title: COMMENT_GAGNER_ARGENT,

        summary: "Je souhaite obtenir plus d'argent du serveur",


        content: "Tu arrives sur le serveur avec $800 et tu peux voir combien d'argent il te reste à l'aide de la commande /money. Il existe plusieurs méthodes pour se faire de l'argent sur Free-craft, pour cela tu peux :\n\n - voter pour le serveur ($200 de récompense)\n - vendre des objets aux autres joueurs (via les shops)\n - vendre des terrains / constructions aux autres joueurs\n - construire une attraction payante (musée, zoo...)\n - placer son argent à la banque",
        links: [{link: COMMENT_SHOP_ID, title: COMMENT_SHOP }, {link: COMMENT_VOTER_ID, title: COMMENT_VOTER }, {link: COMMENT_IMMO_ID, title: COMMENT_IMMO }, {link: COMMENT_BANQUE_ID, title: COMMENT_BANQUE }, {link: COMMENT_SWITCH_ID, title: COMMENT_SWITCH }]
    },
    {
        id: COMMENT_DELETE_CLAIM_ID,
        title: COMMENT_DELETE_CLAIM,

        summary: "Je souhaite libérer une zone de claim",

        content: "Pour supprimer une zone protégée places-toi dedans et tape la commande /abandon claim. Tu retrouveras alors les blocs de claims de la zone et pourras les utiliser ailleurs.",
        links: [ {link: COMMENT_PROTEGER_ID, title: COMMENT_PROTEGER }]
     },
    // {
    //     id: COMMENT_HG_ID,
    //     title: COMMENT_HG,

    //     summary: "Je souhaite faire du pvp",

    //     content: "Pour rejoindre un Hunger-game tape la commande /hg join pvp. Tu peux ensuite choisir ton kit avec la commande /kit <nomDuKit> (exemple : /kit bowman). La partie démarrera automatiquement lorsque 3 joueurs ou plus auront rejoint l'arène. La récompense pour le gagnant du Hunger-game est de $500.",
    //     links: [{link: COMMENT_HG_QUIT_ID, title: COMMENT_HG_QUIT }]
    // },
    // {
    //     id: COMMENT_HG_QUIT_ID,
    //     title: COMMENT_HG_QUIT,

    //     summary: "Je n'arrive pas à sortir du Hunger-game",

    //     content: "Pour quitter un Hunger-game tape la commande /hg leave. Tu peux aussi attendre la fin de la partie et seras téléporté à ton point d'entrée.",
    //     links: [{link: COMMENT_HG_ID, title: COMMENT_HG }]
    // },
    {
        id: COMMENT_MP_ID,
        title: COMMENT_MP,

        summary: "Je veux contacter un ami en privé",


        content: "Pour envoyer un message privé utilise la commande /msg <nomDuJoueur> <tonMessage> (alias : /w). Tu peux répondre à un message privé en utilisant la commande /r <taRéponse>.",
        links: [{link: COMMENT_CHAT_ID, title: COMMENT_CHAT }]
    },
    {
        id: COMMENT_CHAT_ID,
        title: COMMENT_CHAT,

        summary: "Je veux changer de channel de chat",

        content: "Le chat sur Free-craft fonctionne avec un system de canaux. Tu peux voir la liste des canaux à l'aide de la commande /chlist. Tu peux rejoindre un canal avec la commande /join <nomDuCanal>. Tu peux quitter un canal à l'aide de la commande /leave <nomDuCanal>, tu ne recevras plus les messages de ce canal. Le canal Local ne montre que les messages des joueurs proches.",
        links: [{link: COMMENT_MP_ID, title: COMMENT_MP }, {link: COMMENT_IGNORER_ID, title: COMMENT_IGNORER }, {link: COMMENT_PARTY_ID, title: COMMENT_PARTY }]
    },
    {
        id: COMMENT_IGNORER_ID,
        title: COMMENT_IGNORER,

        summary: "Je souhaite ignorer un joueur sur Free-craft",

        content: "Pour ne plus voir les messages d'un joueur tape la commande /ignore <nomDuJoueur>. Tape /ignorelist pour voir la liste des personnes ignorées. Pour ne plus ignorer quelqu'un retape la commande /ignore <nomDuJoueur>. N'hésite pas à signaler tout comportement abusif en contactant un administrateur.",
        links: [{link: COMMENT_CHAT_ID, title: COMMENT_CHAT }, {link: COMMENT_SIGNALER_ID, title: COMMENT_SIGNALER }]
    },
    {
        id: COMMENT_VOTER_ID,
        title: COMMENT_VOTER,

        summary: "Je n'arrive pas a voter pour le serveur",


        content: "Pour voter pour le serveur il te suffit de te rendre sur l'URL de vote et d'entrer ton pseudo minecraft (puis de cliquer sur le bouton 'voter'). Tu recevras alors $200 (argent du serveur) la prochaine fois que tu seras connecté. Il est possible de voter toutes les 3 heures.",
        links: [{link: "https://www.liste-serveurs-minecraft.org/vote/?idc=201295", title: "URL de vote" }]
    },
    {
        id: COMMENT_SHOP_ID,
        title: COMMENT_SHOP,

        summary: "Je souhaite mettre des objets en vente",


        content: "Pour créer un shop rien de plus simple. Munit toi de l'objet que tu souhaites vendre puis effectue un clic gauche sur un coffre vide. Il te suffit ensuite d'entrer le prix de vente dans le chat et de remplir le coffre avec l'objet en question. Fais attention à créer ton shop dans une zone protégée, sinon les autres joueurs pourront le détruire et prendre tes objets.",
        links: [{link: COMMENT_PROTEGER_ID, title: COMMENT_PROTEGER }, {link: COMMENT_ACHETER_ID, title: COMMENT_ACHETER }]
    },
    {
        id: COMMENT_IMMO_ID,
        title: COMMENT_IMMO,

        summary: "Je souhaite vendre une maison",

    content: "Pour vendre un terrain sur Free-craft il te faut un panneau en bois. Place-le dans la zone que tu souhaites vendre puis écrit sur la première ligne [av] et sur la deuxième le prix de vente. Il faut que la zone que tu essayes de vente t'appartienne. Une fois le terrain vendu, tu récuperera tes blocs de claim, l'acheteur utilisera ses propres blocs pour détenir le terrain.",
        links: [{link: COMMENT_PROTEGER_ID, title: COMMENT_PROTEGER }]
    },
    {
        id: COMMENT_ACHETER_ID,
        title: COMMENT_ACHETER,

        summary: "Je n'arrive pas à acheter un objet",

        content: "Pour acheter un objet trouve le shop d'un autre joueur. Effectue un clic gauche sur le coffre et tape le nombre d'objets que tu souhaites acheter. Il faut que tu aies suffisamment d'argent pour cela, la commande /money te permet de voir combien d'argent tu possèdes. Tu peux aussi passer ton shop en mode achat afin de proposer aux autres joueurs de te vendre certaines ressources. Pour cela, fait un clic droit sur le panneau de ton shop, appuie sur T et clique sur [changer] à la ligne 'Mode du shop'. Pour limiter l'achat, remplit le coffre du shop avec des objets. Le nombre de places disponibles définit le nombre total que tu souhaites acheter.",
        links: [{link: COMMENT_GAGNER_ARGENT_ID, title: COMMENT_GAGNER_ARGENT }, {link: COMMENT_SHOP_ID, title: COMMENT_SHOP }]
    },
    {
        id: COMMENT_BANQUE_ID,
        title: COMMENT_BANQUE,

        summary: "Je ne trouve pas la banque",

        content: "La banque est cachée derrière la fontaine du spawn. Tu peux y déposer ton argent en cliquant (clic droit) sur les panneaux \"deposit\". Tu peux retirer ton argent en cliquant sur les panneaux \"withdraw\". Le panneau du milieu t'indique le montant que tu as placé. L'argent placé peux rapporter des intérêts et tu peux déposer jusqu'à $300 000.",
        links: [{link: COMMENT_GAGNER_ARGENT_ID, title: COMMENT_GAGNER_ARGENT },{link: COMMENT_INTERETS_ID, title: COMMENT_INTERETS }]
    },
    {
        id: COMMENT_INTERETS_ID,
        title: COMMENT_INTERETS,

        summary: "Je n'ai pas reçu d'interêts",

        content: "Les intérêts sur Free-craft rapportent environ 1% par heure. Ils te sont reversés sur ton compte en banque tous les 10 min. Les intérêts te sont crédités seulement lorsque tu es connecté et des limites sont imposées. Tu maximises tes revenus en jouant 3h durant la période de 5h à 17h et 3h durant la période de 17h à 5h (jouer plus d'heures dans une de ces période ne rapporte pas plus d'interêts). Tu ne reçois pas d'interêts si ton compte est plein et le maximum collectible est de 500k. Utilise la commande /bank interest pour obtenir plus d'informations.",
        links: [{link: COMMENT_BANQUE_ID, title: COMMENT_BANQUE }, {link: COMMENT_GAGNER_ARGENT_ID, title: COMMENT_GAGNER_ARGENT }]
    },
    // {
    //     id: COMMENT_DUREE_PROTECTION_ID,
    //     title: COMMENT_DUREE_PROTECTION,

    //     summary: "Mon claim a disparu",

    //     content: "Un claim de moins de 100 blocs disparaîtra automatiquement au bout de 14 jours d'inactivité (propriétaire non connecté). Un claim de plus de 100 blocs disparaîtra au bout de 60 jours d'inactivité sauf si son propriétaire possède un total de " + MAX_CLAIM_ACCRUED_BLOCS + " blocs de claim ou plus de " + MIN_BONUS_CLAIM_BLOCS + " blocs de claim acheté avec l'argent du jeu (dans ces cas il n'expirera pas).",
    //     links: [{link: COMMENT_PROTEGER_ID, title: COMMENT_PROTEGER }, {link: COMMENT_REGION_RESET_ID, title: COMMENT_REGION_RESET }]
    // },
    {
        id: COMMENT_DUREE_PROTECTION_ID,
        title: COMMENT_DUREE_PROTECTION,

        summary: "Mon claim a disparu",

        content: "Un claim de moins de 100 blocs disparaîtra automatiquement au bout de 14 jours d'inactivité (propriétaire non connecté). Un claim de plus de 99 blocs et de moins de 500 blocs disparaîtra au bout de 30 jours d'inactivité. Un claim de 500 blocs et plus disparaîtra au bout de 3 mois d'inactivité. Les joueurs membres Free Craft ne sont pas concernés par ces expirations (tant que leur abonnement est actif).",
        links: [{link: COMMENT_PROTEGER_ID, title: COMMENT_PROTEGER }, {link: COMMENT_REGION_RESET_ID, title: COMMENT_REGION_RESET }, {link: COMMENT_MEMBRE_ID, title: COMMENT_MEMBRE }]
    },
    {
        id: COMMENT_TRUST_ID,
        title: COMMENT_TRUST,

        summary: "Je souhaite autoriser mes amis à construire chez moi",

        content: "Pour donner le droit de construire dans ta zone protégée, place-toi dedans et tape la commande /trust <nomDuJoueur>. Tu peux donner des accès plus restreint comme /accesstrust <nomDuJoueur> qui n'autorise que l'utilisation des leviers et boutons et /containertrust <nomDuJoueur> qui donne l'accès aux coffres et autres conteneurs. Tu peux remplacer <nomDuJoueur> par public pour donner l'accès à tout le monde sur le serveur. Tu peux voir qui possède l'accès à ton claim à l'aide de la commande /trustlist. Pour révoquer un accès utilise /untrust <nomDuJoueur>.",
        links: [{link: COMMENT_PROTEGER_ID, title: COMMENT_PROTEGER }]
    },
    {
        id: COMMENT_ESCAPE_ID,
        title: COMMENT_ESCAPE,

        summary: "Je suis coincé dans une zone protegée",

        content: "Si tu te retrouves enfermé chez un autre joueur, utilise la commande /trapped, tu seras alors téléporté en lieu sûr. Si cela ne suffit pas contacte un administrateur.",
        links: [{link: COMMENT_SIGNALER_ID, title: COMMENT_SIGNALER }]
    },
    {
        id: COMMENT_SWITCH_ID,
        title: COMMENT_SWITCH,

        summary: "Je souhaite faire payer l'accès à ma base",

        content: "Pour rendre un bouton payant, place un panneau en dessous (contre le mur). Sur la première ligne écrit [Payant] et sur la deuxième le prix d'utilisation. Tu peux relier le bouton à une porte en fer pour créer un accès payant. N'oublie pas de faire /accesstrust public dans ta zone de protection pour que les autres joueurs puissent appuyer sur le bouton.",
        links: [{link: COMMENT_TRUST_ID, title: COMMENT_TRUST }, {link: COMMENT_PROTEGER_ID, title: COMMENT_PROTEGER }]
    },
    {
        id: COMMENT_DROPS_ID,
        title: COMMENT_DROPS,

        summary: "Les mobs ne drop pas d'items",

        content: "Sur Free-craft, les mobs ne lâchent des items à leur mort que lorsqu’ils sont tués par un joueur. Certains drops sont totalement désactivés (comme les lingots de fer et les pépites d'or).",
        links: []
    },
    {
        id: COMMENT_XP_ID,
        title: COMMENT_XP,

        summary: "Je souhaite stocker mon xp",

        content: "Pour stocker ton expérience munie toi d'une fiole d'eau puis réalise un clic droit sur une table d'enchantement. Tu obtiendras alors une bouteille enchantée. Une partie de l'expérience disparaît dans le processus.",
        links: []
    },
    {
        id: COMMENT_WATER_ID,
        title: COMMENT_WATER,

        summary: "L'eau ne s'écoule pas lorsque je la place",

        content: "Les blocs d'eau et la lave ne s'écoulent pas de manière verticale sur le serveur Free Craft. Vous pouvez cependant créer une colonne d'eau de la manière suivante : placez une source sur une colonne en terre avant de la creuser par le haut.",
        links: []
    },
    {
        id: COMMENT_TRADE_ID,
        title: COMMENT_TRADE,

        summary: "Je n'arrive pas à échanger avec un villageois",

        content: "L'échange avec les villageois est désactivé. Vous pouvez cependant échanger avec les autres joueurs.",
        links: [{link: COMMENT_SHOP_ID, title: COMMENT_SHOP },{link: COMMENT_ACHETER_ID, title: COMMENT_ACHETER }]
    },

    {
        id: COMMENT_REDSTONE_ID,
        title: COMMENT_REDSTONE,

        summary: "Je n'arrive pas à faire fonctionner mes pistons",

        content: "La Redstone ne fonctionne correctement que lorsqu'elle est placée à l'intérieur de ton claim. Les horloges à Redstone (mouvement perpétuel) ne sont pas autorisées sur le serveur.",
        links: [{link: COMMENT_PROTEGER_ID, title: COMMENT_PROTEGER },{link: COMMENT_SWITCH_ID, title: COMMENT_SWITCH }]
    },
    
    {
        id: COMMENT_MEMBRE_ID,
        title: COMMENT_MEMBRE,

        summary: "Je souhaite soutenir le serveur",

        content: "Tu peux obtenir le status membre en t'abonnant via le shop du site. Pour que ton status membre s'affiche sur le discord pense à bien relier minecraft à discord.",

        links: [{link: LIEN_DU_SHOP_ID, title: LIEN_DU_SHOP }, {link: COMMENT_DISCORD_ID, title: COMMENT_DISCORD }, {link: COMMENT_CANCEL_ID, title: COMMENT_CANCEL }]
    },    
    {
        id: COMMENT_PARTY_ID,
        title: COMMENT_PARTY,

        summary: "Je souhaite utiliser le chat de groupe sur Free Craft",

        content: "Pour créer un chat du groupe utilise la commande /party create <nomDuGroupe> (cette fonctionnalité n'est disponible que pour les membres Free Craft). Tu peux inviter d'autres joueurs dans ton groupe à l'aide de la commande /party invite <nomDuJoueur>, ils pourront ensuite te rejoindre en utilisant la commande /party join. Pour entrer/sortir du chat du groupe utilise la commande /party toggle.",

        links: [{link: COMMENT_PARTY_KICK_ID, title: COMMENT_PARTY_KICK }, {link: COMMENT_MEMBRE_ID, title: COMMENT_MEMBRE }, {link: COMMENT_CHAT_ID, title: COMMENT_CHAT}]
    },    
    {
        id: COMMENT_PARTY_KICK_ID,
        title: COMMENT_PARTY_KICK,

        summary: "Je souhaite expulser quelqu'un de mon groupe",

        content: "Pour exclure quelqu'un de ton groupe tape la commande /party kick <nomDuJoueur> (cette fonctionnalité n'est disponible que pour les membres Free Craft). Il pourra revenir si tu l'invites à nouveau.",

        links: [{link: COMMENT_MEMBRE_ID, title: COMMENT_MEMBRE }, {link: COMMENT_PARTY_ID, title: COMMENT_PARTY}, {link: COMMENT_CANCEL_ID, title: COMMENT_CANCEL }]
    },

    {
        id: COMMENT_TETE_CUSTOM_ID,
        title: COMMENT_TETE_CUSTOM,

        summary: "Je souhaite convertir une tête custom",

        content: "Pour ouvrir l'interface de têtes customs tape la commande /hdb. Tu peux acheter des têtes custom via le shop du site, il te suffit ensuite de cliquer sur une tête pour la convertir. Les têtes sont interchangeables à l'infini. Tape la commande /chbalance pour voir combien de conversions te sont disponibles.",
        
        links: [{link: LIEN_DU_SHOP_ID, title: LIEN_DU_SHOP }, {link: COMMENT_REFUND_TETE_CUSTOM_ID, title: COMMENT_REFUND_TETE_CUSTOM }]
    },

    {
        id: COMMENT_REFUND_TETE_CUSTOM_ID,
        title: COMMENT_REFUND_TETE_CUSTOM,

        summary: "Je souhaite changer l'apparence d'une tête custom",

        content: "Pour modifier une tête custom place en une dans ta main et tape la commande /chrefund. Seuls les joueurs ayant acheté des têtes customs via le shop du site on accès à cette fonctionnalité.",
        
        links: [{link: LIEN_DU_SHOP_ID, title: LIEN_DU_SHOP }, {link: COMMENT_TETE_CUSTOM_ID, title: COMMENT_TETE_CUSTOM }]
    },

    {
        id: COMMENT_SIGNALER_ID,
        title: COMMENT_SIGNALER,

        summary: "J'aimerais contacter un admin",

        content: "Pour signaler un problème rend toi sur le discord et signale le problème remarqué dans le channel \"signaler un problème\". S'il s'agit d'un problème personnel contacte directement un administrateur (pseudo rouge).",
        links: [{link: 'https://discord.gg/tCQMKRrbRX', title: 'URL du discord' }, {link: COMMENT_IGNORER_ID, title: COMMENT_IGNORER }]
    },
    {
        id: COMMENT_DISCORD_ID,
        title: COMMENT_DISCORD,

        summary: "Mes succès ne s'affichent pas sur le discord",

        content: "Si ton pseudo minecraft est different de ton pseudo discord tes succès ne seront pas publiés. Pour établir la synchronisation depuis le serveur tape la commande /discord <tonPseudoDiscord>. Tu peux aussi entrer un faux nom avec cette commande pour ne plus que tes succès se publient sur le discord.",
        links: [{link: 'https://discord.gg/tCQMKRrbRX', title: 'URL du discord' }]
    },
    {
        id: COMMENT_CANCEL_ID,
        title: COMMENT_CANCEL,

        summary: "Je souhaite résilier mon abonnement membre",

        content: "Pour annuler ton abonnement membre, commence par taper la commande /stopmembership sur le serveur minecraft. Il te suffit ensuite d'utiliser le formulaire à l'adresse d'annulation. Si tu ne peux pas accéder au serveur minecraft, contacte un administrateur.",
        links: [{link: 'https://free-craft.fr/cancel', title: "URL d'annulation" }, {link: COMMENT_SIGNALER_ID, title: COMMENT_SIGNALER }]
    }
    ,
    {
        id: COMMENT_PAY_ID,
        title:COMMENT_PAY,

        summary: "J'aimerais envoyer de l'argent à un autre joueur",
        content: "Pour donner de l'argent à un autre joueur tape la commande /pay <nomDuJoueur> <montant>.",
        links: [{link: COMMENT_GAGNER_ARGENT_ID, title: COMMENT_GAGNER_ARGENT }]
   
        
    },
    {
        id: COMMENT_PORTAL_ID,
        title:COMMENT_PORTAL,

        summary: "J'aimerai obtenir mon portail de téléportation",
        content: "Les portails de téléportation sont disponibles dans la boutique du site. Pour créer un portail tape la commande /portal create <nomDuPortail>. Un portail peux s'emprunter dans les deux sens pas n'importe quel joueur. Pour placer l'entrée d'un portail tiens toi sur un bloc, regarde dans la direction voulue et tape la commande /portal entry <nomDuPortail>. Le principe est le même pour placer la sortie du portail : /portal exit <nomDuPortail>. Tu ne peux changer l'entrée et la sortie d'un portail qu'une seule fois toutes les 12h. Pour voir combien de portails tu peux créer tape la commande /portal balance. Pour lister l'ensemble de tes portails tape la commande /portal list. Tu peux renommer un portail à l'aide de la commande /portal rename <ancienNom> <nouveauNom>.",
        links: [{link: LIEN_DU_SHOP_ID, title: LIEN_DU_SHOP }]
   
        
    },
    {
        id: COMMENT_PLANTES_ID,
        title:COMMENT_PLANTES,
        summary: "Mes bambous ne poussent pas",
        content: "Sur Free Craft, les bambous et les acajous ne poussent que dans leurs biomes d'origine (les biomes jungle).",
        links: []
        
    }
];
