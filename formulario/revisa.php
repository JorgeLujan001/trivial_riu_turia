<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>

<meta content="text/html; charset=utf-8" http-equiv="content-type">
<title>Revisa preguntas</title>
<link rel="stylesheet" type="text/css" href="form.css" media="screen" />
<link rel="stylesheet" type="text/css" href="estilos.css" media="screen" />
<?php
include("apertura.php");
?>
<script language="javascript">
function modificar()
{
  assignaturaval="";nivellval="";textval="";respostesval="";intentsval="";tempsval="";
  assignaturaval=document.pregunta2.assignatura2.value;nivellval=document.pregunta2.nivell2.value;textval=document.pregunta2.text2.value;respostesval=document.pregunta2.respostes2.value;intentsval=document.pregunta2.intents2.value;tempsval=document.pregunta2.temps2.value;
  if(assignaturaval!=""&&nivellval!=""&&textval!=""&&respostesval!=""&&intentsval!=""&&tempsval!=""){
    document.pregunta2.submit();
    numerop=document.getElementById("numpreg").value;
    document.pregunta2.reset();
    document.getElementById("numpreg").value=numerop;
    mostrar();
    document.getElementById("resultado").style.visibility="visible";
    document.getElementById("resultado").style.opacity="1";
    setTimeout("desaparecer()",5000);
    }else{alert("Falten dades")}
};

function desaparecer()
{
    document.getElementById("resultado").style.visibility="hidden";
	document.getElementById("resultado").style.opacity="0";
    setTimeout("vaciar()",2000);
};

function refrescapreg(num){
    	var params = {
        	"num": num,
        };
    	//llamada al fichero PHP con AJAX
    	$.ajax({
        	data:  params,
        	url:   'preguntas.php',
        	dataType: 'html',
        	type:  'post',
        	success:  function (response) {
                response2 = JSON.parse(response);
				textPreg=response2["text"];
                no_mostrarPreg=response2["no_mostrar"];
                respPreg=response2["respostes"];
                intePreg=response2["intents"];
                tiemPreg=response2["temps"];
                nivePreg=response2["nivell"];
                asigPreg=response2["assignatura"];
                imagPreg=response2["imatge"];
                guardacont();
                suspreg(0)
       		}
	    });
    };

function vaciar()
{
    document.getElementById("resultado").contentWindow.document.open();
    document.getElementById("resultado").contentWindow.document.write("");
    document.getElementById("resultado").contentWindow.document.close();
}

