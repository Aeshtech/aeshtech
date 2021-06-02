<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';
if (isset($_POST)) {
    $email = $_POST["email"];
    $name = $_POST["name"];
    $address = $_POST["address"];
    $message = $_POST["message"];
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    if (!$email) {
        echo "Invalid email address please type a valid email address!";
    } else {
        $output = '<div style="text-align:center;color:black;background-color:yellow;font-size:16px;"><h3 style="text-align:center;color:white;background-color:blueviolet;">Jai Shree Krishna</h3>';
        $output .= '<p style="margin-top:50px;color:bluviolet;">Hey Ashish. Hope everything is fine and cool:-)</p>';
        $output .= '<p>We have got new mail from: <b>'.$name.'</b></p>';
        $output .= '<p>Email - <b>'.$email.'</b></p>';
        $output .= '<p>Address - <b>'.$address.'</b></p>';
        $output .= '<p>They have written a message for you:</p>';
        $output .= '<p style="font-weight:bold;">'.$message.'</p>';
        $output .= '<h3 style="text-align:center;color:white;background-color:blueviolet;margin-top:50px;"><strong>From - Aeshtech</strong></h3>';
        $output .= '</div>';
        $body = $output;
        $subject = "Aeshtech recieved a new contact mail.";


        // Instantiation and passing `true` enables exceptions
        $mail = new PHPMailer(true);

        try {
            //Server settings
            // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                    // Enable verbose debug output
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                      // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                 // Enable SMTP authentication
            $mail->Username   = 'username';          // SMTP username
            $mail->Password   = 'paasword';                      // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;      // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 587;                                // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above


            //Recipients
            $mail->setFrom('username', 'JSK');
            $mail->addAddress('receiver_maildid', 'Ashish');     // Add a recipient
           
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = $subject;
            $mail->Body    = $body;

            $mail->send();
            echo 'Check your mail to reset password!';
        } catch (Exception $e) {
            echo "Message could not be sent-Mailer Error!";
        }
    }
}
