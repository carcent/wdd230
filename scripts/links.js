const baseURL = "https://carcent.github.io/wdd230/";
const linksURL = "https://carcent.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');


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

        // Create the week title and append it to the section
        let weekTitle = document.createElement('h3');
        weekTitle.textContent = `${week.week}:`;
        task.appendChild(weekTitle);

        // Create a container for the links (unordered list)
        let linksContainer = document.createElement('ul');

        // Loop through each link in the current week
        week.links.forEach((link) => {
            // Create list item and link elements
            let listItem = document.createElement('li');
            let url = document.createElement('a');
            url.href = baseURL + link.url;  // Combine baseURL with relative path in the JSON
            url.textContent = link.title;  // Set the link text
            url.target = "_blank";  // Open the link in a new tab

            // Append the link to the list item
            listItem.appendChild(url);
            // Append the list item to the links container
            linksContainer.appendChild(listItem);
        });

        // Append the links container to the section
        task.appendChild(linksContainer);

        // Finally, append the week section to the 'cards' container
        cards.appendChild(task);
    });
};