function mostrar()
{
	var numero;
	numero=document.getElementById("numpreg").value;
    document.pregunta2.codi.value=preguntas[numero][0];
    document.pregunta2.assignatura2.value=preguntas[numero][1];
    if(preguntas[numero][1]=="castella"){pipi="Castell&agrave;";document.getElementById('divpregunta').style.backgroundColor ='#1792dd';}
    if(preguntas[numero][1]=="angles"){pipi="Angl&eacute;s";document.getElementById('divpregunta').style.backgroundColor ='#da1b0b';};
if(preguntas[numero][1]=="grec"){pipi="Grec";document.getElementById('divpregunta').style.backgroundColor ='#da1b0b';};
if(preguntas[numero][1]=="llati"){pipi="Llat&iacute;";document.getElementById('divpregunta').style.backgroundColor ='#da1b0b';};
if(preguntas[numero][1]=="frances"){pipi="Franc&eacute;s";document.getElementById('divpregunta').style.backgroundColor ='#da1b0b';};
if(preguntas[numero][1]=="biologia"){pipi="Biologia";document.getElementById('divpregunta').style.backgroundColor ='#1d950f';};
if(preguntas[numero][1]=="mates"){pipi="Matem&agrave;tiques";document.getElementById('divpregunta').style.backgroundColor ='#1d950f';};
if(preguntas[numero][1]=="fisica_quimica"){pipi="F&iacute;sica i Qu&iacute;mica";document.getElementById('divpregunta').style.backgroundColor ='#1d950f';};
if(preguntas[numero][1]=="tecnologia"){pipi="Tecnologia";document.getElementById('divpregunta').style.backgroundColor ='#1d950f';};
if(preguntas[numero][1]=="informatica"){pipi="Inform&agrave;tica";document.getElementById('divpregunta').style.backgroundColor ='#1d950f';};
if(preguntas[numero][1]=="ed_fisica"){pipi="Educaci&oacute; F&iacute;sica";document.getElementById('divpregunta').style.backgroundColor ='#ad6038';};
if(preguntas[numero][1]=="plastica"){pipi="Pl&agrave;stica";document.getElementById('divpregunta').style.backgroundColor ='#ad6038';};
if(preguntas[numero][1]=="musica"){pipi="M&uacute;sica";document.getElementById('divpregunta').style.backgroundColor ='#ad6038';};
if(preguntas[numero][1]=="anatomia"){pipi="Anatomia Aplicada";document.getElementById('divpregunta').style.backgroundColor ='#ad6038';};
if(preguntas[numero][1]=="dibuix"){pipi="Dibuix T&egrave;cnic";document.getElementById('divpregunta').style.backgroundColor ='#ad6038';};
if(preguntas[numero][1]=="valencia"){pipi="Valenci&agrave;";document.getElementById('divpregunta').style.backgroundColor ='#1792dd';};
if(preguntas[numero][1]=="literatura"){pipi="Literatura Universal";document.getElementById('divpregunta').style.backgroundColor ='#1792dd';};
if(preguntas[numero][1]=="historia"){pipi="Geografia i Hist&ograve;ria";document.getElementById('divpregunta').style.backgroundColor ='#e3701b';};
if(preguntas[numero][1]=="clasica"){pipi="Cultura Cl&agrave;ssica";document.getElementById('divpregunta').style.backgroundColor ='#e3701b';};
if(preguntas[numero][1]=="orientacio"){pipi="Tutoria i Orientaci&oacute;";document.getElementById('divpregunta').style.backgroundColor ='#fee11e';};
if(preguntas[numero][1]=="filosofia"){pipi="Filosofia";document.getElementById('divpregunta').style.backgroundColor ='#fee11e';};
if(preguntas[numero][1]=="religio"){pipi="Religi&oacute;";document.getElementById('divpregunta').style.backgroundColor ='#fee11e';};
if(preguntas[numero][1]=="etica"){pipi="Valors &Eacute;tics";document.getElementById('divpregunta').style.backgroundColor ='#fee11e';};





    document.getElementById("divpreguntaa").innerHTML=pipi;
    document.pregunta2.nivell2.value=preguntas[numero][2];
    document.getElementById("divpreguntan").innerHTML="Nivell: "+preguntas[numero][2];
    document.getElementById("text2").innerHTML=preguntas[numero][3];
    document.getElementById("divpreguntat").innerHTML=preguntas[numero][3].replaceAll("formulario/", "");
    document.pregunta2.respostes2.value=preguntas[numero][4];
    document.pregunta2.intents2.value=preguntas[numero][5];
    document.getElementById("divpreguntai").innerHTML="Intents: "+preguntas[numero][5];
    document.pregunta2.temps2.value=preguntas[numero][6];
    document.getElementById("divpreguntap").innerHTML="Temps: "+preguntas[numero][6];
    if(preguntas[numero][7]!=""){document.getElementById("imagen").src="imatges/"+preguntas[numero][7];document.getElementById("imagen").style.display="inline"}else{document.getElementById("imagen").src="";document.getElementById("imagen").style.display="none";};
    document.getElementById("preguntag").src="imatges/"+preguntas[numero][7];
    document.pregunta2.data.value=preguntas[numero][8];
    if(preguntas[numero][9]>0){document.pregunta2.verificada.checked=true;}else{document.pregunta2.verificada.checked=false;};
    if(preguntas[numero][10]>0){document.pregunta2.no_mostrar2.checked=true;}else{document.pregunta2.no_mostrar2.checked=false;};
    if(preguntas[numero][11]>0){document.pregunta2.grafica2.checked=true;}else{document.pregunta2.grafica2.checked=false;};
    document.pregunta2.temps2_output.value=parseInt(document.pregunta2.temps2.value);
}
</script>
</head>

<body onload="mostrar()">

<!-- Capçalera -->

<div style="position:absolute; top: 40px; left: 40px; right: 40px">
<table style="text-align: left; width: 100%;" border="0" cellpadding="2"
cellspacing="0">
<tbody>
<tr>
<td
style="vertical-align: top; width: 20%; text-align: center;">IES RIU T&Uacute;RIA<br><img alt="" style="width: 150px" src="logo.png">
</td>
<td
style="vertical-align: top; width: 60%; text-align: center;">
</td>
<td
style="vertical-align: top; width: 20%; text-align: center;"> TR&Iacute;VIAL<br><a href="http://172.28.47.2/easy-sites/easy-trivial_riu_turia"><img alt="" style="width: 100px; border-radius: 5px;" src="mover.png"></a>
</td>
</tr>
</tbody>
</table>
</div>
<div style="position: absolute; left: 100px; top: 100px;">

