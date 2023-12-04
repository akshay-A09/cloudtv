<?php
require '../PHPMailer/PHPMailerAutoload.php';

function sendMail_1($toEmail,$subject,$message,$file='',$cc='',$bcc=''){
	$headers = "From: {company name} <{mail id}>\r\n";
	$a = mail("$toEmail","$subject",$message,$headers);
}

function sendMail($toEmail,$subject,$message,$file='',$cc='',$bcc=''){
	GLOBAL $base_url;
	GLOBAL $env;
	$mail = new PHPMailer;
	$mail->IsSMTP();        
	//$mail->SMTPDebug  = 3;      
	//$mail->Debugoutput = 'html';                       
	//$mail->Host = 'smtp.gmail.com';               
	// $mail->SMTPAuth = true;                              
	// $mail->Username = 'noreply@cloudtvos.com';                
	// $mail->Password = 'S%C2023$=pfdca4=)';   

	// $mail->Port = 465;
	//$mail->Port = 587;
	//$mail->SMTPSecure = 'tls';
	$mail->From = 'noreply@cloudtvos.com'; //email
	$mail->FromName = 'Cloud TV';
	$mail->AddAddress($toEmail);

	if($cc){
		$mail->AddCC($cc);
	}

	if($bcc){
		$mail->AddBcc($bcc);
	}

	$mail->IsHTML(true);
	// if($env == 'test'){
		$mail->SMTPOptions = array(
		    'ssl' => array(
		        'verify_peer' => false,
		        'verify_peer_name' => false,
		        'allow_self_signed' => true
		    )
		);
	// }

	$mail->Subject = $subject;
	$mail->Body    = $message;

	if($file){
		 $mail->addAttachment($file); 
	}

	$a = $mail->Send();
	// print_r($a);
}

function d($data){
	echo "<pre>";
	print_r($data);
	echo "</pre>";
}

function dd($data){
	echo "<pre>";
	print_r($data);
	echo "</pre>";
	die();
}

function sendResponse($status,$message){
	$arr = array('status' => $status, 'message' => $message);
	echo json_encode($arr);
	die;
}

function validateRecaptcha($token){
	GLOBAL $site_key;
	GLOBAL $recaptcha_secret;
      //validate google recaptcha
      $recaptcha_url = "https://www.google.com/recaptcha/api/siteverify";
      $recaptcha_response = $token;
      // Make and decode POST request:
      $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
      $recaptcha = json_decode($recaptcha);
      // Take action based on the score returned:
      if ($recaptcha->success != true || $recaptcha->success != 1) {
          return false;
      }else{
      	return true;
      }
}

?>