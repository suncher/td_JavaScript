
 //  exo 2.1
  let x = 42n

  const getTypeVariable = (variable) => {
      console.log(typeof variable);
  }
  getTypeVariable(x);
 //  exo 2.2
  const getTypeVariable2 = () => {
      console.log(typeof x);
     // let x = 42n;
  }
  getTypeVariable2();
 // exo 2.3
  let number = 58
  console.log(number.toString());
  let str = "123"
  console.log(parseInt(str));
  console.log(Number.parseInt(str));
  console.log(parseFloat(str));
  console.log(Number.parseFloat(str));
  console.log(Number(str));

 // exo 2.4
  let b=false;
  let n=0;
  let s='0';
  let tab = [];
  let o = {};
  console.log(n == n);
  console.log(n == s);
  console.log(n == tab);
  console.log(n == o);
  console.log(n === n);
  console.log(n === s);
  console.log(n === tab);
  console.log(n === o);

 // exo 3.1
const isThereSpecialChar = (string) => {
    let isThereSpecialCharac = true;
    let specialCharacter = ['[','`',']','^','\\','_']
    for (let i = 0; i < specialCharacter.length ; i++) {
        for(let j = 0; j < string.length ; j++) {
            if( specialCharacter[i] === string.charAt(j) ) { 
                isThereSpecialCharac = false; 
            }
        }
    }
    return !isThereSpecialCharac;
}
const GenerateRandomString = () => {
    let counter = 1;
    let generatedRandomString = '';

    for (let i = 0; i < 5; i++) {
        generatedRandomString += String.fromCharCode(65 + Math.random() * (123 - 65))
    }
    while (generatedRandomString !== generatedRandomString.toUpperCase() || isThereSpecialChar(generatedRandomString)) {
        generatedRandomString = '';
        counter++;
        for (i = 0; i < 5; i++) {
            generatedRandomString += String.fromCharCode(65 + Math.random() * (123 - 65))
        }
    }
    console.log(generatedRandomString)
}

GenerateRandomString();
 // exo 3.2

  let voyelleContainer = ['a', 'e','i','o','u','y'];


  const generateVoyelleString = () => { 
  let string = "";

  while (string.length < 5) {
      let randomPhrase = Math.floor(Math.random()*voyelleContainer.length);
      string += voyelleContainer[randomPhrase];
  }
    console.log(string);
  }
  generateVoyelleString(); 

 // exo 3.3
 const getRightName = () => {
     let name =  prompt('Saisir votre nom');
     let firstname = prompt('Saisir votre prénom');
    console.log( name.replace(" ","").toUpperCase() + firstname.trim().charAt(0).toUpperCase().replace(" ","") + firstname.substring(1).replace(" ",""));
  }
  getRightName();

 //  exo 3.4
  const encryptedText = () => {
      let text = prompt('Saisir un text');
      if(text.includes("A") || text.includes("a")) {
          text = text.replace("A","4");
          text = text.replace("a","4");
      }
      if(text.includes("E") || text.includes("e")) {
          text = text.replace("E","3");
          text = text.replace("e","3");
    } 
      if(text.includes("G") || text.includes("g")) {
          text = text.replace("G","6");
          text =text.replace("g","6");
      } 
      if(text.includes("I") || text.includes("i")) {
          text = text.replace("I","1");
          text = text.replace("i","1");
      } 
      if(text.includes("O") || text.includes("o")) {
          text = text.replace("O","0");
          text = text.replace("o","0");
      } 
            if(text.includes("S") || text.includes("s")) {
          text = text.replace("S","5");
          text = text.replace("s","5");
      } 
      if(text.includes("Z") || text.includes("z")) {
          text =  text.replace("Z","2");
          text = text.replace("z","2");
      } 
      console.log(text);
  }
  encryptedText();

 //  exo 3.5
  const jazzBundle = () => {
      for (let i = 1;i < 100 ; i++) {

          if (i % 3 == 0 && i % 5 == 0) {
              console.log("jazzBundle");
          } else {
              if (i % 3 == 0) {
                  console.log("jazz");
              }
              if (i % 5 == 0) {
                  console.log("bundle");
              }
          }
          console.log(i);
      }
  }
  jazzBundle();

 //  exo 4.1
 // version algo
 const sumNumberInArray = () => {
    let listOfNumber = [0,1,2,3,4,5,6,7,8,9]
    let sum = 0;
    for (let i = 0; i < listOfNumber.length; i++) {
        sum = sum +i;
    }
    console.log(sum);
}
sumNumberInArray();

