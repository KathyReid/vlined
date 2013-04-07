<?php
while (list($key, $value) = each($_POST)) {
    $mail_body .= $key . ' => ' . $value . "\n";
}

$Name = "vlined site"; //senders name
$email = "info@vlined.net"; //senders e-mail adress
$recipient = "kathy@kathyreid.id.au"; //recipient
$mail_body = "The text for the mail..."; //mail body
$subject = "Excuse"; //subject
$header = "From: ". $Name . " <" . $email . ">\r\n"; //optional headerfields

mail($recipient, $subject, $mail_body, $header); //mail command :)
header("Location: suggestion-thanks.html");
?>