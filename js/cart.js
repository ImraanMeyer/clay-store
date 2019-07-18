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

// Empty array
let cart = [];
var display = document.querySelector('#codeDisplay');

// Shop page view
for (var i = 0; i < products.length; i++) {
    var itemName = products[i].name;;
    var itemDesc = products[i].details;
    var itemPrice = products[i].price;
    var itemImg = products[i].img;

    // Grabs row and creates a div element in DOM
    var row = document.querySelector('#shop-row');
    var col = document.createElement('div');
    col.classList.add('col-md-4');

    // The div inner html
    col.innerHTML +=
        `
    <div class="item">
        <img src="${itemImg}" alt="" class="item-img" id="item-img">
        <div class="overlay">
            <article class="text">
                <h3 class="item-title" id="${itemName}">${itemName}</h3>
                <p class="item-details" id="item-details">${itemDesc}</p>
                <p class="item-price">R${itemPrice}</span></p>
                <button class="add" onclick="openCart()" data-name="${itemName}" data-price="${itemPrice}">
                    Add
                </button>
            </article>
        </div>
    </div>
    `;

    // Joining HTML element with created element
    row.appendChild(col);
}
// ______ jquery 


// adds item to cart on click (add btn)
$(".add").click(function (event) {
    event.preventDefault();
    let name = $(this).attr("data-name");
    let price = Number($(this).attr("data-price"));
    addItem(name, price, 1);
    countCart();
    displayCart();
    return false;
})

// clears all function called
$("#clear").click(function (event) {
    clearCart();
    displayCart();
})


// cart ui
function displayCart() {
    let cartArray = listCart();
    let output = "";

    // Creates a view for each item added to cart
    for (let i in cartArray) {
        // displays and creates div /sections for the cart
        output += `
        <div class='item-container'>
            <section class='titles'>
                <div class='name'>${cartArray[i].name}</div> 
                <div class='count'>${cartArray[i].count}</div>
                <div class='price'>R${cartArray[i].price}</div>
            </section>
            <section class='qtyBtns'>
                <button class='addQty' data-name='${cartArray[i].name}'>+</button>
                <button class='subtractQty' data-name='${cartArray[i].name}'>-</button>
            </section>
            <button class='deleteBtn' data-name='${cartArray[i].name}'> Remove Item</button>
        </div>
        `;
    }

    // Prints outputs
    $(".items-listed").html(output);
    $(".total").html(totalCart());

    // Checks if 'display' is not empty. If true, alert discounted price
    if (display.innerHTML !== ' ') {
        alert(`Your discounted cart total is R${getCoupon()}`);
    } else {
        // if false, alert normal price
        alert(`Your cart total is R${totalCart()}`);
    }
}

// Calling delete item function
$(".items-listed").on("click", ".deleteBtn", function (event) {
    let name = $(this).attr("data-name");
    removeItemAll(name);
    displayCart();
});

// Calling subtract qty function
$(".items-listed").on("click", ".subtractQty", function (event) {
    let name = $(this).attr("data-name");
    removeItemQty(name);
    displayCart();
});

// Calling add qty function
$(".items-listed").on("click", ".addQty", function (event) {
    let name = $(this).attr("data-name");
    addItem(name, 0, 1)
    displayCart();
});

// item prototype
Item = function (name, price, count) {
    this.name = name
    this.price = price
    this.count = count
}

// Adds item to cart
function addItem(name, price, count) {
    for (let i in cart) {
        // if item name is same, add the quantity 
        if (cart[i].name === name) {
            cart[i].count += count;
            return;
        }
    }
    var item = new Item(name, price, count)
    cart.push(item);
}


// Removes 1 item (count / quantity) to cart
function removeItemQty(name) {
    for (let i in cart) {
        if (cart[i].name === name) {
            cart[i].count--;
            //if statement added for 0 not to negative value
            if (cart[i].count === 0) {
                cart.splice(i, 1);
            }
            break;
        }
    }
}

// Removes a item
function removeItemAll(name) {
    for (let i in cart) {
        if (cart[i].name === name) {
            cart.splice(i, 1);
            break;
        }
    }
}

// clears filled cart (replaces with empty array)
function clearCart() {
    cart = []
}

// Quantity count
function countCart() {
    let totalCount = 0;
    for (let i in cart) {
        totalCount += cart[i].count;
    }
    return totalCount;
}

// total price 
function totalCart() {
    let totalCost = 0;
    for (let i in cart) {
        totalCost += cart[i].price * cart[i].count;
    }

    // Gets coupon code
    getCoupon = () => {
        // Checks if display is not empty
        if (display.innerHTML !== ' ') {
            // Coupon is value 400 which is subtracted from the grand total
            var couponCost = totalCost - 400;

            // If the coupon value is less or = 0
            if (couponCost <= 0) {
                // Return coupon value to 0
                couponCost = 0;
                $(output).html('Your cart is empty!')
            }

            // Appends coupon cost to html
            var output = document.querySelector('.coupon');
            $(output).html(couponCost);

            return couponCost;
        }
    }
    getCoupon();

    return totalCost;
}

// creating a copy for cart so no harm done to original concept
function listCart() {
    let cartCopy = [];
    for (let i in cart) {
        let item = cart[i];
        let itemCopy = {};

        for (let p in item) {
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
};

// *** Form Section ***

// Checking the form input 
// thought -- if values are inputted through form, produce code -
var users = [];
var codes = [];


// User prototype
function User(name, email, address) {
    this.name = name;
    this.email = email;
    this.address = address;
}

registerUser = () => {
    // Creates a user from prototype
    let newUser = new User(
        document.getElementById('name').value,
        document.getElementById('email').value,
        document.getElementById('address').value
    );
    // Pushes user to users array
    users.push(newUser);
    alert(`Thank You ${document.getElementById('name').value}!`);

    // If users array is empty, generate a random coupon code (one user at the time ;) )
    if (users !== null) {
        var name = document.getElementById('name').value;
        // Removes spaces in string
        name = name.replace(/\s/g, '');
        // Generates random number between 1 and 20
        randomNum = () => Math.floor((Math.random() * 20) + 1);
        // Stores user input plus random number
        var code = name + randomNum();

        // Prints code to dom
        display.innerHTML = `Your coupon code is ${code}! You have received R400 off!`;
        display.style.display = 'block';

        return code;
    }
}