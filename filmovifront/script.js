var filmContainer = document.getElementById("content");
var glumciCountContainer = document.getElementById("glumci-count");
var filmoviCountContainer = document.getElementById("filmovi-count");

console.log("hmmm");

function getAllFilmovi() {
  var ruta = "http://localhost:8080/filmovi";
  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {

      document.getElementById("content").innerHTML = httprequest.responseType; 
      
      var ourFilmData = JSON.parse(httprequest.responseText);
      renderFilmHTML(ourFilmData);
      console.log(ourFilmData);
    }
  }

  httprequest.open("GET", ruta, true);
  httprequest.send();
}

function getAllGlumci() {
  var ruta = "http://localhost:8080/glumci";
  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {

      document.getElementById("content").innerHTML = httprequest.responseType; 

      var ourGlumacData = JSON.parse(httprequest.responseText);
      renderHTML(ourGlumacData);
      console.log(ourGlumacData);
    }
  }

  httprequest.open("GET", ruta, true);
  httprequest.send();
}

function renderFilmHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    var j = i;
    j++;
    htmlString += "<div class='content__box' style='background: url(img/f" + j +  ".jpg); background-position: 50% 50%; background-size: cover; border-radius: 10px; '>" +  "<div class='content__cover' style='height: 100%; background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)); display: flex; justify-content: center; align-items: center; border-radius:10px;'>" + "<p>"+ data[i].title + " was made in " + data[i].year + "<br> Genre: " + data[i].genre + "<br>  Length: " + data[i].length + "<br> Rating: " + data[i].rating + "</p>" + "<button onclick='showOneFilm(this)' id='"+j+"'>"+ "Edit" +  "</button>" + "<div class='okvir' id='ok"+j+"' style='display: none'>" +""+ "</div>" + "</div>" +"</div>";
  }

  /* htmlString += "<div class='content__add'><button class='add-btn' id='myBtn'><i class='fa fa-plus'></i></button></div>" */

  filmContainer.insertAdjacentHTML("beforeend",htmlString);
}

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    var j = i;
    j++;
    htmlString += "<div class='content__box' style='background: url(img/g" + j +  ".jpg); background-position: 50% 50%; background-size: cover; border-radius: 10px; '>" +  "<div class='content__cover' style='height: 100%; background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)); display: flex; justify-content: center; align-items: center; border-radius:10px;'>" + "<p>"+ data[i].name + " " + data[i].lastname + "<br> Birthhyear: " + data[i].birthyear + "<br>  Nationality: " + data[i].nationality + "</p>" + "<button onclick='showOneGlumac(this)' id='"+j+"'>"+ "Edit" +  "</button>" + "<div class='okvir' id='ok"+j+"' style='display: none'>" +""+ "</div>" + "</div>" +"</div>";
  }

  filmContainer.insertAdjacentHTML('beforeend', htmlString);
}

// ACTION CATEGORY
// ACTION CATEGORY
// ACTION CATEGORY

function getActionFilmovi() {
  var ruta = "http://localhost:8080/filmovi/search/action";
  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {

      document.getElementById("content").innerHTML = httprequest.responseType; 

      var ourActionData = JSON.parse(httprequest.responseText);
      renderActionHTML(ourActionData);
      console.log(ourActionData);
    }
  }

  httprequest.open("GET", ruta, true);
  httprequest.send();
}

function renderActionHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    var j = data[i].film_id;
    htmlString += "<div class='content__box' style='background: url(img/f" + j +  ".jpg); background-position: 50% 50%; background-size: cover; border-radius: 10px; '>" +  "<div class='content__cover' style='height: 100%; background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)); display: flex; justify-content: center; align-items: center; border-radius:10px;'>" + "<p>"+ data[i].title + " was made in " + data[i].year + "<br> Genre: " + data[i].genre + "<br>  Length: " + data[i].length + "<br> Rating: " + data[i].rating + "</p>" + "</div>" +"</div>";
  }

  filmContainer.insertAdjacentHTML('beforeend', htmlString);
}

