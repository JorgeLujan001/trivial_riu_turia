<?php
$dades='dades.txt';
$totes_dades=file($dades);
$host=rtrim($totes_dades[0]);
$user=rtrim($totes_dades[1]);
$password=rtrim($totes_dades[2]);
$db=rtrim($totes_dades[3]);
$contrasenya=rtrim($totes_dades[4]);
$mysqli = new mysqli($host, $user, $password, $db);
$mysqli->set_charset("utf8_unicode_ci");
?>
