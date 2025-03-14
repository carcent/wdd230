const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menulinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.togge('open');
    // hamburgerElement.classList.toggle('open');
});