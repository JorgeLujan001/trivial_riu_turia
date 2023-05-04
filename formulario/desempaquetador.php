<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>

<meta content="text/html; charset=utf-8" http-equiv="content-type">
<title>Desempaquetador de preguntes</title>
<link rel="stylesheet" type="text/css" href="form.css" media="screen" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script language="javascript">
var i;
var j=0;
var correctas=0;
var paquetext={};
var imatgeval = "";
var currentdate;
var data = "";


async function doAjax(pregunta) {
    return $.ajax({
        	data:  pregunta,
        	url:   'intropaq.php',
        	dataType: 'html',
        	type:  'post',
        	success:  function (response) {if(response==1){return 1}}
    });
};

async function processa(paquet) {
  for (i in paquet) {
          j=j+1;
          paquet[i]["id"]=i;
          correctas += await doAjax(paquet[i]);
        };
        document.getElementById("cargando").style.display="none";
        if (correctas<j){alert(correctas+" preguntes de "+j+" introduïdes.")} else {alert("Paquet carregat correctament. " + j+ " preguntes introduïdes")};
        j=0;
        correctas=0;
};

function pujar()
{
  document.getElementById("cargando").style.display="block";
  var file = document.getElementById("paquet").files[0];
  if (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
        paquetext = evt.target.result;
        paquet=JSON.parse(paquetext);
        processa(paquet);
    };
    reader.onerror = function (evt) {
        alert("Error llegint paquet.");
    };
  };
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
</td>
<td
style="vertical-align: top; width: 20%; text-align: center;"> TR&Iacute;VIAL<br><a href="http://172.28.47.2/easy-sites/easy-trivial_riu_turia"><img alt="" style="width: 100px; border-radius: 5px;" src="mover.png"></a>
</td>
</tr>
</tbody>
</table>
</div>
<div id="pujar" class="form-style-10">
<h1>Desempaquetador de preguntes</h1>
<div id="cargando" style="display: none"><img src="loading-79.gif" width="100%"></div>
<div class="section"><span>🡅</span>Puja un paquet per a guardar les seues preguntes en la base de dades:</div>
<input type="file" name="paquet" id="paquet" onkeydown="return event.key != 'Enter';"><br>
<button onclick="pujar()">Pujar paquet</button>
</body></html>

