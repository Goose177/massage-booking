function sendMessage(message) {
    db.collection('messages').add({
        text: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        sender: auth.currentUser.uid
    })
    .then(() => {
        console.log("Message sent successfully!");
    })
    .catch(error => {
        console.error("Error sending message: ", error);
        alert("Failed to send message. Please try again later.");
    });
}
