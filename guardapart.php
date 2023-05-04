<?php
include 'apertura.php';
$nom = $_POST["nom"];
$pos0 = $_POST["pos0"];
$pos1 = $_POST["pos1"];
$pos2 = $_POST["pos2"];
$pos3 = $_POST["pos3"];
$pos4 = $_POST["pos4"];
$pos5 = $_POST["pos5"];
$estat = $_POST["estat"];
$ordi0 = $_POST["ordi0"];
$ordi1 = $_POST["ordi1"];
$ordi2 = $_POST["ordi2"];
$ordi3 = $_POST["ordi3"];
$ordi4 = $_POST["ordi4"];
$ordi5 = $_POST["ordi5"];
$textpreg = $_POST["textpreg"];
$no_mostrarpreg = $_POST["no_mostrarpreg"];
$resppreg = $_POST["resppreg"];
$intepreg = $_POST["intepreg"];
$nivepreg = $_POST["nivepreg"];
$tiempreg = $_POST["tiempreg"];
$asigpreg = $_POST["asigpreg"];
$imagpreg = $_POST["imagpreg"];
$graficapreg = $_POST["graficapreg"];
$assigna = $_POST["assigna"];
$azar = $_POST["azar"];
$dados = $_POST["dados"];
$fallo = $_POST["fallo"];
$posiciox = $_POST["posiciox"];
$posicioy = $_POST["posicioy"];
$lusdos = $_POST["lusdos"];
$ven = $_POST["ven"];
$gallons = $_POST["gallons"];
$guardada = $_POST["guardada"];
$vencedor = $_POST["vencedor"];
$turno = $_POST["turno"];
$chor = $_POST["chor"];
$cmin = $_POST["cmin"];
$csec2 = $_POST["csec2"];
       $consulta="UPDATE partidas SET pos0 = '".$pos0."', pos1 = '".$pos1."', pos2 = '".$pos2."', pos3 = '".$pos3."', pos4 = '".$pos4."', pos5 = '".$pos5."', estat = '".$estat."', ordi0 = '".$ordi0."', ordi1 = '".$ordi1."', ordi2 = '".$ordi2."', ordi3 = '".$ordi3."', ordi4 = '".$ordi4."', ordi5 = '".$ordi5."', textpreg = '".$textpreg."', no_mostrarpreg = '".$no_mostrarpreg."', resppreg = '".$resppreg."', intepreg = '".$intepreg."', nivepreg = '".$nivepreg."', tiempreg = '".$tiempreg."', asigpreg = '".$asigpreg."', imagpreg = '".$imagpreg."', graficapreg = '".$graficapreg."', assigna = '".$assigna."', azar = '".$azar."', dados = '".$dados."', fallo = '".$fallo."', posiciox = '".$posiciox."', posicioy = '".$posicioy."', lusdos = '".$lusdos."', ven = '".$ven."', gallons = '".$gallons."', guardada = '".$guardada."', vencedor = '".$vencedor."', turno = '".$turno."', chor = '".$chor."', cmin = '".$cmin."', csec2 = '".$csec2."' WHERE nom = '".$nom."'";
       mysqli_query($mysqli,$consulta);

?>

