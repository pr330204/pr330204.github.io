<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat App</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f5f5f5;
    }

    #auth-container, #home-container, #chat-container {
      padding: 20px;
    }

    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    #users-list div, #followed-users div {
      background: white;
      margin: 5px 0;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }

    .chat-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #007bff;
      color: white;
      padding: 10px;
      border-radius: 5px;
    }

    #chat-messages {
      height: 300px;
      overflow-y: auto;
      background: white;
      padding: 10px;
      margin-top: 10px;
      border-radius: 5px;
    }

    .chat-input {
      display: flex;
      margin-top: 10px;
    }

    .chat-input input {
      flex: 1;
      padding: 10px;
    }

    .chat-input button {
      padding: 10px;
    }
  </style>
</head>
<body>
  <!-- 🔑 Google Login Screen -->
  <div id="auth-container">
    <h1>Chat App</h1>
    <button id="google-login-btn">Continue with Google</button>
  </div>

  <!-- 🏠 Home Page -->
  <div id="home-container" style="display:none;">
    <div class="top-bar">
      <input type="text" id="search-user" placeholder="Search users">
      <button id="logout-btn">Logout</button>
    </div>
    <h2>Followed Users</h2>
    <div id="followed-users"></div>

    <h2>All Users</h2>
    <div id="users-list"></div>
  </div>

  <!-- 💬 Chat Page -->
  <div id="chat-container" style="display:none;">
    <div class="chat-header">
      <button id="back-btn">⬅</button>
      <span id="chat-username"></span>
      <span id="chat-status"></span>
    </div>
    <div id="chat-messages"></div>
    <div class="chat-input">
      <input type="text" id="message-input" placeholder="Type a message...">
      <button id="send-btn">Send</button>
    </div>
  </div>

  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
    import { 
      getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged 
    } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
    import { 
      getFirestore, doc, setDoc, getDocs, collection, query, onSnapshot, addDoc, serverTimestamp, orderBy 
    } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

    // 🔧 Your Firebase Config
    const firebaseConfig = {
      apiKey: "AIzaSyAxPxaVFHXDPAUgklyaoYg_6WqLwsYoIwU",
      authDomain: "chat-f60ad.firebaseapp.com",
      projectId: "chat-f60ad",
      storageBucket: "chat-f60ad.firebasestorage.app",
      messagingSenderId: "877501372337",
      appId: "1:877501372337:web:ded35349e93d86f2b50f90",
      measurementId: "G-B4FPT3Z9JZ"
    };

    // 🔧 Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const db = getFirestore(app);

    // 🔑 Elements
    const authContainer = document.getElementById("auth-container");
    const homeContainer = document.getElementById("home-container");
    const chatContainer = document.getElementById("chat-container");
    const googleLoginBtn = document.getElementById("google-login-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const usersList = document.getElementById("users-list");
    const followedUsers = document.getElementById("followed-users");
    const chatMessages = document.getElementById("chat-messages");
    const chatUsername = document.getElementById("chat-username");
    const chatStatus = document.getElementById("chat-status");
    const messageInput = document.getElementById("message-input");
    const sendBtn = document.getElementById("send-btn");
    const backBtn = document.getElementById("back-btn");

    let currentUser = null;
    let currentChatUser = null;

    // 🔑 Google Login with Redirect
    googleLoginBtn.addEventListener("click", async () => {
      try {
        await signInWithRedirect(auth, provider);
      } catch (error) {
        alert("Login failed: " + error.message);
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat App</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f5f5f5;
    }

    #auth-container, #home-container, #chat-container {
      padding: 20px;
    }

    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    #users-list div, #followed-users div {
      background: white;
      margin: 5px 0;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }

    .chat-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #007bff;
      color: white;
      padding: 10px;
      border-radius: 5px;
    }

    #chat-messages {
      height: 300px;
      overflow-y: auto;
      background: white;
      padding: 10px;
      margin-top: 10px;
      border-radius: 5px;
    }

    .chat-input {
      display: flex;
      margin-top: 10px;
    }

    .chat-input input {
      flex: 1;
      padding: 10px;
    }

    .chat-input button {
      padding: 10px;
    }
  </style>
