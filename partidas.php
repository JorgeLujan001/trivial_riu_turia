<?php

include 'apertura.php';
$nom = $_POST["nom"];

       $consulta="SELECT * FROM partidas WHERE nom='".$nom."'";
       $resposta=mysqli_query($mysqli,$consulta);
       $partida=mysqli_fetch_array($resposta);

echo json_encode($partida);

?>
