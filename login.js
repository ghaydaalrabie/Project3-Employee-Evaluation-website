






  var email = document.getElementById("email");
  var password = document.getElementById("password");


   form.addEventListener("submit", () => {
event.preventDefault();

 if (email.value == "") {
   document.getElementById("email_msg").innerHTML =
     "The email field is required.";
 }

 if (
   /^[A-ZA-z0-9._-]+@(hotmail|gmail|yahoo).com$/.test(email.value) == false &&
   email.value !== ""
 ) {
   document.getElementById("emailError").innerHTML =
     "The email must be a valid email address.";

   window.localStorage.setItem("email", email.value);
 }

 if (password.value == "") {
   document.getElementById("password_msg").innerHTML =
     "The password field is required.";
 }

             if (email.value !== "" && password.value !== "") {
               var data = window.localStorage.getItem("data");

               // convert data string to array

               data = JSON.parse(data);

               for (let index = 0; index < data.length; index++) {
                 if (
                   email.value == data[index][1] &&
                   password.value == data[index][2]
                 ) {
                  sessionStorage.setItem("logged_in", data[index][0]);
                   window.open("evaluationform.html");
                   window.sessionStorage.setItem("new sesion", data[index][1]);
                 }

                 if (
                   email.value != data[index][1] ||
                   password.value != data[index][2]
                 ) {
                 }
               }


             
             }

   })

   




      







