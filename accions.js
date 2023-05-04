var posicions =new Array(75);
posicions[0]=new Array(0,0,0,0);
posicions[1]=new Array(2,228,34,235);
posicions[2]=new Array(30,196,0,0);
posicions[3]=new Array(32,157,57,171);
posicions[4]=new Array(48,125,72,142);
posicions[5]=new Array(81,104,0,0);
posicions[6]=new Array(96,69,114,91);
posicions[7]=new Array(126,50,162,30);
posicions[8]=new Array(191,15,200,42);
posicions[9]=new Array(230,18,0,0);
posicions[10]=new Array(265,0,266,30);
posicions[11]=new Array(302,0,299,30);
posicions[12]=new Array(334,18,0,0);
posicions[13]=new Array(373,15,363,42);
posicions[14]=new Array(405,30,440,50);
posicions[15]=new Array(470,69,450,91);
posicions[16]=new Array(485,104,0,0);
posicions[17]=new Array(518,125,493,142);
posicions[18]=new Array(537,157,509,171);
posicions[19]=new Array(540,196,0,0);
posicions[20]=new Array(561,227,532,234);
posicions[21]=new Array(563,263,563,302);
posicions[22]=new Array(561,337,532,332);
posicions[23]=new Array(540,370,0,0);
posicions[24]=new Array(537,408,509,395);
posicions[25]=new Array(518,439,493,424);
posicions[26]=new Array(485,460,0,0);
posicions[27]=new Array(470,497,450,474);
posicions[28]=new Array(405,537,440,516);
posicions[29]=new Array(373,550,363,522);
posicions[30]=new Array(334,540,0,0);
posicions[31]=new Array(302,565,299,535);
posicions[32]=new Array(265,565,266,535);
posicions[33]=new Array(230,540,0,0);
posicions[34]=new Array(191,550,200,522);
posicions[35]=new Array(126,516,161,537);
posicions[36]=new Array(96,497,114,474);
posicions[37]=new Array(81,460,0,0);
posicions[38]=new Array(48,439,72,424);
posicions[39]=new Array(29,408,54,395);
posicions[40]=new Array(30,370,0,0);
posicions[41]=new Array(2,337,34,332);
posicions[42]=new Array(2,262,2,303);
posicions[43]=new Array(0,0,0,0);
posicions[44]=new Array(0,0,0,0);
posicions[45]=new Array(60,267,60,299);
posicions[46]=new Array(97,267,97,299);
posicions[47]=new Array(134,267,134,299);
posicions[48]=new Array(171,267,171,299);
posicions[49]=new Array(208,267,208,299);
posicions[50]=new Array(158,98,184,82);
posicions[51]=new Array(177,130,203,114);
posicions[52]=new Array(196,162,222,146);
posicions[53]=new Array(215,194,241,178);
posicions[54]=new Array(233,226,259,210);
posicions[55]=new Array(378,83,406,98);
posicions[56]=new Array(361,115,388,130);
posicions[57]=new Array(342,147,369,162);
posicions[58]=new Array(323,179,350,194);
posicions[59]=new Array(305,210,332,225);
posicions[60]=new Array(505,267,505,299);
posicions[61]=new Array(468,267,468,299);
posicions[62]=new Array(431,267,431,299);
posicions[63]=new Array(394,267,394,299);
posicions[64]=new Array(357,267,357,299);
posicions[65]=new Array(409,466,380,482);
posicions[66]=new Array(390,434,361,450);
posicions[67]=new Array(371,402,342,418);
posicions[68]=new Array(352,371,323,387);
posicions[69]=new Array(333,339,304,355);
posicions[70]=new Array(186,483,158,467);
posicions[71]=new Array(205,451,177,435);
posicions[72]=new Array(223,419,195,403);
posicions[73]=new Array(241,387,214,371);
posicions[74]=new Array(260,355,233,339);
var gallo =new Array(6);
gallo[0]=new Array(0,0,0,0,0,0);
gallo[1]=new Array(0,0,0,0,0,0);
gallo[2]=new Array(0,0,0,0,0,0);
gallo[3]=new Array(0,0,0,0,0,0);
gallo[4]=new Array(0,0,0,0,0,0);
gallo[5]=new Array(0,0,0,0,0,0);
var pos=new Array(75,75,75,75,75,75);
var asignatura=new Array(6);
asignatura[0]=new Array(0,0,0,0);
asignatura[1]=new Array(0,0,0,0,0);
asignatura[2]=new Array(0,0,0,0,0);
asignatura[3]=new Array(0,0,0);
asignatura[4]=new Array(0,0);
asignatura[5]=new Array(0,0,0,0);
var estat=0; var ordi=new Array(1,0,0,0,0,0);;ordinaconnectat=1;var estatpropi;
var marcatemp=0;var fallo=0;
var ven=0; var camv; var pi=0;
var jugadores;
var niv, ni1=0,ni2=0,ni3=0,ni4=0,ni5=0,ni6=0;
var redexceso;
var encert=0;
var pasadas=0;
var pasdado=0;
var turno=0;
var dado;
var recoloca=0;
var lusdos=0; var posiciox; var posicioy;
var azar=1;
var ordinadors;var ordinapropi=new Array(0,0,0,0,0,0);
var i1,i2,i3,i4,i5,i6, uh=0;
var down;var cmin2,csec2;
var down2;var chor,cmin;
var intent=0;
var lista = new Array('images/dado01.gif', 'images/dado02.gif', 'images/dado03.gif' , 'images/dado04.gif', 'images/dado05.gif', 'images/dado06.gif', 'images/dado07.gif', 'images/dado08.gif', 'images/dado09.gif', 'images/dado10.gif', 'images/dado11.gif', 'images/dado12.gif');
var tiempo = 0; var tempor = null; var pasadas =0; var azar;
var nom; var contrasenya;
var altrepep, apep, apep1, apep2, vari;
var altrepep1, altrepep2;
var disp2="";
var matrizrespuestas=new Array;
var guardada=0;
var vencedor=0;

function restaura(){pasarpresent();document.inici.veri2.checked = false; document.forms.inici.limit1.value="";document.forms.inici.parti.value="1"; document.forms.inici.limit1.disabled="disabled"; document.forms.inici.limit2.value=""; document.forms.inici.limit2.disabled="disabled";marcatemp=0;document.forms.inici.nom.value="";document.forms.inici.contrasenya.value="";
document.getElementById("elecciofitxa").style.display = "none";document.getElementById("elecciofitxa2").style.display = "none";document.getElementById("espera").style.display = "none";document.getElementById("ja").style.display = "none";document.getElementById("doble").style.display = "none";document.getElementById("segonconnec").style.visibility = "hidden";document.getElementById("selecciofg").style.display = "none";document.getElementById("tercerconnec").style.visibility = "hidden";document.getElementById("botonguardar").style.visibility = "hidden";

fazar(24);pep1=1*redexceso+1;jose="ini"+pep1;sonar(jose)}

async function nova0(){
if(marcatemp==1){compvalor()};
nom=document.forms.inici.nom.value;
guardabe = await comprovaini();
if (guardabe==1){

if(document.forms.inici.parti[1].checked){

	n=0;
	if(document.forms.assig.assig11.checked||document.forms.assig.assig12.checked||document.forms.assig.assig13.checked||document.forms.assig.assig14.checked){n++};
	if(document.forms.assig.assig21.checked||document.forms.assig.assig22.checked||document.forms.assig.assig23.checked||document.forms.assig.assig24.checked||	document.forms.assig.assig25.checked){n++};
	if(document.forms.assig.assig31.checked||document.forms.assig.assig32.checked||document.forms.assig.assig33.checked||document.forms.assig.assig34.checked||document.forms.assig.assig35.checked){n++};
	if(document.forms.assig.assig41.checked||document.forms.assig.assig42.checked||document.forms.assig.assig43.checked){n++};
	if(document.forms.assig.assig51.checked||document.forms.assig.assig52.checked){n++};
	if(document.forms.assig.assig61.checked||document.forms.assig.assig62.checked||document.forms.assig.assig63.checked||document.forms.assig.assig64.checked){n++};
// cal introduir una control per a que els noms no es dupliquen.
	pepe=0;
	if(n<6){alert("Tots els colors han de tindre alguna assignatura");pepe=1};
	if(document.forms.inici.nom.value==""||document.forms.inici.contrasenya.value==""){alert("Heu de posar Nom i Contrasenya");pepe=1}
	if(document.forms.ininiv.juga[0].checked){jugadores=2};
	if(document.forms.ininiv.juga[1].checked){jugadores=3};
	if(document.forms.ininiv.juga[2].checked){jugadores=4};
	if(document.forms.ininiv.juga[3].checked){jugadores=5};
	if(document.forms.ininiv.juga[4].checked){jugadores=6};
	if(document.forms.ininiv.ord[0].checked){ordinadors=1};
	if(document.forms.ininiv.ord[1].checked){ordinadors=2};
	if(document.forms.ininiv.ord[2].checked){ordinadors=3};
	if(document.forms.ininiv.ord[3].checked){ordinadors=4};
	if(document.forms.ininiv.ord[4].checked){ordinadors=5};
	if(document.forms.ininiv.ord[5].checked){ordinadors=6};
	if(document.forms.ininiv.divni[0].checked){
		if(document.forms.ininiv.nivelu[0].checked){niv=1;document.images.j1n.src="images/n1g.gif";document.images.j2n.src="images/n1g.gif"; document.images.j3n.src="images/n1g.gif";document.images.j4n.src="images/n1g.gif";document.images.j5n.src="images/n1g.gif";document.images.j6n.src="images/n1g.gif"};
		if(document.forms.ininiv.nivelu[1].checked){niv=2; document.images.j1n.src="images/n2g.gif";document.images.j2n.src="images/n2g.gif";document.images.j3n.src="images/n2g.gif";document.images.j4n.src="images/n2g.gif";document.images.j5n.src="images/n2g.gif";document.images.j6n.src="images/n2g.gif"};
		if(document.forms.ininiv.nivelu[2].checked){niv=3;document.images.j1n.src="images/n3g.gif";document.images.j2n.src="images/n3g.gif";document.images.j3n.src="images/n3g.gif";document.images.j4n.src="images/n3g.gif";document.images.j5n.src="images/n3g.gif";document.images.j6n.src="images/n3g.gif"};
		if(document.forms.ininiv.nivelu[3].checked){niv=4;document.images.j1n.src="images/n4g.gif";document.images.j2n.src="images/n4g.gif";document.images.j3n.src="images/n4g.gif";document.images.j4n.src="images/n4g.gif";document.images.j5n.src="images/n4g.gif";document.images.j6n.src="images/n4g.gif"};
		if(document.forms.ininiv.nivelu[4].checked){niv=5;document.images.j1n.src="images/n5g.gif";document.images.j2n.src="images/n5g.gif";document.images.j3n.src="images/n5g.gif";document.images.j4n.src="images/n5g.gif";document.images.j5n.src="images/n5g.gif";document.images.j6n.src="images/n5g.gif"};
		ni1=niv;ni2=niv;ni3=niv;ni4=niv;ni5=niv;ni6=niv;
		}
		else{
		if(document.forms.ininiv.nivel111[0].checked){ni1=1;document.images.j1n.src="images/n1g.gif"};
		if(document.forms.ininiv.nivel111[1].checked){ni1=2;document.images.j1n.src="images/n2g.gif"};
		if(document.forms.ininiv.nivel111[2].checked){ni1=3;document.images.j1n.src="images/n3g.gif"};
		if(document.forms.ininiv.nivel111[3].checked){ni1=4;document.images.j1n.src="images/n4g.gif"};
		if(document.forms.ininiv.nivel111[4].checked){ni1=5;document.images.j1n.src="images/n5g.gif"};
		if(document.forms.ininiv.nivel222[0].checked){ni2=1;document.images.j2n.src="images/n1g.gif"};
		if(document.forms.ininiv.nivel222[1].checked){ni2=2;document.images.j2n.src="images/n2g.gif"};
		if(document.forms.ininiv.nivel222[2].checked){ni2=3;document.images.j2n.src="images/n3g.gif"};
		if(document.forms.ininiv.nivel222[3].checked){ni2=4;document.images.j2n.src="images/n4g.gif"};
		if(document.forms.ininiv.nivel222[4].checked){ni2=5;document.images.j2n.src="images/n5g.gif"};
		if(document.forms.ininiv.nivel333[0].checked){ni3=1;document.images.j3n.src="images/n1g.gif"};
		if(document.forms.ininiv.nivel333[1].checked){ni3=2;document.images.j3n.src="images/n2g.gif"};
		if(document.forms.ininiv.nivel333[2].checked){ni3=3;document.images.j3n.src="images/n3g.gif"};
		if(document.forms.ininiv.nivel333[3].checked){ni3=4;document.images.j3n.src="images/n4g.gif"};
		if(document.forms.ininiv.nivel333[4].checked){ni3=5;document.images.j3n.src="images/n5g.gif"};
		if(document.forms.ininiv.nivel444[0].checked){ni4=1;document.images.j4n.src="images/n1g.gif"};
		if(document.forms.ininiv.nivel444[1].checked){ni4=2;document.images.j4n.src="images/n2g.gif"};
		if(document.forms.ininiv.nivel444[2].checked){ni4=3;document.images.j4n.src="images/n3g.gif"};
		if(document.forms.ininiv.nivel444[3].checked){ni4=4;document.images.j4n.src="images/n4g.gif"};
		if(document.forms.ininiv.nivel444[4].checked){ni4=5;document.images.j4n.src="images/n5g.gif"};
		if(document.forms.ininiv.nivel555[0].checked){ni5=1;document.images.j5n.src="images/n1g.gif"};
		if(document.forms.ininiv.nivel555[1].checked){ni5=2;document.images.j5n.src="images/n2g.gif"};
		if(document.forms.ininiv.nivel555[2].checked){ni5=3;document.images.j5n.src="images/n3g.gif"};
		if(document.forms.ininiv.nivel555[3].checked){ni5=4;document.images.j5n.src="images/n4g.gif"};
		if(document.forms.ininiv.nivel555[4].checked){ni5=5;document.images.j5n.src="images/n5g.gif"};
		if(document.forms.ininiv.nivel666[0].checked){ni6=1;document.images.j6n.src="images/n1g.gif"};
		if(document.forms.ininiv.nivel666[1].checked){ni6=2;document.images.j6n.src="images/n2g.gif"};
		if(document.forms.ininiv.nivel666[2].checked){ni6=3;document.images.j6n.src="images/n3g.gif"};
		if(document.forms.ininiv.nivel666[3].checked){ni6=4;document.images.j6n.src="images/n4g.gif"};
		if(document.forms.ininiv.nivel666[4].checked){ni6=5;document.images.j6n.src="images/n5g.gif"};
		}
	if(ordinadors>jugadores){alert("El nombre d'ordinadors no pot superar al de jugadors");pepe=1};
	ordinapropi[0]=1;
	}

nom=document.forms.inici.nom.value;contrasenya=document.forms.inici.contrasenya.value;
elecasigna.length=0;infocolores();

if(pepe==0){
	fazar(jugadores);
	turno=1*redexceso+1;
if(ordinadors==1){ordinapropi[1]=2;ordinapropi[2]=3;ordinapropi[3]=4;ordinapropi[4]=5;ordinapropi[5]=6;infocolores();document.getElementById("fondonegro").style.display = "none";nova();}else{

		if(jugadores==ordinadors){for(i=1;i<ordinadors;i++){ordi[i]=2;};nocal()};

		if(jugadores-ordinadors>0){for(i=1;i<jugadores;i++){ordi[i]=2;};repartiment2(); document.getElementById("elecciofitxa2").style.display = "inline";
		document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 20px; align: center'><b>Si voleu controlar m&eacute;s fitxes, heu de respondre al men&uacute; de l'esquerra.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  style='width: 150px; height: 108px;' alt='' src='images/continua.png'>&nbsp;&nbsp;<br>";
		};
};


};
};
};

