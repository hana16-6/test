//check if there is loocal storage color option
let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {
  //console.log(mainColors);
  document.documentElement.style.setProperty("--main-color", mainColors);

  //remove active class from all colors list
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");
    //add active class on element with data-color === local storage item
    if (element.dataset.color === mainColors) {
      //add active class
      element.classList.add("active");
    }
  });
}

//toggle spin class on icon
document.querySelector(".toggle-icon .fa-cog").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("open");
};

//switch colors
const colorsList = document.querySelectorAll(".colors-list li");
colorsList.forEach((li) => {
  li.addEventListener("click", (e) => {
    //set color on root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    //set color on local storage
    localStorage.setItem("color-option", e.target.dataset.color);

    //remove active class from all children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    //add active class
    e.target.classList.add("active");
  });
});

//select landing page element

let landingPage = document.querySelector(".landing-page");

let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

setInterval(() => {
  //get random number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  //change background image url
  landingPage.style.backgroundImage =
    'url("img/' + imgsArray[randomNumber] + '")';
}, 5000);
