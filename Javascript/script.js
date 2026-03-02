document.addEventListener("DOMContentLoaded", function() {
    // Contact form validation
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", function(e) {
            const message = form.querySelector("textarea").value;
            if (message.length < 10) {
                alert("Message must be at least 10 characters long.");
                e.preventDefault();
            } else {
                successMessage.style.display = "block";
            }
        });
    }

    // FAQ toggle
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        item.addEventListener("click", function() {
            item.classList.toggle("active");
        });
    });

    // Chat toggle
    const chatButton = document.getElementById("chat-button");
    const chatWindow = document.getElementById("chat-window");

    function toggleChat() {
        chatWindow.classList.toggle("hidden");
    }

    if (chatButton) {
        chatButton.addEventListener("click", toggleChat);
    }
    if (document.getElementById("chat-header").querySelector("button")) {
        document.getElementById("chat-header").querySelector("button")
            .addEventListener("click", toggleChat);
    }
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger) {
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}