// version programmation fonctionnel
//   const sumNumberInArray = () => {
//       let listOfNumber = [0,1,2,3,4,5,6,7,8,9]
//      let sum = listOfNumber.reduce((accumulator,index) => accumulator + index,0);
//       console.log(sum);
//   }
//   sumNumberInArray();


 //  exo 4.2
 // version algo
   const countPairNumbers = () => {
       let listOfNumber = [0,1,2,3,4,5,6,7,8,9];
       let counter = 0;
       for (let i = 1; i < listOfNumber.length;i++) {
           if (listOfNumber[i] % 2 === 0) {
               counter++;
           }
       }
       console.log(counter)
   }
   countPairNumbers();

// version programmation fonctionnel
//   const countPairNumbers = () => {
//     let listOfNumber = [0,1,2,3,4,5,6,7,8,9];
//     let counter = 0;
//     listOfNumber.forEach(element => {
//         if(element % 2 === 0 && element > 0) {
//             counter++;
//         }
//     })
//     console.log(counter);
// }
// countPairNumbers();

  //  exo 4.3 
 let arr1 = [10,53,89];
 let arr2 = [12,47,58,69];
 const fusionSortedArray = (array1, array2) => {
     let fusionArray = [];
     let i = 0;
     let j = 0;

     while (i < array1.length && j < array2.length) {
         if (array1[i] < array2[j]) {
             fusionArray.push(array1[i]);
             i++;
         } else {
             fusionArray.push(array2[j]);
             j++;
         }
        }
   console.log(fusionArray)
}
  fusionSortedArray(arr1, arr2)

  // exo 4.4
  // version algo
let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let value = 12;

const dichotomie = (arr,value) => {
    let min = 0;
    let max = arr.length - 1;
    let mid = Math.floor((min + max) / 2);
    let find = false;
    let result = '';
    while (find === false && min < max) {
        if (value < arr[mid]) {
            max = mid - 1;
        } else if (value > arr[mid]) {
            min = mid + 1;
        } else {
            find = true;
        }
        mid = Math.floor((min + max) / 2);
    }
    if(arr[mid] !== value) {
        result = 'aucun resultat trouver';
    } else {
        result = 'La valeur a été trouvé à la position ' + mid;
    }
    console.log(result);
}

console.log(dichotomie(arrayOfNumbers,value));
// exo 4.5
// version algo
 const highestPairNumber = (arr) => {
     let highestNumber = 0;
     let i = 0;
     while (i < arr.length) {
        if (arr[i] % 2 === 0 && arr[i] > highestNumber) {
            highestNumber = arr[i];
        }
        i++;
     }
     console.log(highestNumber);
    }
    highestPairNumber([...arr1, ...arr2]);

//version programmation fonctionnel
// const highestPairNumber = (arr) => {
//     let highestNumber = 0;
//     let i = 0;
//    arr.forEach(element => {
//        if (element % 2 === 0 && element > highestNumber) {
//            highestNumber = element;
//        }
//        i++;
//     })
//     console.log(highestNumber);
//    }
//    highestPairNumber([...arr1, ...arr2]);
// exo 4.6
// version algo
 let phrase = "Je suis entrain d'apprendre le javascript Je"
 const occurenceOfWords = (sentence) => {
     const word = sentence.split(" ");
     const countOccurenceOfWords = {};
     for (let i = 0; i < word.length;i++) {
        for (let j = 0; j < word.length;j++) {
         if(word[i] === word[j]) {
             countOccurenceOfWords[word[i]]++;
         } else {
             countOccurenceOfWords[word[i]] = 1;
         }
        }
     }
     console.log(word);

     console.log(countOccurenceOfWords);
 }

 occurenceOfWords(phrase);

 // version programmation fonctionnel
// let phrase = "Je suis entrain d'apprendre le javascript Je"
// const occurenceOfWords = (sentence) => {
//     const word = sentence.split(" ");
//     const countOccurenceOfWords = {};
//     console.log(Array.isArray(word));
//     word.forEach(element => {
//         if (countOccurenceOfWords[element]) {
//             countOccurenceOfWords[element]++;
//         } else {
//             countOccurenceOfWords[element] = 1;
//         }
//     })
//     console.log(countOccurenceOfWords);
// }

// occurenceOfWords(phrase);
