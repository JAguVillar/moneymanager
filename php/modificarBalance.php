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

    header("Access-Control-Allow-Origin: *");

    $balance = $_POST["balance"];
    $balance = floatval($balance);
    $id = $_POST["id"];

    $sql = "UPDATE usuarios SET balance = '$balance' WHERE id = '$id'";

    $consulta=$conn->prepare($sql);
    if ($conn->query($sql) === TRUE) {
	echo "Subida con Exito";
    } else {
	echo "0";
    }
?>