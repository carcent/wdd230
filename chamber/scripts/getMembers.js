const spotlightContainer = document.getElementById('spotlight-members');

async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        const members = data.members;
        console.log(data)
        displaySpotlightMembers(data.members);
    } catch (error) {
        console.error('Error fetching JSON file:', error);
    }
}

function getSpotlightMembers(members) {
    return members.filter(member => member.membership_level === "Silver" || member.membership_level === "Gold")
}

function getRandomSpotlightMembers(members) {
    const SpotlightMembers = getSpotlightMembers(members);
    const shuffled = SpotlightMembers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

function displaySpotlightMembers(members) {
    const selectedMembers = getRandomSpotlightMembers(members);
    spotlightContainer.innerHTML = '';
    selectedMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('spotlight-member');

        memberDiv.innerHTML = `
                    <div class="member-image">
                        <img src="images/${member.image}" alt="${member.name}">
                    </div>
                    <div class="member-info">
                        <h3>${member.name}</h3>
                        <p><strong>Address:</strong> ${member.address}</p>
                        <p><strong>Phone:</strong> ${member.phone}</p>
                        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                        <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                       
                    </div>`;
        spotlightContainer.appendChild(memberDiv);


    });
}

window.onload = fetchMembers;