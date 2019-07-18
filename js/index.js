let products = [{
        "name": "Ceramic Set",
        "price": 400,
        "img": './images/bottle.jpg',
        "details": "This set consist of 2 bottles, 4 bowls, 2 wide bowls. Each having a unique earth colour finish to them"
    },
    {
        "name": "Ceramic Cup Set",
        "price": 200,
        "img": './images/ceramic-cups.jpg',
        "details": "This set consists of 6 cups each with a unique color"
    },
    {
        "name": "Ringed Plate Set",
        "price": 320,
        "img": "./images/minimal-blue-and-white-ringed-plate-set.jpg",
        "details": "This set consists 4 different sizes of this beautifully designed ringed plates ceramic plates"
    },
    {
        "name": "Mini Tri Pot",
        "price": 200,
        "img": "./images/pot.jpg",
        "details": "Get this stylish mini pot plant with a unique design take on it"
    },
    {
        "name": "Rustic Cereal Bowls",
        "price": 480,
        "img": "./images/rustic-cereal-bowl.jpg",
        "details": "This rustic design on these clayed cereal bowls are truly eye-catching. Comes 4 in a set"
    },
    {
        "name": "Speckled Diamonds",
        "price": 700,
        "img": "./images/speckled-diamonds.jpg",
        "details": "4 Cups in a set with this unique design"
    },
    {
        "name": "Clay Light Covers",
        "price": 850,
        "img": "./images/clay-light-covers.jpg",
        "details": "Get these clay light covers in this earthly color"
    },
    {
        "name": "Flower Clay Pots",
        "price": 220,
        "img": "./images/clay-pots.jpg",
        "details": "Get a variety of flower pots ranging from 220 up!"
    },
    {
        "name": "Soup Bowls",
        "price": 260,
        "img": "./images/bowls.jpg",
        "details": "Get a set of these bowls which consists of 4 beautifully designed bowls."
    }
]

// Creating a view for items in array
for (var i = 0; i < products.length; i++) {
    var items = document.querySelector('.primary-items');

    // Homepage View
    var item = document.createElement('div');
    item.classList.add('item');


    var itemName = products[i].name;;
    var itemDesc = products[i].details;
    var itemPrice = products[i].price;
    var itemImg = products[i].img;

    // Removed description for now (too much content)
    item.innerHTML +=
        `
    <img src="${itemImg}" alt="" class="item-img" id="item-img">
    <div class="overlay">
        <article class="text">
            <h3 class="item-title" id="item-title">${itemName}</h3>
            <p class="item-details" id="item-details">${itemDesc}</p>
            <p class="item-price">R${itemPrice}</span></p>
            
            <button class="view">
                <a href="./shop.html#${itemName}" class="jump-link">View in shop</a>
            </button>
        </article>
    </div>
`;

    items.appendChild(item);
}

// Scroll down on click
let btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    var element = document.querySelector('#scroll');

    element.scrollIntoView(50);
});

// Testimonials view
let testimonials = [{
        "name": "- Scarlette Johansson",
        "details": "Most far the best online shopping experience I have had"
    },
    {
        "name": "- Robert Downey JR",
        "details": "Everything was simple and easy to use! Very satisfied and I love my new cup set!"
    },
    {
        "name": "- George Clooney",
        "details": "I am very impressed by the shipping speed, its been only 2 days when I expected my products the following week!"
    }
]

// Creating a view for testimonials in array
for (var i = 0; i < testimonials.length; i++) {
    var items = document.querySelector('#testimonialRow');
    
    // Homepage View
    var item = document.createElement('div');
    item.classList.add('col-md-3', 'box');


    var userName = testimonials[i].name;;
    var userDesc = testimonials[i].details;

    item.innerHTML +=
        `
    <span class="quote"><i class="fas fa-quote-left"></i></span>
    <div class="content">
        <p>${userDesc}</p>
        <h4>${userName}</h4>
    </div>
    <span class="quote right"><i class="fas fa-quote-right"></i></span>
`;

    items.appendChild(item);
}