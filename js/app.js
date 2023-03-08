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

// UnSplash API keys
const access_key = "s_HHGrKfzFsV6A9Xu3kXlnJeaFOzy0p5n4GRc4poxK8";
const secret_key = "Ii6FESYKTEmvlFZOTPx0S_KYye7-pJDbORBR4vHtBC0";

// UnSplash image access
const mercedes_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&query=mercedes&orientation=portrait&count=12`;


const gallery = document.querySelector(".gallery");

let currentImage = 0;
let allImages; // this will store all the images

const getImages = () => {
  fetch(mercedes_url)
    .then((res) => res.json())
    .then((data) => {
      allImages = data;
      makeImages(allImages);
    });
};

const makeImages = (data) => {
  data.forEach((item, index) => {
    let img = document.createElement("img");
    img.src = item.urls.small;
    img.className = "gallery-img"; // this class should be in the HTML document

    gallery.appendChild(img);

    // popup image

    img.addEventListener("click", () => {
      currentImage = index;
      showPopup(item);
    });
  });
};

const showPopup = (item) => {
  let popup = document.querySelector(".img-popup");
  const downloadBtn = document.querySelector(".download-btn");
  const closeBtn = document.querySelector(".close-btn");
  const image = document.querySelector(".large-img");

  popup.classList.remove("hide");
  downloadBtn.href = item.links.html;
  image.src = item.urls.regular;

  closeBtn.addEventListener("click", () => {
    popup.classList.add("hide");
  });
};

getImages();

// controls

const preBtn = document.querySelector(".pre-btn");
const nxtBtn = document.querySelector(".nxt-btn");

preBtn.addEventListener("click", () => {
  if (currentImage > 0) {
    currentImage--;
    showPopup(allImages[currentImage]);
  }
});

nxtBtn.addEventListener("click", () => {
  if (currentImage < allImages.length - 1) {
    currentImage++;
    showPopup(allImages[currentImage]);
  }
});

const nxtImg = document.querySelector(".next-images");

nxtImg.addEventListener("click", () => {

  return getImages();
  // window.location.reload();
});