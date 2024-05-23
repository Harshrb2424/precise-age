// script.js
let yearp = 0;

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
    if (year && month && day) {
      hbdLink.href = "index.html?birthYear=" + year + "&birthMonth=" + month + "&birthDate=" + day;
      console.log(hbdLink.href);
      window.location.href = hbdLink.href;
    }
  });
  var celebrateButton = document.getElementById("celebrate");

  celebrateButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    window.location.href = "index.html?newYear=" + (new Date().getFullYear()+1);
  });

  const animatedValueElement = document.getElementById('animatedValue');
  newYear = new Date().getFullYear()+1;
  let birthYear = 1000;
  let birthMonth = 1;
  let birthDate = 1 ;
  function updateValue(year, month, date, newYear) {

 
    if (year == 1000) {
      var ageHeader = document.getElementById("ageHeader");
      ageHeader.textContent = "This Year";
      var pageTitle = document.getElementById("pageTitle");
      pageTitle.textContent = "This Year";
    }

    if (newYear) {
      console.log("newYear: "+newYear);
      let today = new Date();
      let pastNewYear = new Date(today.getFullYear(), 0 ,1);
      let comingNewYear = new Date((today.getFullYear() + 1), 0 ,1);
      yearp = (today.getTime() - pastNewYear.getTime()) / (comingNewYear.getTime() - pastNewYear.getTime());
      console.log((yearp*100).toFixed(6));
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
      textContent: (yearp == 0) ? age : (yearp*100).toFixed(5),
      round: (yearp == 0) ? 100000000: 1000000,
      easing: 'linear',
      duration: 1000,
      update: function(anim) {
        if (yearp != 0)
        animatedValueElement.innerHTML = (yearp*100).toFixed(5) + '%';
    }
    });
  }

  function getValuesFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const year = parseInt(urlParams.get('birthYear')) || birthYear;
    const month = parseInt(urlParams.get('birthMonth')) || birthMonth;
    const date = parseInt(urlParams.get('birthDate')) || birthDate;
    const newYear = parseInt(urlParams.get('newYear')) || 0;

 

    return { year, month, date, newYear };
  }

  function updateFromUrl() {
    const { year, month, date, newYear } = getValuesFromUrl();
    updateValue(year, month, date, newYear);
  }

  setInterval(updateFromUrl, 1000);

  updateFromUrl();
});

$(document).ready(function() {
  $("form").fadeIn();
  console.log($("h2").text());
  if ($("h2").text() == "Your Age is") {
    $("form").hide();
    $("a").fadeOut();
  }
  if (yearp != 0) $("form").fadeOut();
  if (yearp != 0) $("a").fadeOut();
});