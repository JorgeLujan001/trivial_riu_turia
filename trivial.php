<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>
<meta content="text/html; charset=ISO-8859-1" http-equiv="content-type"><title>trivial</title>
<script language="Javascript" src="accions.js"></script>
<script language="Javascript" src="accionsp.js"></script>
<script language="Javascript" src="accions2.js"></script>
<script language="Javascript" src="partidas.js"></script>
<link rel="stylesheet" type="text/css" href="estilos.css" media="screen" />

<!-- Cosas de php -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<?php
include 'apertura.php';
$nomassigna=array(
array("angles","grec","llati","frances"),
array("biologia","mates","fisica_quimica","tecnologia","informatica"),
array("ed_fisica","plastica","musica","anatomia","dibuix"),
array("valencia","castella","literatura"),
array("historia","clasica"),
array("orientacio","filosofia","religio","etica")
);
$longassigna = [];
$cat=0;
for($cat=0;$cat<6;$cat++){
   for($assig=0;$assig<count($nomassigna[$cat]);$assig++){
     $nivells =[];
     for($niv=0;$niv<6;$niv++){
       $consulta="SELECT * FROM preguntas WHERE assignatura='".$nomassigna[$cat][$assig]."' AND nivell='".$niv."' AND verificada='1'";
       $resposta=mysqli_query($mysqli,$consulta);
       $nivells[]=mysqli_num_rows($resposta);
     }
    $key=$nomassigna[$cat][$assig];
   	$longassigna[$key]=$nivells;
   }
}
?>

<script language="javascript">
	var numpregs = <?php echo json_encode($longassigna); ?>;
    var caracteresraros = new Array("\r\n","ç","Ç","ñ","Ñ","'",'"',"€","Á","É","Í","Ó","Ú","á","é","í","ó","ú","À","È","Ò","à","è","ò");
    var caracteresbuenos = new Array("<br>","&ccedil;","&Ccedil;","&ntilde;","&Ntilde;","&apos;","&quot;","&euro;","&Aacute;","&Eacute;","&Iacute;","&Oacute;","&Uacute;","&aacute;","&eacute;","&iacute;","&oacute;","&uacute;","&Agrave;","&Egrave;","&Ograve;","&agrave;","&egrave;","&ograve;");

async function consultapreg(pepe, nomasig, nivell){
    	var params = {
        	"pep": pepe,
            "assignatura": nomasig,
            "nivell": nivell
        };
    	//llamada al fichero PHP con AJAX
    	return $.ajax({
        	data:  params,
        	url:   'preguntas.php',
        	dataType: 'html',
        	type:  'post',
        	success:  function (response) {
                response2 = JSON.parse(response);
				textPreg=response2["text"];
                no_mostrarPreg=response2["no_mostrar"];
                respPreg=response2["respostes"];
                for (i=0;i<caracteresbuenos.length;i++){
                    respPreg=respPreg.replaceAll(caracteresbuenos[i],caracteresraros[i]);
                };
                intePreg=response2["intents"];
                tiemPreg=response2["temps"];
                nivePreg=response2["nivell"];
                asigPreg=response2["assignatura"];
                imagPreg=response2["imatge"];
                grafica=response2["grafica"];
                guardacont();
                suspreg(0);
                return 0;
                }
	    });
    };


</script>
<!-- Cosas de php -->

</head>
<body style="margin: 0pt; padding: 0pt;" onload="restaura()">

<form action="t" name="tiempo">
<div id="partid" style="position: absolute; left: 5px; top: 520px; width: 90px;"><span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 12px; line-height: normal; font-size-adjust: none; font-stretch: normal;">&nbsp;&nbsp;Temps<br>&nbsp;&nbsp;partida:<br></span>
 &nbsp; <input disabled="disabled" size="2" name="partida"></div>

<div id="cronom" style="position: absolute; left: 510px; top: 520px; width: 90px;"><span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 12px; line-height: normal; font-size-adjust: none; font-stretch: normal;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Temps<br>&nbsp;&nbsp;&nbsp;&nbsp;pregunta:<br></span>&nbsp;<span style="font-family: Verdana;"></span>&nbsp;<input disabled="disabled" name="crono" size="2"></div>
</form>

