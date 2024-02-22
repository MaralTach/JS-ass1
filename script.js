

const mainContainer = document.querySelector('body');
const logo = document.getElementsByClassName("logo")
console.log(logo);
const navbar = document.querySelector('nav')
console.log(navbar);
const items = document.getElementById('items');
console.log(items);
const container = document.getElementsByClassName('container');
console.log(container);


/* ********************************** */
/*         maincontainer body         */
/* ********************************** */
console.log(mainContainer);
mainContainer.style.backgroundColor = 'black';
mainContainer.style.fontFamily = 'Georgia';
mainContainer.style.color = 'white';



/* ********************************** */
/*              container             */
/* ********************************** */

// container.style.width = '90rem'





/* ********************************** */
/*               navbar               */
/* ********************************** */

navbar.style.margin = '20px'
/* ********************************** */
/*                logo                */
/* ********************************** */



/* ********************************** */
/*                items               */
/* ********************************** */
const arrItems = [...items]
arrItems.forEach((li)=> (li.style.color = 'white'))






// const headText = document.getElementById('title');

// console.log(headText);
// headText.style.color ='black';
// headText.style.backgroundColor ='white' ;
// headText.style.border = '2px solid purple';
// headText.style.borderRadius = '20px ';
// headText.style.padding = '20px ';
// headText.style.textAlign = 'center';
// // headText.style.position = 'fixed';
// headText.style.width = '100%';

// const navbar = document.querySelector('nav');
// console.log(navbar);
// navbar.style.backgroundColor = 'blue'
// navbar.style.backgroundColor = 'blue'

// // const items = document.getElementsByClassName('items')

// const navbar = document.querySelector('.items ')

// navbar.onmouseover = function (){
//     alert('mouse over')
// }


// const home = document.getElementById('home')
// console.log(home);

// home.style.color = 'white' ;
// home.style.color


// bacspace veya delete basarsak en sonku elemani silsin

