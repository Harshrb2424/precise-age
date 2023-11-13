


// function reminder() {
//     const minute = 1000 * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
//     const year = day * 365;

//     let birthYear = 2004;
//     let birthMonth = 2;
//     let birthDate = 21;
//     let birthday = `${birthYear}-${birthMonth}-${birthDate}`;

//     // Divide Time with a year
//     const bd = new Date(birthday);
//     let byears = (bd.getTime() / year);
//     // console.log(byears);
//     const d = new Date();
//     let years = (d.getTime() / year);
//     // console.log(years);
//     let age = years - byears;
//     console.log(age.toFixed(9));
// }   

// setInterval(() => {
//     reminder();
// }, 1000);


document.addEventListener('DOMContentLoaded', function () {
    // Get the element to update
    const animatedValueElement = document.getElementById('animatedValue');
  
    // Function to update the value (replace this with your logic)
    function updateValue() {
      // For demonstration purposes, a random value is generated
    //   const newValue = Math.floor(Math.random() * 100);
      const minute = 1000 * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const year = day * 365;
  
      let birthYear = 2004;
      let birthMonth = 11;
      let birthDate = 5 + 7;
      let birthday = `${birthYear}-${birthMonth}-${birthDate}`;
  
      // Divide Time with a year
      const bd = new Date(birthday);
      let byears = (bd.getTime() / year);
      // console.log(byears);
      const d = new Date();
      let years = (d.getTime() / year);
      // console.log(years);
      let age = years - byears;
      console.log(age.toFixed(9));
      // Use Anime.js to animate the value change
      anime({
        targets: animatedValueElement,
        textContent: age,
        round: 1000000000, // Round the number to avoid decimal values in the animation
        easing: 'linear',
        duration: 1000, // Animation duration in milliseconds
      });
    }
  
    // Update the value every second
    setInterval(updateValue, 1000);
  
    // Initial update
    updateValue();
  });
  