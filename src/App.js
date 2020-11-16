import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import firebase from './firebase';
import logo from './logo.svg';

function App() {

  useEffect(() => {
    // Retrieve Firebase Messaging object.
    const messaging = firebase.messaging();

    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    messaging.getToken().then((currentToken) => {
      if (currentToken) {
        // console.log(currentToken, 'currentToken');
      } else {
        // Show permission request.
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });

    messaging.onMessage((payload) => {
      const Msg = () => (
        <div className="cloudToaster">
          <h2>{payload.notification.title}</h2>
          <p>{payload.notification.body}</p>
        </div>
      )
      toast.info(<Msg />)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000 }
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable />
    </div>
  );
}

export default App;
