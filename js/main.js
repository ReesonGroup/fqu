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


function ivan () {
  document.getElementById('dia1').style.display='none'
}

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


// Botones del menu ==============
var info='<div class="contieneInformacion"><section class="informacion"><div class="seccionHeader"><h2>Informació <span>relativa a festes</span></h2></div><div class="infoOuter"><div class="infoInner infoEntradas"><div class="checkInfo"><div class="puntos"></div></div><div class="post entrades"><h4>Venda d’entrades i tiquets</h4><div class="detallePost"><h5>Entrades de la Representació Teatral: <span>Confessions de dones de 30</span></h5><p>Venda anticipada a les taquilles del teatre: dilluns 26/8/2013 i dimarts 27/8/2013 de 19.00 a 21.00 hores i el mateix dia de la representació a partir de les 22.00 hores. <br>Preu de l’entrada: 18€</p><h5>Taules i cadires per als dies de ball</h5><p>Fins al 23 d’agost, de 9.00 a 21.00 hores, al retén de l’Ajuntament <br>Taula + 6 cadires: 36€ <br>Cadira: 1€/dia</p><h5>Paella d’Ulldecona (8 de setembre a les 13.30h)</h5><p>Preu per tiquet: 2€ Del dia 19 d’agost fins al 4 de setembre, de les 9.00 a les 21.00, al retén de l’Ajuntament.</p><h5>Sopar d’ex-pubilles</h5><p>Tindrà lloc el divendres 30 d’agost a les 22.00 hores. Preu: 14€ Del dia 1 al 27 d’agost, de les 9.00 a les 21.00, al retén de l’Ajuntament.</p></div></div></div><div class="infoInner infoInscripciones"><div class="checkInfo"><div class="puntos"></div></div><div class="post inscripcions"><h4>Inscripcions gratuiütes</h4><div class="detallePost"><h5>Carrosses</h5><p>La desfilada es realitzarà el diumenge 1 de setembre a les 18.30h. Inscripcions del dia 1 al 23 d’agost, de les 9.00 a les 21.00, al retén de l’Ajuntament.</p><h5>Diada de la Bicicleta</h5><p>Tindrà lloc divendres dia 30 d’agost a les 10.00h. Inscripcions del dia 1 al 27 d’agost, de les 9.00 a les 21.00, al retén de l’Ajuntament per recollir el tiquet.</p><h5>Trobada dels “ulldeconencs-planers” (Santa Bàrbara)</h5><p>Es realitzarà el diumenge 2 de setembre a les 11.00h. Inscripcions del dia 1 al 27 d’agost, de les 9.00 a les 21.00, al retén de l’Ajuntament.</p><h5>Cursa de cotxes bojos.</h5><p>Es realitzarà el dissabte 1 de setembre a les 11.30h. Inscripcions del dia 1 al 30 d’agost, de les 9.00 a les 21.00, al retén de l’Ajuntament.</p></div></div></div><div class="infoInner infoHorarios"><div class="checkInfo"><div class="puntos"></div></div><div class="post horario"><h4>Horari de la piscina municipal en festes majors</h4><div class="detallePost"><p class="detallePostPiscina">Del 23 d’agost a l’1 de setembre de 12.30 A 15.00 Hores, excepte el dia 25 d’agost que hi ha programades les competicions de natació i el dia 27 d’agost que hi ha inflables aquàtics.</p></div></div></div><div class="infoInner infoNotas"><div class="checkInfo"><div class="puntos"></div></div><div class="post notes"><h4>Notes</h4><div class="detallePost"><ul><li>El Programa de les Festes Majors d’Ulldecona 2013 fou aprovat pel Ple el dia 30 de juliol 2013.</li><li> L’Ajuntament es reserva el dret de poder modificar algun acte, si fos necessari, anunciant-ho degudament.</li><li>S’aconsella no circular en cotxe durant les festes, atès que es tallaran diversos carrers a la circulació a causa d’activitats diverses.</li><li>Es recorda a tothom que l’assistència a qualsevol acte amb bous és totalment lliure i voluntària i que, malgrat que l’Ajuntament d’Ulldecona compleix íntegrament la Llei 34/2010 de l’1 d’octubre, de regulació de les festes tradicionals amb bous, sempre hi pot haver algun perill per a les persones que hi van. I també que, d’acord amb l’art. 1 del Decret 385/2000, de 5 de desembre del Departament d’Interior de la Generalitat de Catalunya, <span>es prohibeix l’entrada a les curses de bous als infants i als adolescents menors de 14 anys.</span></li></ul></div></div></div></section></div>'
var pubillas='<div class="contienePubillas"><section class="pubillas"><div class="seccionHeader"><h2>Pubilles Festes Quinquennals 2014</h2></div><div class="pubillasOuter"><article class="pubillasInner"><a href="#" class="enlace" onclick="inyectarInfo()"></a><figure><img src="img/pubilles/pubilla1.jpg" width="100px" height="100px"></figure><div class="detall"><div class="nom"><p>Simina Alexandra Crisan</p></div><div class="club"><p>Club Twirling La Vie d’Ulldecona</p></div></div></article><article class="pubillasInner"><a href="#" class="enlace"></a><figure><img src="img/pubilles/pubilla2.jpg" width="100px" height="100px"></figure><div class="detall"><div class="nom"><p>Simina Alexandra Crisan</p></div><div class="club"><p>Club Twirling La Vie d’Ulldecona</p></div></div></article><article class="pubillasInner"><a href="#" class="enlace"></a><figure><img src="img/pubilles/pubilla3.jpg" width="100px" height="100px"></figure><div class="detall"><div class="nom"><p>Simina Alexandra Crisan</p></div><div class="club"><p>Club Twirling La Vie d’Ulldecona</p></div></div></article><article class="pubillasInner"><a href="#" class="enlace"></a><figure><img src="img/pubilles/pubilla4.jpg" width="100px" height="100px"></figure><div class="detall"><div class="nom"><p>Simina Alexandra Crisan</p></div><div class="club"><p>Club Twirling La Vie d’Ulldecona</p></div></div></article><article class="pubillasInner"><a href="#" class="enlace"></a><figure><img src="img/pubilles/pubilla5.jpg" width="100px" height="100px"></figure><div class="detall"><div class="nom"><p>Simina Alexandra Crisan</p></div><div class="club"><p>Club Twirling La Vie d’Ulldecona</p></div></div></article><article class="pubillasInner"><a href="#" class="enlace"></a><figure><img src="img/pubilles/pubilla6.jpg" width="100px" height="100px"></figure><div class="detall"><div class="nom"><p>Simina Alexandra Crisan</p></div><div class="club"><p>Club Twirling La Vie d’Ulldecona</p></div></div></article><article class="pubillasInner"><a href="#" class="enlace"></a><figure><img src="img/pubilles/pubilla7.jpg" width="100px" height="100px"></figure><div class="detall"><div class="nom"><p>Simina Alexandra Crisan</p></div><div class="club"><p>Club Twirling La Vie d’Ulldecona</p></div></div></article></div></section></div>'
var colaboradores='<div class="contieneColaboradores"><section class="colaboradores"><div class="seccionHeader"><h2>Ells colaboren amb aquest espai</h2></div><div class="logoOuter"><div class="logoInner"><figure><img src="img/logo/animalons.png" alt=""/></figure></div><div class="logoInner"><figure><img src="img/logo/jjp.png" alt=""/></figure></div><div class="logoInner"><figure><img src="img/logo/lagrama.png" alt=""/></figure></div><div class="logoInner"><figure><img src="img/logo/ulldeclinic.png" alt=""/></figure></div><div class="logoInner"><figure><img src="img/logo/energy.png" alt=""/></figure></div></div></section></div>'