</head>
<body>
  <!-- 🔑 Google Login Screen -->
  <div id="auth-container">
    <h1>Chat App</h1>
    <button id="google-login-btn">Continue with Google</button>
  </div>

  <!-- 🏠 Home Page -->
  <div id="home-container" style="display:none;">
    <div class="top-bar">
      <input type="text" id="search-user" placeholder="Search users">
      <button id="logout-btn">Logout</button>
    </div>
    <h2>Followed Users</h2>
    <div id="followed-users"></div>

    <h2>All Users</h2>
    <div id="users-list"></div>
  </div>

  <!-- 💬 Chat Page -->
  <div id="chat-container" style="display:none;">
    <div class="chat-header">
      <button id="back-btn">⬅</button>
      <span id="chat-username"></span>
      <span id="chat-status"></span>
    </div>
    <div id="chat-messages"></div>
    <div class="chat-input">
      <input type="text" id="message-input" placeholder="Type a message...">
      <button id="send-btn">Send</button>
    </div>
  </div>

  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
    import { 
      getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged 
    } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
    import { 
      getFirestore, doc, setDoc, getDocs, collection, query, onSnapshot, addDoc, serverTimestamp, orderBy 
    } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

    // 🔧 Your Firebase Config
    const firebaseConfig = {
      apiKey: "AIzaSyAxPxaVFHXDPAUgklyaoYg_6WqLwsYoIwU",
      authDomain: "chat-f60ad.firebaseapp.com",
      projectId: "chat-f60ad",
      storageBucket: "chat-f60ad.firebasestorage.app",
      messagingSenderId: "877501372337",
      appId: "1:877501372337:web:ded35349e93d86f2b50f90",
      measurementId: "G-B4FPT3Z9JZ"
    };

    // 🔧 Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const db = getFirestore(app);

    // 🔑 Elements
    const authContainer = document.getElementById("auth-container");
    const homeContainer = document.getElementById("home-container");
    const chatContainer = document.getElementById("chat-container");
    const googleLoginBtn = document.getElementById("google-login-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const usersList = document.getElementById("users-list");
    const followedUsers = document.getElementById("followed-users");
    const chatMessages = document.getElementById("chat-messages");
    const chatUsername = document.getElementById("chat-username");
    const chatStatus = document.getElementById("chat-status");
    const messageInput = document.getElementById("message-input");
    const sendBtn = document.getElementById("send-btn");
    const backBtn = document.getElementById("back-btn");

    let currentUser = null;
    let currentChatUser = null;

    // 🔑 Google Login with Redirect
    googleLoginBtn.addEventListener("click", async () => {
      try {
        await signInWithRedirect(auth, provider);
      } catch (error) {
        alert("Login failed: " + error.message);
      }
    });

    // 🔄 Handle Redirect Result
    getRedirectResult(auth).then(async (result) => {
      if (result && result.user) {
        const user = result.user;
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          online: true,
          followed: false
        }, { merge: true });
      }
    }).catch(err => console.error(err));

    // 🚪 Logout
    logoutBtn.addEventListener("click", async () => {
      await signOut(auth);
    });

    // 🔄 Auth State Listener
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        currentUser = user;
        authContainer.style.display = "none";
        homeContainer.style.display = "block";
        loadUsers();
      } else {
        currentUser = null;
        authContainer.style.display = "block";
        homeContainer.style.display = "none";
        chatContainer.style.display = "none";
      }
    });

    // 👥 Load Users
    async function loadUsers() {
      const q = query(collection(db, "users"));
      const snapshot = await getDocs(q);
      usersList.innerHTML = "";
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        if (data.uid !== currentUser.uid) {
          const div = document.createElement("div");
          div.textContent = `${data.name} ${data.online ? "(Online)" : "(Offline)"}`;
          div.addEventListener("click", () => openChat(data));
          usersList.appendChild(div);
        }
      });
    }

    // 💬 Open Chat
    function openChat(user) {
      currentChatUser = user;
      homeContainer.style.display = "none";
      chatContainer.style.display = "block";
      chatUsername.textContent = user.name;
      chatStatus.textContent = user.online ? "🟢 Online" : "⚪ Offline";
      loadMessages();
    }

    // 💌 Load Messages
    function loadMessages() {
      chatMessages.innerHTML = "";
      const q = query(
        collection(db, "chats", getChatId(), "messages"),
        orderBy("timestamp")
      );
      onSnapshot(q, (snapshot) => {
        chatMessages.innerHTML = "";
        snapshot.forEach(doc => {
          const msg = doc.data();
          const div = document.createElement("div");
          div.textContent = `${msg.senderName}: ${msg.text}`;
          chatMessages.appendChild(div);
        });
      });
    }

    // 📩 Send Message
    sendBtn.addEventListener("click", async () => {
      if (!messageInput.value.trim()) return;
      await addDoc(collection(db, "chats", getChatId(), "messages"), {
        text: messageInput.value,
        senderId: currentUser.uid,
        senderName: currentUser.displayName,
        timestamp: serverTimestamp()
      });
      messageInput.value = "";
    });

    function getChatId() {
      return [currentUser.uid, currentChatUser.uid].sort().join("_");
    }

    // 🔙 Back Button
    backBtn.addEventListener("click", () => {
      chatContainer.style.display = "none";
      homeContainer.style.display = "block";
    });
  </script>
</body>
</html>
￼Enter
