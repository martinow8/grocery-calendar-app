importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDTOMSxOalImT4osNh5qdBH9tNBYGZYzY",
  authDomain: "grocery-calendar-app.firebaseapp.com",
  projectId: "grocery-calendar-app",
  storageBucket: "grocery-calendar-app.firebasestorage.app",
  messagingSenderId: "878403563311",
  appId: "1:878403563311:web:7f11d993506c81cb7b7bda"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
