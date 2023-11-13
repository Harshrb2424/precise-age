// script.js
document.addEventListener('DOMContentLoaded', function () {
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
          // Divide Time with a year
          const bd = new Date(birthday);
          let byears = (bd.getTime() / yearValue);
          // console.log(byears);
          const d = new Date();
          let years = (d.getTime() / yearValue);
          // console.log(years);
          let age = years - byears;
          console.log(age.toFixed(9));
          if (year == 1000) {
            age += 1000;
          };
    anime({
      targets: animatedValueElement,
      textContent: age,
      round: 1000000000,
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

  updateFromUrl(); // Initial update
});


//* file:///E:/Harsh%20%7BLaptop%7D/Backup%2004%202023/Skills/Code/Exercise/2022-23/Web%20Dev%20V2/Projects/decimal-age/index.html?birthYear=2004&birthMonth=11&birthDate=5
//* file:///E:/Harsh%20%7BLaptop%7D/Backup%2004%202023/Skills/Code/Exercise/2022-23/Web%20Dev%20V2/Projects/decimal-age/index.html
