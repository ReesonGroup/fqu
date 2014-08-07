
$(document).on('ready', function(){
  var info = $('div.contieneInformacion');
  var detallInfo = $('div.detallePost');
  var partners = $('div.contieneColaboradores');
  var navPubillas = $('section.pubillas');
  var unaPubilla = $('div.unaPubilla');
  var pubillas = $('section.pubillas');
  var butPubillas = $('#butPubillas').find('span');
  var butInfo = $('#butInfo').find('span');
  var butPartners = $('#butPartners').find('span');
  
  if ($(window).width()>=770){
    detallInfo.show();
    partners.hide();
    info.hide();
  }
  
  unaPubilla.hide();

  butPubillas.on('click', function(){

    $(this).addClass('pubillasActive');
    butInfo.removeClass('infoActive');
    butPartners.removeClass('colaboradoresActive')
    navPubillas.fadeIn();
    unaPubilla.fadeOut();
    info.fadeOut();
    partners.fadeOut();

  })
  butInfo.on('click', function(){

    $(this).addClass('infoActive');
    butPartners.removeClass('colaboradoresActive')
    butPubillas.removeClass('pubillasActive')
    navPubillas.fadeOut();
    unaPubilla.fadeOut();
    info.fadeIn();
    partners.fadeOut();

  })
  butPartners.on('click', function(){

    $(this).addClass('colaboradoresActive');
    butPubillas.removeClass('pubillasActive');
    butInfo.removeClass('infoActive');
    navPubillas.fadeOut();
    unaPubilla.fadeOut();
    info.fadeOut();
    partners.fadeIn();

  })
  
  $('div.backTo').on('click', function(){

    $('body,html').stop(true,true).animate({
        scrollTop: $('#llamadaTitulo').offset().top
    });
    unaPubilla.fadeOut();
    navPubillas.fadeIn();

  })
  
  $('article.pubillasInner').on('click', function(){
   
    var el=$(this).attr('id');
    navPubillas.fadeOut();
    if (el=='navButPub1') {
      $('#pub1').fadeIn(300,function () {
        $('body,html').stop(true,true).animate({
          scrollTop: $('#llamadaTitulo').offset().top
        })
      })
    }
    else if (el=='navButPub2') {
      $('#pub2').fadeIn(300,function () {
        $('body,html').stop(true,true).animate({
          scrollTop: $('#llamadaTitulo').offset().top
        })
      })
    }
    else if (el=='navButPub3') {
      $('#pub3').fadeIn(300,function () {
        $('body,html').stop(true,true).animate({
          scrollTop: $('#llamadaTitulo').offset().top
        })
      })
    }
    else if (el=='navButPub4') {
      $('#pub4').fadeIn(300,function () {
        $('body,html').stop(true,true).animate({
          scrollTop: $('#llamadaTitulo').offset().top
        })
      })
    }
    else if (el=='navButPub5') {
      $('#pub5').fadeIn(300,function () {
        $('body,html').stop(true,true).animate({
          scrollTop: $('#llamadaTitulo').offset().top
        })
      })
    }
    else if (el=='navButPub6') {
      $('#s6').fadeIn(300,function () {
        $('body,html').stop(true,true).animate({
          scrollTop: $('#llamadaTitulo').offset().top
        })
      })
    }
    else if (el=='navButPub7') {
      $('#pub7').fadeIn(300,function () {
        $('body,html').stop(true,true).animate({
          scrollTop: $('#llamadaTitulo').offset().top
        })
      })
    }
    else{console.log('Algo falla en la botonera')};
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

// //Facebook
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.0";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

