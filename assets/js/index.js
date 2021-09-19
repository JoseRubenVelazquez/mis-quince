/*Dirección Parroquia*/
function findMe(){
    document.getElementById('map').innerHTML='<div class="map"><iframe class="church" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.503580399469!2d-103.45558858576133!3d20.649081706008605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428abf8fa776f5d%3A0x3b0e067e2939f9f0!2sParroquia%20Mar%C3%ADa%20Madre%20del%20Redentor!5e0!3m2!1ses!2smx!4v1631918344402!5m2!1ses!2smx" width="100%" height="410" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>';
}

/*Direcciòn Salon de Evento*/
function searchMe(){
    document.getElementById('maps').innerHTML='<div class="maps"><iframe class="terrace" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.601667118009!2d-103.44704468576138!3d20.64508700614271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428adf85f2cb5bf%3A0xce2f0ed9cac12d8c!2sDel%20Sol%2076%2C%20Para%C3%ADsos%20del%20Colli%2C%2045069%20Zapopan%2C%20Jal.!5e0!3m2!1ses!2smx!4v1631928907351!5m2!1ses!2smx" width="100%" height="410" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>';
}

/*Menú*/
$(".menu").on('click', function(){
  $(".buttons").toggle('slow');
}) 

/*Up Arrow*/
$(document).ready(function(){
  $('.cielo').click(function(){
    $('body, html').animate({
      scrollTop:'0px'
    }, 200);
  });
});

/*Temporizador*/
let days = 100;
let hours = 20;
let minutes = 59;
let seconds = 59;

/*Definimos y ejecutamos los segundos*/
function cSecond(){
  let txtSeconds;
  if(seconds < 0){
    seconds = 59;
  }
  /*Mostrar segundos en pantalla*/
  if(seconds < 10){
    txtSeconds= `0${seconds}`;
  }else{
    txtSeconds= seconds;
  }
  document.getElementById('seconds').innerHTML = txtSeconds;
  seconds --;
}