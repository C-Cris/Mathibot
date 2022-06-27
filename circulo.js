function general(){
    let radio=document.getElementById("radio").value
    if(radio<=0){
        document.getElementById('result').style.display = 'none';
        document.getElementById('error').style.display = 'block';
    }else{
        document.getElementById('result').style.display = 'flex';
        document.getElementById('error').style.display = 'none';

        const diametro=radio*2;
        const perimetro=(diametro*Math.PI).toFixed(2);
        const area=((radio*radio)*Math.PI).toFixed(2);
        document.getElementById('Diametro').innerHTML = diametro;
        document.getElementById('Perimetro').innerHTML = perimetro;
        document.getElementById('Area').innerHTML = area;
    }
}
