// Give the service worker access to Firebase Messaging
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCvsPUFjs8LxCii5L6q9JzBa9kRWvTjQnM",
  authDomain: "notification-2f2f6.firebaseapp.com",
  projectId: "notification-2f2f6",
  messagingSenderId: "1039446181191",
  appId: "1:1039446181191:web:a09ad41c24c70f7f3f3862"
});

const messaging = firebase.messaging();

// Handles background notifications when the tab is closed or minimized
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});