<div id="capa7" style="position: absolute; left: 240px; top: 232px;"><img onclick="move2(75,0,0,0,0)" name="dadort" style="width: 115px; height: 133px;" alt="" src="images/dadoturia.gif"></div>
<div style="left: 0px; top: 0px; width: 610px;"> <img style="width: 595px; height: 595px;" alt="" src="images/tableroln.gif" usemap="#mapa1" border="0"><map name="mapa1" id="mapa1"><area shape="poly" coords="5,257,13,222,62,235,57,264" onclick="move2(1,2,228,34,235)"><area shape="poly" coords="13,220,25,186,73,205,63,233" onclick="move2(2,30,196,0,0)"><area shape="poly" coords="25,183,41,151,87,177,73,203" onclick="move2(3,32,157,57,171)"><area shape="poly" coords="43,149,62,119,104,151,88,175" onclick="move2(4,48,125,72,142)"><area shape="poly" coords="64,116,88,89,125,126,106,148" onclick="move2(5,81,104,0,0)"><area shape="poly" coords="90,88,117,63,148,106,127,125" onclick="move2(6,96,69,114,91)"><area shape="poly" coords="119,63,183,25,203,73,150,103" onclick="move2(7,126,50,162,30)"><area shape="poly" coords="186,24,220,13,234,62,206,72" onclick="move2(8,191,15,200,42)"><area shape="poly" coords="222,12,258,5,264,57,234,62" onclick="move2(9,230,18,0,0)"><area shape="poly" coords="260,5,295,3,297,54,267,56" onclick="move2(10,265,0,266,30)"><area shape="poly" coords="297,3,335,5,328,56,299,54" onclick="move2(11,302,0,299,30)"><area shape="poly" coords="337,5,372,12,359,62,331,56" onclick="move2(12,334,18,0,0)"><area shape="poly" coords="375,13,409,24,389,71,362,63" onclick="move2(13,373,15,363,42)"><area shape="poly" coords="412,25,476,63,444,103,392,73" onclick="move2(14,405,30,440,50)"><area shape="poly" coords="478,64,505,88,468,125,446,105" onclick="move2(15,470,69,450,91)"><area shape="poly" coords="507,90,531,117,489,147,470,127" onclick="move2(16,485,104,0,0)"><area shape="poly" coords="532,119,552,148,508,175,491,151" onclick="move2(17,518,125,493,142)"><area shape="poly" coords="554,151,569,183,522,203,509,177" onclick="move2(18,537,157,509,171)"><area shape="poly" coords="570,185,582,220,532,233,523,206" onclick="move2(19,540,196,0,0)"><area shape="poly" coords="582,222,589,256,539,264,533,236" onclick="move2(20,561,227,532,234)"><area shape="poly" coords="590,259,590,335,539,329,539,266" onclick="move2(21,563,263,563,302)"><area shape="poly" coords="590,337,582,372,533,359,538,331" onclick="move2(22,561,337,532,332)"><area shape="poly" coords="585,375,570,409,522,389,532,362" onclick="move2(23,540,370,0,0)"><area shape="poly" coords="569,412,553,444,508,417,522,392" onclick="move2(24,537,408,509,395)"><area shape="poly" coords="552,446,532,475,491,444,507,420" onclick="move2(25,518,439,493,424)"><area shape="poly" coords="531,478,506,505,470,468,489,447" onclick="move2(26,485,460,0,0)"><area shape="poly" coords="505,506,479,530,447,489,468,470" onclick="move2(27,470,497,450,474)"><area shape="poly" coords="476,532,412,569,392,522,445,491" onclick="move2(28,405,537,440,516)"><area shape="poly" coords="409,570,375,582,362,532,389,523" onclick="move2(29,373,550,363,522)"><area shape="poly" coords="373,582,338,590,331,538,359,532" onclick="move2(30,334,540,0,0)"><area shape="poly" coords="335,590,299,592,299,540,328,538" onclick="move2(31,302,565,299,535)"><area shape="poly" coords="296,593,260,590,266,538,296,540" onclick="move2(32,265,565,266,535)"><area shape="poly" coords="258,590,222,583,235,533,264,538" onclick="move2(33,230,540,0,0)"><area shape="poly" coords="220,582,186,571,206,523,234,532" onclick="move2(34,191,550,200,522)"><area shape="poly" coords="183,569,119,532,151,491,203,522" onclick="move2(35,126,516,161,537)"><area shape="poly" coords="127,470,148,490,117,531,90,506" onclick="move2(36,96,497,114,474)"><area shape="poly" coords="105,446,125,468,88,505,64,478" onclick="move2(37,81,460,0,0)"><area shape="poly" coords="88,420,104,444,63,475,43,446" onclick="move2(38,48,439,72,424)"><area shape="poly" coords="73,392,87,417,41,444,26,411" onclick="move2(39,29,408,54,395)"><area shape="poly" coords="63,361,73,389,25,409,13,375" onclick="move2(40,30,370,0,0)"><area shape="poly" coords="57,331,63,359,12,372,6,338" onclick="move2(41,2,337,34,332)"><area shape="poly" coords="5,260,55,267,55,328,5,335" onclick="move2(42,2,262,2,303)"><area shape="poly" coords="58,267,93,267,93,327,58,327" onclick="move2(45,60,267,60,299)"><area shape="poly" coords="96,267,128,267,128,327,96,327" onclick="move2(46,97,267,97,299)"><area shape="poly" coords="132,267,166,267,166,327,132,327" onclick="move2(47,134,267,134,299)"><area shape="poly" coords="168,267,203,267,203,327,168,327" onclick="move2(48,171,267,171,299)"><area shape="poly" coords="206,267,240,267,240,327,206,327" onclick="move2(49,208,267,208,299)"><area shape="poly" coords="151,107,204,76,221,105,168,135" onclick="move2(50,158,98,184,82)"><area shape="poly" coords="170,138,222,108,240,136,187,167" onclick="move2(51,177,130,203,114)"><area shape="poly" coords="188,169,241,137,259,168,205,199" onclick="move2(52,196,162,222,146)"><area shape="poly" coords="207,202,259,170,277,199,224,231" onclick="move2(53,215,194,241,178)"><area shape="poly" coords="225,233,278,203,296,232,242,263" onclick="move2(54,233,226,259,210)"><area shape="poly" coords="389,75,442,106,426,136,372,104" onclick="move2(55,378,83,406,98)"><area shape="poly" coords="372,108,425,138,409,167,355,136" onclick="move2(56,361,115,388,130)"><area shape="poly" coords="354,158,408,169,390,199,336,169" onclick="move2(57,342,147,369,162)"><area shape="poly" coords="335,170,389,201,372,231,318,201" onclick="move2(58,323,179,350,194)"><area shape="poly" coords="317,203,370,233,353,264,299,233" onclick="move2(59,305,210,332,225)"><area shape="poly" coords="501,265,536,265,536,328,501,328" onclick="move2(60,505,267,505,299)"><area shape="poly" coords="466,265,499,265,499,328,466,328" onclick="move2(61,468,267,468,299)"><area shape="poly" coords="428,265,464,265,464,328,428,328" onclick="move2(62,431,267,431,299)"><area shape="poly" coords="391,265,426,265,426,328,391,328" onclick="move2(63,394,267,394,299)"><area shape="poly" coords="355,265,389,265,389,328,355,328" onclick="move2(64,357,267,357,299)"><area shape="poly" coords="373,490,426,459,445,488,391,519" onclick="move2(65,409,466,380,482)"><area shape="poly" coords="355,459,409,428,426,457,372,488" onclick="move2(66,390,434,361,450)"><area shape="poly" coords="336,427,390,395,408,425,354,457" onclick="move2(67,371,402,342,418)"><area shape="poly" coords="312,395,371,363,388,493,335,425" onclick="move2(68,352,371,323,387)"><area shape="poly" coords="299,363,353,332,370,362,316,393" onclick="move2(69,333,339,304,355)"><area shape="poly" coords="169,460,222,490,206,520,152,489" onclick="move2(70,186,483,158,467)"><area shape="poly" coords="186,428,240,458,223,488,170,458" onclick="move2(71,205,451,177,435)"><area shape="poly" coords="205,395,259,426,241,456,187,426" onclick="move2(72,223,419,195,403)"><area shape="poly" coords="224,363,277,394,259,424,207,393" onclick="move2(73,241,387,214,371)"><area shape="poly" coords="242,332,295,362,278,392,225,361" onclick="move2(74,260,355,233,339)"><area shape="poly" coords="242,265,298,233,353,265,353,330,298,361,242,330" onclick="move2(75,0,0,0,0)"></map>
<div id="capa1" style="position: absolute; left: 248px; top: 308px;"><img style="width: 31px; height: 30px;" alt="" src="images/fichabp.gif"></div>
<div id="capa2" style="position: absolute; left: 242px; top: 277px;"><img style="width: 31px; height: 30px;" alt="" src="images/fichagp.gif"></div>
<div id="capa3" style="position: absolute; left: 282px; top: 298px;"><img style="width: 31px; height: 31px;" alt="" src="images/fichamp.gif"></div>
<div id="capa4" style="position: absolute; left: 282px; top: 329px;"><img style="width: 31px; height: 31px;" alt="" src="images/ficharp.gif"></div>
<div id="capa5" style="position: absolute; left: 316px; top: 308px;"><img style="width: 31px; height: 31px;" alt="" src="images/fichatp.gif"></div>
<div id="capa6" style="position: absolute; left: 322px; top: 277px;"><img style="width: 31px; height: 31px;" alt="" src="images/fichavp.gif"></div>
</div>



