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

    
    var kartice = {
        slika: ["img/stance.jpg", "img/stance.jpg", "img/bodega.jpg", "img/stance.jpg"],
        naslov: ["Sezona 3 Recap", "Sezona 2 Legende 22'", "Ispraćaj putovanja u leto", "Sezona 1 StartUp"],
        pTag: ["*PAŽNJA PRATIOCI* U ovoj epizodi Play podcasta službenici Antonio i Djovani Gonzales rezimiraju sezonu 2. Zajedno dele svoje omiljene trenutke, dogadjaje i dotiču se podrške o...", "U ovoj epizodi Stance Bodege, službenici Antonio (Antonio Soto) i Đo (Đovani Gonzales) okupljaju se za Legende...", "*PAŽNJA DRUGARI* U ovoj epizodi; Službenici (Antonio i Gio) pozdravljaju neka poznata lica u automobilskoj zajednici ovde u Masačusetsu, Tonija Toresa sa Summer Send Off Car Shov-a i Džejmsa Kelija iz Street Trendz Metala…", "*PAŽNJA DRUGARI!* Dobrodošli na još jednu sesiju povlačenja sa nikim drugim do Play Osnivačima. Play Osnivačima je porodica ljudi koja ne pruža ništa osim kvalitetnih Play vozila, odeće i dobrog VAJBA. G…"],
        maliP: ["Dec. 13, 2022", "Sept. 13, 2022", "Gosti: Toni Tores, James Kelly", "Gosti: Play Podcast Osnivači"],
    }
    var tag = "";
    for(var j = 0; j < kartice.slika.length; j++){
        tag += `
        <div class="card mb-3" style="max-width: 640px;">
        <div class="row g-0">
          <div class="col-md-4">
            <a href="poslednja-sezona.html">
                <img src="${kartice.slika[j]}" class="img-fluid rounded-start" alt="kola">
            </a>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${kartice.naslov[j]}</h5>
              <p class="card-text">${kartice.pTag[j]}</p>
              <p class="card-text"><small class="text-muted">${kartice.maliP[j]}</small></p>
            </div>
          </div>
        </div>
      </div>`
    }
    $("#left").html(tag);

    slideShow(); //funckcija za 
    navL(); // Funkcija za ispis menia

    //Ucitavanje epizoda
    $("#ucitaj").click(function(){
        var podcasti = {
            name: ["Ispraćaj putovanja u leto", "Ispraćaj putovanja u leto", "Ispraćaj putovanja u leto", "Sezona 2 Legende 22'", "Sezona 2 Legende 22'", "Sezona 2 Legende 22'", "Sezona 3 Recap", "Sezona 3 Recap", "Sezona 3 Recap"],
            zvuk: ["audio/Aca Petrolheads o Auto Analizi, Neovlascenom serviseru i SAT emisiji.webm","audio/Aca Petrolheads progovorio o Zokijevom odlasku iz PH u emisiju SAT!.webm","audio/Aca Petrolheads o Auto Analizi, Neovlascenom serviseru i SAT emisiji.webm", "audio/Aca Petrolheads o Auto Analizi, Neovlascenom serviseru i SAT emisiji.webm", "audio/Aca Petrolheads o Auto Analizi, Neovlascenom serviseru i SAT emisiji.webm", "audio/Aca Petrolheads o Auto Analizi, Neovlascenom serviseru i SAT emisiji.webm", "audio/Aca Petrolheads o Auto Analizi, Neovlascenom serviseru i SAT emisiji.webm", "audio/Aca Petrolheads o Auto Analizi, Neovlascenom serviseru i SAT emisiji.webm", "audio/Aca Petrolheads o Auto Analizi, Neovlascenom serviseru i SAT emisiji.webm"],
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

    //deo za menjanje slike na delu kartica
    function slideShow() {
        var current = $('#photos .show');
        var next = current.next().length ? current.next() : current.parent().children(':first');
        
        current.hide().removeClass('show');
        next.fadeIn().addClass('show');
        
        setTimeout(slideShow, 2000);
      }

    //Pozicioniranje slajdera
    if(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1] == "index.html"){
    
    var width = document.getElementById("uzorak-sirine").offsetWidth;
    document.getElementById("slider-container").scrollLeft = width * 2 - 0.5;
    $("#desna-strelica").click(PomerajSlajderaDesno)
    $("#leva-strelica").click( PomerajSlajderaLevo)

   
    }

});

