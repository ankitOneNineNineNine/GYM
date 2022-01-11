import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import 'tachyons';
import './App.css';
import AppRouting from './app.routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/setup';
import { useDispatch } from 'react-redux';
import { setUser } from './state/actions';

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        dispatch(
          setUser({
            accessToken: data.accessToken,
            email: data.email,
            uid: data.uid,
            displayName: data.displayName,
            reFresh: true
          }))
      }
    })
  }, [])


  return (
    <>
  
      <AppRouting />
    
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
