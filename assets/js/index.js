/*Dirección Parroquia*/ 
function findMe(){
    var coord = {lat:20.6490817, lng: -103.4555886};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 18,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

/*Direcciòn Salon de Evento*/
function searchMe(){
  var coord = {lat:20.645087, lng: -103.4470447};
  var map = new google.maps.Map(document.getElementById('maps'),{
    zoom: 18,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}

/*Menú*/
$(".menu").on('click', function(){
  $(".buttons").toggle('slow');
}) 
