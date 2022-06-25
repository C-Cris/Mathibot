function mostrarTriangulo(){
    let op=document.getElementById('op').value;
    console.log('Valor del select: '+op);
    if(op==='Equi'){
        document.getElementById('equilatero').style.display = 'block';
        document.getElementById('escaleno').style.display = 'none';
        document.getElementById('isoseles').style.display = 'none';
        document.getElementById('rectangulo').style.display = 'none';
    }else if(op==='Esca'){
        document.getElementById('equilatero').style.display = 'none';
        document.getElementById('escaleno').style.display = 'block';
        document.getElementById('isoseles').style.display = 'none';
        document.getElementById('rectangulo').style.display = 'none';
    }else if(op==='Iso'){
        document.getElementById('equilatero').style.display = 'none';
        document.getElementById('escaleno').style.display = 'none';
        document.getElementById('isoseles').style.display = 'block';
        document.getElementById('rectangulo').style.display = 'none';
    }else{
        document.getElementById('equilatero').style.display = 'none';
        document.getElementById('escaleno').style.display = 'none';
        document.getElementById('isoseles').style.display = 'none';
        document.getElementById('rectangulo').style.display = 'block';
    }
}

function calculosEqui(){
    let lado = Number(document.getElementById('input_Lado_Equi').value)
    let alt = Number(document.getElementById('input_Altura_Equi').value)

    if(lado<=0 || alt<=0){
        document.getElementById('show_equi').style.display='none'
        document.getElementById('error_equi').style.display='block'
    }else{
        document.getElementById('show_equi').style.display='block'
        document.getElementById('error_equi').style.display='none'

        document.getElementById('perimetro_Equi').innerHTML = lado*3;
        document.getElementById('area_Equi').innerHTML = ((lado*alt)/2);
    }
    
}

function calculosEsca(){
    let ladoA = Number(document.getElementById('input_LadoA_Esca').value)
    let ladoB = Number(document.getElementById('input_LadoB_Esca').value)
    let base = Number(document.getElementById('input_Base_Esca').value)
    let alt = Number(document.getElementById('input_Altura_Esca').value)

    if(ladoA===ladoB || ladoA===base || ladoB===base || ladoA<=0 || ladoB<=0 || base<=0 || alt<=0){
        document.getElementById('show_esca').style.display = 'none'
        document.getElementById('error_esca').style.display = 'block'
    }else{
        document.getElementById('show_esca').style.display = 'block'
        document.getElementById('error_esca').style.display = 'none'

        document.getElementById('per_Esca').innerHTML = ladoA + ladoB + base
        document.getElementById('area_Esca').innerHTML = (base*alt) / 2 
    }
}

function calculosIso(){
    let lado = Number(document.getElementById('input_Lado_Iso').value)
    let base = Number(document.getElementById('input_Base_Iso').value)
    let alt = Number(document.getElementById('input_Altura_Iso').value)
    if(lado<=0 || base<=0 || alt<=0){
        document.getElementById('show_iso').style.display='none'
        document.getElementById('error_iso').style.display='block'
    }else{
        document.getElementById('show_iso').style.display='block'
        document.getElementById('error_iso').style.display='none'

        document.getElementById('per_Iso').innerHTML = (lado*2) + base
        document.getElementById('area_Iso').innerHTML = (base*alt) / 2
    }
}

function calculosRect(){
    let catetoA = Number(document.getElementById('input_catA_Rect').value)
    let catetoB = Number(document.getElementById('input_catB_Rect').value)
    let hipo = Number(document.getElementById('input_hipo_Rect').value)
    
    if(catetoA==null || catetoB==null || hipo==null){
        document.getElementById('show_rect').style.display = 'none'
        document.getElementById('error_rect').style.display = 'block'
    }else if(catetoA>hipo || catetoB>hipo){
        document.getElementById('show_rect').style.display = 'none'
        document.getElementById('error_rect').style.display = 'block'

    }else if(catetoA<=0 || catetoB<=0 || hipo<=0){
        document.getElementById('show_rect').style.display = 'none'
        document.getElementById('error_rect').style.display = 'block'
    }else if(catetoA==catetoB && catetoA==hipo){
        document.getElementById('show_rect').style.display = 'none'
        document.getElementById('error_rect').style.display = 'block'
    }
    else{
        document.getElementById('show_rect').style.display = 'block'
        document.getElementById('error_rect').style.display = 'none'
        document.getElementById('per_rect').innerHTML = catetoA + catetoB + hipo;
        document.getElementById('area_rect').innerHTML = (catetoA*catetoB) / 2
    }
}

