var filmContainer = document.getElementById("content");

console.log("hmmm");

function getAllFilmovi() {
  var ruta = "http://localhost:8080/filmovi";
  var httprequest = new XMLHttpRequest();

  httprequest.onreadystatechange = function() {
    if (httprequest.readyState == 4) {

      document.getElementById("content").innerHTML = httprequest.responseType; 
      
      var ourFilmData = JSON.parse(httprequest.responseText);
      renderFilmHTML(ourFilmData);
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
    htmlString += "<div class='content__box' style='background: url(img/f" + j +  ".jpg); background-position: 50% 50%; background-size: cover; border-radius: 10px; '>" +  "<div class='content__cover' style='height: 100%; background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)); display: flex; justify-content: center; align-items: center; border-radius:10px;'>" + "<p>"+ data[i].title + " was made in " + data[i].year + "<br> Genre: " + data[i].genre + "<br>  Length: " + data[i].length + "<br> Rating: " + data[i].rating + "</p>" + "</div>" +"</div>";
  }

  filmContainer.insertAdjacentHTML('beforeend', htmlString);
}

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    var j = i;
    j++;
    htmlString += "<div class='content__box' style='background: url(img/g" + j +  ".jpg); background-position: 50% 50%; background-size: cover; border-radius: 10px; '>" +  "<div class='content__cover' style='height: 100%; background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)); display: flex; justify-content: center; align-items: center; border-radius:10px;'>" + "<p>"+ data[i].name + " " + data[i].lastname + "<br> Birthhyear: " + data[i].birthyear + "<br>  Nationality: " + data[i].nationality + "</p>" + "</div>" +"</div>";
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