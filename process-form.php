<?php
$mail_body = null;
while (list($key, $value) = each($_POST)) {
    $mail_body .= $key . ' => ' . $value . "\n";
}
$Name = "vlined site"; //senders name
$email = "info@vlined.net"; //senders e-mail adress
$recipient = "excuse@vlined.net"; //recipient
$subject = "Excuse"; //subject
$header = "From: ". $Name . " <" . $email . ">\r\n"; //optional headerfields
mail($recipient, $subject, $mail_body, $header); //mail command :)
header("Location: suggestion-thanks.html");
?>