function nova(){
document.getElementById("presentacio").style.display="none";document.getElementById("partidainfo").style.visibility="visible";clearTimeout(tempor8);
document.getElementById("eleniv").style.display = "none";document.getElementById("fondonegro").style.display = "none";
if(marcatemp==0){
	document.getElementById("partid").style.visibility = "hidden";
	}
	else{document.getElementById("partid").style.visibility = "visible";}

infopartida1();
ocufich();
turnos(turno);
estat=1;estatpropi=1;
suspreg(0);
};

function ocufich(){if(jugadores<6){celdag= document.getElementById("tur6");celdag.style.backgroundColor="#000000";celdag= document.getElementById("nivj6");celdag.style.backgroundColor="#000000"; document.getElementById("capa6").style.display="none";document.images.j6n.src="images/n0.gif";document.images.j6nf.src="images/fichanp.gif" ;celdag= document.getElementById("qj6");celdag.style.backgroundColor="#000000";};
if(jugadores<5){celdag= document.getElementById("tur5");celdag.style.backgroundColor="#000000"; celdag= document.getElementById("nivj5");celdag.style.backgroundColor="#000000";document.getElementById("capa5").style.display="none";document.images.j5n.src="images/n0.gif" ;document.images.j5nf.src="images/fichanp.gif";celdag= document.getElementById("qj5");celdag.style.backgroundColor="#000000";};
if(jugadores<4){celdag= document.getElementById("tur4");celdag.style.backgroundColor="#000000";celdag= document.getElementById("nivj4");celdag.style.backgroundColor="#000000"; document.getElementById("capa4").style.display="none";document.images.j4n.src="images/n0.gif";document.images.j4nf.src="images/fichanp.gif";celdag= document.getElementById("qj4");celdag.style.backgroundColor="#000000"; };
if(jugadores<3){celdag= document.getElementById("tur3");celdag.style.backgroundColor="#000000"; celdag= document.getElementById("nivj3");celdag.style.backgroundColor="#000000";document.getElementById("capa3").style.display="none";document.images.j3n.src="images/n0.gif" ;document.images.j3nf.src="images/fichanp.gif";celdag= document.getElementById("qj3");celdag.style.backgroundColor="#000000";};
}


function compvalor(){
chor=document.forms.inici.limit1.value;cmin=1*document.forms.inici.limit2.value+1;
if((chor>0&&chor<10)||(cmin>0&&cmin<60)){document.getElementById("partid").style.visibility = "visible";DownRepeat2()}else{alert("Escriu correctament el temps");marcatemp=0;martemp()}}