<!--  Revisar preguntes -->

<div id="revisar" class="form-style-10">
  <h1>Revisa una pregunta</h1>
<button onclick="if(1*document.getElementById('numpreg').value>1){document.getElementById('numpreg').value=1*document.getElementById('numpreg').value-1;mostrar();}"><small>&lt; Anterior</small></button>
<button onclick="if(1*document.getElementById('numpreg').value<total){document.getElementById('numpreg').value=1*document.getElementById('numpreg').value+1;mostrar()}"><small>Següent &gt;</small></button>
<form method="post" action="./modificar.php" target="resultado" name="pregunta2" id="pregunta2" enctype="multipart/form-data" oninput="temps2_output.value=parseInt(temps2.value);">
<div class="section">Pregunta <select  onchange="mostrar()" id="numpreg" name="numpreg">
<?php
$consulta=mysqli_query($mysqli,"SELECT *, DATE_FORMAT(data, '%Y-%m-%dT%H:%i') AS custom_date FROM preguntas ORDER BY `codi_pregunta` DESC");
$total=mysqli_num_rows($consulta);
$i=$total;
while($i>0){
$row=mysqli_fetch_array($consulta);
$pregunta[$i]=$row["codi_pregunta"];
$assignatura[$i]=$row["assignatura"];
$nivell[$i]=$row["nivell"];
$text[$i]=$row["text"];
$respostes[$i]=$row["respostes"];
$intents[$i]=$row["intents"];
$temps[$i]=$row["temps"];
$imatge[$i]=$row["imatge"];
$data[$i]=$row["custom_date"];
$verificada[$i]=$row["verificada"];
$no_mostrar[$i]=$row["no_mostrar"];
$grafica[$i]=$row["grafica"];
  echo "<option value='".$i."'>".$pregunta[$i]."</option>";
  $i=$i-1;
};

?>
<script language="javascript">
var total;
<?php echo "\ntotal='$total';";?>
var preguntas = new Array(total+1);
for (i=0;i<total+1;i++) {
    preguntas[i] = new Array(10)
}
<?php for ($i = 1; $i < $total+1; $i ++) {
 echo "\npreguntas[".$i."][0] ='$pregunta[$i]';";
 echo "\npreguntas[".$i."][1] ='$assignatura[$i]';";
  echo "\npreguntas[".$i."][2] ='$nivell[$i]';";
   echo "\npreguntas[".$i."][3] ='$text[$i]';";
   echo "\npreguntas[".$i."][4] ='$respostes[$i]';";
   echo "\npreguntas[".$i."][5] ='$intents[$i]';";
   echo "\npreguntas[".$i."][6] ='$temps[$i]';";
   echo "\npreguntas[".$i."][7] ='$imatge[$i]';";
   echo "\npreguntas[".$i."][8] ='$data[$i]';";
   echo "\npreguntas[".$i."][9] ='$verificada[$i]';";
   echo "\npreguntas[".$i."][10] ='$no_mostrar[$i]';";
   echo "\npreguntas[".$i."][11] ='$grafica[$i]';";
 }
 ?>
  </script>
