const addArticle0Jquery = () => {
   let titleArticle0 = [
      $('<h2>Article 0 - Prévention</h2>'),
      $('<p>il est interdit de vous doubler, sous peine de disqualification</p>'),
      $('<div></div>')
   ]
   titleArticle0[2].append(titleArticle0[0],titleArticle0[1]);
   $('body').prepend(titleArticle0[2]);
}



const toUpperCaseWithoutCssJquery = () => {
   $('h2').each(function(){
      $(this).text($(this).text().toUpperCase());
   })
}

const toUpperCaseWithCssJquery = () => {
   $('h2').css('text-transform','uppercase');
}



const incrementNumberOfArticleJquery = () => {
   let i = 0;
   $('h2').each(function(){
      i++;
      $(this).text($(this).text().replace(/\d+/g,i));
   })
}

const changeArticleColorOneOnTwoJquery = () => {
   let i = 0;
   $('h2').each(function(){
      i++;
      if (i % 2 === 0) {
         $(this).css('background-color','blue');
         $(this).nextUntil('h2').css('background-color','blue');
      }
   })
}



const orderPeriodInscription = () => {
   let ul = document.querySelectorAll('ul');
   let li = document.querySelectorAll('li');
   let listToOrder = [];
   ul.forEach(element => {
      listToOrder.push(element);
      listToOrder.reverse();
      element.append(listToOrder);
   })
  
}

addArticle0Jquery();
let allTitleH2 = document.querySelectorAll("h2");
toUpperCaseWithoutCssJquery();
toUpperCaseWithCssJquery();
incrementNumberOfArticleJquery();
changeArticleColorOneOnTwoJquery();
orderPeriodInscription();