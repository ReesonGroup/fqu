function init(){diasEventos.hide(),startClock(),startViews(),actionBotonera(),actionEvents(),actionInfo()}function ancla1(){$("body,html").stop(!0,!0).animate({scrollTop:$("#botonera").offset().top})}function startClock(){fecha=new Date,dia=fecha.getDate(),hora=fecha.getHours(),min=fecha.getMinutes(),seg=fecha.getSeconds(),dia&&eventActual.html(10==hora||11==hora&&29>=min?arrayEa[0]:11==hora&&min>=30?arrayEa[1]:13==hora?arrayEa[2]:16==hora?arrayEa[3]:17==hora&&29>=min?arrayEa[4]:17==hora&&min>=30?arrayEa[5]:18==hora?arrayEa[6]:19==hora?arrayEa[7]:20==hora||21==hora&&29>=min?arrayEa[8]:21==hora&&min>=30?arrayEa[9]:23==hora?arrayEa[10]:"<p>Ara descansem</p>")}function startViews(){$(window).width()>=770&&(detallInfo.show(),detallInfo.stop())}function actionBotonera(){botonera.on("click",function(a){console.log($(this).attr("id")),a.preventDefault(),botonera.removeClass("botoneraActive"),$(this).addClass("botoneraActive"),"d1"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia1").fadeIn()):"d2"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia2").fadeIn()):"d3"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia3").fadeIn()):"d4"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia4").fadeIn()):"d5"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia5").fadeIn()):"d6"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia6").fadeIn()):"d7"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia7").fadeIn()):"d8"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia8").fadeIn()):"d9"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia9").fadeIn()):"d10"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia10").fadeIn()):"d11"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia11").fadeIn()):"d12"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia12").fadeIn()):"d13"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia13").fadeIn()):"d14"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia14").fadeIn()):"d15"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia15").fadeIn()):"d16"==$(this).attr("id")?(diasEventos.fadeOut(),$("#dia16").fadeIn()):console.log("la botonera esta fallando")})}function actionEvents(){$("div.evento").on("click",function(){$(this).find("div.desplegado").slideToggle(),$(this).find("div.plegado").fadeToggle()})}function actionInfo(){$("div.checkInfo").on("click",function(){$(this).parent().find("div.post .detallePost").slideToggle(),console.log($(this))})}function resizer(a){for(var e=0;e<texto.length;e++)""==texto[e].style.fontSize&&(texto[e].style.fontSize="1em"),texto[e].style.fontSize=parseFloat(texto[e].style.fontSize)+.1*a+"em"}function preloadImg(a,e,t){var o=document.createElement("img");o.id=t,o.onload=function(){var e=document.getElementById(a);e.appendChild(this)},o.src=e}var info=$("div.contieneInformacion"),detallInfo=$("div.detallePost"),diasEventos=$("div.listaEventos"),botonera=$("div.botonera li"),eventActual=$("div.detalleEvento"),arrayEa=$("div.plegado").clone(),fecha,dia,hora,min,seg;$(document).on("ready",init),setInterval(startClock,500),preloadImg("mural","http://ulldecona.herobo.com/image/fqu/eventos/mural.jpg"),preloadImg("nadador","http://ulldecona.herobo.com/image/fqu/eventos/nadador.jpg"),preloadImg("moto","http://ulldecona.herobo.com/image/fqu/eventos/moto.jpg"),preloadImg("libro","http://ulldecona.herobo.com/image/fqu/eventos/libro.jpg"),preloadImg("caribe","http://ulldecona.herobo.com/image/fqu/eventos/caribe.jpg"),preloadImg("velas","http://ulldecona.herobo.com/image/fqu/eventos/velas.jpg"),preloadImg("musica","http://ulldecona.herobo.com/image/fqu/eventos/musica.jpg"),preloadImg("ayuntamiento","http://ulldecona.herobo.com/image/fqu/eventos/ayuntamiento.jpg"),preloadImg("comida","http://ulldecona.herobo.com/image/fqu/eventos/comida.jpg"),preloadImg("cercavila","http://ulldecona.herobo.com/image/fqu/eventos/cercavila.jpg"),preloadImg("independencia","http://ulldecona.herobo.com/image/fqu/eventos/independencia.jpg"),preloadImg("nadar","http://ulldecona.herobo.com/image/fqu/eventos/nadar.jpg"),preloadImg("nadar","http://ulldecona.herobo.com/image/fqu/eventos/nadar.jpg"),preloadImg("chimchim","http://ulldecona.herobo.com/image/fqu/eventos/chimchim.jpg"),preloadImg("chimchim2","http://ulldecona.herobo.com/image/fqu/eventos/chimchim2.jpg"),preloadImg("arte","http://ulldecona.herobo.com/image/fqu/eventos/arte.jpg");var container=document.getElementById("imgContainer");container.style.display="block";