// team view
let team = [{
        "name": "Tim Evans",
        "details": "Creative Director",
        "img": "./images/portrait_1.jpg"
    },
    {
        "name": "Sara Palmer",
        "details": "Photographer",
        "img": "./images/portrait_2.jpg"
    },
    {
        "name": "Seth Mikaleson",
        "details": "Craft Artist",
        "img": "./images/portrait_3.jpg"
    },
    {
        "name": "Time Savage",
        "details": "Art Designer",
        "img": "./images/portrait_4.jpg"
    }
]

// Creating a view for team in array
for (var i = 0; i < team.length; i++) {
    var items = document.querySelector('.team-flex');

    // About page view
    var item = document.createElement('div');
    item.classList.add('team-figure');

    var teamName = team[i].name;
    var teamDesc = team[i].details;
    var teamImg  = team[i].img;

    item.innerHTML +=
        `
        <div class="team-img" id="container-img">
            <img src="${teamImg}" alt="${teamDesc}-${teamName}">
        </div>

        <article class="team-text">
            <h4>${teamName}</h4>
            <p>${teamDesc}</p>
            <section class="team-links">
                <i class="fab fa-dribbble"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-behance"></i>
            </section>
        </article>
    `;
    items.appendChild(item);
}