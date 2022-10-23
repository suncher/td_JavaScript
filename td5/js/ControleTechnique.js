let cityStorage = localStorage.getItem('city');
let departementStorage = localStorage.getItem('departement');
let departementNomStorage = localStorage.getItem('departementNom');
let printChoix = document.querySelector('.printChoix');
let data;
let test =  localStorage.getItem('type');
let selectedType = document.querySelectorAll('input[name="choix"]');
let nextButton = document.querySelector('#button-next');
let previousButton = document.querySelector('#button-previous');
let incrementDocument = 0;
let tbody = document.querySelector('#fillTable');
async function getControlTechniqueByCity(ville,increment) {
    let data = await fetch(`https://data.economie.gouv.fr/api/records/1.0/search/?dataset=controle_techn&q=&start=${increment}&refine.cct_code_commune=${ville}`, {
        method: 'get'
    })
    data = await data.json();
    console.log('Appel fonction',data.records.length);
    return data;

      
}
async function getControlTechniqueByDepartement(departement,increment) {
    let data = await fetch(`https://data.economie.gouv.fr/api/records/1.0/search/?dataset=controle_techn&q=&start=${increment}&refine.cct_code_departement=${departement}`, {
        method: 'get'
    })
    data = await data.json();
    console.log('Appel Fonction',data.records.length);
    return data;

      

}

async function addControlTechniqueToDom(ville,departement,type,increment) {
   
    if(type === 'departement'){
        data = await getControlTechniqueByDepartement(departement,increment); 
        printChoix.innerHTML = ` Le departement est ${departementNomStorage} `;
        tbody.innerHTML = '';
       
    } else if (type === 'commune'){
        data = await getControlTechniqueByCity(ville,increment);
        printChoix.innerHTML = `La ville est ${cityStorage}`;
        tbody.innerHTML = '';
       
    }
    data.records.forEach(element => {
        let tbody = document.querySelector('#fillTable');
        let tr = document.createElement('tr');
        let tdNom = document.createElement('td');
        let tdTarif = document.createElement('td');
        let tdAdress = document.createElement('td');
        let tdTypeVehicule = document.createElement('td');
        let tdEnergie = document.createElement('td');
        tbody.appendChild(tr);
        tr.appendChild(tdNom);
        tr.appendChild(tdTarif);
        tr.appendChild(tdAdress);
        tr.appendChild(tdTypeVehicule);
        tr.appendChild(tdEnergie);
        tdNom.textContent = element.fields.cct_denomination;
        tdTarif.textContent = `${element.fields.prix_visite} €`;
        tdAdress.textContent = element.fields.cct_adresse;
        tdTypeVehicule.textContent = element.fields.cat_vehicule_libelle;
        tdEnergie.textContent = element.fields.cat_energie_libelle;
        
    })
}

async function afficheCommuneToOption() {
   
    selectedType.forEach(element => {
        element.addEventListener('change', async (event) => {
            addControlTechniqueToDom(cityStorage,departementStorage,event.target.value,0);
            let type = event.target.value;
            incrementDocument = 0;
            localStorage.setItem('type',type);
           
        })
    })
}
nextButton.addEventListener('click', async () => {
    tbody.innerHTML = ''; 
    incrementDocument +=  10;
    console.log(incrementDocument);

   addControlTechniqueToDom(cityStorage,departementStorage,test,incrementDocument);
})
previousButton.addEventListener('click', async () => {
    tbody.innerHTML = '';
    console.log(incrementDocument);
    
    if(incrementDocument === 0){
        previousButton.disable = true;
  
    } else {
        incrementDocument = incrementDocument - 10;
        addControlTechniqueToDom(cityStorage,departementStorage,test,incrementDocument);
    }
})

addControlTechniqueToDom(cityStorage,departementStorage,'departement',0);
afficheCommuneToOption();













