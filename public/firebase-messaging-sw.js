// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "", //Add your Information
  projectId: "", //Add your Information
  appId: "", //Add your Information
  messagingSenderId: "", //Add your Information
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const initMessaging = firebase.messaging();