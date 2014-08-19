
var info = $('div.contieneInformacion');
var detallInfo = $('div.detallePost');
var partners = $('div.contieneColaboradores');
var navPubillas = $('section.pubillas');
var unaPubilla = $('div.unaPubilla');
var pubillas = $('section.pubillas');
var diasEventos = $('div.listaEventos');
var butPubillas = $('#butPubillas span');
var butInfo = $('#butInfo span');
var butPartners = $('#butPartners span');
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
  unaPubilla.hide();

  diasEventos.hide();

  startClock();

  startViews();
  
  actionNavPubillas();

  actionBotonera();

  actionEvents();

  actionInfo();

  backTo();
};


function ancla1()
{
  $('body,html').stop(true,true).animate(
    {
      scrollTop: $('#llamadaTitulo').offset().top
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
    partners.hide();
    info.hide();

    butPubillas.on('click', function()
    {
      $(this).addClass('pubillasActive');
      butInfo.removeClass('infoActive');
      butPartners.removeClass('colaboradoresActive');
      navPubillas.fadeIn();
      unaPubilla.fadeOut();
      info.fadeOut();
      partners.fadeOut();
    });
    butInfo.on('click', function()
    {
      $(this).addClass('infoActive');
      butPartners.removeClass('colaboradoresActive');
      butPubillas.removeClass('pubillasActive');
      navPubillas.fadeOut();
      unaPubilla.fadeOut();
      info.fadeIn();
      partners.fadeOut();
    });
    butPartners.on('click', function()
    {
      $(this).addClass('colaboradoresActive');
      butPubillas.removeClass('pubillasActive');
      butInfo.removeClass('infoActive');
      navPubillas.fadeOut();
      unaPubilla.fadeOut();
      info.fadeOut();
      partners.fadeIn();
    });
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
      $('#dia10').fadeIn();
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

function backTo()
{
  $('div.backTo').on('click', function()
  {
    $('body,html').stop(true,true).animate(
    {
      scrollTop: $('#llamadaTitulo').offset().top
    })
    unaPubilla.fadeOut();
    navPubillas.fadeIn();
  })
};

function actionNavPubillas()
{
  $('article.pubillasInner').on('click', function()
  {
    var el=$(this).attr('id');
    navPubillas.fadeOut();
    if (el=='navButPub1')
    {
      $('#pub1').fadeIn();
      ancla1();
    }
    else if (el=='navButPub2')
    {
      $('#pub2').fadeIn();
      ancla1();
    }
    else if (el=='navButPub4')
    {
      $('#pub4').fadeIn();
      ancla1();
    }
    else if (el=='navButPub5')
    {
      $('#pub5').fadeIn();
      ancla1();
    }
    else if (el=='navButPub6')
    {
      $('#s6').fadeIn();
      ancla1();
    }
    else if (el=='navButPub7')
    {
      $('#pub7').fadeIn();
      ancla1();
    }
    else{console.log('Algo falla en la botonera')};
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

