function setNav(){
    if(window.pageYOffset > 70){
        document.getElementById("navHeader").classList.add("scrolled");
        document.getElementById("toTop").classList.remove("d-none");
    }else{
        document.getElementById("navHeader").classList.remove("scrolled");
        document.getElementById("toTop").classList.add("d-none");
    }
}
document.addEventListener('aos:in:startAnim', ({ detail }) => {
    setTimeout(function(){
        document.querySelectorAll(".ind div").forEach(function (item, ind) {
            item.style.animationDelay = `${ind*500}ms`;
            item.style.animationName = "bg";
            item.style.animationDuration = "2s";
            item.style.animationIterationCount = "1";
            item.style.animationFillMode = "forwards";
        });
    }, 1000);
});

document.getElementById("toTop").addEventListener("click", function (){
    window.scrollTo(0, 0);
});

let navbarlinks = document.querySelectorAll(".nav-link");

function navbarlinksActive(){
    let position = window.scrollY + 200;
    navbarlinks.forEach(navbarlink => {
        let section = document.querySelector(navbarlink.hash);
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.parentElement.classList.add('current');
        } else {
            navbarlink.parentElement.classList.remove('current');
        }
    });
}
window.addEventListener('load', navbarlinksActive);
window.addEventListener("scroll", function (){
    navbarlinksActive();
    setNav();
});
