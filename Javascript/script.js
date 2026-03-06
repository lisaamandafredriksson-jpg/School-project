// Väntar på att hela HTML-dokumentet har laddats innan skriptet körs
document.addEventListener("DOMContentLoaded", function() {
    
// --- Validering av kontaktformulär ---

// Hämtar formuläret med id "contactForm"
const form = document.getElementById("contactForm");

// Hämtar elementet där success-meddelandet visas
const successMessage = document.getElementById("successMessage");

    // Kontrollerar att formuläret finns på sidan
    if (form) {

        // Lyssnar efter när användaren skickar formuläret
        form.addEventListener("submit", function(e) {

            // Hämtar texten från textrutan i formuläret
            const message = form.querySelector("textarea").value;
            
            // kontolerar texstens längd 
            if (message.length < 10) {

                // Visar ett felmeddelande
                alert("Message must be at least 10 characters long.");

                // Stoppar formuläret från att skickas till servern
                e.preventDefault();

            } else {

                // meddelande vid lyckad 
                successMessage.style.display = "block";
            }
        });
    }


    // --- FAQ (Vanliga frågor) Toggle ---


// Hämtar alla FAQ-element och lägger till en klick-händelse
    const faqItems = document.querySelectorAll(".faq-item");

        // Loopar igenom alla FAQ-frågor
        faqItems.forEach(item => {

         // När man klickar på en fråga
         item.addEventListener("click", function() {

            // togglar mellan gömd/visad
            item.classList.toggle("active");
        });
    });


// --- Chat-fönster Toggle ---

    // Hämtar knappen som öppnar chatten
    const chatButton = document.getElementById("chat-button");

    // Hämtar chat-fönstret
    const chatWindow = document.getElementById("chat-window");

// Öppna och stäng rutan
    function toggleChat() {

        // Lägger till eller tar bort klassen "hidden"
        // Om klassen finns tas den bort, annars läggs den till
        chatWindow.classList.toggle("hidden");
    }

// Öppna/stäng via "bubble" knappen
    if (chatButton) {

        // När man klickar öppnas/stängs chatten
        chatButton.addEventListener("click", toggleChat);
    }
    
// stäng chatten via X knappen när öppen 

    // Hämtar knappen inne i chat-headern (X-knappen)
    const chatHeaderBtn = document.getElementById("chat-header")?.querySelector("button");

    // Kontrollerar att knappen finns
    if (chatHeaderBtn) {

        // När man klickar stängs chatten
        chatHeaderBtn.addEventListener("click", toggleChat);
    }
});

// --- Chat (Skicka meddelande) ---

// Hämtar send-knappen i chatten
const sendBtn = document.querySelector("#chat-input-area button");

// Hämtar inputfältet där användaren skriver
const userInput = document.getElementById("user-input");

// Hämtar området där meddelanden visas
const chatMessages = document.getElementById("chat-messages");

// Kopplar skicka-funktionen till knappen
if (sendBtn) {

    // När man klickar på knappen körs funktionen sendMessage
    sendBtn.addEventListener("click", sendMessage);
}


// Funktion som skickar ett meddelande i chatten
function sendMessage() {

 // Hämtar texten och tar bort extra mellanslag i början/slutet
    const message = userInput.value.trim();

// Avbryt om fältet är tomt
    if (message === "") return;

// Skapa och lägg till användarens meddelande i chatten

    // Skapar ett nytt <p>-element
    const userMsg = document.createElement("p");

    // Lägger till CSS-klassen user-msg
    userMsg.classList.add("user-msg");

    // Sätter texten till det användaren skrev
    userMsg.textContent = message;

    // Lägger till meddelandet i chatten
    chatMessages.appendChild(userMsg);

// Skapa ett automatiskt robotsvar

    // Skapar ett nytt <p>-element för botens svar
    const botMsg = document.createElement("p");

    // Lägger till CSS-klassen bot-msg
    botMsg.classList.add("bot-msg");

    // Texten som boten svarar med
    botMsg.textContent = "Tack för ditt meddelande! Vi återkommer snart.";

    // Lägger till botens meddelande i chatten
    chatMessages.appendChild(botMsg)

// rensar textrutan efter skickat meddelande

    // Tömmer inputfältet
    userInput.value = "";
}

// Mobilmeny / Hamburger-meny 

// Hämtar hamburger-knappen
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

// Hämtar elementet med id "mobile-menu"
const menu = document.querySelector('#mobile-menu');

// Hämtar länkarna i menyn
const menuLinks = document.querySelector('#nav-menu');

// Kontrollerar att mobilmenyn finns
if (menu) {

    // När man klickar på mobilmenyn
    menu.addEventListener('click', function () {

        // Animerar hamburgarikonen
        menu.classList.toggle('is-active');

        // Visar eller gömmer menyraden
        menuLinks.classList.toggle('active');
    });
}