// COMEDY CATEGORY
// COMEDY CATEGORY
// COMEDY CATEGORY

function getComedyFilmovi() {
  var ruta = "http://localhost:8080/filmovi/search/comedy";
  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {

      document.getElementById("content").innerHTML = httprequest.responseType; 

      var ourComedyData = JSON.parse(httprequest.responseText);
      renderComedyHTML(ourComedyData);
      console.log(ourComedyData);
    }
  }

  httprequest.open("GET", ruta, true);
  httprequest.send();
}

function renderComedyHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    var j = data[i].film_id;
    htmlString += "<div class='content__box' style='background: url(img/f" + j +  ".jpg); background-position: 50% 50%; background-size: cover; border-radius: 10px; '>" +  "<div class='content__cover' style='height: 100%; background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)); display: flex; justify-content: center; align-items: center; border-radius:10px;'>" + "<p>"+ data[i].title + " was made in " + data[i].year + "<br> Genre: " + data[i].genre + "<br>  Length: " + data[i].length + "<br> Rating: " + data[i].rating + "</p>" + "</div>" +"</div>";
  }

  filmContainer.insertAdjacentHTML('beforeend', htmlString);
}

// ADVENTURE CATEGORY
// ADVENTURE CATEGORY
// ADVENTURE CATEGORY
function getAdventureFilmovi() {
  var ruta = "http://localhost:8080/filmovi/search/adventure";
  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {

      document.getElementById("content").innerHTML = httprequest.responseType; 

      var ourAdventureData = JSON.parse(httprequest.responseText);
      renderAdventureHTML(ourAdventureData);
      console.log(ourAdventureData);
    }
  }

  httprequest.open("GET", ruta, true);
  httprequest.send();
}

function renderAdventureHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    var j = data[i].film_id;
    htmlString += "<div class='content__box' style='background: url(img/f" + j +  ".jpg); background-position: 50% 50%; background-size: cover; border-radius: 10px; '>" +  "<div class='content__cover' style='height: 100%; background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)); display: flex; justify-content: center; align-items: center; border-radius:10px;'>" + "<p>"+ data[i].title + " was made in " + data[i].year + "<br> Genre: " + data[i].genre + "<br>  Length: " + data[i].length + "<br> Rating: " + data[i].rating + "</p>" + "</div>" +"</div>";
  }

  filmContainer.insertAdjacentHTML('beforeend', htmlString);
}


// GET ALL FILMOVI BY ASC
// GET ALL FILMOVI BY ASC
// GET ALL FILMOVI BY ASC

function getAllFilmoviByAsc() {
  var ruta = "http://localhost:8080/filmovi/sort/asc";
  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {

      document.getElementById("content").innerHTML = httprequest.responseType; 
      
      var ourAscData = JSON.parse(httprequest.responseText);
      renderAscHTML(ourAscData);
      console.log(ourAscData);
    }
  }

  httprequest.open("GET", ruta, true);
  httprequest.send();
}

function renderAscHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    var j = data[i].film_id;
    htmlString += "<div class='content__box' style='background: url(img/f" + j +  ".jpg); background-position: 50% 50%; background-size: cover; border-radius: 10px; '>" +  "<div class='content__cover' style='height: 100%; background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)); display: flex; justify-content: center; align-items: center; border-radius:10px;'>" + "<p>"+ data[i].title + " was made in " + data[i].year + "<br> Genre: " + data[i].genre + "<br>  Length: " + data[i].length + "<br> Rating: " + data[i].rating + "</p>" + "</div>" +"</div>";
  }

  filmContainer.insertAdjacentHTML('beforeend', htmlString);
}

// GET ALL FILMOVI BY DESC
// GET ALL FILMOVI BY DESC
// GET ALL FILMOVI BY DESC

function getAllFilmoviByDesc() {
  var ruta = "http://localhost:8080/filmovi/sort/desc";
  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {

      document.getElementById("content").innerHTML = httprequest.responseType; 
      
      var ourDescData = JSON.parse(httprequest.responseText);
      renderDescHTML(ourDescData);
      console.log(ourDescData);
    }
  }

  httprequest.open("GET", ruta, true);
  httprequest.send();
}

function renderDescHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    var j = data[i].film_id;
    htmlString += "<div class='content__box' style='background: url(img/f" + j +  ".jpg); background-position: 50% 50%; background-size: cover; border-radius: 10px; '>" +  "<div class='content__cover' style='height: 100%; background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)); display: flex; justify-content: center; align-items: center; border-radius:10px;'>" + "<p>"+ data[i].title + " was made in " + data[i].year + "<br> Genre: " + data[i].genre + "<br>  Length: " + data[i].length + "<br> Rating: " + data[i].rating + "</p>" + "</div>" +"</div>";
  }

  filmContainer.insertAdjacentHTML('beforeend', htmlString);
}

// MODAL
// MODAL
// MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(eventF) {
  if (eventF.target == modal) {
    modal.style.display = "none";
  }
}











function getGlumciCount() {
  var ruta = "http://localhost:8080/glumci/count";
  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {

      document.getElementById("glumci-count").innerHTML = httprequest.responseType; 
      
      var ourGlumciCountData = JSON.parse(httprequest.responseText);
      renderGlumciCountHTML(ourGlumciCountData);
      console.log(ourGlumciCountData);
    }
  }

  httprequest.open("GET", ruta, true);
  httprequest.send();
}

function renderGlumciCountHTML(data) {

  glumciCountContainer.insertAdjacentText("beforeend",  data);
}

function getFilmoviCount() {
  var ruta = "http://localhost:8080/filmovi/count";
  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {

      document.getElementById("filmovi-count").innerHTML = httprequest.responseType; 
      
      var ourFilmoviCountData = JSON.parse(httprequest.responseText);
      renderFilmoviCountHTML(ourFilmoviCountData);
      console.log(ourFilmoviCountData);
    }
  }

  httprequest.open("GET", ruta, true);
  httprequest.send();
}

function renderFilmoviCountHTML(data) {

  filmoviCountContainer.insertAdjacentText("beforeend",  data);
}




// NAME AND LASTNAME
// NAME AND LASTNAME
// NAME AND LASTNAME

function getGlumacName() {
  var ruta = "http://localhost:8080/glumci";
  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {

      document.getElementById("content").innerHTML = httprequest.responseType; 

      var ourGlumacData = JSON.parse(httprequest.responseText);
      renderGlHTML(ourGlumacData);
    }
  }

  httprequest.open("GET", ruta, true);
  httprequest.send();
}

var glumacNameContainer = document.getElementById("glumac-list");

function renderGlHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<li id='"+ data[i].glumac_id +"' onclick='getOneGlumac(this)'>" + data[i].name + " " + data[i].lastname + "</li>"
  }

  glumacNameContainer.insertAdjacentHTML("beforeend",htmlString);
}

var arrow = document.getElementById("aside-arrow");

// DROPDOWN TOGGLE
// DROPDOWN TOGGLE
function dropdown() {
  glumacNameContainer.classList.toggle("show");

  if (arrow.classList.contains('fa-arrow-down')) {
    arrow.classList.remove('fa-arrow-down');
    arrow.classList.add('fa-arrow-up');
  } else {
    arrow.classList.add('fa-arrow-down');
  }
}





// ZATVORI AKO KLIKNE NEGDE DRUGDE!!
// ZATVORI AKO KLIKNE NEGDE DRUGDE!!
/* window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} */



function getOneGlumac(elem) {
  var broj = elem.id;
  var ruta = "http://localhost:8080/glumci/" + broj;

  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {

      // ova linija 412 cisti prethodno dovucenog glumca
      document.getElementById("content").innerHTML = httprequest.responseType; 

      var ourGlumacOneData = JSON.parse(httprequest.responseText);
      renderGlumacOneHTML(ourGlumacOneData);
      console.log(ourGlumacOneData);
    }
  }

  httprequest.open("GET", ruta, true);
  httprequest.send();
}