function DownRepeat2() {
cmin--; if(cmin==-1&&chor>0){ cmin=59; chor--; };Display2(chor,cmin); document.forms.tiempo.partida.value=disp2;
if((chor==0)&&(cmin==5)){colparti()};
if((1*chor+1*cmin<=0)){Display2(0,0);guardada=3;
if(ordinadors==1&&estat==1){
document.getElementById('confirmaguardar2').style.display='inline';document.getElementById('fondonegro').style.display='inline';
document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 20px; align: center'><b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  style='width: 225px; height: 150px;' alt='' src='images/decision.gif'></div></b></span>";};
if(ordinadors==1&&estat!=1){DownRepeat4()};
}else{down2=setTimeout("DownRepeat2()",60000)};


if(ordinadors!=1){guardacont()};}

function Display2(hor,minut) { disp2=hor+":";if(minut<=9){disp2+="0"+minut;}else{disp2+=minut;} }

function martemp()
{
if (marcatemp==0){marcatemp=1}else{marcatemp=0};
if (marcatemp==1){document.forms.inici.limit1.value="0"; document.forms.inici.limit2.value="00";document.forms.inici.limit1.disabled=false;document.forms.inici.limit2.disabled=false} else{document.forms.inici.limit1.value="";document.forms.inici.limit2.value=""; document.forms.inici.limit1.disabled="disabled";document.forms.inici.limit2.disabled="disabled"}}


function fazar(dad)
{ var azarp = Math.random()*dad;
redexceso=Math.floor(azarp);
return redexceso
}

function turnos(turna){
if(turna==2){celda1=document.getElementById("tur2");celda2=document.getElementById("tur1")};
if(turna==3){celda1=document.getElementById("tur3");celda2=document.getElementById("tur2")};
if(turna==4){celda1=document.getElementById("tur4");celda2=document.getElementById("tur3")};
if(turna==5){celda1=document.getElementById("tur5");celda2=document.getElementById("tur4")};
if(turna==6){celda1=document.getElementById("tur6");celda2=document.getElementById("tur5")};
if(turna==1&&jugadores==6){celda1=document.getElementById("tur1");celda2=document.getElementById("tur6")};
if(turna==1&&jugadores==5){celda1=document.getElementById("tur1");celda2=document.getElementById("tur5")};
if(turna==1&&jugadores==4){celda1=document.getElementById("tur1");celda2=document.getElementById("tur4")};
if(turna==1&&jugadores==3){celda1=document.getElementById("tur1");celda2=document.getElementById("tur3")};
if(turna==1&&jugadores==2){celda1=document.getElementById("tur1");celda2=document.getElementById("tur2")};
if (turna!=ven){celda1.style.backgroundColor="#FFFF00"}else{celda1.style.backgroundColor="#66FFFF"};
celda2.style.backgroundColor="#FFFFFF";
colorven(turna,ven)}

function colorven(turna,ven){
if(turna!=1){document.getElementById("tur1").style.backgroundColor="#FFFFFF"};
if(turna!=2){document.getElementById("tur2").style.backgroundColor="#FFFFFF"};
if(turna!=3&&jugadores>2){document.getElementById("tur3").style.backgroundColor="#FFFFFF"};
if(turna!=4&&jugadores>3){document.getElementById("tur4").style.backgroundColor="#FFFFFF"};
if(turna!=5&&jugadores>4){document.getElementById("tur5").style.backgroundColor="#FFFFFF"};
if(turna!=6&&jugadores==6){document.getElementById("tur6").style.backgroundColor="#FFFFFF"};
if (turna!=ven){if(ven==1){document.getElementById("tur1").style.backgroundColor="#33FF33"};
if(ven==2){document.getElementById("tur2").style.backgroundColor="#33FF33"};
if(ven==3){document.getElementById("tur3").style.backgroundColor="#33FF33"};
if(ven==4){document.getElementById("tur4").style.backgroundColor="#33FF33"};
if(ven==5){document.getElementById("tur5").style.backgroundColor="#33FF33"};
if(ven==6){document.getElementById("tur6").style.backgroundColor="#33FF33"};
}}

function vencedor8(){estat=0;
if(ven==1){obri('gblau.html','ganador')};
if(ven==2){obri('ggroc.html','ganador')};
if(ven==3){obri('gmarr.html','ganador')};
if(ven==4){obri('grosa.html','ganador')};
if(ven==5){obri('gtaron.html','ganador')};
if(ven==6){obri('gverd.html','ganador')};
if(ven==0){alert("Ningú ha guanyat");}else{sonar("uefa")}; temporizador81();
}

function obri(document,finestra)
{ window.open(document,finestra,"fullscreen=yes,toolbar=no,resizable=no,scrollbars=no,location=no,menubar=no")
}

function leerparti(){alert("leerpartida")}

function suspreg(nupre){
if(estat==3){document.getElementById("divpreguntan").style.visibility = "visible";
if(imagPreg==""){fazar(5);pep=1*redexceso+1;imagPreg="generiques/g"+asigPreg.substring(0,3)+pep+".png"};
csec2=tiemPreg;if( grafica==1){document.images.graficapregunta.src ="formulario/imatges/"+imagPreg; document.getElementById("espaigrafiques").style.display = "inline";};
papo=0;for(i=0;i<6;i++){if(turno==ordinapropi[i]){papo++;}};
if(papo>0){

DownRepeat()};document.getElementById("divpreguntat").innerHTML=textPreg;
if(asigPreg=="castella"){asigPreg="Castell&agrave;"};
if(asigPreg=="angles"){asigPreg="Angl&eacute;s"};
if(asigPreg=="grec"){asigPreg="Grec"};
if(asigPreg=="llati"){asigPreg="Llat&iacute;"};
if(asigPreg=="frances"){asigPreg="Franc&eacute;s"};
if(asigPreg=="biologia"){asigPreg="Biologia"};
if(asigPreg=="mates"){asigPreg="Matem&agrave;tiques"};
if(asigPreg=="fisica_quimica"){asigPreg="F&iacute;sica i Qu&iacute;mica"};
if(asigPreg=="tecnologia"){asigPreg="Tecnologia"};
if(asigPreg=="informatica"){asigPreg="Inform&agrave;tica"};
if(asigPreg=="ed_fisica"){asigPreg="Educaci&oacute; F&iacute;sica"};
if(asigPreg=="plastica"){asigPreg="Pl&agrave;stica"};
if(asigPreg=="musica"){asigPreg="M&uacute;sica"};
if(asigPreg=="anatomia"){asigPreg="Anatomia Aplicada"};
if(asigPreg=="dibuix"){asigPreg="Dibuix T&egrave;cnic"};
if(asigPreg=="valencia"){asigPreg="Valenci&agrave;"};
if(asigPreg=="literatura"){asigPreg="Literatura Universal"};
if(asigPreg=="historia"){asigPreg="Geografia i Hist&ograve;ria"};
if(asigPreg=="clasica"){asigPreg="Cultura Cl&agrave;ssica"};
if(asigPreg=="orientacio"){asigPreg="Tutoria i Orientaci&oacute;"};
if(asigPreg=="filosofia"){asigPreg="Filosofia"};
if(asigPreg=="religio"){asigPreg="Religi&oacute;"};
if(asigPreg=="etica"){asigPreg="Valors &Eacute;tics"};
document.getElementById("divpreguntaa").innerHTML=asigPreg;document.getElementById("divpreguntan").innerHTML="Nivell: "+nivePreg;
document.getElementById("divpreguntai").innerHTML="Intents: "+intePreg;document.getElementById("divpreguntap").innerHTML="Temps: "+tiemPreg+" s";
document.images.preguntag.src ="formulario/imatges/"+imagPreg;
pepe=0;for(i=0;i<6;i++){if(turno==ordinapropi[i]){pepe++}};if(pepe!=0){document.getElementById("divpreguntar").style.visibility = "visible"};
document.forms.respostf.respuesta.value="";
if(assigna==0){document.getElementById('divpregunta').style.backgroundColor ='#da1b0b';document.getElementById('divpreguntar').style.backgroundColor ='#da1b0b';document.getElementById('espaigrafiques').style.backgroundColor ='#da1b0b';};
if(assigna==1){document.getElementById('divpregunta').style.backgroundColor ='#1d950f';document.getElementById('divpreguntar').style.backgroundColor ='#1d950f';document.getElementById('espaigrafiques').style.backgroundColor ='#1d950f';};
if(assigna==2){document.getElementById('divpregunta').style.backgroundColor ='#ad6038';document.getElementById('divpreguntar').style.backgroundColor ='#ad6038';document.getElementById('espaigrafiques').style.backgroundColor ='#ad6038';};
if(assigna==3){document.getElementById('divpregunta').style.backgroundColor ='#1792dd';document.getElementById('divpreguntar').style.backgroundColor ='#1792dd';document.getElementById('espaigrafiques').style.backgroundColor ='#1792dd';};
if(assigna==4){document.getElementById('divpregunta').style.backgroundColor ='#e3701b';document.getElementById('divpreguntar').style.backgroundColor ='#e3701b';document.getElementById('espaigrafiques').style.backgroundColor ='#e3701b';};
if(assigna==5){document.getElementById('divpregunta').style.backgroundColor ='#fee11e';document.getElementById('divpreguntar').style.backgroundColor ='#fee11e';document.getElementById('espaigrafiques').style.backgroundColor ='#fee11e';};}
if(estat==2){document.getElementById("divpreguntar").style.visibility = "hidden"; document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 20px; align: center'><b><br>Tria la casella on vols despla&ccedil;ar la fitxa.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  style='width: 134px; height: 75px;' alt='' src='images/mover.png'></div></b></span>";}
if(estat==1){ document.getElementById("divpreguntar").style.visibility = "hidden";document.getElementById("espaigrafiques").style.display = "none";document.getElementById("divpreguntan").style.visibility = "hidden";
if(turno==1){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichabp.gif'>"};
if(turno==2){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichagp.gif'>"};
if(turno==3){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichamp.gif'>"};
if(turno==4){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/ficharp.gif'>"};
if(turno==5){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichatp.gif'>"};
if(turno==6){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichavp.gif'>"};
pepe=0;for(i=0;i<6;i++){if(turno==ordinapropi[i]){pepe++}};
if(pepe==0){document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 20px; align: center'><b>El torn li correspon a<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pep+"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  style='width: 100px; height: 115px;' alt='' src='images/espera5.png'>";document.images.dadort.src="images/dadoturia.gif";document.getElementById("divpreguntai").innerHTML="";document.getElementById("divpreguntap").innerHTML="";}
if(pepe>0){document.getElementById("botonguardar").style.visibility="visible";document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 20px; align: center'><b>El torn li correspon a<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pep+"<br>Realitza una doble polsaci&oacute; sobre el dau inferior.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  ondblclick='dados()'  style='width: 56px; height: 67px;' alt='' src='images/dadoturia.gif'></div></b></span>";document.images.dadort.src="images/dadoturia.gif";document.getElementById("divpreguntai").innerHTML="";document.getElementById("divpreguntap").innerHTML="";};
fazar(12);pep1=1*redexceso+1;pep="images/f"+pep1+".jpg";document.images.preguntag.src =pep;document.getElementById("divpreguntaa").innerHTML="IES RIU T&Uacute;RIA";};
}
function infocolores(){
infocolors="";
if(document.forms.assig.assig11.checked){infocolors="English, ";asignatura[0][0]=1};
if(document.forms.assig.assig12.checked){infocolors=infocolors+"Grec, ";asignatura[0][1]=1};
if(document.forms.assig.assig13.checked){infocolors=infocolors+"Llat&iacute;, ";asignatura[0][2]=1};
if(document.forms.assig.assig14.checked){infocolors=infocolors+"Fran&ccedil;ais ";asignatura[0][3]=1};
document.getElementById("info1").innerHTML=infocolors;
infocolors="";
if(document.forms.assig.assig21.checked){infocolors="Biologia, ";asignatura[1][0]=1};
if(document.forms.assig.assig22.checked){infocolors=infocolors+"Mates, ";asignatura[1][1]=1};
if(document.forms.assig.assig23.checked){infocolors=infocolors+"Fis. i Quim., ";asignatura[1][2]=1};
if(document.forms.assig.assig24.checked){infocolors=infocolors+"Tecnologia, ";asignatura[1][3]=1};
if(document.forms.assig.assig25.checked){infocolors=infocolors+"Inform&agrave;tica ";asignatura[1][4]=1};
document.getElementById("info2").innerHTML=infocolors;
infocolors="";
if(document.forms.assig.assig31.checked){infocolors="Educ. F., ";asignatura[2][0]=1};
if(document.forms.assig.assig32.checked){infocolors=infocolors+"Pl&agrave;stica, ";asignatura[2][1]=1};
if(document.forms.assig.assig33.checked){infocolors=infocolors+"M&uacute;sica, ";asignatura[2][2]=1};
if(document.forms.assig.assig34.checked){infocolors=infocolors+"Anat. Aplicada, ";asignatura[2][3]=1};
if(document.forms.assig.assig35.checked){infocolors=infocolors+"D. T&egrave;cnic ";asignatura[2][4]=1};
document.getElementById("info3").innerHTML=infocolors;
infocolors="";
if(document.forms.assig.assig41.checked){infocolors="Valenci&agrave;, ";asignatura[3][0]=1};
if(document.forms.assig.assig42.checked){infocolors=infocolors+"Castellano, ";asignatura[3][1]=1};
if(document.forms.assig.assig43.checked){infocolors=infocolors+"Literatura universal ";asignatura[3][2]=1};
document.getElementById("info4").innerHTML=infocolors;
infocolors="";
if(document.forms.assig.assig51.checked){infocolors="Geografia i Hist&ograve;ria, ";asignatura[4][0]=1};
if(document.forms.assig.assig52.checked){infocolors=infocolors+"Cultura Classica ";asignatura[4][1]=1};
document.getElementById("info5").innerHTML=infocolors;
infocolors="";
if(document.forms.assig.assig61.checked){infocolors="Tutoria, ";asignatura[5][0]=1};
if(document.forms.assig.assig62.checked){infocolors=infocolors+"Filosofia, ";asignatura[5][1]=1};
if(document.forms.assig.assig63.checked){infocolors=infocolors+"Religions, ";asignatura[5][2]=1};
if(document.forms.assig.assig64.checked){infocolors=infocolors+"Valors ";asignatura[5][3]=1};
document.getElementById("info6").innerHTML=infocolors;
}

function dados()
{if(guardada==0){
document.getElementById("botonguardar").style.visibility="hidden";
pepe=0;for(i=0;i<6;i++){if(turno==ordinapropi[i]){pepe++};};if(pepe>0){document.getElementById("inforesposta").style.visibility = "hidden";fazar(6);
dado=1*redexceso+1;
fazar(2);azar=1*redexceso+1;azar=1;
if(estat==1&&pasadas==0){pasardado()};estatpropi=0;estat=2;suspreg(0);
if(ordinadors!=1){guardacont()};
}}};
function pasardado()
{azar=1;
sonar("dado");
if(pasdado==12){pasdado=0};
document.images.dadort.src = lista[pasdado];
pasadas++;
pasdado++;
tiempo=25*pasadas;
if (dado==6&&azar==1&&pasadas==13){parardado()}else{
if (dado==6&&azar==2&&pasadas==19){parardado()}else{
if (dado==5&&azar==1&&pasadas==14){parardado()}else{
if (dado==5&&azar==2&&pasadas==20){parardado()}else{
if (dado==1&&azar==1&&pasadas==15){parardado()}else{
if (dado==1&&azar==2&&pasadas==21){parardado()}else{
if (dado==3&&azar==1&&pasadas==16){parardado()}else{
if (dado==3&&azar==2&&pasadas==24){parardado()}else{
if (dado==2&&azar==1&&pasadas==17){parardado()}else{
if (dado==2&&azar==2&&pasadas==23){parardado()}else{
if (dado==4&&azar==1&&pasadas==18){parardado()}else{
if (dado==4&&azar==2&&pasadas==22){parardado()}else{
tempor = setTimeout("pasardado()", tiempo)}}}}}}}}}}}};
}
function parardado(){clearTimeout(tempor);suspreg(0);pasadas=0;pasdado=0;movimentsp()}
function move1()
{
i1=0;i2=0;i3=0;i4=0;i5=0;i6=0;i7=0;
if(estat==2){if(turno==1){posi=pos[0]};if(turno==2){posi=pos[1]};if(turno==3){posi=pos[2]};if(turno==4){posi=pos[3]};if(turno==5){posi=pos[4]};if(turno==6){posi=pos[5]};
if (posi<43){
if (posi+dado<43){i1=posi+dado}else{i1=posi+dado-42;i3=posi+dado+2};
if(posi-dado<1){i2=42+posi-dado;i3=dado-posi+44}else{i2=posi-dado};
if(7<i1 && posi<=7){i3=dado-(7-posi)+49;if(i3==55){i3=75}};
if(7>i2&&posi>=7){i3=dado-(posi-7)+49;if(i3==55){i3=75}};
if(14<i1 && posi<=14){i3=dado-(14-posi)+54;if(i3==60){i3=75}};
if(14>i2&&posi>=14){i3=dado-(posi-14)+54;if(i3==60){i3=75}};
if(21<i1 && posi<=21){i3=dado-(21-posi)+59;if(i3==65){i3=75}};
if(21>i2&&posi>=21){i3=dado-(posi-21)+59;if(i3==65){i3=75}};
if(28<i1 && posi<=28){i3=dado-(28-posi)+64;if(i3==70){i3=75}};
if(28>i2&&posi>=28){i3=dado-(posi-28)+64;if(i3==70){i3=75}};
if(35<i1 && posi<=35){i3=dado-(35-posi)+69};
if(35>i2&&posi>=35){i3=dado-(posi-35)+69};
}
if (posi>44&&posi<50){
if(posi-dado<45){i1=dado-posi+44;i2=posi-dado-2}else{i1=posi-dado};
if(posi+dado==50){i3=75};
if(posi+dado>50){i3=55-(posi+dado-50);i4=60-(posi+dado-50); i5=65-(posi+dado-50);i6=70-(posi+dado-50); i7=75-(posi+dado-50)};
if(posi+dado<50){i3=posi+dado}
}
if (posi>49&&posi<55){
if(posi-dado<50){i1=dado-posi+56;i2=posi-dado-42}else{i1=posi-dado};
if(posi+dado==55){i3=75};
if(posi+dado>55){i3=50-(posi+dado-55);i4=60-(posi+dado-55); i5=65-(posi+dado-55);i6=70-(posi+dado-55); i7=75-(posi+dado-55)};
if(posi+dado<55){i3=posi+dado}
}
if (posi>54&&posi<60){
if(posi-dado<55){i1=dado-posi+68;i2=posi-dado-40}else{i1=posi-dado};
if(posi+dado==60){i3=75};
if(posi+dado>60){i3=50-(posi+dado-60);i4=55-(posi+dado-60); i5=65-(posi+dado-60);i6=70-(posi+dado-60); i7=75-(posi+dado-60)};
if(posi+dado<60){i3=posi+dado}
}
if (posi>59&&posi<65){
if(posi-dado<60){i1=dado-posi+80;i2=posi-dado-38}else{i1=posi-dado};
if(posi+dado==65){i3=75};
if(posi+dado>65){i3=50-(posi+dado-65);i4=55-(posi+dado-65); i5=60-(posi+dado-65);i6=70-(posi+dado-65); i7=75-(posi+dado-65)};
if(posi+dado<65){i3=posi+dado}
}
if (posi>64&&posi<70){
if(posi-dado<65){i1=dado-posi+92;i2=posi-dado-36}else{i1=posi-dado};
if(posi+dado==70){i3=75};
if(posi+dado>70){i3=50-(posi+dado-70);i4=55-(posi+dado-70); i5=60-(posi+dado-70);i6=65-(posi+dado-70); i7=75-(posi+dado-70)};
if(posi+dado<70){i3=posi+dado}
}
if (posi>69&&posi<75){
if(posi-dado<70){i1=dado-posi+104;i2=posi-dado-34}else{i1=posi-dado};
if(posi+dado==75){i3=75};
if(posi+dado>75){i3=50-(posi+dado-75);i4=55-(posi+dado-75); i5=60-(posi+dado-75);i6=65-(posi+dado-75); i7=70-(posi+dado-75)};
if(posi+dado<75){i3=posi+dado}
}if(posi==75&&dado!=6){i1=50-dado;i2=55-dado;i3=60-dado;i4=65-dado;i5=70-dado;i6=75-dado}
if(posi==75&&dado==6){i1=42;i2=7;i3=14;i4=21;i5=28;i6=35}
}}

function move2(lu,p11,p12,p21,p22){pepe=0;for(i=0;i<6;i++){if(turno==ordinapropi[i]){pepe++}};if(pepe>0){move1();pot=0;camv=0;lusdos=pos[turno-1];
if(i1==lu||i2==lu||i3==lu||i4==lu||i5==lu||i6==lu||i7==lu){
if(pos[0]==lu){pot++};if(pos[1]==lu){pot++};if(pos[2]==lu){pot++};
if(pos[3]==lu){pot++};if(pos[4]==lu){pot++};if(pos[5]==lu){pot++};
if(lu!=75&&pot==0&&turno==1){mvcapa(p11,p12);posiciox=p11;posicioy=p12;pos[0]=lu;};
if(lu!=75&&pot==1&&turno==1){mvcapa(p21,p22);posiciox=p21;posicioy=p22;pos[0]=lu;};
if(lu!=75&&pot==0&&turno==2){mvcapa(p11,p12);posiciox=p11;posicioy=p12;pos[1]=lu;};
if(lu!=75&&pot==1&&turno==2){mvcapa(p21,p22);posiciox=p21;posicioy=p22;pos[1]=lu;};
if(lu!=75&&pot==0&&turno==3){mvcapa(p11,p12);posiciox=p11;posicioy=p12;pos[2]=lu;};
if(lu!=75&&pot==1&&turno==3){mvcapa(p21,p22);posiciox=p21;posicioy=p22;pos[2]=lu;};
if(lu!=75&&pot==0&&turno==4){mvcapa(p11,p12);posiciox=p11;posicioy=p12;pos[3]=lu;};
if(lu!=75&&pot==1&&turno==4){mvcapa(p21,p22);posiciox=p21;posicioy=p22;pos[3]=lu;};
if(lu!=75&&pot==0&&turno==5){mvcapa(p11,p12);posiciox=p11;posicioy=p12;pos[4]=lu;};
if(lu!=75&&pot==1&&turno==5){mvcapa(p21,p22);posiciox=p21;posicioy=p22;pos[4]=lu;};
if(lu!=75&&pot==0&&turno==6){mvcapa(p11,p12);posiciox=p11;posicioy=p12;pos[5]=lu;};
if(lu!=75&&pot==1&&turno==6){mvcapa(p21,p22);posiciox=p21;posicioy=p22;pos[5]=lu;};
if(lu==7&&pot==2){mvcapa(155,59);posiciox=155;posicioy=59;pos[5]=7;};
if(lu==14&&pot==2){mvcapa(410,60);posiciox=410;posicioy=60;pos[5]=14;};
if(lu==21&&pot==2){mvcapa(539,282);posiciox=539;posicioy=282;pos[5]=21;};
if(lu==28&&pot==2){mvcapa(409,504);posiciox=409;posicioy=504;pos[5]=28;};
if(lu==35&&pot==2){mvcapa(155,505);posiciox=155;posicioy=505;pos[5]=35;};
if(lu==42&&pot==2){mvcapa(25,282);posiciox=25;posicioy=282;pos[5]=42;};
if(lu==75&&turno==1){mvcapa(248,308);posiciox=248;posicioy=248;pos[0]=lu;};
if(lu==75&&turno==2){mvcapa(242,277);posiciox=242;posicioy=242;pos[1]=lu;};
if(lu==75&&turno==3){mvcapa(282,298);posiciox=282;posicioy=282;pos[2]=lu;};
if(lu==75&&turno==4){mvcapa(282,329);posiciox=282;posicioy=282;pos[3]=lu;};
if(lu==75&&turno==5){mvcapa(316,308);posiciox=316;posicioy=316;pos[4]=lu;};
if(lu==75&&turno==6){mvcapa(322,277);posiciox=322;posicioy=277;pos[5]=lu;};
if(lu==75){document.images.dadort.src = "images/dadocolor2.gif"};
recol(lusdos);
if(lu==2||lu==5||lu==9||lu==12||lu==16||lu==19||lu==23||lu==26||lu==30||lu==33||lu==37||lu==40){estat=1;estatpropi=1;suspreg(0);}else{preguntas(lu);estat=3;estatpropi=3;fallo=0;}
sonar("move");}
if(ordinadors!=1){guardacont()};
}}

function mvcapare(rc,pax,pay){pax+="px";pay+="px";
if(rc==1){document.getElementById("capa1").style.left =pax; document.getElementById("capa1").style.top =pay};
if(rc==2){document.getElementById("capa2").style.left =pax; document.getElementById("capa2").style.top =pay};
if(rc==3){document.getElementById("capa3").style.left =pax; document.getElementById("capa3").style.top =pay};
if(rc==4){document.getElementById("capa4").style.left =pax; document.getElementById("capa4").style.top =pay};
if(rc==5){document.getElementById("capa5").style.left =pax; document.getElementById("capa5").style.top =pay};
if(rc==6){document.getElementById("capa6").style.left =pax; document.getElementById("capa6").style.top =pay};
}
function mvcapa(pax,pay){pax+="px";pay+="px";
if(turno==1){document.getElementById("capa1").style.left =pax; document.getElementById("capa1").style.top =pay};
if(turno==2){document.getElementById("capa2").style.left =pax; document.getElementById("capa2").style.top =pay};
if(turno==3){document.getElementById("capa3").style.left =pax; document.getElementById("capa3").style.top =pay};
if(turno==4){document.getElementById("capa4").style.left =pax; document.getElementById("capa4").style.top =pay};
if(turno==5){document.getElementById("capa5").style.left =pax; document.getElementById("capa5").style.top =pay};
if(turno==6){document.getElementById("capa6").style.left =pax; document.getElementById("capa6").style.top =pay};
}

function recol(luf){lusdos=0;
if(pos[0]==luf){recoloca=1};
if(pos[1]==luf){recoloca=2};
if(pos[2]==luf&&jugadores>2){recoloca=3};
if(pos[3]==luf&&jugadores>3){recoloca=4};
if(pos[4]==luf&&jugadores>4){recoloca=5};
if(pos[5]==luf&&jugadores>5){recoloca=6};
if(pos[0]!=luf&&pos[1]!=luf&&pos[2]!=luf&&pos[3]!=luf&&pos[4]!=luf&&pos[5]!=luf){recoloca=0};
if(luf==1){mvcapare(recoloca,2,228)};
if(luf==3){mvcapare(recoloca,32,157)};
if(luf==4){mvcapare(recoloca,48,125)};
if(luf==6){mvcapare(recoloca,96,69)};
if(luf==8){mvcapare(recoloca,191,15)};
if(luf==10){mvcapare(recoloca,265,0)};
if(luf==11){mvcapare(recoloca,302,0)};
if(luf==13){mvcapare(recoloca,373,15)};
if(luf==15){mvcapare(recoloca,470,69)};
if(luf==17){mvcapare(recoloca,518,125)};
if(luf==18){mvcapare(recoloca,537,157)};
if(luf==20){mvcapare(recoloca,561,227)};
if(luf==22){mvcapare(recoloca,561,337)};
if(luf==24){mvcapare(recoloca,537,408)};
if(luf==25){mvcapare(recoloca,518,439)};
if(luf==27){mvcapare(recoloca,470,497)};
if(luf==29){mvcapare(recoloca,373,550)};
if(luf==31){mvcapare(recoloca,302,565)};
if(luf==32){mvcapare(recoloca,265,565)};
if(luf==34){mvcapare(recoloca,191,550)};
if(luf==36){mvcapare(recoloca,96,497)};
if(luf==38){mvcapare(recoloca,48,439)};
if(luf==39){mvcapare(recoloca,29,408)};
if(luf==41){mvcapare(recoloca,2,337)};
if(luf==45){mvcapare(recoloca,60,267)};
if(luf==46){mvcapare(recoloca,97,267)};
if(luf==47){mvcapare(recoloca,134,267)};
if(luf==48){mvcapare(recoloca,171,267)};
if(luf==49){mvcapare(recoloca,208,267)};
if(luf==50){mvcapare(recoloca,158,98)};
if(luf==51){mvcapare(recoloca,177,130)};
if(luf==52){mvcapare(recoloca,196,162)};
if(luf==53){mvcapare(recoloca,215,194)};
if(luf==54){mvcapare(recoloca,233,226)};
if(luf==55){mvcapare(recoloca,378,83)};
if(luf==56){mvcapare(recoloca,361,115)};
if(luf==57){mvcapare(recoloca,342,147)};
if(luf==58){mvcapare(recoloca,323,179)};
if(luf==59){mvcapare(recoloca,305,210)};
if(luf==60){mvcapare(recoloca,505,267)};
if(luf==61){mvcapare(recoloca,468,267)};
if(luf==62){mvcapare(recoloca,431,267)};
if(luf==63){mvcapare(recoloca,394,267)};
if(luf==64){mvcapare(recoloca,357,267)};
if(luf==65){mvcapare(recoloca,409,466)};
if(luf==66){mvcapare(recoloca,390,434)};
if(luf==67){mvcapare(recoloca,371,402)};
if(luf==68){mvcapare(recoloca,352,371)};
if(luf==69){mvcapare(recoloca,333,339)};
if(luf==70){mvcapare(recoloca,186,483)};
if(luf==71){mvcapare(recoloca,205,451)};
if(luf==72){mvcapare(recoloca,223,419)};
if(luf==73){mvcapare(recoloca,241,387)};
if(luf==74){mvcapare(recoloca,260,355)};
if(luf==7){mvcapare(recoloca,126,50)};
if(luf==14){mvcapare(recoloca,405,30)};
if(luf==21){mvcapare(recoloca,563,263)};
if(luf==28){mvcapare(recoloca,405,537)};
if(luf==35){mvcapare(recoloca,126,516)};
if(luf==42){mvcapare(recoloca,2,262)};
pot=0;
if(pos[0]==luf){pot++};if(pos[1]==luf){pot++};if(pos[2]==luf){pot++};
if(pos[3]==luf){pot++};if(pos[4]==luf){pot++};if(pos[5]==luf){pot++};
if(pot==2){if(pos[5]==luf&&jugadores>5){recoloca=6};
if(pos[4]==luf&&jugadores>4){recoloca=5};
if(pos[3]==luf&&jugadores>3){recoloca=4};
if(pos[2]==luf&&jugadores>2){recoloca=3};
if(pos[1]==luf){recoloca=2};
if(pos[0]==luf){recoloca=1};
if(luf==7){mvcapare(recoloca,162,30)};
if(luf==14){mvcapare(recoloca,440,50)};
if(luf==21){mvcapare(recoloca,563,302)};
if(luf==28){mvcapare(recoloca,440,516)};
if(luf==35){mvcapare(recoloca,161,537)};
if(luf==42){mvcapare(recoloca,2,303)};}
}

function respostes(){intent++;fallo=0;
matrizrespuestas.length=0;pepe=0;
matrizrespuestas = respPreg.split(";");
for(i=0; i<matrizrespuestas.length;i++){if(document.forms.respostf.respuesta.value==matrizrespuestas[i]){pepe++};}
if(pepe>0){clearTimeout(down);document.forms.tiempo.crono.value="";
fazar(140);pep1=1*redexceso+1;pep="images/emoti/emoticor"+pep1+".gif";
if(pos[turno-1]!=7&&pos[turno-1]!=14&&pos[turno-1]!=21&&pos[turno-1]!=28&&pos[turno-1]!=35&&pos[turno-1]!=42&&pos[turno-1]!=75){
document.images.carita.src=pep;document.getElementById("divpreguntar").style.visibility = "hidden";
document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: black;'><b>&nbsp;&nbsp;&nbsp;&nbsp;Resposta correcta.</b></span>";

if(pep1<17){sonar("dinero")};
if(pep1>16&&pep1<42){sonar("dragon")};
if(pep1>41&&pep1<70){sonar("woohoo")};
if(pep1>69&&pep1<94){sonar("winner")};
if(pep1>93){sonar("trompeta")};
}
intent=0;colcrono2();estat=1;altrepep=0;temporizador();gallons();estatpropi=1;
if(ordinadors!=1){guardacont()};
}

else{if(intent>=intePreg){clearTimeout(down);document.forms.tiempo.crono.value="";fazar(119);pep1=1*redexceso+1;pep="images/emoti/emotiinc"+pep1+".gif";
document.images.carita.src=pep;document.getElementById("divpreguntar").style.visibility="hidden";
if(no_mostrarPreg==1){document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: red;'><b>&nbsp;Incorrecta.<br> Penseu-la, pot ser torne a eixir.</b></span>";};
if(no_mostrarPreg==0){document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: red;'><b>&nbsp;Incorrecta.<br> La resposta correcta &eacute;s:&nbsp;&nbsp;&nbsp; "+matrizrespuestas[0]+"</b></span>";};
if(pep1<7){sonar("alerta")};
if(pep1>6&&pep1<12){sonar("aycaramba")};
if(pep1>11&&pep1<19){sonar("burro")};
if(pep1>18&&pep1<23){sonar("cristal")};
if(pep1>22&&pep1<27){sonar("eco")};
if(pep1>26&&pep1<33){sonar("golpe")};
if(pep1>32&&pep1<44){sonar("grito")};
if(pep1>43&&pep1<49){sonar("mamamia")};
if(pep1>48&&pep1<58){sonar("nanana")};
if(pep1>57&&pep1<65){sonar("aha")};
if(pep1>64&&pep1<71){sonar("pacman")};
if(pep1>70&&pep1<77){sonar("perder")};
if(pep1>76&&pep1<82){sonar("risa1")};
if(pep1>81&&pep1<87){sonar("risa2")};
if(pep1>86&&pep1<91){sonar("risa3")};
if(pep1>90&&pep1<93){sonar("risa4")};
if(pep1>92&&pep1<96){sonar("risa5")};
if(pep1>95){sonar("what")};
intent=0;colcrono2();altrepep2=0;estatpropi=1;estat=1;fallo=1;canvitur();temporizador59();if(ordinadors!=1){guardacont()};
}


else{fazar(72);pep1=1*redexceso+1;pep="images/emoti/emotipru"+pep1+".gif";document.images.carita.src=pep;document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: blue;'><b>&nbsp;&nbsp;&nbsp;&nbsp;Incorrecta,..<br>&nbsp;&nbsp;&nbsp;&nbsp;Encara tens altra oportunitat</b></span>";

if(pep1<13){sonar("cartoon048")};
if(pep1>12&&pep1<25){sonar("cartoon067")};
if(pep1>24&&pep1<37){sonar("mariot")};
if(pep1>36&&pep1<49){sonar("mariohm")};
if(pep1>48){sonar("wakawaka")};

}}
document.getElementById("inforesposta").style.visibility = "visible";
}

function DownRepeat() {csec2--;guardacont();
matrizrespuestas.length=0;pepe=0; matrizrespuestas = respPreg.split(";");
document.forms.tiempo.crono.value=csec2; if(csec2==15){colcrono();sonar("tiburon")};
if(estat==3){
if(csec2==0){document.forms.tiempo.crono.value="";celdag=document.getElementById("cronom"); celdag.style.backgroundColor="#FFFFFF";clearTimeout(down);document.forms.tiempo.crono.value="";fazar(119);pep1=1*redexceso+1;pep="images/emoti/emotiinc"+pep1+".gif";
document.images.carita.src=pep;
if(no_mostrarPreg==1){document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: red;'><b>&nbsp;S'ha acabat el temps!<br> Penseu-la, pot ser torne a eixir.</b></span>";};
if(no_mostrarPreg==0){document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: red;'><b>&nbsp;S'ha acabat el temps!<br> La resposta correcta &eacute;s:&nbsp;&nbsp;&nbsp; "+matrizrespuestas[0]+"</b></span>";};
if(pep1<7){sonar("alerta")};
if(pep1>6&&pep1<12){sonar("aycaramba")};
if(pep1>11&&pep1<19){sonar("burro")};
if(pep1>18&&pep1<23){sonar("cristal")};
if(pep1>22&&pep1<27){sonar("eco")};
if(pep1>26&&pep1<33){sonar("golpe")};
if(pep1>32&&pep1<44){sonar("grito")};
if(pep1>43&&pep1<49){sonar("mamamia")};
if(pep1>48&&pep1<58){sonar("nanana")};
if(pep1>57&&pep1<65){sonar("aha")};
if(pep1>64&&pep1<71){sonar("pacman")};
if(pep1>70&&pep1<77){sonar("perder")};
if(pep1>76&&pep1<82){sonar("risa1")};
if(pep1>81&&pep1<87){sonar("risa2")};
if(pep1>86&&pep1<91){sonar("risa3")};
if(pep1>90&&pep1<93){sonar("risa4")};
if(pep1>92&&pep1<96){sonar("risa5")};
if(pep1>95){sonar("what")};
document.getElementById("inforesposta").style.visibility = "visible";
intent=0;colcrono2();altrepep2=0;estatpropi=1;estat=1;fallo=2;canvitur();temporizador59();



if(ordinadors!=1){guardacont()};
document.getElementById("divpreguntar").style.visibility="hidden";document.forms.respostf.respuesta.value="";

}else{down=setTimeout("DownRepeat()",1000)}}
if(estat==1){document.forms.tiempo.crono.value="";celdag=document.getElementById("cronom"); celdag.style.backgroundColor="#FFFFFF";document.forms.respostf.respuesta.value=""}
}
function DownRepeat3() {

document.forms.tiempo.crono.value=csec2; if(csec2==15){colcrono();sonar("tiburon")};

if(estat==1){document.forms.tiempo.crono.value="";celdag=document.getElementById("cronom"); celdag.style.backgroundColor="#FFFFFF";document.forms.respostf.respuesta.value="";}
}










function colcrono(){document.getElementById("cronom").style.backgroundColor="#FF0000";}

function colparti(){document.getElementById("partid").style.backgroundColor="#FF0000";}

function colcrono2(){document.getElementById("cronom").style.backgroundColor="#FFFFFF";}


function temporizador(){
altrepep++;
if(altrepep<7){apep=setTimeout("temporizador()",1000)}else{document.getElementById("inforesposta").style.visibility = "hidden";document.getElementById("espaigrafiques").style.display = "none";suspreg(0)};}

function temporizador59(){
altrepep2++;
if(altrepep2<7){apep2=setTimeout("temporizador59()",1000)}else{document.getElementById("inforesposta").style.visibility = "hidden";document.getElementById("espaigrafiques").style.display = "none";suspreg(0);if(ordinadors!=1){guardacont()};};}

function gallons(){document.getElementById("divpreguntar").style.visibility = "hidden";
if(pos[turno-1]==7&&gallo[turno-1][2]==0){gallo[turno-1][2]=1;document.images.carita.src="images/emoti/emotiqro.gif";sonar("aplausos");
document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: black;'><b>&nbsp;&nbsp;&nbsp;&nbsp;Resposta correcta i gall&oacute; roig.</b></span>";gallro();if(ven==0){ven=turno}};
if(pos[turno-1]==14&&gallo[turno-1][5]==0){gallo[turno-1][5]=1;document.images.carita.src="images/emoti/emotiqve.gif";sonar("aplausos");
document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: black;'><b>&nbsp;&nbsp;&nbsp;&nbsp;Resposta correcta i gall&oacute; verd.</b></span>";gallro();if(ven==0){ven=turno}};
if(pos[turno-1]==21&&gallo[turno-1][3]==0){gallo[turno-1][3]=1;document.images.carita.src="images/emoti/emotiqma.gif";sonar("aplausos");
document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: black;'><b>&nbsp;&nbsp;&nbsp;&nbsp;Resposta correcta i gall&oacute; marr&oacute;.</b></span>";gallro();if(ven==0){ven=turno}};
if(pos[turno-1]==28&&gallo[turno-1][0]==0){gallo[turno-1][0]=1;document.images.carita.src="images/emoti/emotiqaz.gif";sonar("happy");
document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: black;'><b>&nbsp;&nbsp;&nbsp;&nbsp;Resposta correcta i gall&oacute; blau.</b></span>";gallro();if(ven==0){ven=turno}};
if(pos[turno-1]==35&&gallo[turno-1][4]==0){gallo[turno-1][4]=1;document.images.carita.src="images/emoti/emotiqna.gif";sonar("aleluya");
document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: black;'><b>&nbsp;&nbsp;Resposta correcta i gall&oacute; taronja.</b></span>";gallro();if(ven==0){ven=turno}};
if(pos[turno-1]==42&&gallo[turno-1][1]==0){gallo[turno-1][1]=1;document.images.carita.src="images/emoti/emotiqam.gif";sonar("circo");
document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: black;'><b>&nbsp;&nbsp;Resposta correcta i gall&oacute; groc.</b></span>";gallro();if(ven==0){ven=turno}};
if(pos[turno-1]==75&&assigna==0&&gallo[turno-1][2]==0){gallo[turno-1][2]=1;document.images.carita.src="images/emoti/emotiqro.gif";sonar("aplausos");
document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: black;'><b>&nbsp;&nbsp;&nbsp;&nbsp;Resposta correcta i gall&oacute; roig.</b></span>";gallro();if(ven==0){ven=turno}};
if(pos[turno-1]==75&&assigna==1&&gallo[turno-1][5]==0){gallo[turno-1][5]=1;document.images.carita.src="images/emoti/emotiqve.gif";sonar("aplausos");
document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: black;'><b>&nbsp;&nbsp;&nbsp;&nbsp;Resposta correcta i gall&oacute; verd.</b></span>";gallro();if(ven==0){ven=turno}};
if(pos[turno-1]==75&&assigna==2&&gallo[turno-1][3]==0){gallo[turno-1][3]=1;document.images.carita.src="images/emoti/emotiqma.gif";sonar("aplausos");
document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: black;'><b>&nbsp;&nbsp;&nbsp;&nbsp;Resposta correcta i gall&oacute; marr&oacute;.</b></span>";gallro();if(ven==0){ven=turno}};
if(pos[turno-1]==75&&assigna==3&&gallo[turno-1][0]==0){gallo[turno-1][0]=1;document.images.carita.src="images/emoti/emotiqaz.gif";sonar("happy");
document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: black;'><b>&nbsp;&nbsp;&nbsp;&nbsp;Resposta correcta i gall&oacute; blau.</b></span>";gallro();if(ven==0){ven=turno}};
if(pos[turno-1]==75&&assigna==4&&gallo[turno-1][4]==0){gallo[turno-1][4]=1;document.images.carita.src="images/emoti/emotiqna.gif";sonar("aleluya");
document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: black;'><b>&nbsp;&nbsp;Resposta correcta i gall&oacute; taronja.</b></span>";gallro();if(ven==0){ven=turno}};
if(pos[turno-1]==75&&assigna==5&&gallo[turno-1][1]==0){gallo[turno-1][1]=1;document.images.carita.src="images/emoti/emotiqam.gif";sonar("circo");
document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: black;'><b>&nbsp;&nbsp;Resposta correcta i gall&oacute; groc.</b></span>";gallro();if(ven==0){ven=turno}};
if(ven!=0){sumt=1*gallo[turno-1][0]+gallo[turno-1][1]+gallo[turno-1][2]+gallo[turno-1][3]+gallo[turno-1][4]+gallo[turno-1][5];sumv=1*gallo[ven-1][0]+ gallo[ven-1][1]+ gallo[ven-1][2]+ gallo[ven-1][3]+ gallo[ven-1][4]+ gallo[ven-1][5];if(sumt>sumv){ven=turno};if(sumt==6&&pos[turno-1]==75){ven=turno;vencedor2()}}
turnos(turno)}

function gallro(){pepe2="images/quesitos"+gallo[turno-1][0]+gallo[turno-1][3]+gallo[turno-1][5]+gallo[turno-1][1]+gallo[turno-1][4]+gallo[turno-1][2]+".gif";
if(turno==1){document.images.quesito1.src=pepe2;};
if(turno==2){document.images.quesito2.src=pepe2;};
if(turno==3){document.images.quesito3.src=pepe2;};
if(turno==4){document.images.quesito4.src=pepe2;};
if(turno==5){document.images.quesito5.src=pepe2;};
if(turno==6){document.images.quesito6.src=pepe2;};
}

function canvitur(){
if (turno==jugadores){turno=1}else{turno++};
turnos(turno);
}

function nivdiver(){document.forms.ininiv.divni[1].checked="checked"};
function nivdiver2(){document.forms.ininiv.divni[0].checked="checked";document.forms.ininiv.nivel111[0].checked="checked";document.forms.ininiv.nivel444[0].checked="checked";document.forms.ininiv.nivel333[0].checked="checked";document.forms.ininiv.nivel222[0].checked="checked";document.forms.ininiv.nivel555[0].checked="checked";};


function repartiment(){



document.getElementById("eleniv").style.display = "none";
document.getElementById("elecciofitxa").style.display = "inline";


if(ordi[1]==0){document.images.j2nrepart.src="images/n0.gif";document.images.j2frepart.src="images/fichanp.gif";document.getElementById("fit1").style.display = "none";};if(ordi[1]==1){
if(ni2==1){document.getElementById("fit1").style.display = "none";document.images.j2nrepart.src="images/n1g.gif"};
if(ni2==2){document.getElementById("fit1").style.display = "none";document.images.j2nrepart.src="images/n2g.gif"};
if(ni2==3){document.getElementById("fit1").style.display = "none";document.images.j2nrepart.src="images/n3g.gif"};
if(ni2==4){document.getElementById("fit1").style.display = "none";document.images.j2nrepart.src="images/n4g.gif"};
if(ni2==5){document.getElementById("fit1").style.display = "none";document.images.j2nrepart.src="images/n5g.gif"};
};
if(ordi[2]==0){document.images.j3nrepart.src="images/n0.gif";document.images.j3frepart.src="images/fichanp.gif";document.getElementById("fit2").style.display = "none";};if(ordi[2]==1){
if(ni3==1){document.getElementById("fit2").style.display = "none";document.images.j3nrepart.src="images/n1g.gif"};
if(ni3==2){document.getElementById("fit2").style.display = "none";document.images.j3nrepart.src="images/n2g.gif"};
if(ni3==3){document.getElementById("fit2").style.display = "none";document.images.j3nrepart.src="images/n3g.gif"};
if(ni3==4){document.getElementById("fit2").style.display = "none";document.images.j3nrepart.src="images/n4g.gif"};
if(ni3==5){document.getElementById("fit2").style.display = "none";document.images.j3nrepart.src="images/n5g.gif"};
};
if(ordi[3]==0){document.images.j4nrepart.src="images/n0.gif";document.images.j4frepart.src="images/fichanp.gif";document.getElementById("fit3").style.display = "none";};if(ordi[3]==1){
if(ni4==1){document.getElementById("fit3").style.display = "none";document.images.j4nrepart.src="images/n1g.gif"};
if(ni4==2){document.getElementById("fit3").style.display = "none";document.images.j4nrepart.src="images/n2g.gif"};
if(ni4==3){document.getElementById("fit3").style.display = "none";document.images.j4nrepart.src="images/n3g.gif"};
if(ni4==4){document.getElementById("fit3").style.display = "none";document.images.j4nrepart.src="images/n4g.gif"};
if(ni4==5){document.getElementById("fit3").style.display = "none";document.images.j4nrepart.src="images/n5g.gif"};
};
if(ordi[4]==0){document.images.j5nrepart.src="images/n0.gif";document.images.j5frepart.src="images/fichanp.gif";document.getElementById("fit4").style.display = "none";};if(ordi[4]==1){
if(ni5==1){document.getElementById("fit4").style.display = "none";document.images.j5nrepart.src="images/n1g.gif"};
if(ni5==2){document.getElementById("fit4").style.display = "none";document.images.j5nrepart.src="images/n2g.gif"};
if(ni5==3){document.getElementById("fit4").style.display = "none";document.images.j5nrepart.src="images/n3g.gif"};
if(ni5==4){document.getElementById("fit4").style.display = "none";document.images.j5nrepart.src="images/n4g.gif"};
if(ni5==5){document.getElementById("fit4").style.display = "none";document.images.j5nrepart.src="images/n5g.gif"};
};
if(ordi[5]==0){document.images.j6nrepart.src="images/n0.gif";document.images.j6frepart.src="images/fichanp.gif";document.getElementById("fit5").style.display = "none";};if(ordi[5]==1){
if(ni6==1){document.getElementById("fit5").style.display = "none";document.images.j6nrepart.src="images/n1g.gif"};
if(ni6==2){document.getElementById("fit5").style.display = "none";document.images.j6nrepart.src="images/n2g.gif"};
if(ni6==3){document.getElementById("fit5").style.display = "none";document.images.j6nrepart.src="images/n3g.gif"};
if(ni6==4){document.getElementById("fit5").style.display = "none";document.images.j6nrepart.src="images/n4g.gif"};
if(ni6==5){document.getElementById("fit5").style.display = "none";document.images.j6nrepart.src="images/n5g.gif"};
};

}
async function repartiment0(){if(document.forms.inici.nom.value==""||document.forms.inici.contrasenya.value==""){alert("Per conectar-se cal tindre una partida ja creada i posar el nom i la contrasenya.")}else{
nom=document.forms.inici.nom.value;
contrasenya=document.forms.inici.contrasenya.value;
recuperabe= await recuperaini();
// consulta que el nom y la contrasenya corresponden a una partida creada. en caso positivo sigue.
infocolores2();
if (recuperabe==1){if(ordinadors-ordinaconnectat==1){alert("És l'últim ordinador en connectar-se, per tant totes les fitxes que quedaven per assignar són teues");ordinaconnectat++;
for(j=1;j<jugadores;j++){if(ordi[j]==2){ordi[j]=1;pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pepe++;}};kk=1*j+1;ordinapropi[pepe]=kk;alert("T'he assignat la fitxa "+ kk)}};guardaini2();nova();suspreg(0);recuperacont()}else{
repartiment()}}}
}
function repartiment1(){
if(document.forms.connefinal2.fitxa2[0].checked){ordi[1]=1;pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pepe++;}}ordinapropi[pepe]=2};
if(document.forms.connefinal2.fitxa2[1].checked){ordi[2]=1;pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pepe++;}}ordinapropi[pepe]=3};
if(document.forms.connefinal2.fitxa2[2].checked){ordi[3]=1;pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pepe++;}}ordinapropi[pepe]=4};
if(document.forms.connefinal2.fitxa2[3].checked){ordi[4]=1;pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pepe++;}}ordinapropi[pepe]=5};
if(document.forms.connefinal2.fitxa2[4].checked){ordi[5]=1;pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pepe++;}}ordinapropi[pepe]=6};
pepe=0;for(i=0;i<6;i++){if(ordi[i]==2){pepe++}};
if(ordinadors-pepe==1){nocal();document.getElementById("elecciofitxa2").style.display = "none"};

if(ni1==1){document.images.j1nrepart1.src="images/n1g.gif"};
if(ni1==2){document.images.j1nrepart1.src="images/n2g.gif"};
if(ni1==3){document.images.j1nrepart1.src="images/n3g.gif"};
if(ni1==4){document.images.j1nrepart1.src="images/n4g.gif"};
if(ni1==5){document.images.j1nrepart1.src="images/n5g.gif"};


if(ordi[1]==0){document.images.j2nrepart1.src="images/n0.gif";document.images.j2frepart1.src="images/fichanp.gif";document.getElementById("fit11").style.display = "none";};if(ordi[1]==1){
if(ni2==1){document.getElementById("fit11").style.display = "none";document.images.j2nrepart1.src="images/n1g.gif"};
if(ni2==2){document.getElementById("fit11").style.display = "none";document.images.j2nrepart1.src="images/n2g.gif"};
if(ni2==3){document.getElementById("fit11").style.display = "none";document.images.j2nrepart1.src="images/n3g.gif"};
if(ni2==4){document.getElementById("fit11").style.display = "none";document.images.j2nrepart1.src="images/n4g.gif"};
if(ni2==5){document.getElementById("fit11").style.display = "none";document.images.j2nrepart1.src="images/n5g.gif"};
};
if(ordi[2]==0){document.images.j3nrepart1.src="images/n0.gif";document.images.j3frepart1.src="images/fichanp.gif";document.getElementById("fit21").style.display = "none";};if(ordi[2]==1){
if(ni3==1){document.getElementById("fit21").style.display = "none";document.images.j3nrepart1.src="images/n1g.gif"};
if(ni3==2){document.getElementById("fit21").style.display = "none";document.images.j3nrepart1.src="images/n2g.gif"};
if(ni3==3){document.getElementById("fit21").style.display = "none";document.images.j3nrepart1.src="images/n3g.gif"};
if(ni3==4){document.getElementById("fit21").style.display = "none";document.images.j3nrepart1.src="images/n4g.gif"};
if(ni3==5){document.getElementById("fit21").style.display = "none";document.images.j3nrepart1.src="images/n5g.gif"};
};
if(ordi[3]==0){document.images.j4nrepart1.src="images/n0.gif";document.images.j4frepart1.src="images/fichanp.gif";document.getElementById("fit31").style.display = "none";};if(ordi[3]==1){
if(ni4==1){document.getElementById("fit31").style.display = "none";document.images.j4nrepart1.src="images/n1g.gif"};
if(ni4==2){document.getElementById("fit31").style.display = "none";document.images.j4nrepart1.src="images/n2g.gif"};
if(ni4==3){document.getElementById("fit31").style.display = "none";document.images.j4nrepart1.src="images/n3g.gif"};
if(ni4==4){document.getElementById("fit31").style.display = "none";document.images.j4nrepart1.src="images/n4g.gif"};
if(ni4==5){document.getElementById("fit31").style.display = "none";document.images.j4nrepart1.src="images/n5g.gif"};
};
if(ordi[4]==0){document.images.j5nrepart1.src="images/n0.gif";document.images.j5frepart1.src="images/fichanp.gif";document.getElementById("fit41").style.display = "none";};if(ordi[4]==1){
if(ni5==1){document.getElementById("fit41").style.display = "none";document.images.j5nrepart1.src="images/n1g.gif"};
if(ni5==2){document.getElementById("fit41").style.display = "none";document.images.j5nrepart1.src="images/n2g.gif"};
if(ni5==3){document.getElementById("fit41").style.display = "none";document.images.j5nrepart1.src="images/n3g.gif"};
if(ni5==4){document.getElementById("fit41").style.display = "none";document.images.j5nrepart1.src="images/n4g.gif"};
if(ni5==5){document.getElementById("fit41").style.display = "none";document.images.j5nrepart1.src="images/n5g.gif"};
};
if(ordi[5]==0){document.images.j6nrepart1.src="images/n0.gif";document.images.j6frepart1.src="images/fichanp.gif";document.getElementById("fit51").style.display = "none";};if(ordi[5]==1){
if(ni6==1){document.getElementById("fit51").style.display = "none";document.images.j6nrepart1.src="images/n1g.gif"};
if(ni6==2){document.getElementById("fit51").style.display = "none";document.images.j6nrepart1.src="images/n2g.gif"};
if(ni6==3){document.getElementById("fit51").style.display = "none";document.images.j6nrepart1.src="images/n3g.gif"};
if(ni6==4){document.getElementById("fit51").style.display = "none";document.images.j6nrepart1.src="images/n4g.gif"};
if(ni6==5){document.getElementById("fit51").style.display = "none";document.images.j6nrepart1.src="images/n5g.gif"};
};
}

function repartiment2(){if(ordi[1]==0){document.images.j2nrepart1.src="images/n0.gif";document.images.j2frepart1.src="images/fichanp.gif";document.getElementById("fit11").style.display = "none";};
if(ni1==1){document.images.j1nrepart1.src="images/n1g.gif"};
if(ni1==2){document.images.j1nrepart1.src="images/n2g.gif"};
if(ni1==3){document.images.j1nrepart1.src="images/n3g.gif"};
if(ni1==4){document.images.j1nrepart1.src="images/n4g.gif"};
if(ni1==5){document.images.j1nrepart1.src="images/n5g.gif"};
if(ordi[1]==1){
if(ni2==1){document.getElementById("fit11").style.display = "none";document.images.j2nrepart1.src="images/n1g.gif"};
if(ni2==2){document.getElementById("fit11").style.display = "none";document.images.j2nrepart1.src="images/n2g.gif"};
if(ni2==3){document.getElementById("fit11").style.display = "none";document.images.j2nrepart1.src="images/n3g.gif"};
if(ni2==4){document.getElementById("fit11").style.display = "none";document.images.j2nrepart1.src="images/n4g.gif"};
if(ni2==5){document.getElementById("fit11").style.display = "none";document.images.j2nrepart1.src="images/n5g.gif"};
};
if(ordi[1]==2){
if(ni2==1){document.images.j2nrepart1.src="images/n1.gif"};
if(ni2==2){document.images.j2nrepart1.src="images/n2.gif"};
if(ni2==3){document.images.j2nrepart1.src="images/n3.gif"};
if(ni2==4){document.images.j2nrepart1.src="images/n4.gif"};
if(ni2==5){document.images.j2nrepart1.src="images/n5.gif"};
};
if(ordi[2]==0){document.images.j3nrepart1.src="images/n0.gif";document.images.j3frepart1.src="images/fichanp.gif";document.getElementById("fit21").style.display = "none";};
if(ordi[2]==1){
if(ni3==1){document.getElementById("fit21").style.display = "none";document.images.j3nrepart1.src="images/n1g.gif"};
if(ni3==2){document.getElementById("fit21").style.display = "none";document.images.j3nrepart1.src="images/n2g.gif"};
if(ni3==3){document.getElementById("fit21").style.display = "none";document.images.j3nrepart1.src="images/n3g.gif"};
if(ni3==4){document.getElementById("fit21").style.display = "none";document.images.j3nrepart1.src="images/n4g.gif"};
if(ni3==5){document.getElementById("fit21").style.display = "none";document.images.j3nrepart1.src="images/n5g.gif"};
};
if(ordi[2]==2){
if(ni3==1){document.images.j3nrepart1.src="images/n1.gif"};
if(ni3==2){document.images.j3nrepart1.src="images/n2.gif"};
if(ni3==3){document.images.j3nrepart1.src="images/n3.gif"};
if(ni3==4){document.images.j3nrepart1.src="images/n4.gif"};
if(ni3==5){document.images.j3nrepart1.src="images/n5.gif"};
};
if(ordi[3]==0){document.images.j4nrepart1.src="images/n0.gif";document.images.j4frepart1.src="images/fichanp.gif";document.getElementById("fit31").style.display = "none";};
if(ordi[3]==1){
if(ni4==1){document.getElementById("fit31").style.display = "none";document.images.j4nrepart1.src="images/n1g.gif"};
if(ni4==2){document.getElementById("fit31").style.display = "none";document.images.j4nrepart1.src="images/n2g.gif"};
if(ni4==3){document.getElementById("fit31").style.display = "none";document.images.j4nrepart1.src="images/n3g.gif"};
if(ni4==4){document.getElementById("fit31").style.display = "none";document.images.j4nrepart1.src="images/n4g.gif"};
if(ni4==5){document.getElementById("fit31").style.display = "none";document.images.j4nrepart1.src="images/n5g.gif"};
};
if(ordi[3]==2){
if(ni4==1){document.images.j4nrepart1.src="images/n1.gif"};
if(ni4==2){document.images.j4nrepart1.src="images/n2.gif"};
if(ni4==3){document.images.j4nrepart1.src="images/n3.gif"};
if(ni4==4){document.images.j4nrepart1.src="images/n4.gif"};
if(ni4==5){document.images.j4nrepart1.src="images/n5.gif"};
};
if(ordi[4]==0){document.images.j5nrepart1.src="images/n0.gif";document.images.j5frepart1.src="images/fichanp.gif";document.getElementById("fit41").style.display = "none";};
if(ordi[4]==1){
if(ni5==1){document.getElementById("fit41").style.display = "none";document.images.j5nrepart1.src="images/n1g.gif"};
if(ni5==2){document.getElementById("fit41").style.display = "none";document.images.j5nrepart1.src="images/n2g.gif"};
if(ni5==3){document.getElementById("fit41").style.display = "none";document.images.j5nrepart1.src="images/n3g.gif"};
if(ni5==4){document.getElementById("fit41").style.display = "none";document.images.j5nrepart1.src="images/n4g.gif"};
if(ni5==5){document.getElementById("fit41").style.display = "none";document.images.j5nrepart1.src="images/n5g.gif"};
};
if(ordi[4]==2){
if(ni5==1){document.images.j5nrepart1.src="images/n1.gif"};
if(ni5==2){document.images.j5nrepart1.src="images/n2.gif"};
if(ni5==3){document.images.j5nrepart1.src="images/n3.gif"};
if(ni5==4){document.images.j5nrepart1.src="images/n4.gif"};
if(ni5==5){document.images.j5nrepart1.src="images/n5.gif"};
};
if(ordi[5]==0){document.images.j6nrepart1.src="images/n0.gif";document.images.j6frepart1.src="images/fichanp.gif";document.getElementById("fit51").style.display = "none";};
if(ordi[5]==1){
if(ni6==1){document.getElementById("fit51").style.display = "none";document.images.j6nrepart1.src="images/n1g.gif"};
if(ni6==2){document.getElementById("fit51").style.display = "none";document.images.j6nrepart1.src="images/n2g.gif"};
if(ni6==3){document.getElementById("fit51").style.display = "none";document.images.j6nrepart1.src="images/n3g.gif"};
if(ni6==4){document.getElementById("fit51").style.display = "none";document.images.j6nrepart1.src="images/n4g.gif"};
if(ni6==5){document.getElementById("fit51").style.display = "none";document.images.j6nrepart1.src="images/n5g.gif"};
};
if(ordi[5]==2){
if(ni6==1){document.images.j6nrepart1.src="images/n1.gif"};
if(ni6==2){document.images.j6nrepart1.src="images/n2.gif"};
if(ni6==3){document.images.j6nrepart1.src="images/n3.gif"};
if(ni6==4){document.images.j6nrepart1.src="images/n4.gif"};
if(ni6==5){document.images.j6nrepart1.src="images/n5.gif"};
};}

function espera(){
pepe=0;for(i=0;i<6;i++){if(ordi[i]==2){pepe++}};
if(pepe>0){document.getElementById("espera").style.display = "inline";
if(turno==1){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichabp.gif'>"};
if(turno==2){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichagp.gif'>"};
if(turno==3){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichamp.gif'>"};
if(turno==4){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/ficharp.gif'>"};
if(turno==5){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichatp.gif'>"};
if(turno==6){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichavp.gif'>"};
document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 20px; align: center'><b>El torn li correspon a<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pep+"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  style='width: 100px; height: 115px;' alt='' src='images/espera5.png'>"}
infocolores2();
document.getElementById("elecciofitxa2").style.display = "none";
document.getElementById("elecciofitxa").style.display = "none";
refrescarinici();
}
function refrescarinici(){
pepe25=0;for(i=0;i<6;i++){if(ordi[i]==2){pepe25++}};
if(pepe25==0){recuperacont();document.getElementById("espera").style.display = "none";nova();suspreg(0);};
if(pepe25==0&&pi==1){document.getElementById("fondonegro").style.display = "none";clearTimeout(tri);};
if(pepe25>0){pi=1;recuperaini();tri=setTimeout("refrescarinici()",100)};
}


function nomes(){

if(document.forms.connefinal2.fitxa2[0].checked){ordi[1]=1;pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pepe++}};ordinapropi[pepe]=2};

if(document.forms.connefinal2.fitxa2[1].checked){ordi[2]=1;pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pepe++}};ordinapropi[pepe]=3};
if(document.forms.connefinal2.fitxa2[2].checked){ordi[3]=1;pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pepe++}};ordinapropi[pepe]=4};
if(document.forms.connefinal2.fitxa2[3].checked){ordi[4]=1;pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pepe++}};ordinapropi[pepe]=5};
if(document.forms.connefinal2.fitxa2[4].checked){ordi[5]=1;pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pepe++}};ordinapropi[pepe]=6};
document.getElementById("elecciofitxa2").style.display = "none";

nocal();
}
function afegir(){pepe=0;for(i=0;i<6;i++){if(ordi[i]==2){pepe++}};
if(document.forms.connefinal.fitxa[0].checked){ordi[1]=1;pep=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pep++}};ordinapropi[pep]=2};
if(document.forms.connefinal.fitxa[1].checked){ordi[2]=1;pep=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pep++}};ordinapropi[pep]=3};
if(document.forms.connefinal.fitxa[2].checked){ordi[3]=1;pep=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pep++}};ordinapropi[pep]=4};
if(document.forms.connefinal.fitxa[3].checked){ordi[4]=1;pep=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pep++}};ordinapropi[pep]=5};
if(document.forms.connefinal.fitxa[4].checked){ordi[5]=1;pep=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pep++}};ordinapropi[pep]=6};
ordinaconnectat++;guardaini2();
if(pepe-1==ordinadors-ordinaconnectat&&pepe>1){espera()}
if(ordinadors-ordinaconnectat==0){document.getElementById("elecciofitxa").style.display = "none";
nova();recuperacont()}
if(pepe-1>ordinadors-ordinaconnectat){document.getElementById("simple").style.display = "none";document.getElementById("ja").style.display = "inline";document.getElementById("doble").style.display = "inline";repartiment()}
}
function afegir2(){pepe=0;for(i=0;i<6;i++){if(ordi[i]==2){pepe++}};
if(document.forms.connefinal.fitxa[0].checked){ordi[1]=1;pep=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pep++}};ordinapropi[pep]=2};
if(document.forms.connefinal.fitxa[1].checked){ordi[2]=1;pep=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pep++}};ordinapropi[pep]=3};
if(document.forms.connefinal.fitxa[2].checked){ordi[3]=1;pep=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pep++}};ordinapropi[pep]=4};
if(document.forms.connefinal.fitxa[3].checked){ordi[4]=1;pep=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pep++}};ordinapropi[pep]=5};
if(document.forms.connefinal.fitxa[4].checked){ordi[5]=1;pep=0;for(i=0;i<6;i++){if(ordinapropi[i]!=0){pep++}};ordinapropi[pep]=6};guardaini2();
if(pepe-1==ordinadors-ordinaconnectat&&pepe>1){espera()}
if(ordinadors-ordinaconnectat==0){document.getElementById("elecciofitxa2").style.display = "none";nova()}
if(pepe-1>ordinadors-ordinaconnectat){repartiment()}
}

