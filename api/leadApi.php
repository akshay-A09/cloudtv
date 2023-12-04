<?php

//echo "in";exit;
require_once "config.php";
require_once "functions.php";
// require_once "../mail.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // echo "<pre>";
    // print_r($_POST);
    // exit;
    // sendResponse(0, $_POST);
     
    // Sanitize POST array
    $_POST = preg_replace('/\x00|<[^>]*>?/', '', $_POST);
    $_POST = str_replace(["'", '"'], ['&#39;', '&#34;'], $_POST);

    $created_at = date("Y-m-d H:i:s"); //time in 24 hour format

    $first_name = inputClean(ucwords($_POST['first_name']));
    $last_name = inputClean(ucwords($_POST['last_name']));
    $email = inputClean($_POST['email']);
    $mobile = inputClean($_POST['mobile']);
    $company_name = inputClean($_POST['company_name']);
    $contact_requirment = inputClean($_POST['contactrequirment']);
    $massage = inputClean($_POST['massage']);

    // $token = $_POST['token'];

    if (empty($first_name)) {
        sendResponse(0, 'First Name field is required.');
    }
    if (empty($email)) {
        sendResponse(0, 'Email field is required.');
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) // email is valid
    {
        sendResponse(0, 'Email is invalid.');
    }
    if (empty($mobile)) {
        sendResponse(0, 'Phone Number field is required.');
    } elseif (!preg_match('/^\d{10}$/', $mobile)) // phone number is valid
    {
        sendResponse(0, 'Phone Number is invalid.');
    }
    
    if(empty($contact_requirment))
    {
        sendResponse(0, 'Email ID is invalid.'); 
    }

    /*if ($token) {
        //validate google recaptcha
        $recaptcha_url = "https://www.google.com/recaptcha/api/siteverify";
        $recaptcha_secret = "6LeuLWsgAAAAAIeC1KBxoW0AWdGXxCT7enfhP1Dv";
        $recaptcha_response = $token;
        
        // Make and decode POST request:
        $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
        $recaptcha = json_decode($recaptcha);
        
        
        // print_r($recaptcha);
        // Take action based on the score returned:
        if ($recaptcha->success != true || $recaptcha->success != 1) {
            sendResponse(0, "Invalid captcha.");
        }

    } 
    else {

        sendResponse(0, 'Captcha is missing.');

    }*/

    // sendResponse(0, "cap done");
    $db_data = $conn->prepare("SELECT * FROM contact_form WHERE `email`='".$email."' OR `mobile`='".$mobile."' ");

    $db_data->execute();

    $result = $db_data->get_result();

    //echo "<pre>";print_r($result->num_rows);exit;
    if ($result->num_rows != 0) {
        sendResponse(2, "Email Or Mobile Already Used!");
    }


    try {
        if (!$stmt = $conn->prepare("INSERT INTO `contact_form`(`first_name`, `last_name` ,`mobile`, `email`,`company_name`,`contact_requirment`,`massage`,`created_at`) VALUES (?,?,?,?,?,?,?,?)")) {

            sendResponse(0, "Some error occured. code : 10");
        }

        if (!$stmt->bind_param("ssssssss", $first_name, $last_name, $mobile, $email, $company_name, $contact_requirment,$massage, $created_at)) {

            sendResponse(0, "Some error occured. code : 20");
        }

        if ($stmt->execute()) {
            //  start client email
            $subject = "Thank you for your enquiry!";
            $message = "Dear ".$first_name.",<br><br>

            Thank you for reaching out to us & we appreciate your interest in Cloud TV.<br><br>
            
            Our team has received your enquiry and will respond promptly. For any immediate assistance, feel free to reach out to us directly on contact@cloudtvos.com<br><br>
            
            We look forward to assisting you.<br><br>
            
            Best regards,<br>
            Cloud TV Team";

            $to = $email;
            $to_name = $first_name;
            $mail_resp_1 = sendMail($email, $subject, $message);
            // $mail_resp_1 = sendAuthenticMail($from,$from_name,$to,$to_name,$subject,$message);

            //  start admin email
            $subject = "Cloud TV | Smart TV OS | Enquiry";
            $message = "Hello Team ,<br ><br>

                        Enquiry form has been filled by below user. <br />

                        <br ><br >
                        Full Name : " . $first_name . " <br>
                        Last Name : " . $last_name . " <br>
                        Phone Number : " . $mobile . " <br>
                        Email : " . $email . " <br>
                        Company Name : " . $company_name . " <br>
                        Subject Name : " . $contact_requirment . " <br>
                        Massage : " . $massage . " <br>
                        <br><br><br>

                        Thank you, <br>
                        Cloud TV";
            
            if($contact_requirment == 'customer_service')
            {
                $to = $customer_email;
                $to_name = 'Service Team';
            }elseif($contact_requirment == 'business_enquiry')
            {
                $to = $admin_email;
                $to_name = 'Business Enquiry';
            }else
            {
                $to = $admin_email;
                $to_name = 'Admin';
            }    
            
            $mail_resp_2 = sendMail($to, $subject, $message);
            //$mail_resp_2 = sendAuthenticMail($from,$from_name,$to,$to_name,$subject,$message);
            
            sendResponse(1, "Thank you for contacting us. We'll respond to you shortly.");
        } else {
            sendResponse(0, 'Failed to insert data');
        }
    } catch (PDOException $er) {
        $error[] = $er->getMessage();
        //header("Location: https://example.com/myOtherPage.php");
        echo json_encode(["status" => 0, "message" => $error]);
        die();
    }
    exit();
} else {
    die("Access Denied");
}
