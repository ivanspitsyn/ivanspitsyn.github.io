//burger-menu header
const burger = document.querySelector(".hamburger");
const navigation = document.querySelector(".menu");
const plank1 = document.querySelector(".hamburger__plank1");
const plank2 = document.querySelector(".hamburger__plank2");
const plank3 = document.querySelector(".hamburger__plank3");
const link = document.getElementsByClassName("menu__link");

function triggerMobileMenu() {
   // burger.classList.toggle("burger--active");
   navigation.classList.toggle("menu--active");
   plank1.classList.toggle("plank--active1");
   plank2.classList.toggle("plank--none");
   plank3.classList.toggle("plank--active2");
   //    document.body.classList.toggle("hidden");
   // 
}

burger.addEventListener("click", function () {
   triggerMobileMenu();
}

);

// for (let i = 0; i < link.length; i++) {
//    link[i].addEventListener("click", function (e) {
//       burger.classList.remove("burger--active");
//       navigation.classList.remove("header__sidebar--active");
//       document.body.classList.remove("hidden");
//    });
// }