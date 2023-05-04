<?php

include 'apertura.php';
$nom = $_POST["nom"];
$contrasenya = $_POST["contrasenya"];
$jugadores = $_POST["jugadores"];
$marcatemp = $_POST["marcatemp"];
$ordinadors = $_POST["ordinadors"];
$ordi0 = $_POST["ordi0"];
$ordi1 = $_POST["ordi1"];
$ordi2 = $_POST["ordi2"];
$ordi3 = $_POST["ordi3"];
$ordi4 = $_POST["ordi4"];
$ordi5 = $_POST["ordi5"];
$ordinaconnectat = $_POST["ordinaconnectat"];
$ni1 = $_POST["ni1"];
$ni2 = $_POST["ni2"];
$ni3 = $_POST["ni3"];
$ni4 = $_POST["ni4"];
$ni5 = $_POST["ni5"];
$ni6 = $_POST["ni6"];
$turno = $_POST["turno"];
$asignatura = $_POST["asignatura"];


       $consulta="INSERT INTO partidas (nom, contrasenya, jugadores, marcatemp, ordinadors, ordi0, ordi1, ordi2, ordi3, ordi4, ordi5, ordinaconnectat, ni1, ni2, ni3, ni4, ni5, ni6, turno, asignatura) VALUES ('".$nom."', '".$contrasenya."', '".$jugadores."', '".$marcatemp."', '".$ordinadors."', '".$ordi0."', '".$ordi1."', '".$ordi2."', '".$ordi3."', '".$ordi4."', '".$ordi5."', '".$ordinaconnectat."', '".$ni1."', '".$ni2."', '".$ni3."', '".$ni4."', '".$ni5."', '".$ni6."', '".$turno."', '".$asignatura."')";
       mysqli_query($mysqli,$consulta);

?>
