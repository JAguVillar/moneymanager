<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db = "moneymanager";

    //Se crea la conexion
    $conn = mysqli_connect($servername, $username, $password, $db);

    //Verificamos conexion
    if(!$conn) {
        die("Conexion Fallo".mysqli_connect_error());
    }
    else {
        echo "Conexion Exito";
    }

    header("Access-Control-Allow-Origin: *");

    $fin = $_POST["fin"];
    $categoria = $_POST["categoria"];
    $dinero = $_POST["dinero"];
    $descripcion = $_POST["descripcion"];
    $idUsuario = $_POST["idUsuario"];

    $sql = "INSERT INTO movimientos (idUsuario, finMov, catMov, cdadMov, descrMov, fechaMov, horaMov) 
            VALUES ('$idUsuario', '$fin', '$categoria', '$dinero', '$descripcion', NOW(), CURRENT_TIMESTAMP)";

    echo $sql;
    $consulta=$conn->prepare($sql);
    if ($conn->query($sql) === TRUE) {
        echo "Subida con Exito";
    } else {
        echo "0";
    }
?>