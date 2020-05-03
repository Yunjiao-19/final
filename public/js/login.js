var firebaseConfig = {
    apiKey: "AIzaSyAWYaSLNCrnrxq3vBlnb52J5f--EQCnhMs",
    authDomain: "mycloth-3e935.firebaseapp.com",
    databaseURL: "https://mycloth-3e935.firebaseio.com",
    projectId: "mycloth-3e935",
    storageBucket: "gs://mycloth-3e935.appspot.com",
    messagingSenderId: "740124190386",
    appId: "1:319290816914:web:cdf8e2ca35bcf9d17ca94b",
    measurementId: "G-8VQN905DK9"
  };


firebase.initializeApp(firebaseConfig);

var loginForm = document.getElementById("loginForm");

function loginUser(evt) {
    evt.preventDefault();

    let formData = new FormData(loginForm);
    user = {};
    for (var pair of formData.entries()) {
        user[pair[0]] = pair[1];
    }

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(function (result) {
            window.location.assign("main.html");
        })
        .catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });

}

loginForm.addEventListener("submit", loginUser);