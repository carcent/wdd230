

let visitCount = localStorage.getItem('visitCount');


if (!visitCount) {
    visitCount = 0;

} else {

    visitCount = parseInt(visitCount, 10);
}

visitCount++;

localStorage.setItem("visitCount", visitCount);

document.getElementById('visitCount').textContent = visitCount;

