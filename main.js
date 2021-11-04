// Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
// Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.
// Consigli del giorno:
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in una funzione.

// reference to the card container
const cardsContainer = document.querySelector('.team-container');


const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder - CEO',
        pic: './img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        pic: './img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        pic: './img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        pic: './img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        pic: './img/barbara-ramos-graphic-designer.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        pic: './img/angela-lopez-social-media-manager.jpg',
    },
];

// creare le ncard necessarie

// for (let i = 0; i < members.lengths; i++) {

// }