<div id="partidainfo" style="position: absolute; left: 620px; top: 0px; width: 360px; visibility: hidden"><div class="menu03" ><table style="text-align: left;  width: 100%;" border="0" cellpadding="1" cellspacing="1">
    <tbody>
    <tr>
    <td><span style="color: white">Info partida</span></td><td>&nbsp;&nbsp;&nbsp;&nbsp;<img name="fjj1" style="width: 20px; height: 20px;" alt="" src="images/fichanp.gif">&nbsp;&nbsp;<img name="fjj2" style="width: 20px; height: 20px;" alt="" src="images/fichanp.gif">&nbsp;&nbsp;<img name="fjj3" style="width: 20px; height: 20px;" alt="" src="images/fichanp.gif">&nbsp;&nbsp;<img name="fjj4" style="width: 20px; height: 20px;" alt="" src="images/fichanp.gif">&nbsp;&nbsp;<img name="fjj5" style="width: 20px; height: 20px;" alt="" src="images/fichanp.gif">&nbsp;&nbsp;<img name="fjj6" style="width: 20px; height: 20px;" alt="" src="images/fichanp.gif"></div></td>
</tr>
</tbody>
</table></div>
<span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 12px; line-height: normal; font-size-adjust: none; font-stretch: normal;">
<table style="text-align: left;  width: 100%;" border="1" cellpadding="2" cellspacing="2">
    <tbody>
    <tr>
    <td style=" background-color:#da1b0b"></td><td id="info1">English</td>
</tr>
<tr><td style=" background-color:#1d950f"></td><td id="info2">Biologia, Mates, Fis. i Quim.</td>
</tr>
<tr><td style=" background-color:#ad6038"></td><td id="info3">Educ. F., Pl&agrave;stica, M&uacute;sica</td>
</tr>
<tr><td style=" background-color:#1792dd"></td><td id="info4">Valenci&agrave;, Castellano</td>
</tr>
<tr><td style=" background-color:#e3701b"></td><td id="info5">Geografia i Hist&ograve;ria</td>
</tr>
<tr><td style=" background-color:#fee11e"></td><td id="info6">Tutoria</td>
</tr>
</tbody>
</table>
<table style="text-align: left; width: 100%;" border="0" cellpadding="1" cellspacing="0">
<tbody>
<tr>
<td>


