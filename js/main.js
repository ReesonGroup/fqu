
var eventoActual = $('#eventoActual');
var info = $('div.contieneInformacion');
var detallInfo = $('div.detallePost');
var diasEventos = $('div.listaEventos');
var botonera = $('div.botonera li');
var plegado = $('div.plegado');
var desplegado = $('div.desplegado');

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

  actionAmpliar();

  // resizeWindow();
};

function ancla1()
{
  $('body,html').stop(true,true).animate(
    {
      scrollTop: $('#botonera').offset().top
    })
};

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
  }
  else if (dia==2)
  {
    if (hora==20||hora==21)
    {
      detalleEvento.html(arrayEa[8])
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
  }
  else if (dia==4)
  {
    if (hora==19)
    {
      detalleEvento.html(arrayEa[11])
    }
    else if (hora==20||hora==21)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[12]);
      detalleEvento.append(arrayEa[13]);
    }
    else if (hora==22||hora==23)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento2');
      detalleEvento.html(arrayEa[14])
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
  }
  else if (dia==6)
  {
    if (hora==0||hora==1||hora==2||hora==3||hora==4||hora==5||hora==6)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[23]);
      detalleEvento.append(arrayEa[24]);
      detalleEvento.append(arrayEa[25]);
    }
    else if (hora==10&&min<=29)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento3');
      detalleEvento.html(arrayEa[26])
    }
    else if (hora==10)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[27]);
      detalleEvento.append(arrayEa[28]);
    }
    else if (hora==11)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento2');
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
    else if (hora==18||(hora==19&&min<=29))
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
    else if (hora==23&&min<=29)
    {
      detalleEvento.html(arrayEa[39])
    }
    else if (hora==23&&min>=30)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[40]);
      detalleEvento.append(arrayEa[41]);
      detalleEvento.append(arrayEa[42]);
    }
  }
  else if (dia==7)
  {
    if (hora==0||hora==1||hora==2||hora==3||hora==4||hora==5||hora==6||hora==8)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[43]);
      detalleEvento.append(arrayEa[44]);
    }
    else if (hora==9&&min<=29)
    {
      detalleEvento.html(arrayEa[45])
    }
    else if (hora==9&&min>=30)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[46]);
      detalleEvento.append(arrayEa[47]);
    }
    else if (hora==10)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[48]);
      detalleEvento.append(arrayEa[49]);
      detalleEvento.append(arrayEa[50]);
    }
    else if (hora==10&&min>=30)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[51]);
      detalleEvento.append(arrayEa[52]);
    }
    else if (hora==11&&min<=29)
    {
      detalleEvento.html(arrayEa[53])
    }
    else if ((hora==11&&min>=30)||hora==12)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[54]);
      detalleEvento.append(arrayEa[55]);
    }
    else if (hora==13||hora==14)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento2');
      detalleEvento.html(arrayEa[56])
    }
    else if (hora==16)
    {
      detalleEvento.html(arrayEa[57])
    }
    else if (hora==17&&min<=29)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[58]);
      detalleEvento.append(arrayEa[59])
    }
    else if (hora==17)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento2');
      detalleEvento.html(arrayEa[60])
    }
    else if (hora==18&&min<=29)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[61]);
      detalleEvento.append(arrayEa[62])
    }
    else if (hora==18)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento2');
      detalleEvento.html(arrayEa[63])
    }
    else if (hora==19)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[64])
    }
    else if (hora==20)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[65]);
      detalleEvento.append(arrayEa[66])
    }
    else if (hora==21&&min>=30)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento2');
      detalleEvento.html(arrayEa[67])
    }
    else if (hora==22&&min<=29)
    {
      detalleEvento.html(arrayEa[68])
    }
    else if (hora==22)
    {
      detalleEvento.html(arrayEa[69])
    }
  }
  else if (dia==8)
  {
    if (hora==0||hora==1||hora==2||hora==3||hora==4||hora==5||hora==6)
    {
      detalleEvento.html(arrayEa[70])
    }
    else if (hora==10&&min>=30)
    {
      detalleEvento.html(arrayEa[71])
    }
    else if (hora==11)
    {
      detalleEvento.html(arrayEa[72])
    }
    else if ((hora==12&&min>=45)||hora==13&&min<=30)
    {
      detalleEvento.html(arrayEa[73])
    }
    else if ((hora==15&&min>=30)||hora==16)
    {
      detalleEvento.html(arrayEa[74])
    }
    else if (hora==17)
    {
      detalleEvento.html(arrayEa[75])
    }
    else if (hora==18)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[76]);
      detalleEvento.append(arrayEa[77])
    }
    else if (hora==19)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[77]);
      detalleEvento.append(arrayEa[78])
    }
    else if (hora==20)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento2');
      detalleEvento.html(arrayEa[79])
    }
    else if ((hora==21&&min>=30)||hora==22)
    {
      detalleEvento.html(arrayEa[80])
    }
    else if (hora==23&&min<=44)
    {
      detalleEvento.html(arrayEa[81])
    }
    else if (hora==23)
    {
      detalleEvento.html(arrayEa[82])
    }
  }
  else if (dia==9)
  {
    if (hora==0||hora==1)
    {
      detalleEvento.html(arrayEa[83])
    }
    else if (hora==2||hora==3||hora==4||hora==5||hora==6||hora==7)
    {
      detalleEvento.html(arrayEa[84])
    }
    else if (hora==11&&min<=29)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[86]);
      detalleEvento.append(arrayEa[85])
      detalleEvento.append(arrayEa[87])
    }
    else if (hora==11&&min>=30)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento3');
      detalleEvento.html(arrayEa[88])
    }
    else if (hora==12&&min<=44)
    {
      detalleEvento.html(arrayEa[89])
    }
    else if (hora==12||(hora=13&&min<=30))
    {
      detalleEvento.html(arrayEa[90])
    }
    else if ((hora==15&&min>=30)||hora==16)
    {
      detalleEvento.html(arrayEa[91])
    }
    else if (hora==17)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[92]);
      detalleEvento.append(arrayEa[93])
    }
    else if (hora==18)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[94]);
      detalleEvento.append(arrayEa[95]);
      detalleEvento.append(arrayEa[96])
    }
    else if (hora==19)
    {
      detalleEvento.html(arrayEa[97])
    }
    else if (hora==21||hora==22)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[98]);
      detalleEvento.append(arrayEa[99]);
      detalleEvento.append(arrayEa[100])
    }
    else if (hora==23)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento3');
      detalleEvento.html(arrayEa[101])
    }
  }
  else if (dia==10)
  {
    if (hora==0||hora==1||hora==2||hora==3||hora==4||hora==5)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[102]);
      detalleEvento.append(arrayEa[103]);
      detalleEvento.append(arrayEa[104])
    }
    else if (hora==9)
    {
      detalleEvento.html(arrayEa[105])
    }
    else if (hora==11)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[106]);
      detalleEvento.append(arrayEa[107])
    }
    else if ((hora==12&&min>=45)||hora==13&&min<=30)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento2');
      detalleEvento.html(arrayEa[108])
    }
    else if (hora==15||hora==17)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[109]);
      detalleEvento.append(arrayEa[110])
    }
    else if (hora==18)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleMultiEvento2')
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[111]);
      detalleEvento.append(arrayEa[112]);
      detalleEvento.append(arrayEa[113])
    }
    else if (hora==19)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento3');
      detalleEvento.html(arrayEa[114])
    }
    else if (hora==20||hora==21)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[115]);
      detalleEvento.append(arrayEa[116])
    }
    else if (hora==22)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento2');
      detalleEvento.html(arrayEa[117])
    }
    else if (hora==23&&min>=30)
    {
      detalleEvento.html(arrayEa[118])
    }
  }
  else if (dia==11)
  {
    if (hora==0||(hora==1&&min<=29))
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[119]);
      detalleEvento.append(arrayEa[120])
    }
    else if (hora==1||hora==2||hora==3||hora==4)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleMultiEvento2')
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[119]);
      detalleEvento.append(arrayEa[120]);
      detalleEvento.append(arrayEa[121])
    }
    else if ((hora==9&&min>=30)||hora==10)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento3');
      detalleEvento.html(arrayEa[122])
    }
    else if (hora==11&&min<=45)
    {
      detalleEvento.html(arrayEa[123])
    }
    else if (hora==11)
    {
      detalleEvento.html(arrayEa[124])
    }
    else if (hora==12&&min<=44)
    {
      detalleEvento.html(arrayEa[125])
    }
    else if (hora==12||(hora==13&&min<=30))
    {
      detalleEvento.html(arrayEa[126])
    }
    else if ((hora==15&&min>=30)||hora==16)
    {
      detalleEvento.html(arrayEa[127])
    }
    else if (hora==17)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[128]);
      detalleEvento.append(arrayEa[129]);
      detalleEvento.append(arrayEa[130])
    }
    else if (hora==18)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento3');
      detalleEvento.html(arrayEa[131])
    }
    else if (hora==20||(hora==21&&min<=29))
    {
      detalleEvento.html(arrayEa[132])
    }
    else if (hora==21||hora==22)
    {
      detalleEvento.html(arrayEa[133])
    }
    else if (hora==23&&min<=14)
    {
      detalleEvento.html(arrayEa[134]);
    }
    else if (hora==23)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[135]);
      detalleEvento.append(arrayEa[136])
    }
  }
  else if (dia==12)
  {
    if (hora==0||hora==1||hora==2||hora==3||hora==4||hora==5||hora==6)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleMultiEvento2')
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[136]);
      detalleEvento.append(arrayEa[137]);
      detalleEvento.append(arrayEa[138]);
      detalleEvento.append(arrayEa[139])
    }
    else if (hora==10)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleMultiEvento3')
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[140]);
      detalleEvento.append(arrayEa[141])
    }
    else if (hora==11)
    {
      detalleEvento.html(arrayEa[142])
    }
    else if ((hora==12&&min>=45)||hora==13&&min<=30)
    {
      detalleEvento.html(arrayEa[143])
    }
    else if ((hora==15&&min>=30)||hora==16)
    {
      detalleEvento.html(arrayEa[144])
    }
    else if (hora==17)
    {
      detalleEvento.html(arrayEa[145])
    }
    else if (hora==18)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[146]);
      detalleEvento.append(arrayEa[147]);
      detalleEvento.append(arrayEa[148])
    }
    else if (hora==19)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento3');
      detalleEvento.html(arrayEa[149])
    }
    else if ((hora==20&&min>=30)||hora==21)
    {
      detalleEvento.html(arrayEa[150])
    }
    else if (hora==22)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[151]);
      detalleEvento.append(arrayEa[152])
    }
  }
  else if (dia==13)
  {
    if (hora==0||hora==2||hora==3||hora==4||hora==5||hora==6)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleMultiEvento2')
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[153]);
      detalleEvento.append(arrayEa[154]);
      detalleEvento.append(arrayEa[155]);
      detalleEvento.append(arrayEa[156])
    }
    else if (hora==1)
    {
      detalleEvento.html(arrayEa[157])
    }
    else if ((hora==9&&min>=30)||hora==10)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[158]);
      detalleEvento.append(arrayEa[159])
    }
    else if (hora==11)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[161]);
      detalleEvento.append(arrayEa[162])
    }
    else if (hora==12)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[160]);
      detalleEvento.append(arrayEa[162])
    }
    else if (hora==18)
    {
      detalleEvento.addClass('detalleMultiEvento2');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[163]);
      detalleEvento.append(arrayEa[164])
    }
    else if (hora==20)
    {
      detalleEvento.addClass('detalleMultiEvento5');
      detalleEvento.removeClass('detalleMultiEvento2')
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[165]);
      detalleEvento.append(arrayEa[166]);
      detalleEvento.append(arrayEa[167]);
      detalleEvento.append(arrayEa[168]);
      detalleEvento.append(arrayEa[169])
    }
    else if (hora==21)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento5');
      detalleEvento.html(arrayEa[168])
    }
    else if (hora==22)
    {
      detalleEvento.html(arrayEa[170])
    }
  }
  else if (dia==14)
  {
    if (hora==0||hora==1||hora==2||hora==3||hora==4||hora==5||hora==6||hora==7||hora==8)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[171]);
      detalleEvento.append(arrayEa[172]);
      detalleEvento.append(arrayEa[173])
    }
    else if (hora==8&&min>=30)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento3');
      detalleEvento.html(arrayEa[174])
    }
    else if (hora==9)
    {
      detalleEvento.html(arrayEa[175])
    }
    else if (hora==10)
    {
      detalleEvento.html(arrayEa[176])
    }
    else if (hora==11&&min<=29)
    {
      detalleEvento.html(arrayEa[177])
    }
    else if (hora==11||hora==12)
    {
      detalleEvento.html(arrayEa[178])
    }
    else if ((hora==13&&min>=30)||hora==14||hora==15)
    {
      detalleEvento.html(arrayEa[179])
    }
    else if (hora==20||hora==21)
    {
      detalleEvento.addClass('detalleMultiEvento3');
      detalleEvento.removeClass('detalleEvento');
      detalleEvento.html(arrayEa[180]);
      detalleEvento.append(arrayEa[181]);
      detalleEvento.append(arrayEa[182])
    }
    else if (hora==23)
    {
      detalleEvento.addClass('detalleEvento');
      detalleEvento.removeClass('detalleMultiEvento3');
      detalleEvento.html(arrayEa[183])
    }
  }     
};

