<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primer Página con PHP</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
    <link rel="stylesheet" href="css/estilos.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
</head>
<body class="container">
    <div class="card mb-3">
        <div class="card-body">
            <form name="formulario" id="formulario" method="POST" action="controlador.php">
                <h1>Primera Página con PHP</h1>
                <div class="row">
                    <div class="col-6">
                        <div class="mb-3">
                        <label for="numero1" class="form-label">Número 1</label>
                        <input type="number" name="numero1" class="form-control" id="numero1" placeholder="Primer Número" required>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="mb-3">
                        <label for="numero2" class="form-label">Número 2</label>
                        <input type="number" name="numero2" class="form-control" id="numero2" placeholder="Segundo Número" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <select class="form-select" id="operacion" name="operacion" required>
                            <option value="">Seleccione una opción</option>
                            <option value="suma">Suma</option>
                            <option value="resta">Resta</option>
                            <option value="multiplicacion">Multiplicación</option>
                            <option value="division">División</option>
                        </select>
                        
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-8">
                        <input type="submit" class="btn btn-success" value="calcular" id="calcular" name="calcular">
                        <input type="reset" class="btn btn-danger" value="borrar" id="borrar" name="borrar">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <?php
                            if(isset($_GET["resultado"]))
                            {
                                $guardado = $_GET["resultado"];
                                echo "<p class='alert alert-info'>El resultado es: $guardado</p>";
                            }
                        ?>
                  </div>
                </div>
            </form>    
        </div>
    </div>
</body>
</html>

