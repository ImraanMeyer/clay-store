// Sticky Nav
let nav = document.querySelector('.navbar')
let shopNav = document.querySelector('.secondary')
var sticky = nav.offsetTop;  


window.onload = () => navSlide();
// Calling function need scroll event listening
window.onscroll = () => {
    navShift();
    cartDrop();
}

// Makes navbar sticky once user scrolls down
navShift = () => {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
        shopNav.style.borderBottom = 'none';

    } else {
        nav.classList.remove("sticky");
        shopNav.style.borderBottom = '2px solid #465362';
    }
}

// Drops cart position if user scrolls down
cartDrop = () => {
    if (window.pageYOffset > sticky) {
        cartUI.style.top = '10vh';
    } else {
        cartUI.style.top = '0';
    }
}

//Click Logo To Scroll To Top
$('.logo').click(() => {
    $('html,body').animate({
        scrollTop: 0
    }, 50);
});

var cartUI = document.getElementById('cart');

openCart = () => $(cartUI).addClass('cart-active');
closeCart = () => $(cartUI).removeClass('cart-active');

// Function that checks wether delivery is checked.
var deliveryBtn = document.querySelector('#delivery');
var collectionBtn = document.querySelector('#collection');

var box = $('.select-box').hide();

// If it is checked, slide down hidden div of methods 
$(document).ready(function () {
    $(deliveryBtn).change(function () {
        box.slideDown(100);

        $(collectionBtn).click(() => {
            box.slideUp(100);
        })
        return false
    })
})


var navSlide = () => {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.links');
    var navLinks = document.querySelectorAll('.links li');

    burger.addEventListener('click', () => {
        // Toggle Navbar
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navlinkFade 0.2s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// navSlide();