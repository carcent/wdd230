window.addEventListener('DOMContentLoaded', function () {
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        const currentDateTime = new Date().toISOString();
        timestampField.value = currentDateTime;
    } else {
        console.error("Element with ID 'timestamp' not found.");
    }
});