function infopartida1(){
pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]==1){pepe++}};
if(pepe==1&&ni1==1){document.images.j1n.src="images/n1.gif"};if(pepe==0&&ni1==1){document.images.j1n.src="images/n1g.gif"}
if(pepe==1&&ni1==2){document.images.j1n.src="images/n2.gif"};if(pepe==0&&ni1==2){document.images.j1n.src="images/n2g.gif"};
if(pepe==1&&ni1==3){document.images.j1n.src="images/n3.gif"};if(pepe==0&&ni1==3){document.images.j1n.src="images/n3g.gif"};
if(pepe==1&&ni1==4){document.images.j1n.src="images/n4.gif"};if(pepe==0&&ni1==4){document.images.j1n.src="images/n4g.gif"};
if(pepe==1&&ni1==5){document.images.j1n.src="images/n5.gif"};if(pepe==0&&ni1==5){document.images.j1n.src="images/n5g.gif"};
if(pepe==1){document.getElementById("qj1").style.background = "white"};
if(pepe==1){document.images.fjj1.src="images/fichabp.gif"};
pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]==2){pepe++}};
if(pepe==1&&ni2==1){document.images.j2n.src="images/n1.gif"};if(pepe==0&&ni2==1){document.images.j2n.src="images/n1g.gif"};
if(pepe==1&&ni2==2){document.images.j2n.src="images/n2.gif"};if(pepe==0&&ni2==2){document.images.j2n.src="images/n2g.gif"};
if(pepe==1&&ni2==3){document.images.j2n.src="images/n3.gif"};if(pepe==0&&ni2==3){document.images.j2n.src="images/n3g.gif"};
if(pepe==1&&ni2==4){document.images.j2n.src="images/n4.gif"};if(pepe==0&&ni2==4){document.images.j2n.src="images/n4g.gif"};
if(pepe==1&&ni2==5){document.images.j2n.src="images/n5.gif"};if(pepe==0&&ni2==5){document.images.j2n.src="images/n5g.gif"};
if(pepe==1){document.getElementById("qj2").style.background = "white"};
if(pepe==1){document.images.fjj2.src="images/fichagp.gif"};
pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]==3){pepe++}};
if(pepe==1&&ni3==1){document.images.j3n.src="images/n1.gif"};if(pepe==0&&ni3==1){document.images.j3n.src="images/n1g.gif"};
if(pepe==1&&ni3==2){document.images.j3n.src="images/n2.gif"};if(pepe==0&&ni3==2){document.images.j3n.src="images/n2g.gif"};
if(pepe==1&&ni3==3){document.images.j3n.src="images/n3.gif"};if(pepe==0&&ni3==3){document.images.j3n.src="images/n3g.gif"};
if(pepe==1&&ni3==4){document.images.j3n.src="images/n4.gif"};if(pepe==0&&ni3==4){document.images.j3n.src="images/n4g.gif"};
if(pepe==1&&ni3==5){document.images.j3n.src="images/n5.gif"};if(pepe==0&&ni3==5){document.images.j3n.src="images/n5g.gif"};
if(pepe==1){document.getElementById("qj3").style.background = "white"};
if(pepe==1){document.images.fjj3.src="images/fichamp.gif"};
pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]==4){pepe++}};
if(pepe==1&&ni4==1){document.images.j4n.src="images/n1.gif"};if(pepe==0&&ni4==1){document.images.j4n.src="images/n1g.gif"};
if(pepe==1&&ni4==2){document.images.j4n.src="images/n2.gif"};if(pepe==0&&ni4==2){document.images.j4n.src="images/n2g.gif"};
if(pepe==1&&ni4==3){document.images.j4n.src="images/n3.gif"};if(pepe==0&&ni4==3){document.images.j4n.src="images/n3g.gif"};
if(pepe==1&&ni4==4){document.images.j4n.src="images/n4.gif"};if(pepe==0&&ni4==4){document.images.j4n.src="images/n4g.gif"};
if(pepe==1&&ni4==5){document.images.j4n.src="images/n5.gif"};if(pepe==0&&ni4==5){document.images.j4n.src="images/n5g.gif"};
if(pepe==1){document.getElementById("qj4").style.background = "white"};
if(pepe==1){document.images.fjj4.src="images/ficharp.gif"};
pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]==5){pepe++}};
if(pepe==1&&ni5==1){document.images.j5n.src="images/n1.gif"};if(pepe==0&&ni5==1){document.images.j5n.src="images/n1g.gif"};
if(pepe==1&&ni5==2){document.images.j5n.src="images/n2.gif"};if(pepe==0&&ni5==2){document.images.j5n.src="images/n2g.gif"};
if(pepe==1&&ni5==3){document.images.j5n.src="images/n3.gif"};if(pepe==0&&ni5==3){document.images.j5n.src="images/n3g.gif"};
if(pepe==1&&ni5==4){document.images.j5n.src="images/n4.gif"};if(pepe==0&&ni5==4){document.images.j5n.src="images/n4g.gif"};
if(pepe==1&&ni5==5){document.images.j5n.src="images/n5.gif"};if(pepe==0&&ni5==5){document.images.j5n.src="images/n5g.gif"};
if(pepe==1){document.getElementById("qj5").style.background = "white"};
if(pepe==1){document.images.fjj5.src="images/fichatp.gif"};
pepe=0;for(i=0;i<6;i++){if(ordinapropi[i]==6){pepe++}};
if(pepe==1&&ni6==1){document.images.j6n.src="images/n1.gif"};if(pepe==0&&ni6==1){document.images.j6n.src="images/n1g.gif"};
if(pepe==1&&ni6==2){document.images.j6n.src="images/n2.gif"};if(pepe==0&&ni6==2){document.images.j6n.src="images/n2g.gif"};
if(pepe==1&&ni6==3){document.images.j6n.src="images/n3.gif"};if(pepe==0&&ni6==3){document.images.j6n.src="images/n3g.gif"};
if(pepe==1&&ni6==4){document.images.j6n.src="images/n4.gif"};if(pepe==0&&ni6==4){document.images.j6n.src="images/n4g.gif"};
if(pepe==1&&ni6==5){document.images.j6n.src="images/n5.gif"};if(pepe==0&&ni6==5){document.images.j6n.src="images/n5g.gif"};
if(pepe==1){document.getElementById("qj6").style.background = "white"};
if(pepe==1){document.images.fjj6.src="images/fichavp.gif"};
}

