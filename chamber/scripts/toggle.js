document.getElementById('grid').addEventListener('click', function () {
    document.getElementById('members').classList.remove('list');
    document.getElementById('members').classList.add('grid');
});

document.getElementById('list').addEventListener('click', function () {
    document.getElementById('members').classList.remove('grid');
    document.getElementById('members').classList.add('list');
});