function startViews()
{
  if ($(window).width()>=770)
  {
    detallInfo.show();
    detallInfo.stop();
  }

  if (dia==29)
  {
    dia1.fadeIn();
    $('#d1').addClass('botoneraActive')
  }
  else if (dia==30)
  {
    dia2.fadeIn();
    $('#d2').addClass('botoneraActive')
  }
  else if (dia==31)
  {
    dia3.fadeIn();
    $('#d3').addClass('botoneraActive')
  }
  else if (dia==2)
  {
    dia4.fadeIn();
    $('#d4').addClass('botoneraActive')
  }
  else if (dia==3)
  {
    dia5.fadeIn();
    $('#d5').addClass('botoneraActive')
  }
  else if (dia==4)
  {
    dia6.fadeIn();
    $('#d6').addClass('botoneraActive')
  }
  else if (dia==5)
  {
    dia7.fadeIn();
    $('#d7').addClass('botoneraActive')
  }
  else if (dia==6)
  {
    dia8.fadeIn();
    $('#d8').addClass('botoneraActive');
    $('#botonera ul').scrollLeft(411)
  }
  else if (dia==7)
  {
    dia9.fadeIn();
    $('#d9').addClass('botoneraActive');
    $('#botonera ul').scrollLeft(479)
  }
  else if (dia==8)
  {
    dia10.fadeIn();
    $('#d10').addClass('botoneraActive');
    $('#botonera ul').scrollLeft(549)
  }
  else if (dia==9)
  {
    dia11.fadeIn();
    $('#d11').addClass('botoneraActive');
    $('#botonera ul').scrollLeft(634)
  }
  else if (dia==10)
  {
    dia12.fadeIn();
    $('#d12').addClass('botoneraActive');
    $('#botonera ul').scrollLeft(704)
  }
  else if (dia==11)
  {
    dia13.fadeIn();
    $('#d13').addClass('botoneraActive');
    $('#botonera ul').scrollLeft(774)
  }
  else if (dia==12)
  {
    dia14.fadeIn();
    $('#d14').addClass('botoneraActive');
    $('#botonera ul').scrollLeft(850)
  }
  else if (dia==13)
  {
    dia15.fadeIn();
    $('#d15').addClass('botoneraActive');
    $('#botonera ul').scrollLeft(890)
  }
  else if (dia==14)
  {
    dia16.fadeIn();
    $('#d16').addClass('botoneraActive');
    $('#botonera ul').scrollLeft(890)
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
  $('div#bar').on('click',function(){

    var that = $(this);
    var span = that.find('span')

    if (that.hasClass('reducir'))
    {
      that.removeClass();
      that.addClass('ampliar');
      span.html('Expandir events')
    }
    else
    {
      that.removeClass();
      that.addClass('reducir');
      span.html('Contraure events');
      $('.reducir').one('click', function(){
        plegar()
      })
    }
  })

  $('.ampliar').on('click', function(){
    desplegar()
  })

  
};

function desplegar()
{
  desplegado.slideDown();
  plegado.fadeOut()
};

function plegar()
{
  desplegado.slideUp();
  plegado.fadeIn()
};

// function resizeWindow()
// {
//   $(window).resize(function()
//   {

//     if ($(window).width()>770)
//     {
//       detallInfo.show();
//       detallInfo.stop();
//     }
//     else if ($(window).width()<770)
//     {
//       detallInfo.hide();
//     }
//   })
// }
