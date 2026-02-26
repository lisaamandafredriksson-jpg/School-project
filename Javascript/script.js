document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function() {

        alert("Tack! Ditt meddelande har skickats.");

    });

});



// Navigeringsmenyn för mobilversion

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});