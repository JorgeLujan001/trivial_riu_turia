function desplegar(a){
document.getElementById("menup11").style.borderColor="black";
document.getElementById("menup12").style.borderColor="black";
document.getElementById("menup13").style.borderColor="black";
document.getElementById("menup14").style.borderColor="black";

document.getElementById("menup15").style.borderColor="black";
document.getElementById("menup16").style.borderColor="black";
document.getElementById("menup17").style.borderColor="black";
document.getElementById("menup18").style.borderColor="black";
document.getElementById('menup111').style = 'display:none';
document.getElementById('menup112').style = 'display:none';
document.getElementById('menup113').style = 'display:none';
document.getElementById('menup121').style = 'display:none';
document.getElementById('menup131').style = 'display:none';
document.getElementById('menup132').style = 'display:none';
document.getElementById('menup141').style = 'display:none';
document.getElementById('menup142').style = 'display:none';
document.getElementById('menup143').style = 'display:none';
document.getElementById('menup144').style = 'display:none';
document.getElementById('menup132').style = 'display:none';

if(a==0){location.reload();}

if(a==1){document.getElementById("dinamica").innerHTML="Descripció dels elements";
    document.getElementById("menup11").style.borderColor="red";
document.getElementById("infomenu").innerHTML="<br>A banda dels elements fixos que trobarem a la pantalla, es motraran d'altres que aniran variant depenent de l'estat en que es trobe la partida i de les opcions triades.<br><table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td align='center'><img style='width: 77px; height: 87px;' alt='' src='instruccions/dadoturia.gif'></td><td style='text-align: left;  width: 80%;' >Dau: apareixerà en la fase de &quot;llançar dau&quot;. Només podrà activar-lo l&apos;ordinador propietari del torn.</td></tr><tr><td align='center' ><img style='width: 77px; height: 87px;' alt='' src='instruccions/dado01.gif'></td><td style='text-align: left;  width: 80%;' >En aquesta posició, el dau ens marca el desplaçament que pot fer la fitxa posseïdora del torn..</td></tr><tr><td align='center'><img style='width: 77px; height: 87px;' alt='' src='instruccions/dadocolor2.gif'></td><td style='text-align: left;  width: 80%;' >Aquesta imatge apareix quan una de les fitxes es col·loca en la posició central.</td></tr><tr><td align='center' ><img style='width: 83px; height: 83px;' alt='' src='instruccions/fichat.gif'></td><td style='text-align: left;  width: 80%;' >Les fitxes en joc estaran sempre visibles i aniran desplaçant-se per tot el tauler.</td></tr><tr><td align='center'><img style='width: 77px; height: 87px;' alt='' src='instruccions/marcatemps.png'></td><td style='text-align: left;  width: 80%;' >Temps de partida.</td></tr><tr><td align='center'><img style='width: 141px; height: 48px;' alt='' src='instruccions/guardarpartida.png'></td><td style='text-align: left;  width: 80%;' >Guardar partida.</td></tr></tbody></table>";
document.getElementById('menup111').style = 'display:block';
document.getElementById('menup112').style = 'display:block';
document.getElementById('menup113').style = 'display:block';
document.getElementById("menup111").style.borderColor="black";
document.getElementById("menup112").style.borderColor="black";
document.getElementById("menup113").style.borderColor="black";};

if(a==11){document.getElementById("dinamica").innerHTML="Descripció dels elements<br>Pantalla";
document.getElementById("infomenu").innerHTML="<br><table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 476px; height: 385px;' alt='' src='instruccions/pantalla2.png'></td><td style='text-align: left;  width: 60%;' >a) Tauler de joc<br><br>b) Panell d'informació fix amb les opcions de la partida..<br><br>c) Panell d'informació d'accions dinàmiques i panell de preguntes.<br><br>d) Temps disponible per a respondre la pregunta.</td></tr></tbody></table>";
document.getElementById('menup111').style = 'display:block';
document.getElementById('menup112').style = 'display:block';
document.getElementById('menup113').style = 'display:block';
document.getElementById("menup111").style.borderColor="red";
document.getElementById("menup11").style.borderColor="black";
document.getElementById("menup112").style.borderColor="black";
document.getElementById("menup113").style.borderColor="black";;
};

if(a==12){document.getElementById("dinamica").innerHTML="Descripció dels elements<br>Tauler";
document.getElementById("infomenu").innerHTML="<br><table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 528px; height: 528px;' alt='' src='instruccions/tablero.png'></td><td style='text-align: left;  width: 50%;' >El tauler és una circumferència amb sis radis i la casella central.<br><br>Aquesta és la part de la pantalla per on podem moure les fitxes.</td></tr></tbody></table>";
document.getElementById('menup111').style = 'display:block';
document.getElementById('menup112').style = 'display:block';
document.getElementById('menup113').style = 'display:block';
document.getElementById("menup112").style.borderColor="red";
document.getElementById("menup11").style.borderColor="black";
document.getElementById("menup111").style.borderColor="black";
document.getElementById("menup113").style.borderColor="black";
};
if(a==13){document.getElementById("dinamica").innerHTML="Descripció dels elements<br>Panell fix";
document.getElementById("infomenu").innerHTML="<br><table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 495px; height: 489px;' alt='' src='instruccions/panellfijo2.png'></td><td style='text-align: left;  width: 50%;' >a) Informa de la fitxa o fitxes controlades per l'ordinador.<br><br>b) Informa de l'assignatura o assignatures en joc en cada categoria. Totes les categories han de tindre, com a mínim, una assignatura.<br><br>c) Indica el nivell al qual està jugant la fitxa que hi ha sota.<br><br>d) Amb el fons negre indica que aquestes fitxes no estan en joc.<br><br>e) Indica que la fitxa marrò ha aconseguit el galló groc.<br>El fons blanc indica que és un fitxa controlada per aquest ordinador.<br><br>f) El fons gris indica que son fitxes en joc, però no controlades per aquest ordinador.</td></tr></tbody></table>";
document.getElementById('menup111').style = 'display:block';
document.getElementById('menup112').style = 'display:block';
document.getElementById('menup113').style = 'display:block';
document.getElementById("menup113").style.borderColor="red";
document.getElementById("menup11").style.borderColor="black";
document.getElementById("menup111").style.borderColor="black";
document.getElementById("menup112").style.borderColor="black";
};

if(a==2){document.getElementById("dinamica").innerHTML="Iniciar partida";
    document.getElementById("menup12").style.borderColor="red";
document.getElementById("infomenu").innerHTML="<br> Per iniciar una partida, podem distingir entre: iniciar una partida nova, afegir altre ordinador i les seues fitxes a la partida acabada de crear-se des d'altre ordinador o, finalment, obrir una partida que s'ha guardat previament.<br><br>La connexió dels ordinadors ha de ser seqüencial. Una vegada que es connecta una persona, pot entrar-hi una altra triant les fitxes que en falten per assignar.<table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 400px; height: 252px;' alt='' src='instruccions/menuinicia01.png'></td><td style='text-align: left;  width: 50%;' ><b>Crear partida nova:</b><br>a) El primer ordinador que crea una partida ha de triar totes les opcions de partida i polsar &quot;inicia&quot;. Quedarà a l'espera de la connexió d'uns altres ordinadors.<br><br>b) Si un altre ordinador vol connectar-se a la partida que acaba de crear-se, només ha de posar nom i contrasenya i polsar el botó de &quot;connectar-se&quot;.<br><br><b>Obrir partida guardada:</b><br>c) Si el que volem és obrir una partida que va ser guardada amb anterioritat, cal polsar el nom i la contrasenya i triar l'opció &quot;partida guardada&quot;.<br><br>d) i e) El nom i la contrasenya són imprescindibles per connectar-se a la mateixa partida.</td></tr></tbody></table>";
document.getElementById('menup121').style = 'display:block';
};

if(a==21){document.getElementById("dinamica").innerHTML="Iniciar partida<br>Opcions de partida";
document.getElementById("infomenu").innerHTML="<br><b>Obrir partida nova:</b> Si voleu iniciar una partida heu de tindre clar algunes coses: nom, contrasenya, el nombre de jugadors (equips), els nivells de cada jugador, les assignatures de cada categoria, els ordinadors que es connectaran i si volem limitar el temps de partida.<br>Per a connectar més d'un ordinador, la connexió ha de ser seqüencial. El primer ordinador ha de triar les opcions.<br>Totes les opcions s'han de triar en el menú inicial.<table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 400px; height: 480px;' alt='' src='instruccions/menuinicia2.png'></td><td style='text-align: left;  width: 50%;' >a) Per poder triar opcions ha de ser partida nova.<br><br>b) Nom i contrasenya, imprescindibles per a identificar la partida i poder connectar-se amb ella.<br><br>c) Si voleu que la partida s'acabe en un temps determinat cal triar aquesta opció.<br><br>d) Nombre de jugadors (equips-fitxes) que tindrà la partida.<br><br>e) Ordinadors que controlaran la partida.<br><br>f) Nivell de joc, pot ser igual per a totes les fitxes o individual per a cada fitxa.<br><br>g) Assignatures associades a cada categoria (color).<br><br>h) Botó que cal polsar per a gravar totes les opcions triades.</td></tr></tbody></table>";
document.getElementById('menup121').style = 'display:block';
document.getElementById("menup121").style.borderColor="red";
document.getElementById("menup12").style.borderColor="black";
};

if(a==3){document.getElementById("dinamica").innerHTML="Espai preguntes i informació";
document.getElementById("infomenu").innerHTML="<table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 302px; height: 700px;' alt='' src='instruccions/areapreguntadiamico2.png'></td><td style='text-align: left;  width: 70%;' >A la part dreta i inferior de la pantalla, tenim un espai que ens informa de les accions a realitzar i, a més, també n&apos;és l'espai on eixen les preguntes. </td></tr></tbody></table>";
document.getElementById('menup131').style = 'display:block';
document.getElementById('menup132').style = 'display:block';
document.getElementById("menup131").style.borderColor="black";
document.getElementById("menup13").style.borderColor="red";
document.getElementById("menup132").style.borderColor="black";};
if(a==31){document.getElementById("dinamica").innerHTML="Espai preguntes i informació<br>Informació dinàmica";
document.getElementById("infomenu").innerHTML="<table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 302px; height: 700px;' alt='' src='instruccions/areapreguntadiamico3.png'></td><td style='text-align: left;  width: 70%;' >Aquesta àrea d'informació dinàmica ens informa de les accions a realitzar:<br><br> Ajuda i/o complementa la informació dels menús,<br> llançar dau,<br> moure fitxa,<br>ens informa que la partida està tancant-se<br> ...<br><br>Ací és important el text inclós a l'àrea blanca. En canvi, la resta (color, imatge...) només és decoratiu. </td></tr></tbody></table>";
document.getElementById('menup131').style = 'display:block';
document.getElementById('menup132').style = 'display:block';
document.getElementById("menup131").style.borderColor="red";
document.getElementById("menup13").style.borderColor="black";
document.getElementById("menup132").style.borderColor="black";
};
if(a==32){document.getElementById("dinamica").innerHTML="Espai preguntes i informació<br>Les preguntes";
document.getElementById("infomenu").innerHTML="<table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 450px; height: 368px;' alt='' src='instruccions/espaipregunta5.png'></td><td style='text-align: left;  width: 60%;' >a) Àrea on va el text de la pregunta.<br><br>b) Color de la categoria i de la casella on està la fitxa.<br><br>c) Assignatura a la qual pertany la pregunta.<br><br>d) Nivell de la pregunta. Pot eixir el nivell triat al menú inicial o un altre de nivell inferior.<br><br>e) Imatge il·lustrativa o decorativa. </td></tr></tbody></table>";
document.getElementById('menup131').style = 'display:block';
document.getElementById('menup132').style = 'display:block';
document.getElementById("menup131").style.borderColor="black";
document.getElementById("menup13").style.borderColor="black";
document.getElementById("menup132").style.borderColor="red";
};
if(a==4){document.getElementById("dinamica").innerHTML="Desenvolupament del joc";
document.getElementById("infomenu").innerHTML="<table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img style='width: 520px; height: 722px;' alt='' src='instruccions/fases.png'></td><td style='text-align: left;  width: 40%;' >Si hi ha més d'un ordinador en un mateix espai, seria interessant que només un d'ells tinguera activat el so.<br><br> La sincronització dels sons no és perfecta i, a més a més, pot ser que cada ordinador utilitze sons diferents en alguns moments de la partida.<br><br><br> Si no escolteu el so, pot ser perquè no tingueu dispositiu d'eixida o perquè no el tingueu habilitat al navegador. </td></tr></tbody></table>";
document.getElementById('menup141').style = 'display:block';
document.getElementById('menup142').style = 'display:block';
document.getElementById('menup143').style = 'display:block';
document.getElementById('menup144').style = 'display:block';
document.getElementById("menup14").style.borderColor="red";
document.getElementById("menup141").style.borderColor="black";
document.getElementById("menup142").style.borderColor="black";
document.getElementById("menup143").style.borderColor="black";
document.getElementById("menup144").style.borderColor="black";};

if(a==41){document.getElementById("dinamica").innerHTML="Desenvolupament del joc<br>Moviment";
document.getElementById("infomenu").innerHTML="<table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 173px; height: 297px;' alt='' src='instruccions/moviment.jpg'></td><td style='text-align: left;  width: 70%;' >El programa no et deixarà moure en cap casella que no estiga a la distància marcada pel dau.<br><br>Només es podrà moure la fitxa des de l'ordinador que és propietari de la fitxa que té el torn.<br><br>No es pot moure cap a una altra casella que ja estiga plena. Les caselles normals tenen una capacitat de dues fitxes, les caselles on acaben el radis tenen una capacitat de tres fitxes i la central de sis fitxes.<br><br>No existeix la barrera, és a dir, es pot passar per damunt d'una casella amb dues fitxes.<br><br>Si el moviment no és possible perquè totes les caselles estan ocupades, el programa et deixarà llançar el dau de nou.</td></tr></tbody></table>";
document.getElementById('menup141').style = 'display:block';
document.getElementById('menup142').style = 'display:block';
document.getElementById('menup143').style = 'display:block';
document.getElementById('menup144').style = 'display:block';
document.getElementById("menup14").style.borderColor="black";
document.getElementById("menup141").style.borderColor="red";
document.getElementById("menup142").style.borderColor="black";
document.getElementById("menup143").style.borderColor="black";
document.getElementById("menup144").style.borderColor="black";}

if(a==42){document.getElementById("dinamica").innerHTML="Desenvolupament del joc<br>Caselles";
document.getElementById("infomenu").innerHTML="<table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 430px; height:550px;' alt='' src='instruccions/caselles2.png'></td><td style='text-align: left;  width: 70%;' >El joc presenta quatre tipus de caselles:<br><br>a) Casella de color. Quan es cau en aquestes caselles, el jugador haurà de contestar una pregunta de la categoria que corresponga al color de la casella. Tenen una capacitat màxima de dues fitxes.<br><br>b) Les caselles dau permeten tonar a llançar el dau sense haver de contestar cap pregunta.<br><br>c) Aquestes caselles llançaran una pregunta de la categoria corresponent al color de la casella. Si la resposta és correcta i el jugador no posseïa el galló d'eixe color, l'afegirà al seu comptador. Aquestes caselles tenen una capacitat màxima de tres fitxes.<br><br>d) La casella central, amb una capacitat de sis fitxes, llança una pregunta a l'atzar que, si és contestada correctament i el jugador no té el gallò amb anterioritat, l'afegirà al comptador.</td></tr></tbody></table>";
document.getElementById('menup141').style = 'display:block';
document.getElementById('menup142').style = 'display:block';
document.getElementById('menup143').style = 'display:block';
document.getElementById('menup144').style = 'display:block';
document.getElementById("menup14").style.borderColor="black";
document.getElementById("menup141").style.borderColor="black";
document.getElementById("menup142").style.borderColor="red";
document.getElementById("menup143").style.borderColor="black";
document.getElementById("menup144").style.borderColor="black";}

if(a==43){document.getElementById("dinamica").innerHTML="Desenvolupament del joc<br>Preguntes";
document.getElementById("infomenu").innerHTML="<table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 549px; height:307px;' alt='' src='instruccions/areapregunta4.png'></td><td style='text-align: left;  width: 70%;' >La informació que aporta la pregunta ja està explicada a &quot;Espai Preguntes i informació&quot;.<br><br>Sota el panell principal apareix, només a l'ordinador posseïdor de la fitxa amb el torn, un altre panell per a rebre les respostes. A aquest panell, s'ha d'escriure la resposta i cal polsar sobre &quot;Comprova&quot; perquè l'ordinador integre eixa resposta. <br><br>L'acció anterior es pot fer tantes vegades com els intents que especifica la pregunta.<br><br>A la part inferior esquerra, hi ha una casella amb un cronòmetre on s'indica el temps restant per a respondre. Si el temps arriba a 0, el programa actuarà igual que si s'han esgotat tots els intents de forma errònia, és a dir, informarà del resultat i canviarà el torn.<br><br>Cal aclarir que el nivell de la pregunta és a l'atzar entre totes les preguntes de la base de dades, ponderades de la següent manera:<br>El nivell major que pot eixir és el nivell triat al menú inicial. La ponderació de cada pregunta d'un nivell és el doble de la ponderación de les preguntes de nivell immediatament inferior.  </td></tr></tbody></table>";
document.getElementById('menup141').style = 'display:block';
document.getElementById('menup142').style = 'display:block';
document.getElementById('menup143').style = 'display:block';
document.getElementById('menup144').style = 'display:block';
document.getElementById("menup14").style.borderColor="black";
document.getElementById("menup141").style.borderColor="black";
document.getElementById("menup142").style.borderColor="black";
document.getElementById("menup143").style.borderColor="red";
document.getElementById("menup144").style.borderColor="black";}

if(a==44){document.getElementById("dinamica").innerHTML="Desenvolupament del joc<br>Informació de la resposta";
document.getElementById("infomenu").innerHTML="<table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 322px; height:700px;' alt='' src='instruccions/infopregunta2.png'></td><td style='text-align: left;  width: 70%;' > La informació de la resposta eixirà durant set segons després de polsar el botó &quot;Comprova&quot;.<br><br>Aquest panell ens diu:<br> si la resposta és correcta;<br> si la resposta és correcta i, a més, aconseguim un galló; <br>si tenim una altra oportunitat per a respondre o <br>si hem fallat. <br><br>En aquest últim cas, possiblement, pot informar-nos de la resposta correcta. </td></tr></tbody></table>";
document.getElementById('menup141').style = 'display:block';
document.getElementById('menup142').style = 'display:block';
document.getElementById('menup143').style = 'display:block';
document.getElementById('menup144').style = 'display:block';
document.getElementById("menup14").style.borderColor="black";
document.getElementById("menup141").style.borderColor="black";
document.getElementById("menup142").style.borderColor="black";
document.getElementById("menup143").style.borderColor="black";
document.getElementById("menup144").style.borderColor="red";}

if(a==5){document.getElementById("dinamica").innerHTML="Fin de partida";
document.getElementById("infomenu").innerHTML="<table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 200px; height:335px;' alt='' src='instruccions/adios.GIF'></td><td style='text-align: left;  width: 70%;' > És evident que la partida acaba quan un dels jugadors aconsegueix tots els gallons.<br><br>Si no és el cas, la partida pot acabar en qualsevol moment, sempre que els jugadors ho hagen decidit amb antelació. Per aquesta raó, és important posar-se d'acord a l'inici del joc.<br><br>És possible connectar un cronòmetre al menú inicial, el qual ens avisarà que el temps programat ha finalitzat. El cronòmetre no ens obliga a res, ja que, una vegada que acaba el temps, el programa dona l'opció d'acabar definitivament, guardar la partida o seguir com si el cronòmetre no s'haguera connectat.<br><br>Una vegada decidit que la partida ha acabat, per saber el guanyador, només cal observar el codi de color (mireu la pestanya &quot;Guanyador&quot;).</td></tr></tbody></table>";
document.getElementById("menup15").style.borderColor="red";

};
if(a==6){document.getElementById("dinamica").innerHTML="Guardar partida";
document.getElementById("infomenu").innerHTML="<table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 141px; height:48px;' alt='' src='instruccions/guardarpartida.png'><img style='width: 300px; height:200px;' alt='' src='instruccions/cajaguardar7.gif'></td><td style='text-align: left;  width: 70%;' > Cada vegada que el jugador que porta el torn està a la fase de &quot;llançar dau&quot;, eixirà en el seu ordinador un botó que possiblita guardar la partida per poder continuar jugant en un altre moment.<br><br>És important que aquestes decisions siguen consensuades amb la resta de jugadors.<br><br>Si es decideix guardar la partida, aquesta informació serà traslladada a la resta d'ordinadors i els recordarà el nom i la contrasenya.<br><br>El nom i la contrasenya seran imprescindibles per poder obrir la partida amb posterioritat.<br><br>Per obrir una partida guardada, només cal triar l'opció al menú inicial i seleccionar les fitxes que controlarà l'ordinador. D'aquesta forma, quedarà en espera fins que totes les fitxes siguen assignades. L'entrada d'ordinadors ha de ser seqüencial. Un altre ordinador, si queden fitxes per assignar, podrà repetir el procés fins que estiguen totes les fitxes repartides.<br><br>El nombre d'ordinadors connectats a la partida original i a la partida recuperada no ha de coincidir necessàriament.</td></tr></tbody></table>";
document.getElementById("menup16").style.borderColor="red";

};
if(a==7){document.getElementById("dinamica").innerHTML="Guanyador";
document.getElementById("infomenu").innerHTML="<table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 362px; height:300px;' alt='' src='instruccions/dia2.gif'></td><td style='text-align: left;  width: 70%;' > La primera vegada que un dels jugadors aconsegueix un galló, el joc l'assigna com a guanyador. A partir d'eixe moment, el guanyador sempre estarà assignat i serà el jugador amb més gallons. En cas d'haver-hi dos o més jugadors amb el màxim de gallons, el guanyador és el primer que va aconseguir eixa quantitat.<br><br>No cal estar apuntant-se eixa informació, ja que el joc ens informa en tot moment qui és el vencedor amb un codi de colors en el panell fix.<br><br>Sobre les fitxes en joc podem trobar tres colors i ens indiquen:<br><b>Groc:</b> fitxa posseïdora del torn<br><b>Verd:</b> Fitxa guanyadora<br><b>Blau:</b> Fitxa que té les dues condicions anteriors, és a dir, té el torn i és la guanyadora en eixe moment. </td></tr></tbody></table>";
document.getElementById("menup17").style.borderColor="red";

};
if(a==8){document.getElementById("dinamica").innerHTML="Introduïr Preguntes";
document.getElementById("infomenu").innerHTML="<table style='text-align: left;  width: 100%;' border='0' cellpadding='2' cellspacing='2'><tbody><tr><td ><img style='width: 240px; height:240px;' alt='' src='instruccions/giphy8.gif'></td><td style='text-align: left;  width: 80;' > Per introduïr-hi les preguntes, cal considerar alguns aspectes:<br>&#8226; Les preguntes han de ser curtes, han d'entrar dins l'espai destinat al text.<br>&#8226; Les respostes han de ser més curtes encara, només amb una paraula o la lletra d'una opció. Si la resposta correcta es diferencia de la que posem en una coma, lletra, accent, espai... es considerarà com a resposta incorrecta.<br>&#8226; Si considerem que pot haver-hi més d'una resposta vàlida, cal introduir-hi totes les respostes separades per ; sense espais entre elles.<br>&#8226; Cal completar obligatòriament els següent camps: assignatura, nivell, temps de resposta, intents i si vols que s'hi mostre la resposta en cas de fallar.<br>&#8226; No és obligatori, però sí recomanable, introduir una imatge que il·lustre o complemente la pregunta.<br><br>Hi ha dues formes de poder introduir les preguntes:<br><a href='http://172.28.47.2/easy-sites/easy-trivial_riu_turia' target='_blank'>Des de l'institut</a> (Només funciona a l'institut). <br> <a href='https://triviariu.000webhostapp.com/' target='_blank'>Des de casa</a><br><br><a href='instruccions/introduirp.pdf' target='_blank'>Enllaç al PDF informatiu.</a></td></tr></tbody></table>";
document.getElementById("menup18").style.borderColor="red";
};
}

function sonar(){
	var sonido = document.createElement("iframe");
	sonido.style.visibility = "hidden";
	sonido.setAttribute("src", "instruccions/ini17.mp3");
	document.body.appendChild(sonido);
}
