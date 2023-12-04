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

    $newsletter_email = inputClean($_POST['newsletter_email']);

    // $token = $_POST['token'];

    if (empty($newsletter_email)) {
        sendResponse(0, 'Email field is required.');
    }


    try {
        if (!$stmt = $conn->prepare("INSERT INTO `newsletter`(`newsletter_email`,`created_at`) VALUES (?,?)")) {

            sendResponse(0, "Some error occured. code : 10");
        }

        if (!$stmt->bind_param("ss", $newsletter_email, $created_at)) {

            sendResponse(0, "Some error occured. code : 20");
        }

        if ($stmt->execute()) {
            $subject = "Thank you for subscribing!";
            $message = "Hello,<br><br>

            Thank you for subscribing to our newsletter! We're excited to have you on board.<br><br>
            
            Stay informed with our newsletters featuring latest news, product updates, partnerships, events, valuable insights, exclusive content & more.<br><br>
            
            Rest assured, we won't spam you! 😉<br><br>
            
            Best regards,<br>
            Cloud TV Team";
            $to = $newsletter_email;
            $mail_resp_1 = sendMail($to, $subject, $message);
            // $mail_resp_1 = sendAuthenticMail($from,$from_name,$to,$to_name,$subject,$message);

            //  start admin email
            $subject = "Cloud TV | Smart TV OS | Enquiry";
            $message = "Hello Team ,<br ><br>

                        subscribing by below user. <br />

                        <br ><br >
                        Email : " . $newsletter_email . " <br>
                        <br>

                        Thank you, <br>
                        Cloud TV";

            $to = $admin_email;
            $to_name = 'Admin';
            $mail_resp_2 = sendMail($admin_email, $subject, $message);
            
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
