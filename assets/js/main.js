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
    // $('#fader').hover(
    //     function(){
    //         $(this).find('img:eq(1)').stop(true,true).fadeIn();
    //     },
    //     function(){
    //         $(this).find('img:eq(1)').stop(true,true).fadeOut();
    //     }
    // )

    //Ucitavanje epizoda
    $("#ucitaj").click(function(){
        var podcasti = {
            name: ["Sezona 2 Legende 22'", "Sezona 2 Legende 22'", "Sezona 2 Legende 22'", "Sezona 3 Recap", "Sezona 3 Recap", "Sezona 3 Recap"],
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
            // $("#ucitaj").fadeOut();
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





// validacija kontakt strane
function kontakt(){
    var ime = document.getElementById("tbIme").value;
    var email = document.getElementById("tbEmail").value;
    var poruka = document.getElementById("tbPoruka").value;

    var ime_poruka = "";
    var email_poruka = "";
    var poruka_poruka = "";

    var ime_greska = false;
    var email_greska = false;
    var poruka_greska = false;
    
    

    if(ime == ""){
        console.log("Usao");
        ime_poruka = "Ime je obavezno polje";
    }
    else{
        console.log("Opet Usao");
        var regex = /^[a-zA-Z ]*$/;

        if(regex.test(ime) == false){
            ime_poruka = "Samo su slova i razmaci dozvoljeni!";
        }
        else{
            ime_poruka = "";
            ime_greska = true;
        }
    }

    if(email == ""){
        email_poruka = "Email je obavezno polje.";
    }
    else{
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(regex.test(email) == false){
            email_poruka = "Neispravan email format. Primer: email@gmail.com";
        }
        else{
            email_poruka = "";
            email_greska = true;
        }
    }

    if(poruka == ""){
        poruka_poruka = "Obavezno je popuniti format za poruku.";
    }
    else{
        var regex = /^[a-zA-Z ]*$/;

        if(regex.test(poruka) == false){
            poruka_poruka = "Neispravan format.";
        }
        else{
            poruka_poruka = "";
            poruka_greska = true;
        }
    }
    document.getElementById("ime_greska").innerHTML = ime_poruka;
    document.getElementById("email_greska").innerHTML = email_poruka;
    document.getElementById("poruka_greska").innerHTML = poruka_poruka;
}




// forma za recenziju

var ocena = document.getElementById("ddl");
ocena.innerHTML=`<option>Izaberi ocenu</option>`;
for(var i=1; i<=5; i++){
    ocena.innerHTML+=`<option>${i}</option>`;
}




function recenzija(){
    var ocena = document.getElementById("ddl");
    var naslov = document.getElementById("tbNaslov").value;
    var poruka = document.getElementById("tbPoruka").value;
    var ime = document.getElementById("tbIme").value;
    
    
    var ocena_poruka = "";
    var naslov_poruka = "";
    var poruka_poruka = "";
    var ime_poruka = "";

    var ocena_greska = "";
    var naslov_greska = "";
    var poruka_greska = "";
    var ime_greska = "";


    if(ocena == "0"){
        ocena_poruka = "Morate izabrati ponudjenu vrednost";
    }
    else{
        ocena_poruka = "";
        ocena_greska = true;
    }

    if(naslov == ""){
        naslov_poruka = "Naslov mora biti popunjen.";
    }
    else{        
        regex = /^[a-zA-Z ]*$/;

        if(regex.test(naslov) == false){
            naslov_poruka = "Neispraavan format.";
        }
        else{
            naslov_poruka = "";
            naslov_greska = true;
        }
    }


    if(poruka == ""){
        poruka_poruka = "Ostavite komentar.";
    }
    else{
        var regex = /^[a-zA-Z ]*$/;

        if(regex.test(poruka) == false){
            poruka_poruka = "Neispravan format.";
        }
        else{
            poruka_poruka = "";
            poruka_greska = true;
        }
    }

    if(ime == ""){
        ime_poruka = "Polje za ime je obavezno polje.";
    }
    else{
        var regex = /^[a-zA-Z]*$/;

        if(regex.test(ime) == false){
            ime_poruka = "Neispravan format za ime.";
        }
        else{
            ime_poruka = "";
            ime_greska = true;
        }
    }

    // document.getElementById("ocena_greska").innerHTML = ocena_poruka;
    document.getElementById("naslov_greska").innerHTML = naslov_poruka;
    document.getElementById("poruka_greska").innerHTML = poruka_poruka;
    document.getElementById("ime_greska").innerHTML = ime_poruka;


}


// Tajmer za index deo


// function timer (){
//     const second = 1000,
//     minute = second * 60,
//     hour = minute * 60,
//     day = hour * 24;
//     let time = "December 31, 2022 20:32:00";
//     let countDown = new Date(time).getTime(),
//     x = setInterval(function () {
  
//         let now = new Date().getTime(),
//             distance = countDown - now;
  
//             document.getElementById('days').innerText = Math.floor(distance / (day)) + ' days',
//             document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)) + ' hours',
//             document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)) + ' minutes',
//             document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second) + ' seconds';
  
//         if (distance <= 0) {
  
//             document.getElementById('days').innerText = ('0 days');
//             document.getElementById('hours').innerText = ('0 hours');
//             document.getElementById('minutes').innerText = ('0 minutes');
//             document.getElementById('seconds').innerText = ('0 seconds');
  
            
//             document.getElementById("divTimerExpired").style.display = "block";
  
//         }
  
//     }, second)
//   }
  
//   timer();