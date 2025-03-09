let visitCount = localStorage.getItem('visitCount');
if (visitCount === null) {
    visitCount = 0;
}

visitCount++;

localStorage.setItem('visitCount').textContent = visitCount;
