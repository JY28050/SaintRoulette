//menubars
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".links");

menu.addEventListener("click", () => {
  const screenWidth = window.innerWidth;
  const threshold = 650;

  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");

  if (screenWidth >= threshold && menu.classList.contains("fa-times")) {
    menu.classList.remove("fa-times");
  }
});
