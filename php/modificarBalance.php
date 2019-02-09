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

    $balance = $_POST["balance"];
    $id = $_POST["id"];

    $sql = "UPDATE usuarios SET balance = '$balance'";

    $sql_ = "SELECT balance FROM usuarios WHERE id = '$id'";

    $resultado = array();
    $consulta = $conn->query($sql_);
    if ($row = $consulta->fetch_assoc()) {
        $resultado[] = $row;
    }
    echo json_encode($resultado);
?>