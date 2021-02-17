document.body.onscroll = function () {
    if(window.pageYOffset > 70){
        document.getElementById("navHeader").classList.add("scrolled");
    }else{
        document.getElementById("navHeader").classList.remove("scrolled");
    }
}
