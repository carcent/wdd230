
let visitCount = localStorage.getItem('visit-count');


if (!visitCount) {
    visitCount = 0;

} else {

    visitCount = parseInt(visitCount, 10);
}

numVisits++;

localStorage.setItem("visitCount", visitCount);

document.getElementById('visitCount').textContent = visitCount;