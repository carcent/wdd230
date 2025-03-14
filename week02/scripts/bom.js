const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () { console.log('Add Chapter button clicked!') });

button.addEventListener('click', function () {
    if (input.value.trim() === "") {
        input.focus();
        return
    }
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
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


});


button.addEventListener('click', () => {
    console.log('Add Chapter button clicked!');
});