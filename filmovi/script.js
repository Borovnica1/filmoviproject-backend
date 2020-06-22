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
    htmlString += "<div>" + data[i].title + " was made in " + data[i].year + ".</div>";
  }

  filmContainer.insertAdjacentHTML('beforeend', htmlString);
}

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    var j = i;
    j++;
    htmlString += "<div style='background: url(img/g" + j +  ".jpg); background-position: 50% 50%; background-size: cover; border-radius: 10px; '>" + "tesssttt"  + "</div>";
    
  
  }

  filmContainer.insertAdjacentHTML('beforeend', htmlString);
}