<table style="text-align: left; width: 100%;" border="1" cellpadding="2" cellspacing="2">
<tbody>
<tr><td id="nivj1" style="text-align: center;"><img name="j1n" style="width: 20px; height: 20px;" alt="" src="images/n1.gif"></td>
<td id="nivj2" style="text-align: center;"><img name="j2n" style="width: 20px; height: 20px;" alt="" src="images/n1.gif"></td>
<td id="nivj3" style="text-align: center;"><img name="j3n" style="width: 20px; height: 20px;" alt="" src="images/n1.gif"></td>
<td id="nivj4" style="text-align: center;"><img name="j4n" style="width: 20px; height: 20px;" alt="" src="images/n1.gif"></td>
<td id="nivj5" style="text-align: center;"><img name="j5n" style="width: 20px; height: 20px;" alt="" src="images/n1.gif"></td>
<td id="nivj6" style="text-align: center;"><img name="j6n" style="width: 20px; height: 20px;" alt="" src="images/n1.gif"></td></tr>
<tr>
<td style="text-align: center;" id="tur1"><img name="j1nf" style="width: 31px; height: 30px;" alt="" src="images/fichabp.gif"></td>
<td style="text-align: center;" id="tur2"><img name="j2nf" style="width: 31px; height: 30px;" alt="" src="images/fichagp.gif"></td>
<td style="text-align: center;" id="tur3"><img name="j3nf" style="width: 31px; height: 31px;" alt="" src="images/fichamp.gif"></td>
<td style="text-align: center;" id="tur4"><img name="j4nf" style="width: 31px; height: 31px;" alt="" src="images/ficharp.gif"></td>
<td style="text-align: center;" id="tur5"><img name="j5nf" style="width: 31px; height: 31px;" alt="" src="images/fichatp.gif"></td>
<td style="text-align: center;" id="tur6"><img name="j6nf" style="width: 31px; height: 31px;" alt="" src="images/fichavp.gif"></td>
</tr>
<tr>
<td id="qj1" style="text-align: center; background-color:  #a6acaf  ">
<img name="quesito1" style="width: 31px; height: 30px;" alt="" src="images/quesitos000000.gif">
</td>
<td id="qj2" style="text-align: center; background-color:  #a6acaf  ">
<img name="quesito2" style="width: 31px; height: 30px;" alt="" src="images/quesitos000000.gif">
</td>
<td id="qj3" style="text-align: center; background-color:  #a6acaf  ">
<img name="quesito3" style="width: 31px; height: 30px;" alt="" src="images/quesitos000000.gif">
</td>
<td id="qj4" style="text-align: center; background-color:  #a6acaf  ">
<img name="quesito4" style="width: 31px; height: 30px;" alt="" src="images/quesitos000000.gif">
</td>
<td id="qj5" style="text-align: center; background-color:  #a6acaf  ">
<img name="quesito5" style="width: 31px; height: 30px;" alt="" src="images/quesitos000000.gif">
</td>
<td id="qj6" style="text-align: center; background-color:  #a6acaf  ">
<img name="quesito6" style="width: 31px; height: 30px;" alt="" src="images/quesitos000000.gif">
</td>
</tr>
</tbody>
</table>
<div style="text-align: left; width: 100%; margin-top: 5px;">
&nbsp;


</span>

</div>
</td>
</tr>
</tbody>
</table>
</div>

<div class="fondonegro" id="fondonegro" style="position: absolute; left: 0px; top: 0px;"><img  style="width: 285px; height: 63px;" alt="" src="images/logoinstituto2.png"></div>

<div class="menu0" id="eleniv" style="position: absolute; left: 80px; top: 10px; ">
<div class="menu01" ><table style="text-align: left;  width: 100%;" border="0" cellpadding="1" cellspacing="1">
    <tbody>
    <tr>
    <td><span style="color: white">Men&uacute; Inicial</span></td><td><form action="t" name="inifinal"><input id="primerinicia" onclick="nova0()" name="inicia" value="Inicia" type="button">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="primerconnec" onclick="repartiment0()" name="conect" value="Connectar-se" type="button"><input id="segonconnec" onclick="infoguardada()" name="conect2" value="Connecta&apos;t" type="button"><input id="tercerconnec" onclick="connectarguardada1()" name="conect3" value="Continua" type="button"></form></td>
</tr>
</tbody>
</table></div>
<div class="menu02" >

    <form action="t" name="inici"><span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 13px; line-height: normal; font-size-adjust: none; font-stretch: normal;"><input onclick="obri('instruc.html','instruccio')" name="instruccions" value="Instruccions" type="button">&nbsp;&nbsp;<input name="parti" onChange="abrirguardada()" value="2" type="radio">Partida guardada&nbsp;&nbsp;
&nbsp;&nbsp;<input checked="checked" name="parti" onChange="restaurarinicia()" value="1" type="radio">Nova
partida <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nom partida:&nbsp;<input  size="5" name="nom">&nbsp;&nbsp;Contrasenya:&nbsp;<input  size="5" name="contrasenya">
<div id="infotemps">Limita
temps de partida <input onclick="martemp()" name="veri2" type="checkbox">&nbsp;<input disabled="disabled" size="1" name="limit1">:<input disabled="disabled" size="1" name="limit2"> hores:minuts
&nbsp;&nbsp;&nbsp;&nbsp;</div>
    </span></form>

