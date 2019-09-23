const muitosGatos = document.querySelectorAll(".item_imagem");

muitosGatos.forEach(function(gatos){
    gatos.addEventListener("click", function(evento){
    evento.target.classlist.add("invisivel")
})

})