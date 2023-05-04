<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>

<meta content="text/html; charset=utf-8" http-equiv="content-type">
<title>Empaquetador de preguntes</title>
<link rel="stylesheet" type="text/css" href="form.css" media="screen" />
<script language="javascript">
var i=0;
var paquet={};
const reader = new FileReader();
var imatgeval = "";

reader.addEventListener("load", function () {
    imatgeval = reader.result;
    paquet[i]={
      assignatura: assignaturaval,
      nivell: nivellval,
      text: textval,
      respostes: respostesval,
      intents: intentsval,
      temps: tempsval,
      imatge: imatgeval
    };
    document.pregunta.reset();
    i++;
    document.getElementById('numpaquet').innerHTML= i;
  }, false);

  function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

function insertar()
{
  assignaturaval="";nivellval="";textval="";respostesval="";intentsval="";tempsval="";
  assignaturaval=document.pregunta.assignatura.value;nivellval=document.pregunta.nivell.value;textval=document.pregunta.text.value;respostesval=document.pregunta.respostes.value;intentsval=document.pregunta.intents.value;tempsval=document.pregunta.temps.value;
  if(assignaturaval!=""&&nivellval!=""&&textval!=""&&respostesval!=""&&intentsval!=""&&tempsval!=""){
    if (document.getElementById('imatge').files[0]) {
      reader.readAsDataURL(document.getElementById('imatge').files[0]);
    } else {
      imatgeval = "";
      paquet[i]={
        assignatura: assignaturaval,
        nivell: nivellval,
        text: textval,
        respostes: respostesval,
        intents: intentsval,
        temps: tempsval,
        imatge: imatgeval
      };
      document.pregunta.reset();
      i++;
      document.getElementById('numpaquet').innerHTML= i;
    };
  }else{alert("Falten dades")};
};

function descarregar()
{
  downloadObjectAsJson(paquet,"paquet");
};

function esborrar()
{
  for (j=0; j<i; j++) {
    delete paquet[j];
  };
  i = 0;
  document.getElementById('numpaquet').innerHTML= i;
};
</script>
</head>

<body >

<!-- Capçalera -->

<div style="top: 40px; left: 40px; right: 40px; display: block">
<table style="text-align: left; width: 100%;" border="0" cellpadding="2"
cellspacing="0">
<tbody>
<tr>
<td
style="vertical-align: top; width: 20%; text-align: center;">IES RIU T&Uacute;RIA<br><img alt="" style="width: 150px" src="logo.png">
</td>
<td
style="vertical-align: top; width: 60%; text-align: center;">
<div id="descarregar" class="form-style-10">
<h1>Empaquetador de preguntes</h1>
<div style="font: normal 20px 'Bitter', serif; color: #2A88AD;	margin-bottom: 10px"><span id="numpaquet">0</span> preguntes en el paquet</div>
<button onclick="descarregar()">Descarregar paquet</button>
<button onclick="esborrar()">Esborrar preguntes</button>
</td>
<td
style="vertical-align: top; width: 20%; text-align: center;"> TR&Iacute;VIAL<br><img alt="" style="width: 100px; border-radius: 5px;" src="mover.png">
</td>
</tr>
</tbody>
</table>
</div>

<!--  Introduir preguntes -->

<div id="introduir" class="form-style-10">
<h1>Inserta una pregunta</h1>
<form method="post" name="pregunta" id="pregunta" enctype="multipart/form-data" oninput="temps_output.value=parseInt(temps.value);">
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
<input type="file" name="imatge" id="imatge" onkeydown="return event.key != 'Enter';"><br><br>
<a href=# onclick="insertar()" class="enviar">Guardar</a>
</form>
</div>
</body></html>
