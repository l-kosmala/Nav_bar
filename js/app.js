// classList - shows/get all classes
// contains - checks classList for specific class
// add - add class 
// remove - remove class
// toggle - toggle class

const btnNav = document.querySelector('.nav__toggle');
const links = document.querySelector('.links');

btnNav.addEventListener('click', function () {
    links.classList.toggle('show__links');
});