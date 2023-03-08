// MENU BAR TOGGLE
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle('active');
}

// the function below controls the "CHANGE COLOR" button on the landing page section
let counter = 0;
const themeColors = ["#7700d8", "#b5162e", "#e2ae00", "#029c28", "#054cff"];

const images = ["blue.jpg", "purple.jpg", "red.jpg", "yellow.jpg", "green.jpg"];
const themeImage = document.querySelector(".theme-image");

function nextTheme() {
  document.getElementById("binge-btn").style.backgroundColor =
    themeColors[counter];
  document.getElementById("triangle").style.color =
    themeColors[counter];
  document.getElementById("large-triangle").style.color =
    themeColors[counter];
  document.getElementById("binge-worthy").style.color =
    themeColors[counter];
  document.getElementById("gallery-triangle").style.color =
    themeColors[counter];
  document.getElementById("bxl-instagram-alt").style.color =
    themeColors[counter];
  document.getElementById("bxl-facebook-circle").style.color =
    themeColors[counter];
  document.getElementById("bxl-twitter").style.color =
    themeColors[counter];
  document.getElementById("bxl-youtube").style.color =
    themeColors[counter];
  document.body.style.backgroundColor =
    themeColors[counter];

  counter++;

  if (counter === themeColors.length) counter = 0;
  if (counter === themeImage.length) counter = 0;
  return themeImage.setAttribute("src", "images/" + images[counter]);
}