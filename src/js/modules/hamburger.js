const header = document.querySelector(".header");
const navigation = document.querySelector(".nav");
const navigationList = navigation.querySelector(".nav__list");
const buttonBurger = document.querySelector(".hamburger");
const hamburger = buttonBurger.querySelector(".hamburger-contain");


// navigationList.classList.add("nav__list--visibility"); //

const toggleBurger = () => {
  buttonBurger.onclick = () => {
    hamburger.classList.toggle("open");

    header.classList.toggle("header__wrapper--open-menu");

    if (hamburger.classList.contains("open")) {
      document.body.style.overflow = "hidden";
      navigationList.style.visibility = "visible";
      navigationList.classList.add("nav__list--visibility");
    } else {
      document.body.style.overflow = "";
      navigationList.classList.remove("nav__list--visibility");
      navigationList.style.visibility = "hidden";
    }
  };
};

export default toggleBurger;
