<?php
require_once 'config.php';


$mark = trim($_POST['mark']);
$model = trim($_POST['model']);
$year = trim($_POST['year']);
$run = trim($_POST['run']);
$price = trim($_POST['price']);
$vin = trim($_POST['vin']);
$img = trim($_POST['img']);


if ( $mark=='' OR $model=='' OR $year=='' OR $run =='' OR $price =='' OR $img ==''){
    echo 2;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO catalog (mark, model, year, run, price, vin, img ) VALUES ('".$mark."', '".$model."', '".$year."', '".$run."', '".$price."', '".$vin."', '".$img."')";

if ($conn->query($sql) === TRUE) {
    echo 1;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>