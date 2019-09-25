const formulario = document.getElementById("formulario-de-comentarios");

formulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    let inputUsuario = document.querySelector(".input-de-texto");
    let mensagem = inputUsuario.value;
    const botao = document.getElementById("invisivel")
    if (mensagem==""){
        botao.classList.remove("invisivel")

    }
    else if (){
        botao.classList.add("invisivel"
        let caixaMens = document.getElementById("todos-os-comentarios");
        let coment = document.createElement("p");
        caixaMens.appendChild(coment);
        coment.textContent = mensagem;
    
        coment.classList.add("comentario");
        inputUsuario.value = "";
    
    }
   
});

/*
muitosGatos.forEach(function(gatos){
    gatos.addEventListener("click", function(evento){
    
    if(gatos.classList.contains("invisivel")){
        evento.target.classList.remove("invisivel")
    } else{
        evento.target.classList.add("invisivel")
    }
    */

