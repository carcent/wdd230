const darkModeButton = document.getElementById('darkModeToggle');
const modeIcon = document.getElementById('modeIcon');

const isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
    document.body.classList.add('dark-mode');
    modeIcon.src = "images/moon-icon.png"

}
darkModeButton.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');


    if (document.body.classList.contains('dark-mode')) {
        modeIcon.src = "images/moon-icon.png";
    } else {
        modeIcon.src = "images/sun-icon.png";
    }


    const isDarkModeNow = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkModeNow.toString());
});