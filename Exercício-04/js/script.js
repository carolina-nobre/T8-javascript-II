let pin={
    "nome":"robson",
    "idade": 3,
    "origem":"draglandia",
   
}

pin.andar = function(){
    console.log("andou")
}

pin.podeVoar = false;

pin.voar = function(){
    if(pin.podeVoar){
    console.log("voou");
} else{
    console.log("inda não voa");
}

}
