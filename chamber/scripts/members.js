document.addEventListener('DOMContentLoaded', async function () {
    const directoryContainer = document.getElementById('directory-container');
    const listViewBtn = document.getElementById('list-view');
    const gridViewBtn = document.getElementById('grid-view');


    async function loadMembers() {
        try {
            const response = await fetch('data/members.json');
            const data = await response.json();
            const members = data.members

            members.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');

                const memberHTML = `
                    <div class="member-image">
                        <img src="images/${member.image}" alt="${member.name}">
                    </div>
                    <div class="member-info">
                        <h3>${member.name}</h3>
                        <p><strong>Address:</strong> ${member.address}</p>
                        <p><strong>Phone:</strong> ${member.phone}</p>
                        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                        <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                       
                    </div>
                `;

                memberCard.innerHTML = memberHTML;
                directoryContainer.appendChild(memberCard);
            });
        } catch (error) {
            console.error('Error loading the member data:', error);
        }
    }


    await loadMembers();

    listViewBtn.addEventListener('click', () => {
        directoryContainer.classList.remove('grid-view');
        directoryContainer.classList.add('list-view');
    });


    gridViewBtn.addEventListener('click', () => {
        directoryContainer.classList.remove('list-view');
        directoryContainer.classList.add('grid-view');
    });
});