</div><br>
<div id="menujugadors" class="menu02" >
<form action="t" name="ininiv"><span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 13px; line-height: normal; font-size-adjust: none; font-stretch: normal;">
Jugadors:</span><input name="juga" value="2" type="radio"> 2
&nbsp; <input name="juga" value="3" type="radio">3
&nbsp; <input name="juga" value="4" type="radio">
4&nbsp; &nbsp; <input name="juga" value="5" type="radio">5 &nbsp;
&nbsp;<input checked="checked" name="juga" value="6" type="radio"> 6 <br>
<span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 13px; line-height: normal; font-size-adjust: none; font-stretch: normal;">Ordinadors:</span><input name="ord" checked="checked" value="1" type="radio"> 1
&nbsp; <input name="ord" value="2" type="radio">2
&nbsp; <input name="ord" value="3" type="radio">3&nbsp; &nbsp; <input name="ord" value="4" type="radio">4 &nbsp;
&nbsp;<input  name="ord" value="5" type="radio"> 5&nbsp;<input  name="ord" value="6" type="radio"> 6 <br>
<span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 13px; line-height: normal; font-size-adjust: none; font-stretch: normal;">
Nivell unificat:<input onclick="nivdiver2()" checked="checked" name="divni" value="1" type="radio">
&nbsp; &nbsp;
(</span><input checked="checked" style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 13px; line-height: normal; font-size-adjust: none; font-stretch: normal;" onclick="nivdiver2()" name="nivelu" value="1" type="radio"><span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 13px; line-height: normal; font-size-adjust: none; font-stretch: normal;">1r&nbsp;</span><input style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 13px; line-height: normal; font-size-adjust: none; font-stretch: normal;" onclick="nivdiver2()" name="nivelu" value="2" type="radio"><span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 13px; line-height: normal; font-size-adjust: none; font-stretch: normal;">2n&nbsp;
</span><input style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 13px; line-height: normal; font-size-adjust: none; font-stretch: normal;" onclick="nivdiver2()" name="nivelu" value="3" type="radio"> <span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 13px; line-height: normal; font-size-adjust: none; font-stretch: normal;">3r
&nbsp;<input onclick="nivdiver2()" name="nivelu" value="4" type="radio">4t)
d'ESO &nbsp;<input onclick="nivdiver2()" name="nivelu" value="5" type="radio">BATX<br>
Diversos nivells:<input name="divni" value="2" type="radio">
<table style="text-align: left; width: 100%;" border="1" cellpadding="2" cellspacing="2">
<tbody><tr>
<td style="text-align: center;"><img style="width: 31px; height: 30px;" alt="" src="images/fichabp.gif"></td>
<td style="text-align: center;"><img style="width: 31px; height: 30px;" alt="" src="images/fichagp.gif"></td>
<td style="text-align: center;"><img style="width: 31px; height: 31px;" alt="" src="images/fichamp.gif"></td>
<td style="text-align: center;"><img style="width: 31px; height: 31px;" alt="" src="images/ficharp.gif"></td>
<td style="text-align: center;"><img style="width: 31px; height: 31px;" alt="" src="images/fichatp.gif"></td>
<td style="text-align: center;"><img style="width: 31px; height: 31px;" alt="" src="images/fichavp.gif"></td>
</tr>
<tr>
<td>
<input checked="checked" name="nivel111" value="1" type="radio">1<br>
<input onclick="nivdiver()" name="nivel111" value="2" type="radio">2<br>
<input onclick="nivdiver()" name="nivel111" value="3" type="radio">3<br>
<input onclick="nivdiver()" name="nivel111" value="4" type="radio">4<br>
<input onclick="nivdiver()" name="nivel111" value="5" type="radio">5
</td>
<td>
<input checked="checked" name="nivel222" value="1" type="radio">1<br>
<input onclick="nivdiver()" name="nivel222" value="2" type="radio">2<br>
<input onclick="nivdiver()" name="nivel222" value="3" type="radio">3<br>
<input onclick="nivdiver()" name="nivel222" value="4" type="radio">4<br>
<input onclick="nivdiver()" name="nivel222" value="5" type="radio">5
</td>
<td>
<input checked="checked" name="nivel333" value="1" type="radio">1<br>
<input onclick="nivdiver()" name="nivel333" value="2" type="radio">2<br>
<input onclick="nivdiver()" name="nivel333" value="3" type="radio">3<br>
<input onclick="nivdiver()" name="nivel333" value="4" type="radio">4<br>
<input onclick="nivdiver()" name="nivel333" value="5" type="radio">5
</td>
<td>
<input checked="checked" name="nivel444" value="1" type="radio">1<br>
<input onclick="nivdiver()" name="nivel444" value="2" type="radio">2<br>
<input onclick="nivdiver()" name="nivel444" value="3" type="radio">3<br>
<input onclick="nivdiver()" name="nivel444" value="4" type="radio">4<br>
<input onclick="nivdiver()" name="nivel444" value="5" type="radio">5
</td>
<td>
<input checked="checked" name="nivel555" value="1" type="radio">1<br>
<input onclick="nivdiver()" name="nivel555" value="2" type="radio">2<br>
<input onclick="nivdiver()" name="nivel555" value="3" type="radio">3<br>
<input onclick="nivdiver()" name="nivel555" value="4" type="radio">4<br>
<input onclick="nivdiver()" name="nivel555" value="5" type="radio">5
</td>
<td>
<input checked="checked" name="nivel666" value="1" type="radio">1<br>
<input onclick="nivdiver()" name="nivel666" value="2" type="radio">2<br>
<input onclick="nivdiver()" name="nivel666" value="3" type="radio">3<br>
<input onclick="nivdiver()" name="nivel666" value="4" type="radio">4<br>
<input onclick="nivdiver()" name="nivel666" value="5" type="radio">5
</td>
</tr>
</tbody></table>
</span></form></div><br>


