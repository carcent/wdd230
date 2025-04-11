document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed.");

    const lastYear = document.getElementById("lastYear");
    lastYear.textContent = new Date().getFullYear();
    console.log("Last Year Set:", lastYear.textContent);


    const lastModified = document.getElementById("lastModified");
    const lastModifiedDate = new Date(document.lastModified);
    lastModified.textContent = lastModifiedDate.toLocaleString();
    console.log("Last Modified Set:", lastModified.textContent);
});