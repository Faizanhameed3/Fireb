import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";



// Rigerter

const rigisterEmail = document.getElementById('Remail')
const rigisterPasworf = document.getElementById('Rpassword')

//Login
const loginEmail = document.getElementById('Lemail')
const loginPasword = document.getElementById('Lpassword')

//Button
const rigisterBtn = document.getElementById('Rbutton')
const loginBtn = document.getElementById('Lbutton')


rigisterBtn.addEventListener("click", () => {
    createUserWithEmailAndPassword(auth, rigisterEmail?.value, rigisterPasworf?.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });



})


loginBtn.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, loginEmail?.value, loginPasword?.value)
    .then((userCredential) => {
 // Signed in 
         const user = userCredential.user;
// ...
   })
         .catch((error) => {
    const errorCode = error.code;
        const errorMessage = error.message;
           });


       })