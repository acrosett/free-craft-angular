/* tslint:disable: max-line-length */
// tslint:disable: quotemark
import { ShopItemData } from './ShopItemData';

export const MEMBERSHIP_ID = 'membre';

export const PORTAL_ID = 'portal';

const CLAIM_1_ID = 'claim1';
const CLAIM_2_ID = 'claim2';
const CLAIM_3_ID = 'claim3';
const HEAD_1_ID = 'head1';
const HEAD_2_ID = 'head2';
const HEAD_3_ID = 'head3';

export const MEMBRE_PRODUCT = "prod_96ead62fd9c4e4"
export const METIER_PRODUCT = "prod_8a6171f2c0d015"
export const ARCHITECTE_PRODUCT = "prod_b1f2c358b9f143"
export const ENTREPRISE_PRODUCT = "prod_45a83f8f44a548"
export const ARTISTE_PRODUCT = "prod_510541df9aa640"
export const CREATEUR_PRODUCT = "prod_6de3b8c57f33f6"
export const MAITRE_PRODUCT = "prod_948b28897d5035"

export const PORTAL_PRODUCT = "prod_064677ba1e1032"




export const shopItems: ShopItemData[] = [

       
    {
        id: MEMBERSHIP_ID,
        product: MEMBRE_PRODUCT,
        title: 'Deviens membre',
        subtitle: 'Soutien ton serveur favori',
        img: '/assets/img/membre.webp',
        price: '1.99€ par mois',
        reduction: '',
        button: "S'abonner",
        url: null,
        contents: [

            "Bonus sur tes achats de la boutique",
            "Pas de cooldown sur tes TPs",
            "Pas d'expiration de tes claims",
            "Rejoins même quand le serveur est plein",
            "Chat exclusif, crée ton groupe",


        ],
        member_contents: [],
        info: "/faq#party"
    },
    {
        id: HEAD_1_ID,
        product: ARTISTE_PRODUCT,
        title: 'Pack Artiste',
        subtitle: 'Têtes custom',
        img: '/assets/img/heads.webp',
        price: '2.99€',
        reduction: '',
        button: "Obtenir",
        url: null,
        contents: [
            "5 têtes custom"
        ],
        member_contents: [
            "bonus membre + 1 "
        ],
        info: "/faq#tetes"
    },
    {
        id: HEAD_2_ID,
        product: CREATEUR_PRODUCT,
        title: 'Pack Créateur',
        subtitle: 'Têtes custom',
        img: '/assets/img/heads_2.webp',
        price: '7.99€',
        reduction: '-10%',
        button: "Obtenir",
        url: null,
        contents: [
            "15 têtes custom"
        ],
        member_contents: [
            "bonus membre + 3 "
        ],
        info: "/faq#tetes"
    },
    {
        id: HEAD_3_ID,
        product: MAITRE_PRODUCT,
        title: 'Pack Maître',
        subtitle: 'Têtes custom',
        img: '/assets/img/heads_3.webp',
        price: '15.99€',
        reduction: '-16%',
        button: "Obtenir",
        url: null,
        contents: [
            "32 têtes custom"
        ],
        member_contents: [
            "bonus membre + 5 "
        ],
        info: "/faq#tetes"
    },

    {
        id: CLAIM_1_ID,
        product: METIER_PRODUCT,
        title: 'Pack Métier',
        subtitle: 'Blocs de protection',
        img: '/assets/img/blocs.webp',
        price: '3.99€',
        reduction: '',
        button: "Obtenir",
        url: null,
        contents: [
            "1500 blocs de claim"
        ],
        member_contents: [
            "bonus membre + 300 "
        ],
        info: "/faq#claims"
    },
    {
        id: CLAIM_2_ID,
        product: ARCHITECTE_PRODUCT,
        title: 'Pack Architecte',
        subtitle: 'Blocs de protection',
        img: '/assets/img/blocs_2.webp',
        price: '17.99€',
        reduction: '-10%',
        button: "Obtenir",
        url: null,
        contents: [
            "7500 blocs de claim"
        ],
        member_contents: [
            "bonus membre + 1500 "
        ],
        info: "/faq#claims"
    },
    {
        id: CLAIM_3_ID,
        product: ENTREPRISE_PRODUCT,
        title: 'Pack Entreprise',
        subtitle: 'Blocs de protection',
        img: '/assets/img/blocs_3.webp',
        price: '49.99€',
        reduction: '-20%',
        button: "Obtenir",
        url: null,
        contents: [
            "24000 blocs de claim"
        ],
        member_contents: [
            "bonus membre + 4800 "
        ],
        info: "/faq#claims"
    },
    {
        id: PORTAL_ID,
        product: PORTAL_PRODUCT,
        title: 'Portail de TP',
        subtitle: 'Système de téléportation fixe',
        img: '/assets/img/portal.webp',
        price: '9.99€',
        reduction: '',
        button: "Obtenir",
        url: null,
        contents: [
            "Une paire entrée/sortie d'un portail de téléportation",
        ],
        member_contents: [""],
        info: "/faq#portal"
    }

];
