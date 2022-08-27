

var fullname = document.getElementById("fullname");
    var email = document.getElementById("signup_email");
    var password = document.getElementById("signup_password");
     var confirmp = document.getElementById("signup_password2");


   form.addEventListener("submit", () => {
    event.preventDefault();

     if (fullname.value == "") {
        document.getElementById("fullname_msg").innerHTML =
          "The name field is required.";
      }
     
     
        if (email.value == "") {
        document.getElementById("email_msg").innerHTML =
          "The email field is required.";
      }

      if (
        /^[A-ZA-z0-9._-]+@(hotmail|gmail|yahoo).com$/.test(email.value) ==
        false &&
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

       if (confirmp.value !== password.value) {
          document.getElementById("password_msg").innerHTML =
            "Passwords does not match.";
       }

     







      if (fullname !== "" && email.value !== "" && password.value !== "") {
        var data = window.localStorage.getItem("data");

        if (data) {
          //  i used Josn.parse to convet string to array to make push with new data from new user

          data = JSON.parse(data);

          //  i used array for not overwrriting old data

          data.push([fullname.value ,email.value, password.value]);
        } else {
          var data = [];
          data.push([fullname.value , email.value, password.value]);
        }

        //  i use JSON.stringify to convert array to string
        window.localStorage.setItem("data", JSON.stringify(data));
                           window.open("login.html") ;

      }
  

    })
