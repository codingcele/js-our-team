
let employees = [
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome : "Angela Lopez",
        ruolo : "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];


i = 0;
while (i < employees.length) {
    let newDiv = `<div class="div size"></div>`;
    let container = document.getElementById("img-container");
    container.innerHTML += newDiv;
    i++;
}

let divList = document.getElementsByClassName("div");

for (let i = 0; i < employees.length; i++) {
    let emplo = employees[i];
    let textImg = emplo.foto;
    let img = `<img class="height" src="img/${textImg}">`
    let name = emplo.nome;
    let role = emplo.ruolo;
    let nameElement = `<div class="text-center">${name}</div>`
    let roleElement = `<div class="text-center font-size">${role}</div>`
    
    let divToModify = divList[i];
    divToModify.innerHTML += img;
    divToModify.innerHTML += nameElement;
    divToModify.innerHTML += roleElement;
}












