function loginWithEmail() {
   var email = $("#user-email").val();
   var password = $("#user-pw").val();

   if (email === "" || password === "") {
      alert("Required field(s) appear to be null!");
   } else if (email.indexOf("@") === -1) {
      alert("Illegal email address!");
   } else {
      console.log(email);
      console.log(password);
   }
}
