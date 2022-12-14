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
            name: ["Ispraćaj putovanja u leto", "Ispraćaj putovanja u leto", "Ispraćaj putovanja u leto", "Sezona 2 Legende 22'", "Sezona 2 Legende 22'", "Sezona 2 Legende 22'", "Sezona 3 Recap", "Sezona 3 Recap", "Sezona 3 Recap"],
            zvuk: ["audio/Chase Atlantic - _Church_ (Official Music Video).webm","audio/Chase Atlantic - _Church_ (Official Music Video).webm","audio/Chase Atlantic - _Church_ (Official Music Video).webm", "audio/Chase Atlantic - _Church_ (Official Music Video).webm", "audio/Chase Atlantic - _Church_ (Official Music Video).webm", "audio/Chase Atlantic - _Church_ (Official Music Video).webm", "audio/Chase Atlantic - _Church_ (Official Music Video).webm", "audio/Chase Atlantic - _Church_ (Official Music Video).webm", "audio/Chase Atlantic - _Church_ (Official Music Video).webm"],
            slike: ["img/bodega.jpg","img/bodega.jpg","img/bodega.jpg", "img/stance.jpg", "img/stance.jpg", "img/stance.jpg", "img/stance.jpg", "img/stance.jpg", "img/stance.jpg"],

        }
        var html = "";
        if(podcasti.name.length >= indexPrikaza){
        for(let i = 0; i < indexPrikaza; i++){
            html += `<div class="podcast-container">
            <div class="box">
                <div class="image">
                    <img src="${podcasti.slike[i]}" alt="">
                </div>
                <div class="podcast">
                    <p class="card-text"><small class="text-muted">Play Podcast</small></p>
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

// var html = "";
// function navL(){
//     var linkovi =[ 
//         ['Početna', 'index.html'],
//         ['Epizode', 'epizode.html'],
//         ['O Autoru','onama.html'],
//         ['Gosti', '#'],
//         ['Kontakt', 'kontakt.html']
//     ];
//     for(var i = 0; i < linkovi.length; i++){
//         var str = "" + linkovi[i];
//         str = str.split(',');
//         html += `<div id="burger-meni">
//                     <ul  class="nav-links">
//                         <li><a href="${linkovi[1]}">${linkovi[0]}</a></li>
//                     </ul>
//                 </div>`
//         document.getElementById('burger-meni').innerHTML;
//     }
// }
// navL();





//-------------------VALIDACIJE ZA FORME-------------
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

    if(ime_greska == true && email_greska == true && poruka_greska == true){
        document.getElementById("poruka-info").innerText = "Poruka poslata uspešno.";
        document.getElementById("poruka-info").style.color = "green";
    }
    else
    {
        document.getElementById("poruka-info").innerText = "Jedno ili više polja imaju grešku. Molimo Vas proverite i pokušajte ponovo.";
        document.getElementById("poruka-info").style.color = "red";
    }
}






// forma za recenziju
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

    if(naslov_greska == true && poruka_greska == true && ime_greska == true){
        document.getElementById("poruka-info").innerText = "Hvala što ste ostavili recenziju";
        document.getElementById("poruka-info").style.color = "green";
    }
    else
    {
        document.getElementById("poruka-info").innerText = "Jedno ili više polja imaju grešku. Molimo Vas proverite i pokušajte ponovo.";
        document.getElementById("poruka-info").style.color = "red";
    }
}









// dinamicki ispis ddl na strani recenzija
var lista = document.getElementById("lista");
var nizL = ["5 zvezdica","4 zvezdice","3 zvezdice","2 zvezdice","1 zvezdica"];
for(var list of nizL){
    lista.innerHTML += `<option>${list}</option>`;
}


// validacija prijave 

function prijavise(){
    var email = document.getElementById('email').value;
    var lozinka = document.getElementById('lozinka').value;

    var email_poruka = "";
    var lozinka_poruka = "";

    var email_greska = false;
    var lozinka_greska = false;

    if(email == ""){
        email_poruka = "Polje za email mora biti popunjeno.";
    }
    else{
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(regex.test(email) == false){
            email_poruka = "Neispravan email format. Kako: primer@gmail.com";
        }
        else{
            email_poruka = "";
            email_greska = true;
        }
    }

    if(lozinka == "")
    {
        lozinka_poruka = "Lozinka je obavezana!";
    }
    else
    {
        if(lozinka.length <= 4)
        {
            lozinka_poruka = "Password mora imati najmanje 5 karaktera!";
        }
        else
        {
            var numbers = [1,2,3,4,5,6,7,8,9];
            var counter_numbers = 0;

            for(var i=0; i<numbers.length; i++)
            {
                var number = lozinka.search(numbers[i]);
                
                if(number == -1)
                {
                    counter_numbers += 1;
                }
                else
                {
                    counter_numbers -= 1;
                }

                if(counter_numbers == 9)
                {
                    lozinka_poruka = "Password mora sadržati makar jedan broj bez nule!";
                }
                else
                {
                    lozinka_poruka = "";
                    lozinka_greska = true;
                }
            }            
        }
    }

    document.getElementById("email_greska").innerHTML = email_poruka;
    document.getElementById("lozinka_greska").innerHTML = lozinka_poruka;

    if(email_greska == true && lozinka_greska == true){
        document.getElementById("poruka-info").innerText = "Uspesno ste se prijavili";
        document.getElementById("poruka-info").style.color = "green";
    }
    else
    {
        document.getElementById("poruka-info").innerText = "Jedno ili više polja imaju grešku. Molimo Vas proverite i pokušajte ponovo.";
        document.getElementById("poruka-info").style.color = "red";
    }
}