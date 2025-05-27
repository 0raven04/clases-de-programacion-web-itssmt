<?php

    //isset ->Vertificar si existe una o varias varibles

    if(isset($_POST["numero1"],$_POST["numero2"],$_POST["operacion"]))
    {

        $num1 = $_POST["numero1"];
        $num2 = $_POST["numero2"];
        $operacion = $_POST["operacion"];
        $resultado = "";
        
        switch($operacion)
        {
            case 'suma':
                $resultado = $num1 + $num2;
            break;

            case "resta":
                $resultado = $num1 - $num2;
            break;

            case "multiplicacion":
                $resultado = $num1 * $num2;
            break;

            case "division":
                $resultado = $num1 / $num2;
            break;

            default:
                $resultado = "error";
            break;
        }

        //echo "<h3>El resultado de la $operacion es: $resultado </h3>"; //aplica html
        //echo "<h3>El resultado de la ".$operacion." es: $resultado </h3>"; //aplica html
        header("Location: index.php?resultado=$resultado");
        
    }
    else//Si no existe un error
    {
        echo "<h1>No se tiene la información necesaria.</h1>";
    }
    
?>  