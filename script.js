// Firebase မှလိုအပ်တဲ့ functions တွေကို Import လုပ်ပါ
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, onValue } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASJdWV-ZjIQNnxbTXMqj4S8DBRJeN5kWM",
  authDomain: "global-chat-639c4.firebaseapp.com",
  databaseURL: "https://global-chat-639c4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "global-chat-639c4",
  storageBucket: "global-chat-639c4.appspot.com",
  messagingSenderId: "283071936271",
  appId: "1:283071936271:web:63637cb3b0d5cff50e307a"
};

// Firebase ကို Initialize လုပ်ပါ
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// မက်ဆေ့ဂျ်ပို့ခြင်း
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault(); // စာမျက်နှာပြန်မလည်အောင်လုပ်ပါ
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText) {
        // Firebase ထဲမှာ မက်ဆေ့ဂျ်ကို သိမ်းပါ
        const messagesRef = ref(database, 'messages');
        const newMessageRef = push(messagesRef);
        set(newMessageRef, {
            text: messageText,
            timestamp: Date.now()
        });

        // Input field ကိုရှင်းပါ
        messageInput.value = '';
        messageInput.focus();
    }
});

// မက်ဆေ့ဂျ် လက်ခံခြင်း
const messagesRef = ref(database, 'messages');
onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    const messageList = document.getElementById('messageList');
    messageList.innerHTML = ''; // လက်ရှိမက်ဆေ့ဂျ်တွေကို ရှင်းပါ

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const message = data[key];
            const li = document.createElement('li');
            li.textContent = message.text;
            messageList.appendChild(li);
        }
    }

    // အောက်ဆုံးကို အလိုအလျောက် ပေးသွားပါ
    document.getElementById('chatBox').scrollTop = document.getElementById('chatBox').scrollHeight;
});
