var firebaseConfig = {
    apiKey: "AIzaSyAWYaSLNCrnrxq3vBlnb52J5f--EQCnhMs",
    authDomain: "mycloth-3e935.firebaseapp.com",
    databaseURL: "https://mycloth-3e935.firebaseio.com",
    projectId: "mycloth-3e935",
    storageBucket: "gs://mycloth-3e935.appspot.com",
    messagingSenderId: "740124190386",
    appId: "1:740124190386:web:2405454f0ad07e2543cbab",
    measurementId: "G-8VQN905DK9"
  };
  var registerForm = document.getElementById("registerForm");
  function registerUser(evt) {
    evt.preventDefault();

    let formData = new FormData(registerForm);
    user = {};
    for (var pair of formData.entries()) {
        user[pair[0]] = pair[1];
    }

    if (user.password !== user.passwordConfirm) {
        alert("Passwords do not Match");
    } else {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(function(result) {
                console.log(result);
                window.location.assign("main.html");
            })
            .catch(function(error) {
                var errorMessage = error.message;
                alert(errorMessage);
            })
    }
}

registerForm.addEventListener("submit", registerUser);