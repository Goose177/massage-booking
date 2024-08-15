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
