
var info = $('div.contieneInformacion');
var detallInfo = $('div.detallePost');
var partners = $('div.contieneColaboradores');
var navPubillas = $('section.pubillas');
var unaPubilla = $('div.unaPubilla');
var pubillas = $('section.pubillas');

var eaLogo = $('#eaLogo');
var eaTitulo = $('#eaTitulo p');
var eaLugar = $('#eaLugar p');
var aux = $('#aux');

var fecha,
    dia,
    hora,
    min,
    seg;

$(document).on('ready', init);

function init(){
  
  startClock();

  startViews();

  unaPubilla.hide();
  
  actionNavPubillas();

  backTo();

};

setInterval(startClock, 500)

function startClock(){

  fecha = new Date();
  dia = fecha.getDate();
  hora = fecha.getHours();
  min = fecha.getMinutes();
  seg = fecha.getSeconds();
  var aux2 = fecha.toLocaleTimeString();
  aux.text(aux2)

  if (dia) {
    if (seg <= 15 ) {
      

    }
    else if (seg <= 30) {


    }
    else if (seg <= 45) {

    }
    else if (seg <= 59) {

    }
    else{console.log('nada')}
  }
};

function startViews(){
  if ($(window).width()>=770){
    detallInfo.show();
    partners.hide();
    info.hide();
  }
};

function backTo(){
  $('div.backTo').on('click', function(){

    $('body,html').stop(true,true).animate({
        scrollTop: $('#llamadaTitulo').offset().top
      })
    unaPubilla.fadeOut();
    navPubillas.fadeIn();

  })
};

function actionNavPubillas(){
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
};


function resizer (multiplicador){
    for (var i = 0; i < texto.length; i++) {
        
        if (texto[i].style.fontSize == ""){

            texto[i].style.fontSize = "1em";

        }
        texto[i].style.fontSize = parseFloat(texto[i].style.fontSize)
        + (multiplicador * 0.1) + "em";
        };
};

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

