function sendMessage() {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput === '') return;

    appendUserMessage(userInput);
    document.getElementById('userInput').value = '';

    // You can customize bot responses based on user input here
    const botResponse = getBotResponse(userInput);
    appendBotMessage(botResponse);
}

function appendUserMessage(message) {
    const chatLog = document.getElementById('chatLog');
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = message;
    chatLog.appendChild(userMessage);
}

function appendBotMessage(message) {
    const chatLog = document.getElementById('chatLog');
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.textContent = message;
    chatLog.appendChild(botMessage);
}

function getBotResponse(userInput) {
    // Replace this with your custom logic to generate bot responses
    const botResponses = {
        'hello': 'Hi there!',
        'how are you': 'I am just a simple bot, but thanks for asking!',
        'goodbye': 'Goodbye! Have a great day!',
        'default': "I'm sorry, I didn't quite get that. Can you please repeat?",
    };

    const normalizedInput = userInput.toLowerCase();
    return botResponses[normalizedInput] || botResponses['default'];
}

document.getElementById('userInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
