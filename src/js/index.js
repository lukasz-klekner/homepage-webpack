import '../scss/main.scss';
import moment from 'moment';



const name = "Łukasz";
const age = 25;

//alert("Siemka!");
//console.log(`Man na imię ${name} i mam ${age} lat.`);

const header = document.querySelector('.header__title--js');
//header.innerHTML = "Łukasz Klekner - Moja pierwsza strona"
header.innerHTML = moment().startOf('day').fromNow();


const greet = function (name, age) {
    console.log(`Mam na imię ${name}. W tym roku skończę ${age+1} lat.`);
}

const greet2 = (name, age) => console.log(`Mam na imię ${name}. W tym roku skończę ${age+1} lat.`);

greet(name, age);
greet2(name, age);


const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('navigation--open');
})