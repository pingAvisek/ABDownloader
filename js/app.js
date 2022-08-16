const dateNow = document.getElementById("dateNow");

const date = new Date();
const year = date.getFullYear();

dateNow.innerHTML = year;
console.log(year);
