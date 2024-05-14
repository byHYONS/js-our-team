// reset
'use strict';

// vado in lettura del DOM:
const containerCards = document.querySelector('.container');
console.log(containerCards);

// definisco variabile di arrey di oggetti:
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'   
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',   
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },

];


for (let key in team){
    // console.log(key);
    // console.log(team[key]);
    console.log(team[key]['foto']);

    // creo il div dentro al quale costruisco le mie card:
    const myCards = document.createElement('div');
    myCards.classList.add('cards');

    // creo l'immagine dei membri:
    const myImg = document.createElement('img');
    myImg.innerHTML = `<img src="./img/${team[key]['foto']}" alt="${team[key]['nome']}">`;

    // creo h2 per stampare il nome dei membri:
    const nomeMembro = document.createElement('h2');
    nomeMembro.textContent = `${team[key]['nome']}`;

    // creo il p per la descrizione del ruolo:
    const ruoloMembro = document.createElement('p');
    ruoloMembro.textContent = `${team[key].ruolo}`;

    // appendo tutto su relativi parents:
    myCards.append(myImg);
    myCards.append(nomeMembro);
    myCards.append(ruoloMembro);
    containerCards.append(myCards);
}

// FINE