
function general(){
    let lado_p=document.getElementById("lado").value
    if(lado_p<=0){
        document.getElementById('results').style.display = 'none';
        document.getElementById('error').style.display = 'block';
    }else{
        document.getElementById('results').style.display = 'flex';
        document.getElementById('error').style.display = 'none';
        const per=lado_p*4;
        document.getElementById('Resultado').innerHTML = per;

        let lado_a=document.getElementById("lado").value

        const area=lado_a*lado_a;
        document.getElementById('Resultado2').innerHTML = area;
    }
    
}
function seleccion(){
    let eleccion=document.getElementById('op').value
    console.log(eleccion)
    document.getElementById("medida").innerHTML = eleccion;
    document.getElementById("medida2").innerHTML = eleccion;
}