</select></div>
<div class="section"><span>1</span>Assignatura:</div>
<input type="hidden" id="codi" name="codi"></input>
<select name="assignatura2" onkeydown="return event.key != 'Enter';">
<option selected="selected"></option>
<option value="anatomia">Anatomia Aplicada</option>
<option value="angles">Anglès</option>
<option value="biologia">Biologia i Geologia</option>
<option value="castella">Castellà</option>
<option value="clasica">Cultura Clàssica</option>
<option value="dibuix">Dibuix Tècnic</option>
<option value="ed_fisica">Educació Física</option>
<option value="filosofia">Filosofia</option>
<option value="fisica_quimica">Física i Química</option>
<option value="frances">Francès</option>
<option value="historia">Geografia i Història</option>
<option value="grec">Grec</option>
<option value="informatica">Informàtica</option>
<option value="literatura">Literatura Universal</option>
<option value="llati">Llatí</option>
<option value="mates">Matemàtiques</option>
<option value="musica">Música</option>
<option value="orientacio">Orientació i Tutoria</option>
<option value="plastica">Plàstica</option>
<option value="religio">Religions</option>
<option value="tecnologia">Tecnologia</option>
<option value="valencia">Valencià</option>
<option value="etica">Valors Étics</option>
</select><br><br>
<div class="section"><span>2</span>Nivell:</div>
<input name="nivell2" type="radio" value="0" onkeydown="return event.key != 'Enter';"/>0<br />
<input name="nivell2" type="radio" value="1" onkeydown="return event.key != 'Enter';"/>1 (1r d'ESO)<br />
<input name="nivell2" type="radio" value="2" onkeydown="return event.key != 'Enter';"/>2 (2n d'ESO)<br />
<input name="nivell2" type="radio" value="3" onkeydown="return event.key != 'Enter';"/>3 (3r d'ESO)<br />
<input name="nivell2" type="radio" value="4" onkeydown="return event.key != 'Enter';"/>4 (4t d'ESO)<br />
<input name="nivell2" type="radio" value="5" onkeydown="return event.key != 'Enter';"/>5 (Batxillerat)<br /><br>
<div class="section"><span>3</span>Text de la pregunta:</div>
<textarea name="text2" id="text2" form="pregunta2" rows="4"></textarea><br><br>
<div class="section"><span>4</span>Resposta correcta: <small> (Si és una pregunta d'opció múltiple, introduir només la lletra en minúscula)</small></div>
<input type="text" name="respostes2" onkeydown="return event.key != 'Enter';"><br><br>
<div class="section"><span>5</span><small>Fes clic en la següent casella si vols que la resposta NO es mostre quan es falla la pregunta:</small><input type="checkbox" name="no_mostrar2" id="no_mostrar2" value="1" onkeydown="return event.key != 'Enter';"></div>
<br><br>
<div class="section"><span>6</span>Nombre d'intents permesos:</div>
<input name="intents2" type="radio" value="1" onkeydown="return event.key != 'Enter';"/>1<br />
<input name="intents2" type="radio" value="2" onkeydown="return event.key != 'Enter';"/>2<br />
<input name="intents2" type="radio" value="3" onkeydown="return event.key != 'Enter';"/>3<br /><br>
<div class="section"><span>7</span>Temps per a respondre:</div>
<input type="range" name="temps2" min="20" max="150" value="30" step="10" id="start" onkeydown="return event.key != 'Enter';">
<output name="temps2_output" for="start" >30</output> segons <br><br>
<div class="section"><span>8</span>Imatge:</div>
<img id="imagen" width="150" height="100"><br>
<input type="file" name="imatge2" onkeydown="return event.key != 'Enter';"><br><br>
<div class="section"><span>9</span><small>Fes clic en la següent casella si vols que la imatge aparega en gran:</small><input type="checkbox" name="grafica2" id="grafica2" value="1" onkeydown="return event.key != 'Enter';"></div><br><br>
<div class="section"><span>10</span>Data:</div>
<input type="datetime-local" name="data" onkeydown="return event.key != 'Enter';"><br><br>
<div class="section"><span>11</span>Verificada:</div>
<input type="checkbox" name="verificada" id="verificada" value="1" onkeydown="return event.key != 'Enter';"><br><br>
</form>
<button onclick="modificar();location.href='#'">Enviar</button>
</div>
</div>

<div style="position: absolute; left: 400px; top: 200px;">
<span style="font-family: Helvetica; aling; right">
<div class="fondpreg" id="divpregunta" style="position: absolute; left: 300px; top: 35px;"></div>
<div class="textpreg" id="divpreguntat" style="position: absolute; left: 305px; top: 47px;">textPreg</div>
<div class="assipreg" id="divpreguntaa" style="position: absolute; left: 560px; top: 37px;">asigPreg</div>
<div class="nivepreg" id="divpreguntan" style="position: absolute; left: 625px; top: 65px;"><b></b></div>
<div class="temppreg" id="divpreguntap" style="position: absolute; left: 565px; top: 212px;"><b></b></div>
<div class="intepreg" id="divpreguntai" style="position: absolute; left: 595px; top: 237px;"><b></b></div>
<div class="imagpreg" id="divpreguntag" style="position: absolute; left: 562px; top: 92px;"><img style="width: 150px; height: 100px;" id="preguntag" alt="" src="images/f9.jpg"></div>

</span>
</div>





<iframe id="resultado" name="resultado" style="position: absolute;top: 20%;left: 20%;width: 300px;height: 200px;border-radius: 15px;background: #AEE4FF;box-shadow: 0 0 5px #CCC;visibility: hidden;opacity: 0;transition: all 1s ease-in-out;">
  </iframe>



</body></html>

