<?php

include_once 'config.php';

$db = new BDMysql();

if(isset($db->getConexion)){
    echo "Conexión exitosa.";
}else {
    echo "Error al conectar.";
}

?>  