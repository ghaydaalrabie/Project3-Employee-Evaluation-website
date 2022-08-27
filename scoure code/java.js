const employee_name = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");
const evaluationForm = document.querySelectorAll(".form-container");
const evaluationResult = document.querySelectorAll(".personality");

const name_div = document.getElementById("welcoming-name-form");
var logged_in_user = sessionStorage.getItem("logged_in");
const login_button = document.querySelector(".logOut-btn");

  var recommindations = document.getElementById("recommindations");
  var recommindations2 = document.getElementById("recommindations2");
  var recommindations3 = document.getElementById("recommindations3");
  var recommindations4 = document.getElementById("recommindations4");
  var recommindations5 = document.getElementById("recommindations5");
  var recommindations6 = document.getElementById("recommindations6");
  var recommindations7 = document.getElementById("recommindations7");
  var recommindations8 = document.getElementById("recommindations8");
  var recommindations9 = document.getElementById("recommindations9");

  var Question1 = document.querySelector(".Question1");
  var Question2 = document.querySelector(".Question2");
  var Question3 = document.querySelector(".Question3");
  var Question4 = document.querySelector(".Question4");
  var Question5 = document.querySelector(".Question5");
  var Question6 = document.querySelector(".Question6");
  var Question7 = document.querySelector(".Question7");
  var Question8 = document.querySelector(".Question8");
  var Question9 = document.querySelector(".Question9");

// to show the evaluation form.
function showEvaluationForm() {
  evaluationForm[0].style.display = "block";
}


// save evaluation form to local storage.
function submitEvaluationForm() {
  var numOfRatings = 9;
  var q1 = document.querySelector('input[name="Q1-Radio"]:checked').value;
  var q2 = document.querySelector('input[name="Q2-Radio"]:checked').value;
  var q3 = document.querySelector('input[name="Q3-Radio"]:checked').value;
  var q4 = document.querySelector('input[name="Q4-Radio"]:checked').value;
  var q5 = document.querySelector('input[name="Q5-Radio"]:checked').value;
  var q6 = document.querySelector('input[name="Q6-Radio"]:checked').value;
  var q7 = document.querySelector('input[name="Q7-Radio"]:checked').value;
  var q8 = document.querySelector('input[name="Q8-Radio"]:checked').value;
  var q9 = document.querySelector('input[name="Q9-Radio"]:checked').value;

  for (var i = 1; i < numOfRatings; i++) {
    if (eval("q" + i) == "") {
      alert("You missed Question number" + i);
    }
  }
  console.log(q1, q2, q3, q4, q5, q6, q7, q8, q9);
  let result = {
    user: employee_name.value,
    result: {
      Question1: q1,
      Question2: q2,
      Question3: q3,
      Question4: q4,
      Question5: q5,
      Question6: q6,
      Question7: q7,
      Question8: q8,
      Question9: q9,
    },
  };
  localStorage.setItem("User-Result", JSON.stringify(result));
  window.open("formresult.html");
}

// -------------------------------------show the evaluation results----------------------------
var recommindations = document.getElementById("recommindations");
function showEvaluationResult() {
  // hide form result at beginning.
  evaluationResult[0].style.display = "none";
  var user_result = localStorage.getItem("User-Result");
  user_result = JSON.parse(user_result);
  if (employee_name.value == user_result.user) {
    var poor_count = 0;
    Object.entries(user_result.result).forEach((answer) => {
      var question = answer[0];
      var answer = answer[1];
      const question_li = document.getElementsByClassName(question)[0];
      var bar = question_li.children[1];
      if (answer == "poor") {
        poor_count++;
        var colored_bar = bar.children;
        colored_bar[0].style.background =
          "linear-gradient(#AA0000,#e66465, #AA0000)";
        colored_bar[0].style.width = "20%";
      }
      if (answer == "good") {
        var colored_bar = bar.children;
        colored_bar[0].style.background =
          "linear-gradient( #FCF5AE,#D6BC18, #FCF5AE)";
        colored_bar[0].style.width = "60%";
      }

      if (answer == "excellent") {
        var colored_bar = bar.children;
        colored_bar[0].style.background =
          "linear-gradient( #AA0000,#e66465, #AA0000)";
      }

      if (question_li == Question1 && answer == "poor") {
        recommindations.textContent =
          "we recommend  attending a tutoring  session about setting goals";
      }
      if (question_li == Question2 && answer == "poor") {
        recommindations2.textContent =
          "we recommend giving more breaks during office hours to get more involved with co-workers";
      }
      if (question_li == Question3 && answer == "poor") {
        recommindations3.textContent =
          "we recommend having a sit with the HR agent to set guidelines about work ethics with colleagues";
      }
      if (question_li == Question4 && answer == "poor") {
        recommindations4.textContent =
          "we recommend  asserting the deadlines in the projects and setting consequences if the work is not finished on time";
      }
      if (question_li == Question5 && answer == "poor") {
        recommindations5.textContent =
          " we recommend  the manager giving a PEP talk to employees about teamwork and the importance of having team spirit";
      }
      if (question_li == Question6 && answer == "poor") {
        recommindations6.textContent =
          " we recommend buying books about self improvement for the employee";
      }
      if (question_li == Question7 && answer == "poor") {
        recommindations7.textContent =
          "we recommend changing the work position for this employee from on-site to on-line";
      }
      if (question_li == Question8 && answer == "poor") {
        recommindations8.textContent =
          "we recommend giving an information chart about the benefits of multi-tasking and asserting that this skill is important";
      }
      if (question_li == Question9 && answer == "poor") {
        recommindations9.textContent =
          "we recommend to create more positive inviroment for employees";
      }
    });

    // if user has evaluation data show the evaluation result div.
    evaluationResult[0].style.display = "block";

    // if there's poor result show the recommendation box.
    if (poor_count > 0) {
      let recommendation = document.querySelectorAll(".curved-text-box");
      recommendation[0].style.display = "block";
    }
  }
}


// check if the user is logged in or not.

if (logged_in_user) {
  login_button.innerHTML = "logout";
  login_button.href = "landingpage.html";
  name_div.innerHTML = logged_in_user;
} else {
  swal({
    title: "Warning",
    text: "You are not logged in",
    buttons: {
      cancel: false,
      confirm: "Login",
    },
    confirmButtonText: "Login",
  }).then(function (isConfirm) {
    if (isConfirm) {
      window.open("login.html");
    }
  });
}

login_button.addEventListener("click", () => {
  if (logged_in_user) {
    sessionStorage.removeItem("logged_in");
  }
});


