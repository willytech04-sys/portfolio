<?php
if($_SERVER["REQUEST_METHOD"] === "POST"){

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "YOUR_EMAIL@gmail.com"; // 🔴 CHANGE THIS
    $subject = "New Portfolio Message from $name";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if(mail($to, $subject, $body, $headers)){
        echo "success";
    } else {
        http_response_code(500);
        echo "error";
    }
}
?>
