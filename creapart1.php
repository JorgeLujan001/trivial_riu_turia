<?php

include 'apertura.php';
$nom = $_POST["nom"];
$contrasenya = $_POST["contrasenya"];
$ordi0 = $_POST["ordi0"];
$ordi1 = $_POST["ordi1"];
$ordi2 = $_POST["ordi2"];
$ordi3 = $_POST["ordi3"];
$ordi4 = $_POST["ordi4"];
$ordi5 = $_POST["ordi5"];
$ordinaconnectat = $_POST["ordinaconnectat"];
$turno = $_POST["turno"];
$guardada = $_POST["guardada"];

       $consulta="UPDATE partidas SET turno = '".$turno."', ordi0 = '".$ordi0."', ordi1 = '".$ordi1."', ordi2 = '".$ordi2."', ordi3 = '".$ordi3."', ordi4 = '".$ordi4."', ordi5 = '".$ordi5."', ordinaconnectat = '".$ordinaconnectat."', guardada = '".$guardada."' WHERE nom = '".$nom."'";
       mysqli_query($mysqli,$consulta);

?>
