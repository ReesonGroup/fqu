
$(document).on('ready', function(){
  
  $('.unaPubilla').hide();
  if ($(window).width()>=770){
    $('.detallePost').show();
  }
  
  $('.backTo').on('click', function(){

    $('.unaPubilla').fadeOut();
    $('.pubillas').fadeIn();

  })
  
  $('.pubillasInner').on('click', function(){
   
    $('.pubillas').fadeOut();
    $('.unaPubilla').fadeIn();

  })
});





//función para subir o bajar el tamaño de la fuente
function resizer (multiplicador){
    for (var i = 0; i < texto.length; i++) {
        
        if (texto[i].style.fontSize == ""){

            texto[i].style.fontSize = "1em";

        }
        texto[i].style.fontSize = parseFloat(texto[i].style.fontSize)
        + (multiplicador * 0.1) + "em";
        };
};

//Función para desplegar los elementos por su Id.
function slideToggle(a){
  var elem = document.getElementById(a);
  $(elem).slideToggle(400);
};

//Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

