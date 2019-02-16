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
        //echo "Conexion Exito";
    }

    header("Access-Control-Allow-Origin: *");

    $id = $_POST["id"];
    $categoria = $_POST["categoria"];

    $sql = "SELECT * FROM movimientos WHERE idUsuario = '$id' AND catMov = '$categoria'";

    $resultado = array();
    $consulta = $conn->query($sql);
    while ($row = $consulta->fetch_assoc()) {
        $resultado[] = $row;
    }
    echo json_encode($resultado);
?>