
var eventoActual = $('#eventoActual');
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


var detalleEvento = $('div.detalleEvento');
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

  actionAmpliar()
};

function ancla1()
{
  $('body,html').stop(true,true).animate(
    {
      scrollTop: $('#botonera').offset().top
    })
}

setInterval(startClock, 1000);

function startClock()
{
  fecha = new Date();
  dia = fecha.getDate();
  hora = fecha.getHours();
  min = fecha.getMinutes();
  seg = fecha.getSeconds();

  if (dia==29)
  {
    if (hora==20&&min>=30) 
    {
      detalleEvento.html(arrayEa[0])

    }
    else if (hora==21)
    {
      detalleEvento.html(arrayEa[1])
    }
    else if (hora==22)
    {
      detalleEvento.html(arrayEa[2])
    }
    else
    {
      // eventoActual.removeClass('eventoActual')
      // eventoActual.addClass('descansando');
    }
  }
  else if (dia==30)
  {
    if ((hora==18&&min>=30)||hora==19)
    {
      detalleEvento.html(arrayEa[3])
    }
    else if (hora==20||hora==21)
    {
      detalleEvento.html(arrayEa[4])
    }
    else if (hora==22)
    {
      detalleEvento.html(arrayEa[5])
    }
    else if (hora==23)
    {
      detalleEvento.html(arrayEa[6])
    }
    else
    {
      // eventoActual.removeClass('eventoActual')
      // eventoActual.addClass('descansando');
    }
  }
  else if (dia==31)
  {
    if (hora==0||hora==1)
    {
      detalleEvento.html(arrayEa[6])
    }
    else if ((hora==11&&min>=30)||hora==12||hora==13)
    {
      detalleEvento.html(arrayEa[7])
    }
    else
    {
      // eventoActual.removeClass('eventoActual')
      // eventoActual.addClass('descansando');
    }
  }
  else if (dia==2)
  {
    if (hora==20||hora==21)
    {
      detalleEvento.html(arrayEa[8])
    }
    else
    {
      // eventoActual.removeClass('eventoActual')
      // eventoActual.addClass('descansando');
    }
  }
  else if (dia==3)
  {
    if (hora==20||hora==21)
    {
      detalleEvento.html(arrayEa[9])
    }
    else if ((hora==22&&min>=30)||hora==23)
    {
      detalleEvento.html(arrayEa[10])
    }
    else
    {
      // eventoActual.removeClass('eventoActual')
      // eventoActual.addClass('descansando');
    }
  }
  else if (dia==4)
  {
    if (hora==19)
    {
      detalleEvento.html(arrayEa[11])
    }
    else if (hora==20||hora==21)
    {
      detalleEvento.html(arrayEa[12]);
      detalleEvento.append(arrayEa[13]);
    }
    else if (hora==22||hora==23)
    {
      detalleEvento.html(arrayEa[14])
    }
    else
    {
      // eventoActual.removeClass('eventoActual')
      // eventoActual.addClass('descansando');
    }
  }
  else if (dia==5)
  {
    if (hora==16)
    {
      detalleEvento.html(arrayEa[15])
    }
    else if (hora==17&&min<=29)
    {
      detalleEvento.html(arrayEa[16])
    }
    else if (hora==17)
    {
      detalleEvento.html(arrayEa[17])
    }
    else if (hora==18)
    {
      detalleEvento.html(arrayEa[18])
    }
    else if (hora==19)
    {
      detalleEvento.html(arrayEa[19])
    }
    else if (hora==20&&min<=14)
    {
      detalleEvento.html(arrayEa[20])
    }
    else if (hora==20&&min<=29)
    {
      detalleEvento.html(arrayEa[21])
    }
    else if (hora==20||hora==21)
    {
      detalleEvento.html(arrayEa[22])
    }
    else
    {
      // eventoActual.removeClass('eventoActual')
      // eventoActual.addClass('descansando');
    }
  }
  else if (dia==6)
  {
    if (hora==0)
    {
      detalleEvento.html(arrayEa[23]);
      detalleEvento.append(arrayEa[24]);
      detalleEvento.append(arrayEa[25]);
    }
    else if (hora==10&&min<=29)
    {
      detalleEvento.html(arrayEa[26])
    }
    else if (hora==10)
    {
      detalleEvento.html(arrayEa[27]);
      detalleEvento.append(arrayEa[28]);
    }
    else if (hora==11)
    {
      detalleEvento.html(arrayEa[29])
    }
    else if (hora==12)
    {
      detalleEvento.html(arrayEa[30])
    }
    else if ((hora==13&&min>=15)||hora==14)
    {
      detalleEvento.html(arrayEa[31])
    }
    else if (hora==16||(hora==17&&min<=29))
    {
      detalleEvento.html(arrayEa[32])
    }
    else if (hora==17&&min>=30)
    {
      detalleEvento.html(arrayEa[33])
    }
    else if (hora==18(hora==19&&min<=29))
    {
      detalleEvento.html(arrayEa[34])
    }
    else if (hora==19&&min>=30)
    {
      detalleEvento.html(arrayEa[35])
    }
    else if (hora==20||(hora==21&&min<=29))
    {
      detalleEvento.html(arrayEa[36])
    }
    else if ((hora==21&&min>=30)||(hora==22&&min<=44))
    {
      detalleEvento.html(arrayEa[37])
    }
    else if ((hora==22&&min>=45)||(hora==23&min<=14))
    {
      detalleEvento.html(arrayEa[38])
    }
    else if ((hora==23&&min<=29))
    {
      detalleEvento.html(arrayEa[39])
    }
    else if (hora==23&&min>=30)
    {
      detalleEvento.html(arrayEa[40]);
      detalleEvento.append(arrayEa[41]);
      detalleEvento.append(arrayEa[42]);
    }
    else
    {
      // eventoActual.removeClass('eventoActual')
      // eventoActual.addClass('descansando');
    }
  }
  else if (dia==7)
  {
    if (hora==0||hora==1||hora==2||hora==3)
    {
      detalleEvento.html(arrayEa[43]);
      detalleEvento.append(arrayEa[44]);
    }
    else if (hora==9&&min<=29)
    {
      detalleEvento.html(arrayEa[45])
    }
    else if (hora==9&&min>=30)
    {
      detalleEvento.html(arrayEa[46]);
      detalleEvento.append(arrayEa[47]);
    }
    else if (hora==10)
    {
      detalleEvento.html(arrayEa[48]);
      detalleEvento.append(arrayEa[49]);
      detalleEvento.append(arrayEa[50]);
    }
    else if (hora==10&&min>=30)
    {
      detalleEvento.html(arrayEa[51]);
      detalleEvento.append(arrayEa[52]);
    }
    else if (hora==11&&min<=29)
    {
      detalleEvento.html(arrayEa[53])
    }
    else if ((hora==11&&min>=30)||hora==12)
    {
      detalleEvento.html(arrayEa[54]);
      detalleEvento.append(arrayEa[55]);
    }
    else if (hora==13||hora==14)
    {
      detalleEvento.html(arrayEa[56])
    }
    else if (hora==16)
    {
      detalleEvento.html(arrayEa[33])
    }
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
    $(this).find('div.plegado').fadeToggle()
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

function actionAmpliar()
{
  $('.ampliar').on('click', function(){
    desplegar()
  })

  $('.reducir').on('click', function(){
    plegar()
  })
};

function desplegar()
{
  $('div.evento .desplegado').slideDown();
  $('div.evento .plegado').fadeOut()
};

function plegar()
{
  $('div.evento .desplegado').slideUp();
  $('div.evento .plegado').fadeIn()
}

// //Facebook
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.0";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

