function showMessage(){
    console.log("Exibindo menssagem");
    //alert('Click'); // Para a aplicação até apertar OK
}


function saveNewsletterUser(event){
    // evitar o comportamento de reload da página ao enviar formulario
    event.preventDefault();
    console.log('evento: ', event);
    // seleciona os campos existentes no html usando id (#)
    const elementName = document.querySelector("#name").value;
    const elementEmail = document.querySelector("#email").value;

    console.log('ElementName: ', elementName);
    console.log('ElementEmail: ', elementEmail);
    alert("Formulário enviado");
}