<div id="menuassignatures" class="menu02" ><form action="t" name="assig"><span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 12px; line-height: normal; font-size-adjust: none; font-stretch: normal;"><table style="text-align: left;  width: 100%;" border="1" cellpadding="2" cellspacing="2">
    <tbody>
    <tr>
    <td style=" background-color:#da1b0b"></td><td><input checked="checked" name="assig11" value="1" type="checkbox" >English</td><td><input  checked="checked" name="assig12" value="2" type="checkbox">Grec</td><td><input checked="checked" name="assig13" value="3" type="checkbox">Llat&iacute;</td><td colspan="2"><input checked="checked" name="assig14" value="4" type="checkbox">Fran&ccedil;ais</td>
</tr>
<tr><td style=" background-color:#1d950f"></td><td><input checked="checked" name="assig21" value="1" type="checkbox">Biologia</td><td><input checked="checked" name="assig22" value="2" type="checkbox">Mates</td><td><input checked="checked" name="assig23" value="3" type="checkbox">F. i Q.</td><td><input  checked="checked" name="assig24" value="4" type="checkbox">Tecnologia</td><td><input checked="checked" name="assig25" value="5" type="checkbox">Info</td>
</tr>
<tr><td style=" background-color:#ad6038"></td><td><input checked="checked" name="assig31" value="1" type="checkbox">Educ. F.</td><td><input checked="checked" name="assig32" value="2" type="checkbox">Plast.</td><td><input checked="checked" name="assig33" value="2" type="checkbox">Mus.</td><td><input checked="checked" name="assig34" value="3" type="checkbox">Anat. Aplic.</td><td><input checked="checked" name="assig35" value="4" type="checkbox">D. Tec.</td>
</tr>
<tr><td style=" background-color:#1792dd"></td><td><input checked="checked" name="assig41" value="1" type="checkbox">Val.</td><td><input checked="checked" name="assig42" value="2" type="checkbox">Cast.</td><td colspan="3"><input checked="checked" name="assig43" value="3" type="checkbox" >Literatura Universal</td>
</tr>
<tr><td style=" background-color:#e3701b"></td><td colspan="3"><input checked="checked" name="assig51" value="1" type="checkbox">Geografia i Hist&ograve;ria</td><td colspan="2"><input checked="checked" name="assig52" value="2" type="checkbox">Cult. Cl&agrave;ssica</td>
</tr>
<tr><td style=" background-color:#fee11e"></td><td ><input checked="checked" name="assig61" value="1" type="checkbox">Tutoria</td><td colspan="2"><input checked="checked" name="assig62" value="2" type="checkbox">Filosofia</td><td ><input checked="checked" name="assig63" value="3" type="checkbox">Religions</td><td ><input checked="checked" name="assig64" value="4" type="checkbox">Valors</td>
</tr>
</tbody>
</table></span></form></div><br>
</div>
<span style="font-family: Helvetica; aling; right">
<div class="fondpreg" id="divpregunta" style="position: absolute; left: 595px; top: 350px;"></div>
<div class="textpreg" id="divpreguntat" style="position: absolute; left: 600px; top: 362px;"><span style="font-family: Helvetica; font-size: 20px; align:center"><b>Tria les opcions i polsa sobre el bot&oacute; inicia del men&uacute; principal per a encetar una partida o connectar-se si voleu unir-se a una partida ja creada. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input onclick="nova0()"  value="Inicia" type="button"></b></span></div>
<div class="assipreg" id="divpreguntaa" style="position: absolute; left: 855px; top: 352px;"><b>IES RIU T&Uacute;RIA</b></div>
<div class="nivepreg" id="divpreguntan" style="position: absolute; left: 920px; top: 380px;"><b></b></div>
<div class="temppreg" id="divpreguntap" style="position: absolute; left: 860px; top: 527px;"><b></b></div>
<div class="intepreg" id="divpreguntai" style="position: absolute; left: 890px; top: 552px;"><b></b></div>
<div class="imagpreg" id="divpreguntag" style="position: absolute; left: 857px; top: 407px;"><img style="width: 150px; height: 100px;" name="preguntag" alt="" src="images/paz.jpg"></div>
<div class="resppreg" id="divpreguntar" style="position: absolute; left: 620px; top: 592px;"><b><form action="t" name="respostf"><span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 13px; line-height: normal; font-size-adjust: none; font-stretch: normal;">Resposta:&nbsp;</span><input name="respuesta" onkeydown="if (event.key === 'Enter'){respostes()}; return event.key != 'Enter';">
&nbsp;<input name="comprova" onclick="respostes()" value="Comprova" type="button"></form></b></div>
</span>
<div class="presentaci" id="presentacio" style="position: absolute; left: 595px; top: 10px;"><div style="position: absolute; left: 0px; top: 0px;"><img style="width: 420px; height: 280px;" alt="" name="present" src="presen/b841.png"></div>
<!--<div style="position: absolute; left: 0px; top: 0px;"><img style="width: 420px; height: 65px;" alt="" src="presen/cortina2.png"></div>--></div>

