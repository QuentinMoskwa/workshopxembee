var headerFond = document.getElementById("headerFond");
console.log(window.scrollY);
window.onscroll = function (e) {
  if (window.scrollY == 0) {
    headerFond.classList.add("moveOut");
    headerFond.classList.remove("moveToTop");
} else {
    headerFond.classList.add("moveToTop");
    headerFond.classList.remove("moveOut");
  }
}; 
