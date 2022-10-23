
let selectDepartement = document.querySelector('#selectDepartement');
let selectCommune = document.querySelector('#selectCommune');
let body = document.querySelector('body');
let population = document.querySelector('#printPopulation');
let meteoButton = document.querySelector('#meteo-button');
let controle_technique_Button = document.querySelector('#control-Technique');
controle_technique_Button.style.visibility = "hidden";
meteoButton.style.visibility = "hidden";
selectCommune.style.visibility = "hidden";

async function getDepartement() {
    let data = await fetch('https://geo.api.gouv.fr/departements', {
        method: 'get'
    })
    data = await data.json();
    return data;

}
async function getCommuneOfDepartement(departementId) {
    selectCommune.style.visibility = "visible";
    let data = await fetch(`https://geo.api.gouv.fr/departements/${departementId}/communes`, {
        method: 'get'
    })
    data = await data.json();

    return data;
}

function addDepartementToOption(data) {
    Object.values(data).forEach(element => {
        let option = document.createElement('option');
        selectDepartement.appendChild(option);
        option.value = element.code;
        option.textContent = `${element.code} - ${element.nom} `;
    })
}
function getSingleDepartement() {
    
    selectDepartement.addEventListener('change', async (event) => {
        let departementSelectionner = event.target.value; // code de la ville
        departementSelectionner = await fetch(`https://geo.api.gouv.fr/departements/${departementSelectionner}`, {
            method: 'get'
        })
        departementSelectionner = await departementSelectionner.json();
        localStorage.setItem('departement',departementSelectionner.code);
        localStorage.setItem('departementNom',departementSelectionner.nom);
    })
}


async function addCommuneToOption(data) {

    Object.values(data).forEach(element => {
        let option = document.createElement('option');
        selectCommune.appendChild(option);
        option.value = element.code;
        option.textContent = `${element.codeDepartement} - ${element.nom} `;
    })

}
async function afficheCommuneToOption() {
    selectDepartement.addEventListener('change', async (event) => {
        selectCommune.options.length = 0;
        addCommuneToOption(await getCommuneOfDepartement(event.target.value));
    })
}
 
function affichePopulation() {
    
    selectCommune.addEventListener('change', async (event) => {
        let villeSelectionner = event.target.value; // code de la ville
        villeSelectionner = await fetch(`https://geo.api.gouv.fr/communes/${villeSelectionner}`, {
            method: 'get'
        })
        villeSelectionner = await villeSelectionner.json();
        localStorage.setItem('city',villeSelectionner.nom);
        population.innerHTML = ` La population de ${villeSelectionner.nom} est de ${villeSelectionner.population} habitants`;
        meteoButton.style.visibility = "visible";
        controle_technique_Button.style.visibility = "visible";
    })
}

    meteoButton.addEventListener('click', function () {
        document.location.href="meteo.html" 

    });


    controle_technique_Button.addEventListener('click', function () {
        document.location.href="controlTechnique.html"
    });


async function rempli() {
    addDepartementToOption(await getDepartement());
    afficheCommuneToOption();
    affichePopulation();
    getSingleDepartement();
   
}



rempli();