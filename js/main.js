
var info = $('div.contieneInformacion');
var detallInfo = $('div.detallePost');
var diasEventos = $('div.listaEventos');
var botonera = $('div.botonera li');

var dia1 = $('#dia1');
var dia2 = $('#dia2');
var dia3 = $('#dia3');
var dia4 = $('#dia4');
var dia5 = $('#dia5');
var dia6 = $('#dia6');
var dia7 = $('#dia7');
var dia8 = $('#dia8');
var dia9 = $('#dia9');
var dia10 = $('#dia10');
var dia11 = $('#dia11');
var dia12 = $('#dia12');
var dia13 = $('#dia13');
var dia14 = $('#dia14');
var dia15 = $('#dia15');
var dia16 = $('#dia16');


var eventActual = $('div.detalleEvento');
var arrayEa = $('div.plegado').clone();

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

  if (dia==29)
  {

    if (hora==20 && min>=30) 
    {
      eventActual.html(arrayEa[0])

    }
    else if (hora==21)
    {
      eventActual.html(arrayEa[1])
    }
    else if (hora==22)
    {
      eventActual.html(arrayEa[2])
    }
    else{eventActual.html('<p>Ara descansem</p>')}
  }
  else if (dia==30)
  {
    if ((hora==18&&min>=30)||hora==19)
    {
      eventActual.html(arrayEa[3])
    }
    else if (hora==20||hora==21)
    {
      eventActual.html(arrayEa[4])
    }
    else if (hora==22)
    {
      eventActual.html(arrayEa[5])
    }
    else if (hora==23||hora==0||hora==1)
    {
      eventActual.html(arrayEa[6])
    }
  }
  else if (dia==31)
  {
    if (true) {};
  }
};

function startViews()
{
  if ($(window).width()>=770)
  {
    detallInfo.show();
    detallInfo.stop();
  };

  if (dia==29)
  {
    dia1.fadeIn();
  }
  else if (dia==30)
  {
    dia2.fadeIn()
  }
  else if (dia==31)
  {
    dia3.fadeIn()
  }
  else if (dia==2)
  {
    dia4.fadeIn()
  }
  else if (dia==3)
  {
    dia5.fadeIn()
  }
  else if (dia==4)
  {
    dia6.fadeIn()
  }
  else if (dia==5)
  {
    dia7.fadeIn()
  }
  else if (dia==6)
  {
    dia8.fadeIn()
  }
  else if (dia==7)
  {
    dia9.fadeIn()
  }
  else if (dia==8)
  {
    dia10.fadeIn()
  }
  else if (dia==9)
  {
    dia11.fadeIn()
  }
  else if (dia==10)
  {
    dia12.fadeIn()
  }
  else if (dia==11)
  {
    dia13.fadeIn()
  }
  else if (dia==12)
  {
    dia14.fadeIn()
  }
  else if (dia==13)
  {
    dia15.fadeIn()
  }
  else if (dia==14)
  {
    dia16.fadeIn()
  }
};


function actionBotonera()
{
  botonera.on('click', function (e)
  {
    console.log($(this).attr('id'));
    e.preventDefault();
    ancla1();
    botonera.removeClass('botoneraActive');
    $(this).addClass('botoneraActive');

    if ($(this).attr('id')=='d1')
    {
      diasEventos.fadeOut();
      dia1.fadeIn();
    }
    else if ($(this).attr('id')=='d2')
    {
      diasEventos.fadeOut();
      dia2.fadeIn();
    }
    else if ($(this).attr('id')=='d3')
    {
      diasEventos.fadeOut();
      dia3.fadeIn();
    }
    else if ($(this).attr('id')=='d4')
    {
      diasEventos.fadeOut();
      dia4.fadeIn();
    }
    else if ($(this).attr('id')=='d5')
    {
      diasEventos.fadeOut();
      dia5.fadeIn();
    }
    else if ($(this).attr('id')=='d6')
    {
      diasEventos.fadeOut();
      dia6.fadeIn();
    }
    else if ($(this).attr('id')=='d7')
    {
      diasEventos.fadeOut();
      dia7.fadeIn();
    }
    else if ($(this).attr('id')=='d8')
    {
      diasEventos.fadeOut();
      dia8.fadeIn();
    }
    else if ($(this).attr('id')=='d9')
    {
      diasEventos.fadeOut();
      dia9.fadeIn();
    }
    else if ($(this).attr('id')=='d10')
    {
      diasEventos.fadeOut();
      dia10.fadeIn();
    }
    else if ($(this).attr('id')=='d11')
    {
      diasEventos.fadeOut();
      dia11.fadeIn();
    }
    else if ($(this).attr('id')=='d12')
    {
      diasEventos.fadeOut();
      dia12.fadeIn();
    }
    else if ($(this).attr('id')=='d13')
    {
      diasEventos.fadeOut();
      dia13.fadeIn();
    }
    else if ($(this).attr('id')=='d14')
    {
      diasEventos.fadeOut();
      dia14.fadeIn();
    }
    else if ($(this).attr('id')=='d15')
    {
      diasEventos.fadeOut();
      dia15.fadeIn();
    }
    else if ($(this).attr('id')=='d16')
    {
      diasEventos.fadeOut();
      dia16.fadeIn();
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

