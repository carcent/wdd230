window.onload = function () {

    var lastModifiedDate = document.lastModified;

    document.getElementById('lastModified').textContent = lastModifiedDate;

    var lastYear = new Date(document.lastModified);

    var year = lastYear.getFullYear();

    document.getElementById('lastYear').textContent = year;
};


