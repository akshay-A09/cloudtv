<?php

ini_set('display_errors', 1);

ini_set('display_startup_errors', 1);

error_reporting(E_ALL);

if ($_SERVER['SERVER_NAME'] == 'localhost') {
    $servername = "localhost";
    $username = "root";
    $password = '';
    $dbname = "cloudtv_db";
    $base_url = "http://localhost/cloudtv/";
    $admin_url = "http://localhost/cloudtv/admin/";
    $environment = 'local';
    /*
    $from = 'gaurav.agency09@gmail.com';
    $from_name =  'Cloud TV';
    $email_user = 'gaurav.agency09@gmail.com';
    $email_password = 'gaurav09200';
    $admin_email = 'gaurav.agency09@gmail.com';*/
    
} else {
    $servername = "localhost";
    $username = "cloudtvos_user";
    $password = "Q{-rWR^M$+NL";
    $dbname = "cloudtvos_db";
    $base_url = "https://cloudtvos.com/";
    $admin_url = "https://cloudtvos.com/admin";
    $environment = 'server';
    $from = 'noreply@cloudtvos.com';
    $from_name =  'Cloud TV';
    $email_user = 'noreply@cloudtvos.com';
    $email_password = 'S%C2023$=pfdca4=)';
    $admin_email = 'contact@cloudtvos.com';
    $customer_email='customercare@cloudwalker.tv';
}

// Create connection
date_default_timezone_set('Asia/Calcutta');
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection

if ($conn->connect_error) {
    // die("Connection failed: " . $conn->connect_error);
    die("Connection failed: ");
}

function inputClean($data){
    $data = htmlspecialchars($data);
    $data = stripslashes($data);
    $data = trim($data);
    return $data;
}