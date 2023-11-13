// script.js

document.addEventListener('DOMContentLoaded', function () {

  var birthdayInput = document.getElementById("birthday");
  var hbdLink = document.getElementById("hbd");
  hbdLink.addEventListener("click", function(event) {
    event.preventDefault();
    var selectedDate = birthdayInput.value;
    console.log(birthdayInput.value);
    var dateObject = new Date(selectedDate);
    var year = dateObject.getFullYear();
    var month = dateObject.getMonth() + 1; 
    var day = dateObject.getDate();
    hbdLink.href = "index.html?birthYear=" + year + "&birthMonth=" + month + "&birthDate=" + day;
    console.log(hbdLink.href);
    window.location.href = hbdLink.href;
  });

  const animatedValueElement = document.getElementById('animatedValue');

  let birthYear = 1000;
  let birthMonth = 1;
  let birthDate = 1 ;

  function updateValue(year, month, date) {

 
    if (year == 1000) {
      var ageHeader = document.getElementById("ageHeader");
      ageHeader.textContent = "This Year";
      var pageTitle = document.getElementById("pageTitle");
      pageTitle.textContent = "This Year";
    }

    const birthday = `${year}-${month}-${date}`;
    const yearValue = 1000 * 60 * 60 * 24 * 365.25;
          const bd = new Date(birthday);
          let byears = (bd.getTime() / yearValue);
          const d = new Date();
          let years = (d.getTime() / yearValue);
          let age = years - byears;
          console.log(age.toFixed(9));
          if (year == 1000) {
            age += 1000;
          };
    anime({
      targets: animatedValueElement,
      textContent: age,
      round: 100000000,
      easing: 'linear',
      duration: 1000,
    });
  }

  function getValuesFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const year = parseInt(urlParams.get('birthYear')) || birthYear;
    const month = parseInt(urlParams.get('birthMonth')) || birthMonth;
    const date = parseInt(urlParams.get('birthDate')) || birthDate;

    return { year, month, date };
  }

  function updateFromUrl() {
    const { year, month, date } = getValuesFromUrl();
    updateValue(year, month, date);
  }

  setInterval(updateFromUrl, 1000);

  updateFromUrl();
});

$(document).ready(function() {
  $("form").fadeIn();
  console.log($("h2").text());
  if ($("h2").text() == "Your Age is") {
    $("form").hide();
  }

  setTimeout(function() {
    $("form").fadeOut();
  }, 30000);
});