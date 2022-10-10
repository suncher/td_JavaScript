import * as array_utils from './array_utils.js'

let i = 0;
const getResult = () => {
    const input = document.querySelectorAll('#inputValue');
    const searchValue = document.querySelector('#searchDicotomie').value;
    const arr = [];
    input.forEach(element => arr.push(Number(element.value)));
    let sortedArray = arr.sort(array_utils.compareNumber);
    console.log(sortedArray);
    const result = document.querySelector('.result');
    result.textContent = `Somme des Elements: ${array_utils.getSum(sortedArray)} | Nombre de pairs: ${array_utils.getNumberOfEven(sortedArray)} | Plus grand élément: ${array_utils.getMaxEven(...sortedArray)} | Element rechercher : ${array_utils.binarySearch(sortedArray,searchValue)} `;
}
const createInputElement = () => {
    i++;
    const container = document.querySelector('.contain-content');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.setAttribute('id','inputValue');
    const addSpace = document.createElement('br');
    let arrOfElements = [label,input,addSpace];
    input.type = 'number';
    label.textContent = `Element ${i}`;
    arrOfElements.forEach(element => container.appendChild(element));
}
const createSearchElement = () => {
    const container = document.querySelector('.contain-rechercheDicoInput');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.setAttribute('id', 'searchDicotomie');
    input.type = 'number';
    label.textContent = 'Element a rechercher';
    let arrOfElements =  [label,input];
    arrOfElements.forEach(element => container.appendChild(element));
}
const createAddButton = () => {
    const containButton = document.querySelector('.contain-addbutton');
    const addButton = document.createElement('button');
    addButton.setAttribute('id', 'addButton');
    addButton.textContent = '+';
    containButton.appendChild(addButton);
}
const createResultButton = () => {
    const containButton = document.querySelector('.contain-resultButton');
    const resultButton = document.createElement('button');
    resultButton.setAttribute('id', 'resultButton');
    resultButton.textContent = 'Resultat';
    containButton.appendChild(resultButton);
}
const form = () => {
    createInputElement();
    createAddButton();
    createSearchElement();
    createResultButton();
}
form();
const getResultButton = document.querySelector('#resultButton');
getResultButton.addEventListener('click', getResult)
const getAddButton = document.querySelector('#addButton');
getAddButton.addEventListener('click', createInputElement);



