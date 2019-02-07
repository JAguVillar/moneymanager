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

    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $contra = $_POST["contra"];
    $divisa = $_POST["divisa"];

    $sql = "INSERT INTO usuarios (nombre, email, pass, divisa) VALUES ('$nombre', '$email', '$contra', '$divisa')";

    echo $sql;
    $consulta=$conn->prepare($sql);
    if ($conn->query($sql) === TRUE) {
        echo "Subida con Exito";
    } else {
        echo "Error:" . $sql . "<br>" . $conn->error;
    }
?>