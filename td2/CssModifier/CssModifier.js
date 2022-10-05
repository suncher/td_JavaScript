const addArticle0 = () => {
   let titleArticle0 = document.createElement("h2");
   titleArticle0.innerHTML = "Article 0 - Prévention";
   let paragraph = document.createElement("p");
   paragraph.innerHTML = 'il est interdit de vous doubler, sous peine de disqualification';
   let div = document.createElement("div");
   let arr = [titleArticle0,paragraph];
   arr.forEach(element => {
      div.appendChild(element);
   })
   document.body.insertBefore(div,document.body.firstChild);
}

const toUpperCaseWithoutCss = () => {
   allTitleH2.forEach(element => {
   let h2 = element;
   element = element.textContent.toUpperCase();
   h2.innerHTML = element;
  })

} 


const toUpperCaseWithCss = () => {
   allTitleH2.forEach(element => {
    element.setAttribute('style','text-transform:uppercase');
   })
}
const incrementNumberOfArticle = () => {  
   let i = 0;
   allTitleH2.forEach(element => {
      i++;
      let h2 = element;
      element = element.textContent.replace(/\d+/g,i);
      h2.innerHTML = element;
   })
}

const changeArticleColorOneOnTwo = () => {
   let i = 0;
   allTitleH2.forEach(element => {
      i++;
      if (i % 2 === 0) {
         element.setAttribute('style','background-color:blue'); 
         element = element.nextElementSibling;
         while ( element !== null && element.nodeName !== 'H2') {
            element.setAttribute('style','background-color:blue');
            element = element.nextElementSibling;
         }
      }
   })
   
}

// marche a moitié 
 const reverseOrderPeriodInscription = () => {
   let ul = document.querySelectorAll('ul');
   let li = document.querySelectorAll('li');
    let listToOrder = [];
    let list = [];

    ul.forEach(element => {
      listToOrder.push(element);
      listToOrder.reverse();
      element = element.nextElementSibling;
      while ( element !== null && element.nodeName !== 'UL') {
         listToOrder.push(element);
         element = element.nextElementSibling;
      }
 })
      // print listToOrder in the DOM tree forEach element
      listToOrder.forEach(element => {
         document.body.appendChild(element);
      })    
 }







addArticle0();
let allTitleH2 = document.querySelectorAll("h2");
toUpperCaseWithoutCss();
toUpperCaseWithCss();
incrementNumberOfArticle();
changeArticleColorOneOnTwo();
reverseOrderPeriodInscription();