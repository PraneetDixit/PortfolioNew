function setNav(){
    if(window.pageYOffset > 70){
        $("#navHeader").addClass("scrolled");
        $("#toTop").removeClass("d-none");
    }else{
        $("#navHeader").removeClass("scrolled");
        $("#toTop").addClass("d-none");
    }
}
$(document).on('aos:in:startAnim', ({ detail }) => {
    setTimeout(function(){
        $(".ind div").each(function (ind) {
            $(this).css({
                "animation-delay": `${ind*500}ms`,
                "animation-name": "bg",
                "animation-duration": "2s",
                "animation-iteration-count": "1",
                "animation-fill-mode": "forwards"
            });
        });
    }, 1000);
});

$("#toTop").click(function (){
    window.scrollTo(0, 0);
});

let navbarlinks = $(".nav-link");

function navbarlinksActive(){
    // console.log("Here");
    let position = window.scrollY + 200;
    navbarlinks.each(function (){
        let section = $($(this).prop("hash"));
        if (position >= section.prop("offsetTop") && position <= (section.prop("offsetTop") + section.prop("offsetHeight"))) {
            $(this).parent().addClass('current');;
        } else {
            $(this).parent().removeClass('current');
        }
    });
}
$(document).ready(navbarlinksActive);
$(window).scroll(function (){
    navbarlinksActive();
    setNav();
});
