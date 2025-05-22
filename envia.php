<?php

    $nome = addcslashes($_POST['nome']); 
    $email = addcslashes($_POST['email']);
    $telefone = addcslashes($_POST['telefone']);

    $para = "felipevitorinodev@gmail.com";
    $assunto = "Contato - Portfólio";

    $corpo = "nome: ".$nome."\n"."email: ".$email."\n"."telefone: ".$telefone.;

    $cabeca = "From: felipevitorino357@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)) {
        echo("Formulario enviado com sucesso!");
    }else {
        echo("Houve algum erro!");
    }
?>