<div class="inforespuesta" id="inforesposta" style="position: absolute; left: 600px; top: 0px;"><div id="infocarita" style="position: absolute; left: 60px; top: 10px;"><img style="width: 300px; height: 200px;" alt="" name="carita" src="images/emoti/emoticor20.gif"></div><div id="dadesresposta" style="position: absolute; left: 0px; top: 240px;">Ac&iacute; anir&agrave; la informaci&oacute;</div></div>
<div class="menu0" id="elecciofitxa" style="position: absolute; left: 55px; top: 40px;"> <form action="t" name="connefinal">
<div class="menu01" ><table style="text-align: left;  width: 90%;" border="0" cellpadding="1" cellspacing="1">
    <tbody>
    <tr>
    <td><span style="color: white">Men&uacute; connexi&oacute;</span></td><td><input onclick="afegir()" id="simple"name="conect" value="Connecta" type="button"><input onclick="afegir2()" id="doble" name="conect" value="Altra fitxa" type="button">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="ja" onclick="espera()" name="conect" value="Cap m&eacute;s" type="button"></td>
</tr>
</tbody>
</table></div>
<br><div class="menu02" >Tria la fitxa que ser&agrave; controlada per aquest ordinador i polsa connecta.</div><br>

<table style="text-align: left; width: 100%;" border="1" cellpadding="2" cellspacing="2">
<tbody><tr>
<td style="text-align: center;"><img name="j1nrepart" style="width: 31px; height: 30px;" alt="" src="images/n1g.gif"></td>
<td style="text-align: center;"><img name="j2nrepart" style="width: 31px; height: 30px;" alt="" src="images/n1.gif"></td>
<td style="text-align: center;"><img name="j3nrepart" style="width: 31px; height: 31px;" alt="" src="images/n1.gif"></td>
<td style="text-align: center;"><img name="j4nrepart" style="width: 31px; height: 31px;" alt="" src="images/n1.gif"></td>
<td style="text-align: center;"><img name="j5nrepart" style="width: 31px; height: 31px;" alt="" src="images/n1.gif"></td>
<td style="text-align: center;"><img name="j6nrepart" style="width: 31px; height: 31px;" alt="" src="images/n1.gif"></td>
</tr>
<tr>
<td style="text-align: center;"><img name="j1frepart" style="width: 31px; height: 30px;" alt="" src="images/fichabp.gif"></td>
<td style="text-align: center;"><img name="j2frepart" style="width: 31px; height: 30px;" alt="" src="images/fichagp.gif"></td>
<td style="text-align: center;"><img name="j3frepart" style="width: 31px; height: 31px;" alt="" src="images/fichamp.gif"></td>
<td style="text-align: center;"><img name="j4frepart" style="width: 31px; height: 31px;" alt="" src="images/ficharp.gif"></td>
<td style="text-align: center;"><img name="j5frepart" style="width: 31px; height: 31px;" alt="" src="images/fichatp.gif"></td>
<td style="text-align: center;"><img name="j6frepart" style="width: 31px; height: 31px;" alt="" src="images/fichavp.gif"></td>
</tr>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"><input id="fit1"name="fitxa"  value="2" type="radio"></td>
<td style="text-align: center;"><input id="fit2"name="fitxa"  value="3" type="radio"></td>
<td style="text-align: center;"><input id="fit3"name="fitxa"  value="4" type="radio"></td>
<td style="text-align: center;"><input id="fit4"name="fitxa" value="5" type="radio"></td>
<td style="text-align: center;"><input id="fit5"name="fitxa"  value="6" type="radio"></td>
</tr></table>
</form></div>


<div class="menu0" id="elecciofitxa2" style="position: absolute; left: 55px; top: 40px;"> <form action="t" name="connefinal2">
<div class="menu01" ><table style="text-align: left;  width: 95%;" border="0" cellpadding="1" cellspacing="1">
    <tbody>
    <tr>
    <td><span style="color: white">Men&uacute; connexi&oacute;:</span></td><td>&nbsp;<input onclick="nocal()" name="conect" value="No cal" type="button">&nbsp;&nbsp;<input onclick="nomes()" name="conect" value="Nom&eacute;s aquesta" type="button">&nbsp;&nbsp;<input onclick="repartiment1()" name="M&eacute;s fitxes" value="Aquesta i m&eacute;s" type="button"></td>
</tr>
</tbody>
</table></div>
<br><div class="menu02" >Tria altra fitxa que ser&agrave; controlada per aquest ordinador i polsa: no cal, nom&eacute;s aquesta o m&eacute;s fitxes.</div><br>

