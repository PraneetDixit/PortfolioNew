function setNav(){
    if(window.pageYOffset > 70){
        document.getElementById("navHeader").classList.add("scrolled");
    }else{
        document.getElementById("navHeader").classList.remove("scrolled");
    }
}
document.body.onscroll = setNav;
document.body.onload = setNav;

document.addEventListener('aos:in:startAnim', ({ detail }) => {
    console.log("In and once");
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
