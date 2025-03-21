let visitCount = document.querySelector('#visitCount');
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `Your First Visit!`;

}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);