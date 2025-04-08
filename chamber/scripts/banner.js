document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById('event-banner');
    const closeButton = document.getElementById('close-banner');

    function shouldShowBanner() {
        const currentDate = new Date();
        const currentDay = currentDate.getDay();

        return currentDay === 1 || currentDay === 2 || currentDay === 3;
    }


    if (shouldShowBanner()) {
        banner.style.display = 'block';
    }

    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});