<?php

include 'apertura.php';
$pep = $_POST["pep"];
$assignatura = $_POST["assignatura"];
$nivell = $_POST["nivell"];
$pep = intval($pep) - 1;

       $consulta="SELECT * FROM preguntas WHERE assignatura='".$assignatura."' AND nivell='".$nivell."' AND verificada='1' ORDER BY codi_pregunta ASC LIMIT 1 OFFSET ".$pep;
       $resposta=mysqli_query($mysqli,$consulta);
       $pregunta=mysqli_fetch_array($resposta);

echo json_encode($pregunta);

?>
