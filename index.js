


function reminder() {
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    let birthYear = 2004;
    let birthMonth = 2;
    let birthDate = 21;
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
}   

setInterval(() => {
    reminder();
}, 1000);