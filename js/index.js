$(".burger").click(function(){
    //toggle nav
    $(".nav-links").toggleClass("nav-active");

    //toggle links
    const navLinks = document.querySelectorAll(".nav-links li");
    navLinks.forEach((link,index) =>{
        if(link.style.animation){
            link.style.animation = '';
        }
        else {
            link.style.animation=`navLinkFade 0.5s ease forwards ${index / 5 + 0.1}s`
        }
    });

    //Transform Burger Menu
    $(".burger").toggleClass("toggle");
})

AOS.init();