async function recuperacont(){
await consultaguardada();
if(guardada==2){guardada=0;document.getElementById('fondonegro').style.display='none';document.getElementById('confirmaguardar2').style.display='none';}
if(guardada==3&&estat==1){document.getElementById("partid").style.visibility = "hidden";pepon=0;for(i=0;i<6;i++){if(turno==ordinapropi[i]){pepon++}};
document.getElementById('fondonegro').style.display='inline';document.getElementById('confirmaguardar2').style.display='inline';
if(pepon==0){document.getElementById("confirmaguardar2").innerHTML="S'acabat el temps de partida.<br> El jugador amb el torn té l'opció de continuar, guardar partida o finalitzar definitivament";

}
if(pepon>0){document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 20px; align: center'><b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  style='width: 225px; height: 150px;' alt='' src='images/decision.gif'></div></b></span>";}}
if(ordinapropi[0]!=1){if(marcatemp==1){await consultatemp();Display2(chor,cmin);document.forms.tiempo.partida.value=disp2;if((chor==0)&&(cmin==5)){colparti()};

if(1*chor+1*cmin<=0&&estat!=1){Display2(0,0)}}};variable=0; sonar3("blanco");
paco=0;for(i=0;i<6;i++){if(turno==ordinapropi[i]){paco++}};if(paco==0){
await consultapart();
// he puesto esta línea para que nos indique la pregunta. debe estar después de la consulta, pero creo que debe estar en el ordenador que lleva el turno, por lo tanto no aquí.
//document.getElementById("info1").innerHTML="pepe: "+pep+",assignatura: "+ assignatura+", nivell: "+nivell;
if(vencedor==1){variable=1;vencedor8()}
if(guardada==1){guardarpartida2();variable=1};
if(estat==2&&estatpropi==1){estatpropi=0;pasardado();};
if(estat==3&&estatpropi==2){DownRepeat3();estatpropi=3;suspreg(0);};
if(estat==3&&estatpropi==3){DownRepeat3();};
if(estat==3&&estatpropi==0){mvcapa(posiciox,posicioy);estatpropi=2;recol(lusdos);suspreg(0);document.getElementById("divpreguntar").style.visibility = "hidden";sonar("mover");};
if(estat==1&&estatpropi==0){estatpropi=1;mvcapa(posiciox,posicioy);suspreg(0);sonar("mover");};


if(estat==1&&estatpropi==3&&fallo==0){document.getElementById("inforesposta").style.visibility = "visible";intent++;
document.forms.tiempo.crono.value="";
fazar(119);pep1=1*redexceso+1;pep="images/emoti/emotiinc"+pep1+".gif";document.images.carita.src=pep;document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: black;'><b>&nbsp;&nbsp;&nbsp;&nbsp;Resposta correcta.</b></span>";
if(pep1<42){sonar("dragon")};
if(pep1>41&&pep1<70){sonar("woohoo")};
if(pep1>69&&pep1<94){sonar("winner")};
if(pep1>93){sonar("trompeta")};
intent=0;colcrono2();altrepep=0;temporizador();gallro();turnos(turno);estatpropi=1}



if(estat==1&&estatpropi==3&&fallo!=0){document.forms.tiempo.crono.value="";fazar(140);pep1=1*redexceso+1;
pep="images/emoti/emoticor"+pep1+".gif";document.images.carita.src=pep;

matrizrespuestas.length=0;pepe=0;
matrizrespuestas = respPreg.split(";");
if(no_mostrarPreg==1){document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: red;'><b>&nbsp;Incorrecta.<br> Penseu-la, pot ser torne a eixir.</b></span>";};
if(no_mostrarPreg==0){document.getElementById("dadesresposta").innerHTML="<span style='font-family: Helvetica; align:center; font-weight: normal; font-size: 24px; line-height: normal; font-size-adjust: none; font-stretch: normal; color: red;'><b>&nbsp;Incorrecta.<br> La resposta correcta &eacute;s:&nbsp;&nbsp;&nbsp; "+matrizrespuestas[0]+"</b></span>";};

if(pep1<7){sonar("alerta")};
if(pep1>6&&pep1<19){sonar("aycaramba")};
if(pep1>18&&pep1<23){sonar("cristal")};
if(pep1>22&&pep1<27){sonar("eco")};
if(pep1>26&&pep1<33){sonar("golpe")};
if(pep1>32&&pep1<44){sonar("grito")};
if(pep1>43&&pep1<49){sonar("mamamia")};
if(pep1>48&&pep1<58){sonar("nanana")};
if(pep1>57&&pep1<65){sonar("aha")};
if(pep1>64&&pep1<71){sonar("pacman")};
if(pep1>70&&pep1<77){sonar("perder")};
if(pep1>76&&pep1<82){sonar("risa1")};
if(pep1>81&&pep1<87){sonar("risa2")};
if(pep1>86&&pep1<91){sonar("risa3")};
if(pep1>90&&pep1<93){sonar("risa4")};
if(pep1>92&&pep1<96){sonar("risa5")};
if(pep1>95){sonar("what")};

intent=0;colcrono2();altrepep=0;document.getElementById("inforesposta").style.visibility = "visible";temporizador();estatpropi=1;fallo=0;turnos(turno);
//	document.getElementById("info2").innerHTML="turno "+turno;
}

//if(estat==1&&estatpropi==3&&fallo==2){turnos(turno);fallo=0;alert("hola")}


}
if (variable!=1){trf=setTimeout("recuperacont()",100)};
}
function nocal(){infopartida1();infocolores2();guardaini();espera()}
function movimentsp(){move1();pepe=0;
if(i1==75||i2==75||i3==75||i4==75||i5==75||i6==75||i7==75){pepe=1};
pep=0;for(i=0;i<6;i++){if(pos[i]==i1&&i1!=0){pep++}};if(pep<2){pepe=1};if(pep==2){if(i1==7||i1==14||i1==21||i1==28||i1==35||i1==42){pepe=1}};
pep=0;for(i=0;i<6;i++){if(pos[i]==i2&&i2!=0){pep++}};if(pep<2){pepe=1};if(pep==2){if(i2==7||i2==14||i2==21||i2==28||i2==35||i2==42){pepe=1}};
pep=0;for(i=0;i<6;i++){if(pos[i]==i3&&i3!=0){pep++}};if(pep<2){pepe=1};if(pep==2){if(i3==7||i3==14||i3==21||i3==28||i3==35||i3==42){pepe=1}};
pep=0;for(i=0;i<6;i++){if(pos[i]==i4&&i4!=0){pep++}};if(pep<2){pepe=1};if(pep==2){if(i4==7||i4==14||i4==21||i4==28||i4==35||i4==42){pepe=1}};
pep=0;for(i=0;i<6;i++){if(pos[i]==i5&&i5!=0){pep++}};if(pep<2){pepe=1};if(pep==2){if(i5==7||i5==14||i5==21||i5==28||i5==35||i5==42){pepe=1}};
pep=0;for(i=0;i<6;i++){if(pos[i]==i6&&i6!=0){pep++}};if(pep<2){pepe=1};if(pep==2){if(i6==7||i6==14||i6==21||i6==28||i6==35||i6==42){pepe=1}};
pep=0;for(i=0;i<6;i++){if(pos[i]==i7&&i7!=0){pep++}};if(pep<2){pepe=1};if(pep==2){if(i7==7||i7==14||i7==21||i7==28||i7==35||i7==42){pepe=1}};
if(pepe==0){alert("No teniu cap moviment possible, torneu a llançar el dau");estat=1;estatpropi=1;suspreg(0);
if(ordinadors!=1){guardacont()};
}
};

function sonar2(nom){
	var sonido = document.createElement("iframe");
	sonido.style.visibility = "hidden";
	sonido.setAttribute("src","sonidos/"+nom+".mp3");
	document.body.appendChild(sonido);
}

function sonar(nom){
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);

	}
sonar2(nom)
}

function callar(){
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);

	}
}

