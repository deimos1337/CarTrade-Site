<?php
require_once 'config.php';

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id= trim($_POST['id']);

$sql = "SELECT id, mark, model, year, run, img, price, vin FROM catalog WHERE id=$id";
$result = $conn->query($sql);

     if ($result->num_rows > 0) {
        // output data of each row
        $row = $result->fetch_assoc();
        $massive = $row;
    } else {
        echo 0;
    }

echo (json_encode($massive));

$conn->close();
?>