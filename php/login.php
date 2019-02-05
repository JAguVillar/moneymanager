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
    }

    header("Access-Control-Allow-Origin: *");

    $email = $_POST["email"];
    $contra = $_POST["contra"];


    $sql = "SELECT nombre, email, pass, divisa FROM usuarios WHERE email = '$email' AND pass = '$contra'";

    $resultado = array();
    $consulta = $conn->query($sql);
    while ($row = $consulta->fetch_assoc()) {
        $resultado[] = $row;
    }
    echo json_encode($resultado);
?>