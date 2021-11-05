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
const addBtn = document.getElementById('addMemberButton');
const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const inputPic = document.getElementById('image');

const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder - CEO',
        pic: './img/wayne-barnett-founder-ceo.jpg',
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


// //for every item contained in the members array
// for ( let i = 0; i < members.length; i++) {
//     // obtaining the item properties
//     const name = members[i].name;
//     const role = members[i].role;
//     const pic = members[i].pic;

//     //generating members cards
//     cardsContainer.innerHTML +=
//     `
//     <div class="team-card">
//         <div class="card-image">
//             <img src="${pic}" alt="${name}">
//         </div>
//         <div class="card-text">
//             <h3>${name}</h3>
//             <p>${role}</p>
//         </div>
//     </div>
//     `;
// }

// addBtn.addEventListener('click', ()=> {
//     // create an empty new object
//     const newMember = {};
//     // obtaining the data in the form
//     const name = document.getElementById('name').value;
//     const role = document.getElementById('role').value;
//     const pic = document.getElementById('image').value;
//     console.log(name, role, pic);
//     // filling the new object with the form data
//     newMember.name = name;
//     newMember.role = role;
//     newMember.pic = pic;
//     // adding the newMember object to the members array
//     members.push(newMember);
//     // adding the newMember card to the DOM
//     cardsContainer.innerHTML +=
//     `
//     <div class="team-card">
//         <div class="card-image">
//             <img src="${pic}" alt="${name}">
//         </div>
//         <div class="card-text">
//             <h3>${name}</h3>
//             <p>${role}</p>
//         </div>
//     </div>
//     `;
//     console.log(members);

// });

drawTeam(members, cardsContainer);

addBtn.addEventListener('click', function() {
    const newMember = btnEvent(inputName, inputRole, inputPic, cardsContainer);
    members.push(newMember);
    drawTeam(members, cardsContainer);
});

// funzioni

function drawTeam(team, container) {
    for (let i = 0; i < team.length; i++) {
        const newMember = team[i];

        container.innerHTML += 
        `
        <div class="team-card">
            <div class="card-image">
                <img src="${newMember.pic}" alt="${newMember.name}">
            </div>
            <div class="card-text">
                <h3>${newMember.name}</h3>
                <p>${newMember.role}</p>
            </div>
        </div>
        `;
    }
}

function btnEvent(name, role, pic, container) {
    container.innerHTML = '';
    let newMember = {};
    newMember.name = name.value;
    newMember.role = role.value;
    newMember.pic = pic.value;

    name.value = '';
    role.value = '';
    pic.value = '';
    return newMember;
}