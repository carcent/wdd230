const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getCharterList() || []
    ;

chaptersArray.forEach(chapter => {
    displayList(chapter);
});
button.addEventListener('click', function () { console.log('Add Chapter button clicked!') });

button.addEventListener('click', function () {
    if (input.value.trim() === "") {
        input.focus();
        return
    }
    displayList(input.value);
    chaptersArray.push(input.value);
    setchapterList();
    input.value = '';
    input.focus();
});
function displayList(item) {

    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '✕';
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus;
    });
    input.focus();
    input.value = '';


};



button.addEventListener('click', () => {
    console.log('Add Chapter button clicked!');
});

function setchapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
function getCharterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

chapter = chapter.slice(0, chapter.length - 1);

chaptersArray = chaptersArray.filter((item) => item !== chapter);

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}