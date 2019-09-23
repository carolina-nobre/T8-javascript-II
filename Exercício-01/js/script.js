const alunas = ["Raquel Pereira","Talita Borbosa","Daiana Moraes","Lia Lobo"]

const lista = document.getElementById ("lista-alunas");

for (let i=0; i < alunas.length; i++){
  let item = document.createElement ("li");
  item.textContent = alunas[i];
  lista.appendChild(item);
   
}

/*alunas.forEach(function(aluna){
    let item = document.createElement ("li");
    item.textContent = alunas[i];
  lista.appendChild(item);

})*/

let soma = 0


meuTitulo.addEventListener("click", function logar(){
    console.log(soma ++)
})


meuTitulo.addEventListener("click", function(){
    meuTitulo.classList.add("vermelha");
})