function renderGlumacOneHTML(data) {
  var j = data.glumac_id;

  var htmlString = "<div class='content__box' style='background: url(img/g" + j +  ".jpg); background-position: 50% 50%; background-size: cover; border-radius: 10px; '>" +  "<div class='content__cover' style='height: 100%; background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)); display: flex; justify-content: center; align-items: center; border-radius:10px;'>" + "<p>"+ data.name + " " + data.lastname + "<br> Birthhyear: " + data.birthyear + "<br>  Nationality: " + data.nationality + "</p>" + "<button onclick='showOneGlumac(this)' id='"+j+"'>"+ "Edit" +  "</button>" + "<div class='okvir' id='ok"+j+"' style='display: none'>" +""+ "</div>" + "</div>" +"</div>";

  filmContainer.insertAdjacentHTML('beforeend', htmlString);
}

function showOneGlumac(elem) {
  var broj = elem.id;
  
  var okvir = document.getElementById("ok" + broj);
  okvir.style.display = "flex";

  var j = elem.id;

  var htmlForma = "<div class='uokvireno'> EDIT GLUMCA";
  htmlForma += "<span class='close' style='margin-left:8rem;'>&times;</span>";
  htmlForma += "<form method='' enctype='multipart/htmlForma += form-data' id='fileUploadForm' action='#'>";
  htmlForma +=   "<label for='name'>Name:</label>";
  htmlForma +=   "<input id='edName' type='text' name='name' placeholder='Name' /><br/>";
  htmlForma +=   "<label for='lastname'>LastName:</label>";
  htmlForma +=   "<input id='edLastName' type='text' name='lastname' placeholder='LastName' /><br/>";
  htmlForma +=   "<label for='nationality'>Nationality:</label>";
  htmlForma +=   "<input id='edNationality' type='text' name='nationality' placeholder='Nationality' /><br/>";
  htmlForma +=   "<label for='birthyear'>Birthyear:</label>";
  htmlForma +=   "<input id='edBirthyear' type='number' name='birthyear' htmlForma += placeholder='Birthyear' /><br/>";
  htmlForma +=   "<input onclick='editOneGlumac(this)' value='Apply' type='submit' id='"+j+"' class='submit-button'/>";
  htmlForma +=   "<input onclick='deleteOneGlumac(this)' value='Delete' type='submit' id='"+j+"' class='submit-button' style=' margin-left:8rem; background-color: red;'/>";
  htmlForma += "</form>";
  htmlForma += "</div>";
  okvir.insertAdjacentHTML('beforeend', htmlForma);
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    okvir.style.display = "none";
  }


  window.onclick = function(event) {
    if (event.target == okvir) {
      okvir.style.display = "none";
    }
  }
}


function editOneGlumac(elem) {
  var broj = elem.id;
  
  var ruta = "http://localhost:8080/glumci/" + broj;

  //
  // getdocumentby id
  var data = {};
  //ako se skine ovaj glumac_id dodaje se novi glumac O.o!? LOL
  data.glumac_id = elem.id;
  data.name = document.getElementById("edName").value;
  data.lastname = document.getElementById("edLastName").value;
  data.nationality = document.getElementById("edNationality").value;
  data.birthyear = document.getElementById("edBirthyear").value;
  console.log(data.name);

  var json = JSON.stringify(data);

  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {

      // ova linija 412 cisti prethodno dovucenog glumca
      document.getElementById("content").innerHTML = httprequest.responseType; 

      var ourGlumacOneData = JSON.parse(httprequest.responseText);
      renderGlumacOneHTML(ourGlumacOneData);
      console.log(ourGlumacOneData);
    }
  }

  httprequest.open("PUT", ruta, true);
  httprequest.setRequestHeader("Content-type", "application/json");
  httprequest.send(json);
}

function deleteOneGlumac(elem) {
  var broj = elem.id;
  console.log(broj);

  var ruta = "http://localhost:8080/glumci/" + broj;
  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {
      
    }
  }

  httprequest.open("DELETE", ruta, true);
  httprequest.send();
}

