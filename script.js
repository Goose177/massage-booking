// Message sending function
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the page from reloading
    const messageInput = document.getElementById('messageInput');
    const messageList = document.getElementById('messageList');

    // Create a new list item and add it to the list
    const li = document.createElement('li');
    li.textContent = messageInput.value;
    messageList.appendChild(li);

    // Clear the input field
    messageInput.value = '';
});
