<?
$nome = utf8_decode($_POST['nome']);
$email = utf8_decode($_POST['email']);
$msg = utf8_decode($_POST['msg']);

$headers = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\n";
$headers .= "From: \"$nome\" <$email>\n";
$headers .= "Return-Path: <$email>\n"; 

$data = date("r");
$assunto = "Contato Online através do Site";
$destinatario_email = "eduardosantosj2@gmail.com";
$corpo = "<body><span style=\"font-size:12px; color:#1C3367; font-family: Verdana; \"><p>Nome: $nome<br />
  Email: $email<br />
<p>Mensagem<br />
=============================================================<br />
  $msg</p>
<p>&nbsp;</p>
<p>$data</p>
</span>
</body>";


mail( 'Destino <'.$destinatario_email.'>', $assunto, $corpo, $headers );
header( "Location: sucesso.html" );
?>