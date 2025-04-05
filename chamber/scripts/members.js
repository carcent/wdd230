const baseURL = "https://carcent.github.io/wdd230/";
const linksURL = "https://carcent.github.io/wdd230/data/links.json";
const members = document.querySelector('#members');


async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.table(data.weeks);
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

getLinks();

const displayLinks = (weeks) => {

    weeks.forEach((week) => {

        let task = document.createElement('section');
        task.classList.add('week-section');


        let weekTitle = document.createElement('h3');
        weekTitle.textContent = `${week.week}:`;
        task.appendChild(weekTitle);


        let linksContainer = document.createElement('ul');


        week.links.forEach((link) => {

            let listItem = document.createElement('li');
            let url = document.createElement('a');
            url.href = baseURL + link.url;
            url.textContent = link.title;
            url.target = "_blank";
            listItem.appendChild(url);
            linksContainer.appendChild(listItem);
        });


        task.appendChild(linksContainer);


        cards.appendChild(task);
    });
};