//funckije za pomeraj slajdera

function PomerajSlajderaDesno()
{
    
    var width = document.getElementById("uzorak-sirine").offsetWidth;
    var destination = document.getElementById("slider-container").scrollLeft + width;

    $("#slider-container").animate({scrollLeft: destination},"slow");
    
}

function PomerajSlajderaLevo(){
    var width = document.getElementById("uzorak-sirine").offsetWidth;
    var destination = document.getElementById("slider-container").scrollLeft - width;

    $("#slider-container").animate({scrollLeft: destination},"slow");
}


// dinamicko ucitavanje nav
function navL(){
    var html = "";
    var linkovi =[ 
        ['Početna', 'index.html'],
        ['Epizode', 'epizode.html'],
        ['O Autoru','autor.html'],
        ['Recenzija', 'recenzija.html'],
        ['Kontakt', 'kontakt.html']
    ];
    for(var i = 0; i < linkovi.length; i++){
        html += `
            <li><a href="${linkovi[i][1]}">${linkovi[i][0]}</a></li>
        `
    }
    document.getElementById('navLinks').innerHTML = html;
}




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
        var regex = /^^[A-Z][a-z]{2,19}$/;

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
    var ocena = document.getElementById("lista").value;
    var naslov = document.getElementById("tbNaslov").value;
    var poruka = document.getElementById("tbPoruka").value;
    var ime = document.getElementById("tbIme").value;
    
    var ocena_poruka = "";
    var naslov_poruka = "";
    var poruka_poruka = "";
    var ime_poruka = "";

    var ocena_greska = false;
    var naslov_greska = false;
    var poruka_greska = false;
    var ime_greska = false;


    if(ocena == "Izaberite"){
        ocena_poruka = "Niste uneli ocenu.";
    }
    else{
        ocena_greska = "";
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

    document.getElementById("ocena_greska").innerHTML = ocena_poruka;
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
if(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1] == "recenzija.html"){
var lista = document.getElementById("lista");
lista.innerHTML += `<option>Izaberite</option>`;
var nizL = ["5 zvezdica","4 zvezdice","3 zvezdice","2 zvezdice","1 zvezdica"];
for(var list of nizL){
    lista.innerHTML += `<option>${list}</option>`;
}

console.log("proslo")

}


// validacija prijave 

function prijavise(){
    var email = document.getElementById('email').value;
    var lozinka = document.getElementById('lozinka').value;
    var cekiranje = document.getElementById('cekiran').value;

    var email_poruka = "";
    var lozinka_poruka = "";
    var cekiran_poruka = "";

    var cekiran_greska = false;
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

    if(cekiranje == "?????????????"){
        console.log("Usao")
        cekiran_poruka = "Nesto";
        cekiran_greska = false;
    }
    else{
        console.log("nije")
        cekiran_poruka = "Niste prihvatili pravila korišćenja.";
        cekiran_greska = true;
    }

    document.getElementById("email_greska").innerHTML = email_poruka;
    document.getElementById("lozinka_greska").innerHTML = lozinka_poruka;
    document.getElementById("cekiran_greska").innerHTML = cekiran_poruka;

    if(email_greska == true && lozinka_greska == true){
        document.getElementById("poruka-info").innerText = "Uspesno ste se prijavili";
        document.getElementById("poruka-info").style.color = "green";
    }
    else
    {
        document.getElementById("poruka-info").innerHTML = "Jedno ili više polja imaju grešku.<br/> Molimo Vas proverite i pokušajte ponovo.";
        document.getElementById("poruka-info").style.color = "red";
    }
}



