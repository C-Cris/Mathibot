function general(){
    let radio=document.getElementById("radio").value
    const diametro=radio*2;
    const perimetro=(diametro*Math.PI).toFixed(2);
    const area=((radio*radio)*Math.PI).toFixed(2);
    document.getElementById('Diametro').innerHTML = diametro;
    document.getElementById('Perimetro').innerHTML = perimetro;
    document.getElementById('Area').innerHTML = area;
}
