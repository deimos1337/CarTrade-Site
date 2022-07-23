<?php
require_once 'config.php';

$email= trim($_POST['email']);
$pass = trim($_POST['pass']);

if ($email =='' OR $pass==''){
    echo 2;
    die;
}

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT password, name, email FROM signup WHERE email='".$email."'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($pass, $row['password'])){
        echo json_encode($row);
    } else {
        echo "3";
    }
} else {
    echo "0";
}
$conn->close();
?>