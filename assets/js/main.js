console.log("Pocetak");
var prikazMenia = false;
var navSlide = () => {
    //console.log("usao");
    prikazMenia = true;
    var burger = document.querySelector('.burger');
    var nav = document.querySelector(".nav-links");
    var navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        //console.log("opet usao");
        nav.classList.toggle('nav-active')
        

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forward ${index / 5}s`;
            }
        });
        $("#burger-meni").css("z-index", 999);
        if(prikazMenia){
        $("#burger-meni").fadeIn("flex");
            prikazMenia = false;
        }
        else{
             $("#burger-meni").fadeOut("none");
            prikazMenia = true;
            }
    });
}

navSlide();

var indexPrikaza = 3;
$(document).ready(function(){
    $('#fader').hover(
        function(){
            $(this).find('img:eq(1)').stop(true,true).fadeIn();
        },
        function(){
            $(this).find('img:eq(1)').stop(true,true).fadeOut();
        }
    )

    $("#ucitaj").click(function(){
        var podcasti = {
            name: ["Sezona 1 StartUp", "Sezona 2", "Sezona 3", "Sezona 4", "Sezona 5", "Sezona 6"],
            zvuk: ["audio/Chase Atlantic - _Church_ (Official Music Video).webm","audio/Chase Atlantic - _Church_ (Official Music Video).webm","audio/Chase Atlantic - _Church_ (Official Music Video).webm", "audio/Chase Atlantic - _Church_ (Official Music Video).webm", "audio/Chase Atlantic - _Church_ (Official Music Video).webm", "audio/Chase Atlantic - _Church_ (Official Music Video).webm"],

        }
        var html = "";
        if(podcasti.name.length >= indexPrikaza){
        for(let i = 0; i < indexPrikaza; i++){
            html += `<div class="podcast-container">
            <div class="box">
                <div class="image">
                    <img src="img/stance.jpg" alt="">
                </div>
                <div class="podcast">
                    <p class="card-text"><small class="text-muted">Stanica Podcast</small></p>
                    <h5 class="card-title"><b>${podcasti.name[i]}</b></h5>
                    <audio src="${podcasti.zvuk[i]}" controls></audio>
                    <div class="social" id="social-sredina">
                        <div class="social-content center-block"></div>
                        <div class="social-buttons">
                          <span><i class="fa fa-thumbs-up"></i>Like</span>
                          <span><i class="fa fa-comment"></i>Comment</span>
                          <span><i class="fa fa-share"></i>Share</span></div>
                      </div>
                </div>
            </div>
        </div>`
        }
        indexPrikaza+=3;
        if(podcasti.name.length < indexPrikaza)
            $("#ucitaj").css("display", "none");
            $("#ucitaj-sve").html(html);
        }
    })

});



// Dinamicki ispis nav dela

// $(document).ready(function(){
//     $("#nav").this(function(){
//         var navPodaci = {
//             href: ["index.html", "epizode.html", "onama.html", "#", "#", "#", "kontakt.html"],
//             naziv: ["Početna", "Epizode", "O nama", "Guest", "Store", "Reviews", "Kontakt"],
//         }
//         console.log(navPodaci);

//         var html = "";
//         for(var i = 0; i < navPodaci.length; i++){
//             html += `
//             <div class="logo">
//                 <a href="index.html"><img src="img/play-podcast.png" alt="logo"></a>
//             </div>
//             <div id="burger-meni">
//                 <ul  class="nav-links">
//                     <li><a href="${navPodaci.href}">${navPodaci.naziv}</a></li>
//                 </ul>
//             </div>
//             <div class="burger">
//                 <div class="line1"></div>
//                 <div class="line2"></div>
//                 <div class="line3"></div>
//             </div>`
//         }
//     })
// })