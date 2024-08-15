document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the page from reloading
    const messageInput = document.getElementById('messageInput');
    const messageList = document.getElementById('messageList');

    // Check if the message input is not empty
    if (messageInput.value.trim() !== '') {
        // Create a new list item and add it to the list
        const li = document.createElement('li');
        li.textContent = messageInput.value;
        messageList.appendChild(li);

        // Clear the input field and focus it for the next message
        messageInput.value = '';
        messageInput.focus();
        
        // Scroll to the bottom of the chat box
        document.getElementById('chatBox').scrollTop = document.getElementById('chatBox').scrollHeight;
    }
});
