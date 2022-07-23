<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        $check = 0
    } elseif (!isset($_COOKIE['email']) OR trim($_COOKIE['email']) !=''){
        $check = 1
    } else {
        $check = 2
    }
?>
