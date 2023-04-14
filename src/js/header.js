var headerFond = document.getElementById("headerFond");
window.onscroll = function (e) {
  if (window.scrollY == 0) {
    headerFond.classList.add("moveOut");
    headerFond.classList.remove("moveToTop");
} else {
    headerFond.classList.add("moveToTop");
    headerFond.classList.remove("moveOut");
  }
}; 

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

