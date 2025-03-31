document.getElementById('title').addEventListener('input', function () {
    const titleInput = this;
    const errorMessage = document.getElementById('title-error');

    const pattern = /^[A-Za-z\s-]{7,}$/;
    if (!pattern.test(titleInput.value)) {
        errorMessage.textContent = 'Please enter a valid title or position with at least 7 characters, containing only letters, spaces, or hyphens.';
    } else {
        errorMessage.textContent = '';
    }
});