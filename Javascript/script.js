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





// AI Chatbot


// Funktion för att visa/dölja chatten
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
}

// Hantera när användaren klickar på "Skicka"
document.getElementById('send-btn').addEventListener('click', function() {
    const input = document.getElementById('user-input');
    const messageText = input.value.trim();

    if (messageText !== "") {
        appendMessage(messageText, 'user-msg');
        input.value = ""; // Töm fältet
        
        // Här skulle du normalt anropa ett API (t.ex. OpenAI)
        // För tillfället simulerar vi ett svar:
        setTimeout(() => {
            appendMessage("Det här är ett autosvar! Koppla på ett API för riktig AI.", 'bot-msg');
        }, 1000);
    }
});

// Funktion för att lägga till meddelanden i listan
function appendMessage(text, className) {
    const msgDiv = document.createElement('p');
    msgDiv.textContent = text;
    msgDiv.className = className;
    document.getElementById('chat-messages').appendChild(msgDiv);
    
    // Scrolla till botten
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}