function inyectarPubillas() {
  document.getElementById('escritorioInner').innerHTML=pubillas;
} 

function inyectarInfo() {
  document.getElementById('escritorioInner').innerHTML=info;
} 

function inyectarColaboradores() {
  document.getElementById('escritorioInner').innerHTML=colaboradores;
} 


// Todas las unaPubilla ================
 var simina='<div class="unaPubilla"><div class="back" onclick="inyectarInfo()"><div class="backTo"><span>Pubillas</span></div></div><div class="hero"><div class="fotoOuter"><div class="foto" style="background-image:url(../img/pubilles/pubillaGran1.png);"></div></div><div class="degradado"></div><div class="detalle"><div class="nombre">Simina Alexandra Crisan</div><div class="club">Penya Barcelonista Ulldecona</div></div></div><div class="texto"><p>Hola falduts i faldudes!</p><p>Ja tenim les festes d’Ulldecona aquí, i un any més, totes les pubilles estem preparades i, sobretot, molt nervioses, per a representar de la millor manera possible les diferents entitats del poble.</p><p>Farem que estes festes siguin inoblidables i les gaudirem al màxim, començant per la nit del pregó i posant el punt i final amb els focs artificials.</p><p>Una d’estes pubilles sereé jo, Simina. Tinc disset anys, acabo de cursar1r de Batxillerat en la modalitat Artística a Tortosa i de cara al futur m’agradaria estudiar a la universitat de Belles Arts. Sóc de nacionalitat romanesa, però porto tretze anys vivint a Ulldecona, i em considero una falduda més del poble, ja que sempre m’he sentit molt a gust aquí.</p><p>Com a pubilla representaré a la Penya Barcelonista d’Ulldecona, i agraeixo a la entitat que m’hagin donat la oportunitat de viure les festes d’una manera diferent, ja que des de ben petita he participat als seus concursos de dibuix i, fins i tot, he guanyat alguns premis.</p><p>Durant estes festes, jo seré una de les protagonistes, per això us invito a tots a que vingueu al nostre poble i que tots junts poguéssim gaudir de les tardes de bous, les nits d’orquestra, la pujada al Castell i tots els altres actes que es faran durant tota la setmana.</p><p>Xaleu al màxim durant les Festes 2013!</p></div><div class="back" onclick="inyectarInfo()"><div class="backTo"><span>Pubillas</span></div></div></div>'

function simina() {
  document.getElementById('escritorioInner').innerHTML=simina;
} 

