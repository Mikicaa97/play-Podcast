console.log("Pocetak");

var navSlide = () => {
    //console.log("usao");
    var burger = document.querySelector('.burger');
    var nav = document.querySelector(".nav-links");
    var navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //console.log("opet usao");
        nav.classList.toggle('nav-active');


        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forward ${index / 5}s`;
            }
        });
    });
}

navSlide();