// MODAL ZA FILM KADA SE KLIKNE EDIT!!! edit i deleteONEFILM!!!
// MODAL ZA FILM KADA SE KLIKNE EDIT!!! edit i deleteONEFILM!!!
// MODAL ZA FILM KADA SE KLIKNE EDIT!!! edit i deleteONEFILM!!!
// MODAL ZA FILM KADA SE KLIKNE EDIT!!! edit i deleteONEFILM!!!
// MODAL ZA FILM KADA SE KLIKNE EDIT!!! edit i deleteONEFILM!!!
// MODAL ZA FILM KADA SE KLIKNE EDIT!!! edit i deleteONEFILM!!!

function showOneFilm(elem) {
  var broj = elem.id;
  
  var okvir = document.getElementById("ok" + broj);
  okvir.style.display = "flex";

  var j = elem.id;

  var htmlForma = "<div class='uokvireno'> EDIT FILM";
  htmlForma += "<span class='close' style='margin-left:8rem;'>&times;</span>";
  htmlForma += "<form method='' enctype='multipart/htmlForma += form-data' id='fileUploadForm' action='#'>";
  htmlForma +=   "<label for='title'>Title:</label>";
  htmlForma +=   "<input id='edTitle' type='text' title='title' placeholder='Title' /><br/>";
  htmlForma +=   "<label for='genre'>Genre:</label>";
  htmlForma +=   "<input id='edGenre' type='text' name='genre' placeholder='Genre' /><br/>";
  htmlForma +=   "<label for='length'>Length:</label>";
  htmlForma +=   "<input id='edLength' type='number' name='length' placeholder='Length' /><br/>";
  htmlForma +=   "<label for='rating'>Rating:</label>";
  htmlForma +=   "<input id='edRating' type='number' name='rating' step='0.01' max='10' min='0' placeholder='Rating' /><br/>";
  htmlForma +=   "<label for='year'>Year:</label>";
  htmlForma +=   "<input id='edYear' type='number' name='year' placeholder='Year' /><br/>";
  htmlForma +=   "<input onclick='editOneFilm(this)' value='Apply' type='submit' id='"+j+"' class='submit-button'/>";
  htmlForma +=   "<input onclick='deleteOneFilm(this)' value='Delete' type='submit' id='"+j+"' class='submit-button' style=' margin-left:8rem; background-color: red;'/>";
  htmlForma += "</form>";
  htmlForma += "</div>";
  okvir.insertAdjacentHTML('beforeend', htmlForma);
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    okvir.style.display = "none";
  }


  window.onclick = function(event) {
    if (event.target == okvir) {
      okvir.style.display = "none";
    }
  }
}

function editOneFilm(elem) {
  var broj = elem.id;
  
  var ruta = "http://localhost:8080/filmovi/" + broj;

  //
  // getdocumentby id
  var data = {};
  //ako se skine ovaj glumac_id dodaje se novi glumac O.o!? LOL
  data.film_id = elem.id;
  data.title = document.getElementById("edTitle").value;
  data.genre = document.getElementById("edGenre").value;
  data.length = document.getElementById("edLength").value;
  data.rating = document.getElementById("edRating").value;
  data.year = document.getElementById("edYear").value;
  console.log(data.name);

  var json = JSON.stringify(data);

  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {

      // ova linija 412 cisti prethodno dovucenog glumca
      document.getElementById("content").innerHTML = httprequest.responseType; 

      var ourFilmOneData = JSON.parse(httprequest.responseText);
      renderFilmOneHTML(ourFilmOneData);
      console.log(ourFilmOneData);
    }
  }

  httprequest.open("PUT", ruta, true);
  httprequest.setRequestHeader("Content-type", "application/json");
  httprequest.send(json);
}

function deleteOneFilm(elem) {
  var broj = elem.id;
  console.log(broj);

  var ruta = "http://localhost:8080/filmovi/" + broj;
  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {
      
    }
  }

  httprequest.open("DELETE", ruta, true);
  httprequest.send();
}