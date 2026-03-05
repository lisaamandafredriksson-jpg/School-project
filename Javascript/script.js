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

// Chat send message
const sendBtn = document.querySelector("#chat-input-area button");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");

if (sendBtn) {
    sendBtn.addEventListener("click", sendMessage);
}

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") return;

    // User message
    const userMsg = document.createElement("p");
    userMsg.classList.add("user-msg");
    userMsg.textContent = message;
    chatMessages.appendChild(userMsg);

    // Simple bot reply
    const botMsg = document.createElement("p");
    botMsg.classList.add("bot-msg");
    botMsg.textContent = "Tack för ditt meddelande! Vi återkommer snart.";
    
    setTimeout(() => {
        chatMessages.appendChild(botMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);

    userInput.value = "";
}

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger) {
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

// Hamburger menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});