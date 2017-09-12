<?php
//Variáveis

$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['msg'];
$ip = $_POST['ip'];


// Compo E-mail
  $arquivo = "
  <style type='text/css'>
  body {
  margin:0px;
  font-family:Verdane;
  font-size:12px;
  color: #666666;
  }
  a{
  color: #666666;
  text-decoration: none;
  }
  a:hover {
  color: #FF0000;
  text-decoration: none;
  }
  </style>
    <html>
        <table width='510' border='1' cellpadding='1' cellspacing='1' bgcolor='#fff'>
            <tr>
              <td>
                <tr>
                  <td width='500'>IP:$ip</td>
                </tr>
                <tr>
                 <td width='500'>Nome:$nome</td>
                </tr>
                <tr>
                  <td width='320'>E-mail:<b>$email</b></td>
                </tr>
                <tr>
                  <td width='320'>Mensagem:$nome</td>
                </tr>
            </td>
          </tr>

        </table>
    </html>
  ";

  //enviar

  // emails para quem será enviado o formulário
  $emailenviar = "hello@brandi.com";
  $destino = $emailenviar;
  $assunto = "Contato pelo Site";

  // É necessário indicar que o formato do e-mail é html
  $headers  = 'MIME-Version: 1.0' . "\r\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
      $headers .= 'From:'.$nome.'<'.$email.'>';
  //$headers .= "Bcc: $EmailPadrao\r\n";

  $enviaremail = mail($destino, $assunto, $arquivo, $headers);
  if($enviaremail){
    ?>
    <script language="JavaScript">
      window.location="../";
    </script>
  <?php
  } else {
    ?>
    <script language="JavaScript">
      window.location="../";
    </script>
  <?php
  }
?>
