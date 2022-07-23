<?php
require_once 'config.php';

$email= trim($_POST['email']);
$name= trim($_POST['name']);
$birthday= trim($_POST['birthday']);

$old_pass = trim($_POST['old_pass']);
$old_pass_hash = trim($_POST['old_pass_hash']);
$new_pass= trim($_POST['new_pass']);

$new_pass_hash = password_hash($new_pass, PASSWORD_DEFAULT);

if ($email ==''){
    echo 2;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if (password_verify($old_pass, $old_pass_hash)){

    $sql = "UPDATE signup SET name='".$name."', password='".$new_pass_hash."', birthday='".$birthday."' WHERE email='".$email."'";

    if ($conn->query($sql) === TRUE) {
        echo 1;
    } else {
        echo "Error updating record: " . $conn->error;
    }
} else {
    echo "3";
}




$conn->close();
?>