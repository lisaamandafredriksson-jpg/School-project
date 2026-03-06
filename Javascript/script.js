// Väntar på att hela HTML-dokumentet har laddats innan skriptet körs
document.addEventListener("DOMContentLoaded", function() {
    
// --- Validering av kontaktformulär ---
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

    // Kontrollerar att formuläret finns på sidan
    if (form) {

        // Lyssnar efter när användaren skickar formuläret
        form.addEventListener("submit", function(e) {
            // Hämtar texten från textrutan
            const message = form.querySelector("textarea").value;
            
            // kontolerar texstens längd 
            if (message.length < 10) {

                // Visar ett felmeddelande
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

    // Hämtar chat-fönstret
    const chatWindow = document.getElementById("chat-window");

// Öppna och stäng rutan
    function toggleChat() {

        // Lägger till eller tar bort klassen "hidden"
        chatWindow.classList.toggle("hidden");
    }

// Öppna/stäng via "bubble" knappen
    if (chatButton) {

        // När man klickar öppnas/stängs chatten
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

// Hämtar inputfältet där användaren skriver
const userInput = document.getElementById("user-input");

// Hämtar området där meddelanden visas
const chatMessages = document.getElementById("chat-messages");

// Kopplar skicka-funktionen till knappen
if (sendBtn) {
    sendBtn.addEventListener("click", sendMessage);
}


// Funktion som skickar ett meddelande i chatten
function sendMessage() {

 // Hämtar texten och tar bort extra mellanslag i början/slutet
    const message = userInput.value.trim();

// Avbryt om fältet är tomt
    if (message === "") return;

// Skapa och lägg till användarens meddelande i chatten
    const userMsg = document.createElement("p");

    // Lägger till CSS-klassen user-msg
    userMsg.classList.add("user-msg");

    // Sätter texten till det användaren skrev
    userMsg.textContent = message;

    // Lägger till meddelandet i chatten
    chatMessages.appendChild(userMsg);

// Skapa ett automatiskt robotsvar
    const botMsg = document.createElement("p");

    // Lägger till CSS-klassen bot-msg
    botMsg.classList.add("bot-msg");

    // Texten som boten svarar med
    botMsg.textContent = "Tack för ditt meddelande! Vi återkommer snart.";
    chatMessages.appendChild(botMsg)

// rensar textrutan efter skickat meddelande
    userInput.value = "";
}

// Mobilmeny / Hamburger-meny 
const hamburger = document.getElementById("hamburger");

// Hämtar navigation-menyn
const navMenu = document.getElementById("nav-menu");

// Växlar menyn för det första hamburger-elementet
if (hamburger) {

    // När man klickar på hamburgaren
    hamburger.addEventListener("click", function () {

        // Lägger till eller tar bort klassen "active"
        // Detta visar eller gömmer mobilmenyn
        navMenu.classList.toggle("active");
    });
}

// Alternativ meny(id "mobile-menu")
const menu = document.querySelector('#mobile-menu');

// Hämtar länkarna i menyn
const menuLinks = document.querySelector('#nav-menu');

if (menu) {
    menu.addEventListener('click', function () {
        // Animerar hamburgarikonen och visar menyraden
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
}


