// Run when page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // FAQ toggle
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });

    // Chat send button
    const sendBtn = document.querySelector("#chat-input-area button");
    const userInput = document.getElementById("user-input");
    const chatMessages = document.getElementById("chat-messages");

    if (sendBtn) {
        sendBtn.addEventListener("click", function () {
            const message = userInput.value.trim();

            if (message === "") return;

            // Add user message
            const userMsg = document.createElement("div");
            userMsg.classList.add("user-msg");
            userMsg.textContent = message;
            chatMessages.appendChild(userMsg);

            // Fake AI response
            const botMsg = document.createElement("div");
            botMsg.classList.add("bot-msg");

            if (message.toLowerCase().includes("price")) {
                botMsg.textContent = "Our pricing depends on the service you choose.";
            } else if (message.toLowerCase().includes("location")) {
                botMsg.textContent = "We are based in Sweden.";
            } else {
                botMsg.textContent = "Thank you for your message! We will get back to you.";
            }

            chatMessages.appendChild(botMsg);

            userInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        });
    }

});

// Chat toggle (must be outside DOMContentLoaded)
function toggleChat() {
    const chatWindow = document.getElementById("chat-window");
    chatWindow.classList.toggle("hidden");
}