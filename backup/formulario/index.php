<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>

<meta content="text/html; charset=utf-8" http-equiv="content-type">
<title>Insertar una pregunta</title>
<link rel="stylesheet" type="text/css" href="form.css" media="screen" />
<?php
include("apertura.php");
?>
<script language="javascript">
function insertar()
{
  assignaturaval="";nivellval="";textval="";respostesval="";intentsval="";tempsval="";
  assignaturaval=document.pregunta.assignatura.value;nivellval=document.pregunta.nivell.value;textval=document.pregunta.text.value;respostesval=document.pregunta.respostes.value;intentsval=document.pregunta.intents.value;tempsval=document.pregunta.temps.value;
  if(assignaturaval!=""&&nivellval!=""&&textval!=""&&respostesval!=""&&intentsval!=""&&tempsval!=""){
    document.pregunta.submit();
    document.pregunta.reset();
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
    document.pregunta2.assignatura2.value=preguntas[numero][1];
    document.pregunta2.nivell2.value=preguntas[numero][2];
    document.getElementById("text2").innerHTML=preguntas[numero][3];
    document.pregunta2.respostes2.value=preguntas[numero][4];
    document.pregunta2.intents2.value=preguntas[numero][5];
    document.pregunta2.temps2.value=preguntas[numero][6];
    if(preguntas[numero][7]!=""){document.getElementById("imagen").src="imatges/"+preguntas[numero][7];document.getElementById("imagen").style.display="inline"}else{document.getElementById("imagen").src="";document.getElementById("imagen").style.display="none";};
    document.pregunta2.data.value=preguntas[numero][8];
    if(preguntas[numero][9]>0){document.pregunta2.verificada.checked=true;}else{document.pregunta2.verificada.checked=false;};
    document.pregunta2.temps2_output.value=parseInt(document.pregunta2.temps2.value);
}
</script>
</head>

<body >

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

<!--  Introduir preguntes -->

<div id="introduir" class="form-style-10">
<h1>Inserta una pregunta</h1>
<form method="post" action="./introducir.php" target="resultado" name="pregunta" id="pregunta" enctype="multipart/form-data" oninput="temps_output.value=parseInt(temps.value);">
<div class="section"><span>1</span>Assignatura</div>
<select name="assignatura" onkeydown="return event.key != 'Enter';">
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
<div class="section"><span>2</span>Nivell</div>
<input name="nivell" type="radio" value="0" onkeydown="return event.key != 'Enter';"/>0<br />
<input name="nivell" type="radio" value="1" onkeydown="return event.key != 'Enter';"/>1 (1r d'ESO)<br />
<input name="nivell" type="radio" value="2" onkeydown="return event.key != 'Enter';"/>2 (2n d'ESO)<br />
<input name="nivell" type="radio" value="3" onkeydown="return event.key != 'Enter';"/>3 (3r d'ESO)<br />
<input name="nivell" type="radio" value="4" onkeydown="return event.key != 'Enter';"/>4 (4t d'ESO)<br />
<input name="nivell" type="radio" value="5" onkeydown="return event.key != 'Enter';"/>5 (Batxillerat)<br /><br>
<div class="section"><span>3</span>Text de la pregunta</div>
<textarea name="text" form="pregunta" rows="4"></textarea><br><br>
<div class="section"><span>4</span>Resposta correcta: <small>(Si és una pregunta d'opció múltiple, introduir només la lletra en minúscula)</small></div>
<input type="text" name="respostes" onkeydown="return event.key != 'Enter';"><br><br>
<div class="section"><span>5</span>Nombre d'intents permesos:</div>
<input name="intents" type="radio" value="1" onkeydown="return event.key != 'Enter';"/>1<br />
<input name="intents" type="radio" value="2" onkeydown="return event.key != 'Enter';"/>2<br />
<input name="intents" type="radio" value="3" onkeydown="return event.key != 'Enter';"/>3<br /><br>
<div class="section"><span>6</span>Temps per a respondre</div>
<input type="range" name="temps" min="20" max="150" value="30" step="10" id="start" onkeydown="return event.key != 'Enter';">
<output name="temps_output" for="start" >30</output> segons <br><br>
<div class="section"><span>7</span>Imatge</div>
<input type="file" name="imatge" onkeydown="return event.key != 'Enter';"><br><br>
<div class="section"><span>8</span><small>Fes clic en la següent casella si vols que la resposta NO es mostre quan es falla la pregunta:</small><input type="checkbox" name="no_mostrar" id="no_mostrar" value="1" onkeydown="return event.key != 'Enter';"></div>
<br>
<a href=# onclick="insertar()" class="enviar">Enviar</a>
</form>
<iframe id="resultado" name="resultado" style="position: absolute;top: 20%; left:38% ; width: 300px;height: 200px;border-radius: 15px;background: #AEE4FF;box-shadow: 0 0 5px #CCC;visibility: hidden;opacity: 0;transition: all 1s ease-in-out;">
  </iframe>
</div>

<!--  Revisar preguntes -->

<div id="revisar" style="position:absolute; top:0px; left:300px; display:none">
  <h1>Revisa una pregunta</h1>
<a href=#>&lt; Anterior</a> <strong>Pregunta <select  onchange="mostrar()" id="numpreg" name="numpreg">
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
 }
 ?>
  </script>
</select></strong> <a href=#>Següent &gt;</a>
<form method="post" action="./modificar.php" target="resultado2" name="pregunta2" id="pregunta2" enctype="multipart/form-data" oninput="temps2_output.value=parseInt(temps2.value);">
Assignatura:<br>
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
<option value="tutoria">Orientació i Tutoria</option>
<option value="plastica">Plàstica</option>
<option value="religio">Religions</option>
<option value="tecnologia">Tecnologia</option>
<option value="valencia">Valencià</option>
<option value="etica">Valors Étics</option>
</select><br><br>
Nivell:<br>
<input name="nivell2" type="radio" value="0" onkeydown="return event.key != 'Enter';"/>0<br />
<input name="nivell2" type="radio" value="1" onkeydown="return event.key != 'Enter';"/>1 (1r d'ESO)<br />
<input name="nivell2" type="radio" value="2" onkeydown="return event.key != 'Enter';"/>2 (2n d'ESO)<br />
<input name="nivell2" type="radio" value="3" onkeydown="return event.key != 'Enter';"/>3 (3r d'ESO)<br />
<input name="nivell2" type="radio" value="4" onkeydown="return event.key != 'Enter';"/>4 (4t d'ESO)<br />
<input name="nivell2" type="radio" value="5" onkeydown="return event.key != 'Enter';"/>5 (Batxillerat)<br /><br>
Text de la pregunta:<br>
<textarea name="text2" id="text2" form="pregunta2" rows="4"></textarea><br><br>
Resposta correcta: <small>(Si és una pregunta d'opció múltiple, introduir només la lletra en minúscula)</small><br>
<input type="text" name="respostes2" onkeydown="return event.key != 'Enter';"><br><br>
Nombre d'intents permesos:<br>
<input name="intents2" type="radio" value="1" onkeydown="return event.key != 'Enter';"/>1<br />
<input name="intents2" type="radio" value="2" onkeydown="return event.key != 'Enter';"/>2<br />
<input name="intents2" type="radio" value="3" onkeydown="return event.key != 'Enter';"/>3<br /><br>
Temps per a respondre:<br>
<input type="range" name="temps2" min="20" max="150" value="30" step="10" id="start" onkeydown="return event.key != 'Enter';">
<output name="temps2_output" for="start" >30</output> segons <br><br>
Imatge:<br>
<img id="imagen" width="150" height="100"><br>
<input type="file" name="imatge2" onkeydown="return event.key != 'Enter';"><br><br>
Data: <br>
<input type="datetime-local" name="data" onkeydown="return event.key != 'Enter';"><br><br>
Verificada: <input type="checkbox" name="verificada" id="verificada" onkeydown="return event.key != 'Enter';"><br><br>
<a href=# onclick="modificar()">Enviar</a>
</form>
<iframe id="resultado2" name="resultado2" style="position: absolute;top: 20%;left: 50%;width: 300px;height: 200px;border-radius: 15px;background: #AEE4FF;box-shadow: 0 0 5px #CCC;visibility: hidden;opacity: 0;transition: all 1s ease-in-out;">
  </iframe>
</div>


</body></html>
