function setNav() {
  if (window.scrollY > 70) {
    document.getElementById("navHeader").classList.add("scrolled");
    document.getElementById("toTop").classList.remove("d-none");
  } else {
    document.getElementById("navHeader").classList.remove("scrolled");
    document.getElementById("toTop").classList.add("d-none");
  }
}
document.addEventListener("aos:in:startAnim", () => {
    document.querySelectorAll(".ind div").forEach(function (elem, ind) {
      elem.style.animationName = "bg";
    });
});
document.getElementById("toTop").addEventListener("click", function () {
  window.scrollTo(0, 0);
});
function navbarlinksActive() {
  let navbarlinks = document.querySelectorAll(".nav-link");
  let position = window.scrollY + 200;
  navbarlinks.forEach(function (item) {
    let section = document.querySelector(item.hash);
    if (
      (position >= section.offsetTop) &&
      (position <= section.offsetTop + section.offsetHeight)
    ) {
      item.parentElement.classList.add("current");
    } else {
      item.parentElement.classList.remove("current");
    }
  });
}
window.onscroll = function () {
  navbarlinksActive();
  setNav();
};
document.getElementById("togNav").addEventListener("click", function () {
  document.getElementById("toExpandNav").classList.toggle("show");
});
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function (event) {
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add("was-validated");
});
