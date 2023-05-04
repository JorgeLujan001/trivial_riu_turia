<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>

  <meta content="text/html; charset=ISO-8859-1" http-equiv="content-type">
  <title>Inserta una pregunta</title>


</head><body style="background-color:#EFF;" >
<h2><div align="center">Pregunta afegida correctament</div></h2>
<div align="center">
<?php
include("apertura.php");
$result=1;
$caracteresraros = array("\r\n","\n","ç","Ç","ñ","Ñ","'",'"',"€","Á","É","Í","Ó","Ú","á","é","í","ó","ú","À","È","Ò","à","è","ò","ü","Ü","ï","Ï");
$caracteresbuenos = array("<br>","<br>","&ccedil;","&Ccedil;","&ntilde;","&Ntilde;","&apos;","&quot;","&euro;","&Aacute;","&Eacute;","&Iacute;","&Oacute;","&Uacute;","&aacute;","&eacute;","&iacute;","&oacute;","&uacute;","&Agrave;","&Egrave;","&Ograve;","&agrave;","&egrave;","&ograve;","&uuml;","&Uuml;","&iuml;","&Iuml;");
$data = date('Ymd_His');

$idval2=$_POST['id'];
$imatgedades=$_POST['imatge'];
$assignaturaval2=$_POST['assignatura'];
$nivellval2=$_POST['nivell'];
$textval2=str_replace($caracteresraros,$caracteresbuenos,htmlspecialchars($_POST['text']));
$no_mostrarval2=$_POST['no_mostrar'];
$respostesval2=str_replace($caracteresraros,$caracteresbuenos,htmlspecialchars($_POST['respostes']));
$intentsval2=$_POST['intents'];
$tempsval2=$_POST['temps'];
$verificadaval2="0";

if($imatgedades!="") {
$target_dir = "imatges/";
$extension = explode('/', mime_content_type($imatgedades))[1];
$target_file = $target_dir . $data . "p" . $idval2 . "." . $extension;
$imatgeval2=$data . "p" . $idval2 . "." . $extension;
file_put_contents($target_file, file_get_contents($imatgedades));
}

//Subimos información a la base de datos
$consulta="INSERT INTO preguntas (assignatura,nivell,text,no_mostrar,respostes,intents,temps,imatge,verificada) values ('$assignaturaval2','$nivellval2','$textval2','$no_mostrarval2','$respostesval2','$intentsval2','$tempsval2','$imatgeval2','$verificadaval2')";
$mysqli->query($consulta);

echo result;

?>
  </div>

</body></html>

