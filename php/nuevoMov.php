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
    $signo = $_POST["signo"];
    $fecha = $_POST["fecha"];

    $sql = "INSERT INTO movimientos (idUsuario, finMov, catMov, signoMov, cdadMov, descrMov, fechaMov, horaMov) 
            VALUES ('$idUsuario', '$fin', '$categoria', '$signo', '$dinero', '$descripcion', '$fecha', CURRENT_TIMESTAMP)";

    echo $sql;
    $consulta=$conn->prepare($sql);
    if ($conn->query($sql) === TRUE) {
        echo "Subida con Exito";
    } else {
        echo "0";
    }
?>