function abrirguardada(){document.getElementById("infotemps").style.visibility = "hidden";
document.getElementById("menujugadors").style.visibility = "hidden";
document.getElementById("menuassignatures").style.visibility = "hidden";
document.getElementById("primerinicia").style.visibility = "hidden";
document.getElementById("primerconnec").style.visibility = "hidden";
document.getElementById("segonconnec").style.visibility = "visible";
document.getElementById("eleniv").style.height ="135px";
document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 24px; align:center'><b>Escriu el nom i la contrasenya de la partida a la que vols connectar-te i despr&eacute;s polsa connecta&apos;t</b>";}
function restaurarinicia(){document.getElementById("infotemps").style.visibility = "visible";
document.getElementById("menujugadors").style.visibility = "visible";
document.getElementById("menuassignatures").style.visibility = "visible";
document.getElementById("primerinicia").style.visibility = "visible";
document.getElementById("primerconnec").style.visibility = "visible";
document.getElementById("segonconnec").style.visibility = "hidden";
document.getElementById("eleniv").style.height ="600px";}

async function infoguardada(){
if(document.forms.inici.nom.value==""||document.forms.inici.contrasenya.value==""){alert("Per connectar-se cal tindre una partida ja creada i posar el nom i la contrasenya.")}else{
nom=document.forms.inici.nom.value;
contrasenya=document.forms.inici.contrasenya.value;
recuperabe= await recuperaini();
if (recuperabe==1){
// comprueba que la partida no se está jugando. es decir que todas las fichas ya estén asignadas a ordenadores. creo que hay que crear variable que cuente las fichas asignadas y esta no coincida con jugadores jugadores. En caso contrario no actua y alert.
document.getElementById("presentacio").style.display="none";document.getElementById("partidainfo").style.visibility="visible";clearTimeout(tempor8);
// recupera datos, assignaturas, niveles ni1, ni2, ...., jugadores, turno , quesitos gallo[i][j], posició pos[i], tiempo de partida.
await consultapart();
infopartida1();
infocolores2();
gallro2();
ocufich();ocufich2();
document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 24px; align:center'><b>Tria la fitxa o fitxes que ha de controlar aquest ordinador.</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  style='width: 150px; height: 108px;' alt='' src='images/molinete2.gif'>";
document.getElementById("selecciofg").style.display = "inline";
document.getElementById("eleniv").style.height ="165px";
document.getElementById("segonconnec").style.visibility = "hidden";document.getElementById("tercerconnec").style.visibility = "visible";
if(marcatemp==1&&ordinapropi[0]==1){document.getElementById("partid").style.visibility = "visible";DownRepeat2()};
posicionar()}}}

function infocolores2(){
infocolors="";
if(asignatura[0][0]==1){infocolors="English, ";};
if(asignatura[0][1]==1){infocolors=infocolors+"Grec, ";};
if(asignatura[0][2]==1){infocolors=infocolors+"Llat&iacute;, ";};
if(asignatura[0][3]==1){infocolors=infocolors+"Fran&ccedil;ais ";};
document.getElementById("info1").innerHTML=infocolors;
infocolors="";
if(asignatura[1][0]==1){infocolors="Biologia, ";};
if(asignatura[1][1]==1){infocolors=infocolors+"Mates, ";};
if(asignatura[1][2]==1){infocolors=infocolors+"Fis. i Quim., ";};
if(asignatura[1][3]==1){infocolors=infocolors+"Tecnologia, ";};
if(asignatura[1][4]==1){infocolors=infocolors+"Inform&agrave;tica ";};
document.getElementById("info2").innerHTML=infocolors;
infocolors="";
if(asignatura[2][0]==1){infocolors="Educ. F., ";};
if(asignatura[2][1]==1){infocolors=infocolors+"Pl&agrave;stica, ";};
if(asignatura[2][2]==1){infocolors=infocolors+"M&uacute;sica, ";};
if(asignatura[2][3]==1){infocolors=infocolors+"Anat. Aplicada, ";};
if(asignatura[2][4]==1){infocolors=infocolors+"D. T&egrave;cnic ";};
document.getElementById("info3").innerHTML=infocolors;
infocolors="";
if(asignatura[3][0]==1){infocolors="Valenci&agrave;, ";};
if(asignatura[3][1]==1){infocolors=infocolors+"Castellano, ";};
if(asignatura[3][2]==1){infocolors=infocolors+"Literatura universal ";};
document.getElementById("info4").innerHTML=infocolors;
infocolors="";
if(asignatura[4][0]==1){infocolors="Geografia i Hist&ograve;ria, ";};
if(asignatura[4][1]==1){infocolors=infocolors+"Cultura Classica ";};
document.getElementById("info5").innerHTML=infocolors;
infocolors="";
if(asignatura[5][0]==1){infocolors="Tutoria, ";};
if(asignatura[5][1]==1){infocolors=infocolors+"Filosofia, ";};
if(asignatura[5][2]==1){infocolors=infocolors+"Religions, ";};
if(asignatura[5][3]==1){infocolors=infocolors+"Valors ";};
document.getElementById("info6").innerHTML=infocolors;
}

function gallro2(){
for(i=0;i<6;i++){
pepe2="images/quesitos"+gallo[i][0]+gallo[i][3]+gallo[i][5]+gallo[i][1]+gallo[i][4]+gallo[i][2]+".gif";
if(i==0){document.images.quesito1.src=pepe2;};
if(i==1){document.images.quesito2.src=pepe2;};
if(i==2){document.images.quesito3.src=pepe2;};
if(i==3){document.images.quesito4.src=pepe2;};
if(i==4){document.images.quesito5.src=pepe2;};
if(i==5){document.images.quesito6.src=pepe2;};
}}

function ocufich2(){
if(jugadores<6){celdag= document.getElementById("gtur6");celdag.style.backgroundColor="#000000";document.images.j6frepart8.src="images/fichanp.gif" ;document.getElementById("fit68").style.display = "none";};
if(jugadores<5){celdag= document.getElementById("gtur5");celdag.style.backgroundColor="#000000";document.images.j5frepart8.src="images/fichanp.gif";document.getElementById("fit58").style.display = "none";};
if(jugadores<4){celdag= document.getElementById("gtur4");celdag.style.backgroundColor="#000000";document.images.j4frepart8.src="images/fichanp.gif";document.getElementById("fit48").style.display = "none"; };
if(jugadores<3){celdag= document.getElementById("gtur3");celdag.style.backgroundColor="#000000"; document.images.j3frepart8.src="images/fichanp.gif";document.getElementById("fit38").style.display = "none";};
jorge=0;for(i=0;i<jugadores;i++){if(ordi[i]==1){jorge++;
if(i==0){document.getElementById("fit18").style.display = "none";};
if(i==1){document.getElementById("fit28").style.display = "none";};
if(i==2){document.getElementById("fit38").style.display = "none";};
if(i==3){document.getElementById("fit48").style.display = "none";};
if(i==4){document.getElementById("fit58").style.display = "none";};
if(i==5){document.getElementById("fit68").style.display = "none";};
}}; if(jorge==jugadores){alert("Totes les fitxes estan seleccionades"); location.reload();};
}

function connectarguardada1(){

for(i=0;i<jugadores;i++){
if(document.forms.connectaguardad.fitxa8[i].checked){
ordi[i]=1;pepe8=0;for(j=0;j<6;j++){if(ordinapropi[j]!=0){pepe8++}};pepe9=1*i+1;ordinapropi[pepe8]=pepe9;
if(pepe9==1&&ni1==1){document.images.j1n.src="images/n1.gif"};
if(pepe9==1&&ni1==2){document.images.j1n.src="images/n2.gif"};
if(pepe9==1&&ni1==3){document.images.j1n.src="images/n3.gif"};
if(pepe9==1&&ni1==4){document.images.j1n.src="images/n4.gif"};
if(pepe9==1&&ni1==5){document.images.j1n.src="images/n5.gif"};
if(pepe9==2&&ni2==1){document.images.j2n.src="images/n1.gif"};
if(pepe9==2&&ni2==2){document.images.j2n.src="images/n2.gif"};
if(pepe9==2&&ni2==3){document.images.j2n.src="images/n3.gif"};
if(pepe9==2&&ni2==4){document.images.j2n.src="images/n4.gif"};
if(pepe9==2&&ni2==5){document.images.j2n.src="images/n5.gif"};
if(pepe9==3&&ni3==1){document.images.j3n.src="images/n1.gif"};
if(pepe9==3&&ni3==2){document.images.j3n.src="images/n2.gif"};
if(pepe9==3&&ni3==3){document.images.j3n.src="images/n3.gif"};
if(pepe9==3&&ni3==4){document.images.j3n.src="images/n4.gif"};
if(pepe9==3&&ni3==5){document.images.j3n.src="images/n5.gif"};
if(pepe9==4&&ni4==1){document.images.j4n.src="images/n1.gif"};
if(pepe9==4&&ni4==2){document.images.j4n.src="images/n2.gif"};
if(pepe9==4&&ni4==3){document.images.j4n.src="images/n3.gif"};
if(pepe9==4&&ni4==4){document.images.j4n.src="images/n4.gif"};
if(pepe9==4&&ni4==5){document.images.j4n.src="images/n5.gif"};
if(pepe9==5&&ni5==1){document.images.j5n.src="images/n1.gif"};
if(pepe9==5&&ni5==2){document.images.j5n.src="images/n2.gif"};
if(pepe9==5&&ni5==3){document.images.j5n.src="images/n3.gif"};
if(pepe9==5&&ni5==4){document.images.j5n.src="images/n4.gif"};
if(pepe9==5&&ni5==5){document.images.j5n.src="images/n5.gif"};
if(pepe9==6&&ni6==1){document.images.j6n.src="images/n1.gif"};
if(pepe9==6&&ni6==2){document.images.j6n.src="images/n2.gif"};
if(pepe9==6&&ni6==3){document.images.j6n.src="images/n3.gif"};
if(pepe9==6&&ni6==4){document.images.j6n.src="images/n4.gif"};
if(pepe9==6&&ni6==5){document.images.j6n.src="images/n5.gif"};
if(pepe9==1){document.getElementById("qj1").style.background = "white";document.images.fjj1.src="images/fichabp.gif"};
if(pepe9==2){document.getElementById("qj2").style.background = "white";document.images.fjj2.src="images/fichagp.gif"};
if(pepe9==3){document.getElementById("qj3").style.background = "white";document.images.fjj3.src="images/fichamp.gif"};
if(pepe9==4){document.getElementById("qj4").style.background = "white";document.images.fjj4.src="images/ficharp.gif"};
if(pepe9==5){document.getElementById("qj5").style.background = "white";document.images.fjj5.src="images/fichatp.gif"};
if(pepe9==6){document.getElementById("qj6").style.background = "white";document.images.fjj6.src="images/fichavp.gif"};

}}

document.getElementById("eleniv").style.display = "none";
document.getElementById("selecciofg").style.display = "none";
guardaini2();espera2();
}

function espera2(){
pepe=0;for(i=0;i<6;i++){if(ordi[i]==1){pepe++}};
if(pepe<jugadores){document.getElementById("espera").style.display = "inline";
if(turno==1){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichabp.gif'>"};
if(turno==2){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichagp.gif'>"};
if(turno==3){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichamp.gif'>"};
if(turno==4){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/ficharp.gif'>"};
if(turno==5){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichatp.gif'>"};
if(turno==6){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichavp.gif'>"};
document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 20px; align: center'><b>El torn li correspona<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pep+"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  style='width: 100px; height: 115px;' alt='' src='images/espera5.png'>"}
document.getElementById("elecciofitxa2").style.display = "none";
document.getElementById("elecciofitxa").style.display = "none";
refrescarinici2();
}

function refrescarinici2(){
pepe258=0;for(i=0;i<6;i++){if(ordi[i]==1){pepe258++}};
if(pepe258==jugadores){guardada=0;guardaini2();recuperacont();document.getElementById("espera").style.display = "none";nova();suspreg(0);};
if(pepe258==jugadores&&pi==1){clearTimeout(tri2);};
if(pepe258<jugadores){pi=1;recuperaini();tri2=setTimeout("refrescarinici2()",100)};
}

async function guardarpartida(){
if (ordinadors==1){ordinadors=2;guardaini()};
for(i=0;i<6;i++){ordi[i]=0};
guardada=1;
guardacont();
document.getElementById("inforesposta").style.visibility = "visible";
document.getElementById("confirmaguardar").style.display = "none";
document.getElementById("inforesposta").innerHTML="<div class='caja' ><img style='width: 300px; height: 200px;' alt=''  src='images/cajaguardar7.gif'></div>";document.getElementById("inforesposta").style.backgroundColor="black";
document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 18px; align: center'><b>El jugador amb posse&iuml;dor del torn ha guardat la partida.<br>Per poder tornar a jugar nom&eacute;s cal entrar de nou amb el nom i contrasenya.<br>Recorda que el nom de la partida &eacute;s: <span style='color: red;'>"+nom+"</span><br> i la contrasenya: <span style='color: red;'>"+contrasenya+"</span>";
document.images.preguntag.src ="images/despedida.gif";
sonar("adioslastima");
altrepep1=0;
temporizador81();

}

function guardarpartida2(){
document.getElementById("inforesposta").style.visibility = "visible";

document.getElementById("inforesposta").innerHTML="<div class='caja' ><img style='width: 300px; height: 200px;' alt=''  src='images/cajaguardar7.gif'></div>";document.getElementById("inforesposta").style.backgroundColor="black";
document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 18px; align: center'><b>El jugador amb posse&iuml;dor del torn a guardat la partida.<br>Per poder tornar a jugar nom&eacute;s cal entrar de nou amb el nom i contrasenya.<br>Recorda que el nom de la partida &eacute;s: <span style='color: red;'>"+nom+"</span><br> i la contrasenya: <span style='color: red;'>"+contrasenya+"</span>";
document.images.preguntag.src ="images/despedida.gif";
sonar("adioslastima");
altrepep1=0;
temporizador81();
document.getElementById('fondonegro').style.display='inline';
}

function temporizador81(){
altrepep1++;
if(altrepep1<20){apep1=setTimeout("temporizador81()",1000)}else{location.reload();}}

function guardarpartida22(){estat=1;guardarpartida();document.getElementById('confirmaguardar2').style.display='none';document.getElementById('botonguardar').style.visibility="hidden";

}



function vencedor2(){vencedor=1;
guardacont();
vencedor8();

}

function posicionar(){
if(pos[0]!=75){pax=posicions[pos[0]][0]+"px";pay=posicions[pos[0]][1]+"px";
document.getElementById("capa1").style.left =pax;document.getElementById("capa1").style.top =pay;}
if(pos[1]!=75){if(pos[1]==pos[0]){pax=posicions[pos[1]][2]+"px";pay=posicions[pos[1]][3]+"px";}else{pax=posicions[pos[1]][0]+"px";pay=posicions[pos[1]][1]+"px";};
document.getElementById("capa2").style.left =pax;document.getElementById("capa2").style.top =pay;}
for(i=2;i<jugadores;i++){
if(pos[i]!=75){mig=0;
for(j=0;j<i;j++){if(pos[j]==pos[i]){mig++}};
if(mig==0){pax=posicions[pos[i]][0]+"px";pay=posicions[pos[i]][1]+"px";};if(mig==1){pax=posicions[pos[i]][2]+"px";pay=posicions[pos[i]][3]+"px";};
if(mig==2){
if(pos[i]==7){pax="155px";pay="59px";};
if(pos[i]==14){pax="410px";pay="60px";};
if(pos[i]==21){pax="539px";pay="282px";};
if(pos[i]==28){pax="409px";pay="504px";};
if(pos[i]==35){pax="155px";pay="505px";};
if(pos[i]==42){pax="25px";pay="282px";};
};
if(i==2){document.getElementById("capa3").style.left =pax;document.getElementById("capa3").style.top =pay;};
if(i==3){document.getElementById("capa4").style.left =pax;document.getElementById("capa4").style.top =pay;};
if(i==4){document.getElementById("capa5").style.left =pax;document.getElementById("capa5").style.top =pay;};
if(i==5){document.getElementById("capa6").style.left =pax;document.getElementById("capa6").style.top =pay;};
}}
if(pos[0]==75){document.getElementById("capa1").style.left ="248px";document.getElementById("capa1").style.top ="308px";};
if(pos[1]==75){document.getElementById("capa2").style.left ="242px";document.getElementById("capa2").style.top ="277px";};
if(pos[2]==75&&jugadores>2){document.getElementById("capa3").style.left ="282px";document.getElementById("capa3").style.top ="298px";};
if(pos[3]==75&&jugadores>3){document.getElementById("capa4").style.left ="282px";document.getElementById("capa4").style.top ="329px";};
if(pos[4]==75&&jugadores>4){document.getElementById("capa5").style.left ="316px";document.getElementById("capa5").style.top ="308px";};
if(pos[5]==75&&jugadores>5){document.getElementById("capa6").style.left ="322px";document.getElementById("capa6").style.top ="277px";};
}

function confirmarguardar(){document.getElementById('confirmaguardar').style.display="inline";document.getElementById('botonguardar').style.visibility="hidden";document.getElementById('fondonegro').style.display='inline';
document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 20px; align: center'><b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  style='width: 225px; height: 150px;' alt='' src='images/decision.gif'></div></b></span>";}

function sonar4(nom){
	var sonido2 = document.createElement("iframe2");
	sonido2.style.visibility = "hidden";
	sonido2.setAttribute("src","sonidos/"+nom+".mp3");
	document.body.appendChild(sonido2);
}

function sonar3(nom){
	var iframe2 = document.getElementsByTagName("iframe2");

	if (iframe2.length > 0){
		iframe2[0].parentNode.removeChild(iframe2[0]);

	}
sonar4(nom)
}

function continuarjugant1()
{
guardada=0;
if(turno==1){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichabp.gif'>"};
if(turno==2){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichagp.gif'>"};
if(turno==3){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichamp.gif'>"};
if(turno==4){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/ficharp.gif'>"};
if(turno==5){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichatp.gif'>"};
if(turno==6){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichavp.gif'>"};	document.getElementById('confirmaguardar').style.display='none';document.getElementById('fondonegro').style.display="none";document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 20px; align: center'><b>El torn li correspon a<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pep+"<br>Realitza una doble polsaci&oacute; sobre el dau inferior.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  ondblclick='dados()'  style='width: 56px; height: 67px;' alt='' src='images/dadoturia.gif'></div></b></span>"}

function continuarjugant2()
{
if(turno==1){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichabp.gif'>"};
if(turno==2){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichagp.gif'>"};
if(turno==3){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichamp.gif'>"};
if(turno==4){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/ficharp.gif'>"};
if(turno==5){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichatp.gif'>"};
if(turno==6){pep="<img  style='width: 31px; height: 30px;' alt='' src='images/fichavp.gif'>"};	document.getElementById('confirmaguardar2').style.display='none';document.getElementById('fondonegro').style.display="none";document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 20px; align: center'><b>El torn li correspon a<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pep+"<br>Realitza una doble polsaci&oacute; sobre el dau inferior.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  ondblclick='dados()'  style='width: 56px; height: 67px;' alt='' src='images/dadoturia.gif'></div></b></span>";
guardada=2;if(ordinadors!=1){guardacont()}else{guardada=0};
}

function DownRepeat4() {
if(estat==1){
document.getElementById('confirmaguardar2').style.display='inline';document.getElementById('fondonegro').style.display='inline';
document.getElementById("divpreguntat").innerHTML="<span style='font-family: Helvetica; font-size: 20px; align: center'><b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img  style='width: 225px; height: 150px;' alt='' src='images/decision.gif'></div></b></span>";}
if(estat!=1){down4=setTimeout("DownRepeat4()",10);} }

