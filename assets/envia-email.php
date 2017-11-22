<?
$email = utf8_decode($_POST['email']);

$headers = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\n";
$headers .= "From: <$email>\n";
$headers .= "Return-Path: <$email>\n"; 

$data = date("r");
$assunto = "Envio de email";
$destinatario_email = "eduardosantosj2@gmail.com";
$corpo = "<body><span style=\"font-size:12px; color:#1C3367; font-family: Verdana; \">
  Email: $email<br />
<p>Mensagem<br />
=============================================================<br />
  $email</p>
<p>&nbsp;</p>
<p>$data</p>
</span>
</body>";


mail( 'Destino <'.$destinatario_email.'>', $assunto, $corpo, $headers );
header( "Location: sucesso.html" );
?>