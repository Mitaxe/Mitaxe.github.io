<?php 

if(isset($_POST['send'])) {

  if(
     isset[$_POST['name']] && 
     isset[$_POST['email']] &&
     isset[$_POST['text']]
  ) {
    
    $to = "b.nosovytskyy@gmail.com";
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $msg = htmlspecialchars(trim($_POST['text']));
    
    mail($to, $name, $msg, "From:".$email);

  } else {
    throw new Error("Письмо не может быть отправлено. Проверьте правильность заполненых полей.");
  }

  
}