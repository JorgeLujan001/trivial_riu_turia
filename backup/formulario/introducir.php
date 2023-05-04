<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html><head>

  <meta content="text/html; charset=ISO-8859-1" http-equiv="content-type">
  <title>Inserta una pregunta</title>


</head><body style="background-color:#EFF;" >
<h2><div align="center">Pregunta afegida correctament</div></h2>
<div align="center">
<?php
include("apertura.php");
$caracteresraros = array("\r\n","ç","Ç","ñ","Ñ","'",'"',"€","Á","É","Í","Ó","Ú","á","é","í","ó","ú","À","È","Ò","à","è","ò");
$caracteresbuenos = array("<br>","&ccedil;","&Ccedil;","&ntilde;","&Ntilde;","&apos;","&quot;","&euro;","&Aacute;","&Eacute;","&Iacute;","&Oacute;","&Uacute;","&aacute;","&eacute;","&iacute;","&oacute;","&uacute;","&Agrave;","&Egrave;","&Ograve;","&agrave;","&egrave;","&ograve;");
  
// Empezamos a subir la imagen  
if(basename($_FILES["imatge"]["name"])!="") {  
$target_dir = "imatges/";
$target_file = $target_dir . basename($_FILES["imatge"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
$imatgeval2=basename($_FILES["imatge"]["name"]);
 
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["imatge"]["tmp_name"]);
  if($check !== false) {
    echo "L'arxiu és una imatge - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "L'arxiu no és una imatge.";
    $uploadOk = 0;
  }
}

// Check if file already exists
if (file_exists($target_file)) {
  echo "Ho sentim, ja existeix una imatge amb aquest nom. Canvieu el nom de la imatge i torneu a provar.";
  $uploadOk = 0;
}

// Check file size
if ($_FILES["imatge"]["size"] > 5000000) {
  echo "Ho sentim, l'arxiu és massa gran.";
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  echo "Ho sentim, només s'admeten imatges JPG, JPEG, PNG i GIF.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Ho sentim, la imatge no s'ha pujat.";
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["imatge"]["tmp_name"], $target_file)) {
    echo "La imatge ". htmlspecialchars( basename( $_FILES["imatge"]["name"])). " s'ha pujat correctament.";
  } else {
    echo "Ho sentim, hi ha hagut un error processant la imatge.";
  }
}
}
else
{
  echo "La teua pregunta s'ha afegit correctament, però sense imatge. Què avorrit!";
}
  
//Subimos información a la base de datos
$assignaturaval2=$_POST['assignatura'];
$nivellval2=$_POST['nivell'];
$textval2=str_replace($caracteresraros,$caracteresbuenos,htmlspecialchars($_POST['text']));
$no_mostrarval2=$_POST['no_mostrar'];
$respostesval2=str_replace($caracteresraros,$caracteresbuenos,htmlspecialchars($_POST['respostes']));
$intentsval2=$_POST['intents'];
$tempsval2=$_POST['temps'];
$verificadaval2="0";
$consulta="INSERT INTO preguntas (assignatura,nivell,text,no_mostrar,respostes,intents,temps,imatge,verificada) values ('$assignaturaval2','$nivellval2','$textval2','$no_mostrarval2','$respostesval2','$intentsval2','$tempsval2','$imatgeval2','$verificadaval2')";
$mysqli->query($consulta);


?>
  </div>

</body></html>
