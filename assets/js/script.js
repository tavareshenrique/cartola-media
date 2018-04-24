var mediageral = function(e) {
    e.preventDefault();
    var media       = form1.media.value;
    var preco       = form1.preco.value;
    var myCalc1     = ((0.4 * Number(preco)) * 2);
    var myCalc2     = (Number(media) * (-1));
    var myCalcFinal = myCalc1 + myCalc2;
    
    document.getElementById("calc").innerHTML = myCalcFinal.toFixed(1);
    
    document.getElementById("resultado-titulo").style.display = "block";
    
    document.getElementById("resultado-titulo-end").style.display = "block";
    
    if (myCalcFinal >= 0) {
        document.getElementById("calc").style.color = 'lawngreen';
    } else {
        document.getElementById("calc").style.color = 'red';
    };
}