<table style="text-align: left; width: 100%;" border="1" cellpadding="2" cellspacing="2">
<tbody><tr>
<td style="text-align: center;"><img name="j1nrepart1" style="width: 31px; height: 30px;" alt="" src="images/n1g.gif"></td>
<td style="text-align: center;"><img name="j2nrepart1" style="width: 31px; height: 30px;" alt="" src="images/n1.gif"></td>
<td style="text-align: center;"><img name="j3nrepart1" style="width: 31px; height: 31px;" alt="" src="images/n1.gif"></td>
<td style="text-align: center;"><img name="j4nrepart1" style="width: 31px; height: 31px;" alt="" src="images/n1.gif"></td>
<td style="text-align: center;"><img name="j5nrepart1" style="width: 31px; height: 31px;" alt="" src="images/n1.gif"></td>
<td style="text-align: center;"><img name="j6nrepart1" style="width: 31px; height: 31px;" alt="" src="images/n1.gif"></td>
</tr>
<tr>
<td style="text-align: center;"><img name="j1frepart1" style="width: 31px; height: 30px;" alt="" src="images/fichabp.gif"></td>
<td style="text-align: center;"><img name="j2frepart1" style="width: 31px; height: 30px;" alt="" src="images/fichagp.gif"></td>
<td style="text-align: center;"><img name="j3frepart1" style="width: 31px; height: 31px;" alt="" src="images/fichamp.gif"></td>
<td style="text-align: center;"><img name="j4frepart1" style="width: 31px; height: 31px;" alt="" src="images/ficharp.gif"></td>
<td style="text-align: center;"><img name="j5frepart1" style="width: 31px; height: 31px;" alt="" src="images/fichatp.gif"></td>
<td style="text-align: center;"><img name="j6frepart1" style="width: 31px; height: 31px;" alt="" src="images/fichavp.gif"></td>
</tr>
<td style="text-align: center;"></td>
<td style="text-align: center;"><input id="fit11"name="fitxa2"  value="2" type="radio"></td>
<td style="text-align: center;"><input id="fit21"name="fitxa2"  value="3" type="radio"></td>
<td style="text-align: center;"><input id="fit31"name="fitxa2"  value="4" type="radio"></td>
<td style="text-align: center;"><input id="fit41"name="fitxa2" value="5" type="radio"></td>
<td style="text-align: center;"><input id="fit51"name="fitxa2"  value="6" type="radio"></td>
</tr></table>
</form></div>



<div class="menu04" id="espera" style="position: absolute; left: 30px; top: 40px;"><img  style="width: 500px; height: 500px;" alt="" src="images/espera.gif"><br>A l'espera la connexi&oacute; de la resta d'ordinadors.</div>

<div class="menu02" id="selecciofg" style="position: absolute; left: 85px; top: 70px;">
<form action="t" name="connectaguardad"><span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: normal; font-size: 13px; line-height: normal; font-size-adjust: none; font-stretch: normal;">
<table style="text-align: left; width: 100%;" border="1" cellpadding="2" cellspacing="2">
<tbody>
<tr>
<td style="text-align: center;" id="gtur1"><img name="j1frepart8" style="width: 31px; height: 30px;" alt="" src="images/fichabp.gif"></td>
<td style="text-align: center;" id="gtur2"><img name="j2frepart8" style="width: 31px; height: 30px;" alt="" src="images/fichagp.gif"></td>
<td style="text-align: center;" id="gtur3"><img name="j3frepart8" style="width: 31px; height: 31px;" alt="" src="images/fichamp.gif"></td>
<td style="text-align: center;" id="gtur4"><img name="j4frepart8" style="width: 31px; height: 31px;" alt="" src="images/ficharp.gif"></td>
<td style="text-align: center;" id="gtur5"><img name="j5frepart8" style="width: 31px; height: 31px;" alt="" src="images/fichatp.gif"></td>
<td style="text-align: center;" id="gtur6"><img name="j6frepart8" style="width: 31px; height: 31px;" alt="" src="images/fichavp.gif"></td>
</tr><tr>

<td style="text-align: center;"><input id="fit18"name="fitxa8"  value="1" type="checkbox"></td>
<td style="text-align: center;"><input id="fit28"name="fitxa8"  value="2" type="checkbox"></td>
<td style="text-align: center;"><input id="fit38"name="fitxa8"  value="3" type="checkbox"></td>
<td style="text-align: center;"><input id="fit48"name="fitxa8"  value="4" type="checkbox"></td>
<td style="text-align: center;"><input id="fit58"name="fitxa8" value="5" type="checkbox"></td>
<td style="text-align: center;"><input id="fit68"name="fitxa8"  value="6" type="checkbox"></td>
</tr></table>
</form></div>

<div id="botonguardar" style="position: absolute; left: 480px; top: 20px;"><form action="t" name="botonguardar"><input onclick="confirmarguardar()" value="Guardar partida" type="button"></form></div>

<div id="confirmaguardar" class="menu05" style="position: absolute; left: 300px; top: 200px; display:none;"><form action="t" name="confirmaguardar"><center><span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: bold; font-size: 20px; line-height: normal; font-size-adjust: none; font-stretch: normal;">Estàs segur/a que vols guardar la partida?<br><br>
<input onclick="guardarpartida()" value="   Sí   " type="button">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input onclick="continuarjugant1()" value="   No   " type="button"></span></center></form></div>

<div id="confirmaguardar2" class="menu05" style="position: absolute; left: 300px; top: 200px; display:none;"><form action="t" name="confirmaguardar2"><center><span style="font-family: Verdana; font-style: normal; font-variant: normal; font-weight: bold; font-size: 20px; line-height: normal; font-size-adjust: none; font-stretch: normal;">S'ha acabat el temps de partida. Què vols fer?<br><br>
<input onclick="guardarpartida22()" value="   Guardar la partida   " type="button">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input onclick="continuarjugant2()" value="   Continuar jugant   " type="button">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input onclick="vencedor2()" value="   Finalitzar   " type="button"></span></center></form></div>

<div id="espaigrafiques" class="grafica1" style="position: absolute; left: 15px; top: 15px; display:none;">
<img id="graficapregunta" style="width: 540px; height: 360px;" alt="" src="images/fichabp.gif">
</div>

</body></html>

