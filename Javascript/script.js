// Väntar på att hela HTML-dokumentet har laddats innan skriptet körs
document.addEventListener("DOMContentLoaded", function() {
    
// --- Validering av kontaktformulär ---
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", function(e) {
            // Hämtar texten från textrutan
            const message = form.querySelector("textarea").value;
            
            // kontolerar texstens längd 
            if (message.length < 10) {
                alert("Message must be at least 10 characters long.");
                e.preventDefault(); // Stoppar formuläret från att skickas
            } else {
                // meddelande vid lyckad 
                successMessage.style.display = "block";
            }
        });
    }


    // --- FAQ (Vanliga frågor) Toggle ---


// Hämtar alla FAQ-element och lägger till en klick-händelse
    const faqItems = document.querySelectorAll(".faq-item");
        faqItems.forEach(item => {
         item.addEventListener("click", function() {
            // togglar mellan gömd/visad
            item.classList.toggle("active");
        });
    });


// --- Chat-fönster Toggle ---
    const chatButton = document.getElementById("chat-button");
    const chatWindow = document.getElementById("chat-window");

// Öppna och stäng rutan
    function toggleChat() {
        chatWindow.classList.toggle("hidden");
    }

// Öppna/stäng via "bubble" knappen
    if (chatButton) {
        chatButton.addEventListener("click", toggleChat);
    }
    
// stäng chatten via X knappen när öppen 
    const chatHeaderBtn = document.getElementById("chat-header")?.querySelector("button");
    if (chatHeaderBtn) {
        chatHeaderBtn.addEventListener("click", toggleChat);
    }
});

// --- Chat (Skicka meddelande) ---
const sendBtn = document.querySelector("#chat-input-area button");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");

// Kopplar skicka-funktionen till knappen
if (sendBtn) {
    sendBtn.addEventListener("click", sendMessage);
}

function sendMessage() {

 // Hämtar texten och tar bort extra mellanslag i början/slutet
    const message = userInput.value.trim();

// Avbryt om fältet är tomt
    if (message === "") return;

// Skapa och lägg till användarens meddelande i chatten
    const userMsg = document.createElement("p");
    userMsg.classList.add("user-msg");
    userMsg.textContent = message;
    chatMessages.appendChild(userMsg);

// Skapa ett automatiskt robotsvar
    const botMsg = document.createElement("p");
    botMsg.classList.add("bot-msg");
    botMsg.textContent = "Tack för ditt meddelande! Vi återkommer snart.";
    chatMessages.appendChild(botMsg)

// rensar textrutan efter skickat meddelande
    userInput.value = "";
}

// Mobilmeny / Hamburger-meny 
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// Växlar menyn för det första hamburger-elementet
if (hamburger) {
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

// Alternativ meny(id "mobile-menu")
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-menu');

if (menu) {
    menu.addEventListener('click', function () {
        // Animerar hamburgarikonen och visar menyraden
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
}


