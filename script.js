// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to send a message
function sendMessage(message) {
    db.collection('messages').add({
        text: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
}

// Real-time listener for chat messages
db.collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
    const messageList = document.getElementById('messageList');
    messageList.innerHTML = '';
    snapshot.forEach(doc => {
        const message = doc.data().text;
        const li = document.createElement('li');
        li.textContent = message;
        messageList.appendChild(li);
    });
});

// Handle form submission
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const messageInput = document.getElementById('messageInput');
    sendMessage(messageInput.value);
    messageInput.value = '';
});
