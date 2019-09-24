const muitosGatos = document.querySelectorAll(".item__imagem");


muitosGatos.forEach(function(gatos){
    gatos.addEventListener("click", function(evento){
    
    if(gatos.classList.contains("invisivel")){
        evento.target.classList.remove("invisivel")
    } else{
        evento.target.classList.add("invisivel")
    }
})
})



/*
for (let i=0; i<muitosGatos.length; i++){
    muitosGatos[i].addEventListener("click", function(){
    muitosGatos[i].classList.add("invisivel")
})
}
*/
