
var info = $('div.contieneInformacion');
var detallInfo = $('div.detallePost');
var diasEventos = $('div.listaEventos');
var botonera = $('div.botonera li');

var eventActual = $('div.detalleEvento');
var arrayEa = $('div.plegado').clone();

// var aux = $('#aux');

var fecha;
var dia;
var hora;
var min;
var seg;


$(document).on('ready', init);

function init()
{

  diasEventos.hide();

  startClock();

  startViews();

  actionBotonera();

  actionEvents();

  actionInfo();

};


function ancla1()
{
  $('body,html').stop(true,true).animate(
    {
      scrollTop: $('#botonera').offset().top
    })
}

setInterval(startClock, 500);

function startClock()
{
  fecha = new Date();
  dia = fecha.getDate();
  hora = fecha.getHours();
  min = fecha.getMinutes();
  seg = fecha.getSeconds();
  // var aux2 = fecha.toLocaleTimeString();
  // aux.text(aux2)

  if (dia) {

    if (hora==10||(hora==11&&min<=29)) 
    {
      eventActual.html(arrayEa[0])

    }
    else if (hora==11&&min>=30)
    {
      eventActual.html(arrayEa[1])
    }
    else if (hora==13)
    {
      eventActual.html(arrayEa[2])
    }
    else if (hora==16)
    {
      eventActual.html(arrayEa[3])
    }
    else if (hora==17&&min<=29)
    {
      eventActual.html(arrayEa[4])
    }
    else if (hora==17&&min>=30)
    {
      eventActual.html(arrayEa[5])
    }
    else if (hora==18)
    {
      eventActual.html(arrayEa[6])
    }
    else if (hora==19)
    {
      eventActual.html(arrayEa[7])
    }
    else if (hora==20||(hora==21&&min<=29))
    {
      eventActual.html(arrayEa[8])
    }
    else if (hora==21&&min>=30)
    {
      eventActual.html(arrayEa[9])
    }
    else if (hora==23)
    {
      eventActual.html(arrayEa[10])
    }
    else{eventActual.html('<p>Ara descansem</p>')}
  }
};

function startViews()
{
  if ($(window).width()>=770)
  {
    detallInfo.show();
    detalleInfo.stop();
  };
};

function actionBotonera()
{
  botonera.on('click', function (e)
  {
    console.log($(this).attr('id'));
    e.preventDefault();
    botonera.removeClass('botoneraActive');
    $(this).addClass('botoneraActive');

    if ($(this).attr('id')=='d1')
    {
      diasEventos.fadeOut();
      $('#dia1').fadeIn();
    }
    else if ($(this).attr('id')=='d2')
    {
      diasEventos.fadeOut();
      $('#dia2').fadeIn();
    }
    else if ($(this).attr('id')=='d3')
    {
      diasEventos.fadeOut();
      $('#dia3').fadeIn();
    }
    else if ($(this).attr('id')=='d4')
    {
      diasEventos.fadeOut();
      $('#dia4').fadeIn();
    }
    else if ($(this).attr('id')=='d5')
    {
      diasEventos.fadeOut();
      $('#dia5').fadeIn();
    }
    else if ($(this).attr('id')=='d6')
    {
      diasEventos.fadeOut();
      $('#dia6').fadeIn();
    }
    else if ($(this).attr('id')=='d7')
    {
      diasEventos.fadeOut();
      $('#dia7').fadeIn();
    }
    else if ($(this).attr('id')=='d8')
    {
      diasEventos.fadeOut();
      $('#dia8').fadeIn();
    }
    else if ($(this).attr('id')=='d9')
    {
      diasEventos.fadeOut();
      $('#dia9').fadeIn();
    }
    else if ($(this).attr('id')=='d10')
    {
      diasEventos.fadeOut();
      $('#dia10').fadeIn();
    }
    else if ($(this).attr('id')=='d11')
    {
      diasEventos.fadeOut();
      $('#dia11').fadeIn();
    }
    else if ($(this).attr('id')=='d12')
    {
      diasEventos.fadeOut();
      $('#dia12').fadeIn();
    }
    else if ($(this).attr('id')=='d13')
    {
      diasEventos.fadeOut();
      $('#dia13').fadeIn();
    }
    else if ($(this).attr('id')=='d14')
    {
      diasEventos.fadeOut();
      $('#dia14').fadeIn();
    }
    else{console.log('la botonera esta fallando')}
  });
};

function actionEvents()
{
  $('div.evento').on('click', function()
  {
    $(this).find('div.desplegado').slideToggle();
    $(this).find('div.plegado').fadeToggle();
  })
};

function actionInfo()
{
  $('div.checkInfo').on('click', function()
  {
    $(this).parent().find('div.post .detallePost').slideToggle();
    console.log($(this))
  })
};


function resizer (multiplicador)
{
  for (var i = 0; i < texto.length; i++)
  {    
    if (texto[i].style.fontSize == "")
    {
        texto[i].style.fontSize = "1em";
    }
    
    texto[i].style.fontSize = parseFloat(texto[i].style.fontSize)+ (multiplicador * 0.1) + "em";
  };
};


// //Facebook
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.0";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));



// Precarga de imagenes =============================
function preloadImg(containerId, imgUrl, imageId) {
    var i = document.createElement('img'); // or new Image()
    // may be you need to set the element id...
    i.id = imageId;
    // here handle on load event
    i.onload = function () {
        var container = document.getElementById(containerId);
        // finally the new image is loaded, you can trigger your action
        container.appendChild(this);
    };
    // This is the last step, set the url and start the image download.
    i.src = imgUrl;
}

preloadImg('mural', 'http://ulldecona.herobo.com/image/fqu/eventos/mural.jpg');
preloadImg('nadador', 'http://ulldecona.herobo.com/image/fqu/eventos/nadador.jpg');
preloadImg('moto', '../img/moto.jpg');
// preloadImg('moto', 'http://ulldecona.herobo.com/image/fqu/eventos/moto.jpg');

var container = document.getElementById('imgContainer');
container.style.display = 'block';

