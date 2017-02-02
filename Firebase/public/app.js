 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyAUe9R-D6cWRmeJcLeVLG6GvBZlE1EEGMc",
     authDomain: "fusion-48192.firebaseapp.com",
     databaseURL: "https://fusion-48192.firebaseio.com",
     storageBucket: "fusion-48192.appspot.com",
     messagingSenderId: "165776347829"
 };
 firebase.initializeApp(config);

 const txtEmail = document.getElementById('txtEmail');
 const txtPassword = document.getElementById('txtPassword');
 const btnLogin = document.getElementById('btnLogin');
 const btnSignup = document.getElementById('btnSignup');
 const btnLogout = document.getElementById('btnLogout');

 //login event
 btnLogin.addEventListener('click', function(event) {
     //get email and pass
     const user = txtEmail.value;
     const pass = txtPassword.value;
     const auth = firebase.auth();
     const promise = auth.signInWithEmailAndPassword(user, pass);
     promise.catch(e => console.log(e.message));

 });

 btnLogout.addEventListener('click', e => {
     firebase.auth().signOut();
 });

 //signup event
 btnSignup.addEventListener('click', function(event) {
     //get email and pass
     const user = txtEmail.value;
     const pass = txtPassword.value;
     const auth = firebase.auth();
     const promise = auth.createUserWithEmailAndPassword(user, pass);
     promise.catch(e => console.log(e.message));

 });

 //add realtime listener
 firebase.auth().onAuthStateChanged(firbaseUser => {
     if (firbaseUser) {
         console.log('firbase user!', firbaseUser);
         btnLogout.classList.remove('hide');
     } else {
         console.log('not logged in');
         btnLogout.classList.add('hide');
     }
 });
