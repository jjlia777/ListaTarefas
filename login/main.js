// Seleciona o formulário de login
const form = document.querySelector('.login-form')

//Seleciona o campo de entrada do usuario
const usuarioInput = form.querySelector("input[type='text']")
//Dessa forma identificamos a tag pelo tipo do input dela, usamos o form ao invés do documento para indicar onde o código deve procurar esse input
const senhaInput = form.querySelector("input[type= 'password']")
//Seleciona o campo de entrada da senha

//Adiciona um ouvinte de eventos ao formulario para detectarmos o usuario clicar no botão
form.addEventListener('submit', (event) => {
    //adicionar o event.preventDefault() evita que a pagina seja recarregada quando o botão for apertado
    event.preventDefault();
    
    // Obtém os valores dos campos de entrada do usuário e senha e o trim() remove os espaços embranco tanto no começo quanto no final de cada campo
    const usuario = usuarioInput.value.trim() ;
    const senha = senhaInput.value.trim() ; 

    //Verifica se os campos de usuario e senha estão preenchidos
    if(usuario === '' || senha === '') {
        alert("Por favor, preencha o campos");
    } else if (usuario === 'usuario' && senha === 'senha') {
        //Verifica se as informações de login e senha estão corretas
        alert("Bem vindo!")
        location.replace("/tarefa/index.html", "_self")
    } else {
        alert("Usuário ou senha incorreto, tente novamente")
    }
})