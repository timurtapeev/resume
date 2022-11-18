<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'timurtimurovich2001@mail.ru';
$mail->Password = 'keakgUr3nvydZYiTcKTe';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
 
$mail->setFrom('timurtimurovich2001@mail.ru', 'Заявка с сайта');
$mail->addAddress('tapeevtimur@mail.ru');     
$mail->isHTML(true);                                  

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Почта: ' . $email . '<br>
	Сообщение: ' . $text . '<br>';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>