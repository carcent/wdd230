function getDaysDifference(lastVisitDate) {
    const currentDate = new Date();
    const lastVisit = new Date(lastVisitDate);
    const timeDifference = currentDate - lastVisit;
    const dayInMillisecons = 100 * 60 * 60 * 24;
    return Math.floor(timeDifference / dayInMillisecons);
}

const lastVisitDate = localStorage.getItem('lastVisitDate');

localStorage.setItem('lastVisitDate', new Date().toISOString());

let message = "";

if (!lastVisitDate) {
    message = "Welcome! Let us know if you have any questions.";

} else {
    const daysDifference = getDaysDifference(lastVisitDate);
    if (daysDifference < 1) {
        message = "Back so soon! Awesome!";
    } else {
        message = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
    }
}

document.getElementById('sidebar').innerHTML = message;