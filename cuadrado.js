
function general(){
    let lado_p=document.getElementById("lado").value
    const per=lado_p*4;
    document.getElementById('Resultado').innerHTML = per;

    let lado_a=document.getElementById("lado").value
    const area=lado_a*lado_a;
    document.getElementById('Resultado2').innerHTML = area;
}
function seleccion(){
    let eleccion=document.getElementById('op').value
    document.getElementById("medida").innerHTML = eleccion;
    document.getElementById("medida2").innerHTML = eleccion;
}




