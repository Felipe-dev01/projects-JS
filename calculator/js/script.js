
/*
function soma(){
 let v1 = parseInt(document.getElementById("num1").value);
 let v2 = parseInt(document.getElementById("num2").value);
  let soma = v1 + v2;
  document.getElementById('total').value = soma;
 
}  

function sub(){
   let v1 = parseInt(document.getElementById("num1").value);
   let v2 = parseInt(document.getElementById("num2").value);
   let sub = v1 - v2;
   document.getElementById("total").value = sub;
 }

 function multi(){
   let v1 = parseInt(document.getElementById("num1").value);
   let v2 = parseInt(document.getElementById("num2").value);
   let multi = v1 * v2;
   document.getElementById("total").value = multi;
 }

 function divi(){
   let v1 = parseInt(document.getElementById("num1").value);
   let v2 = parseInt(document.getElementById("num2").value);
   let divi = v1 / v2;
   document.getElementById("total").value = divi; 
 }

 function exp(){
   let v1 = parseInt(document.getElementById("num1").value);
   let v2 = parseInt(document.getElementById("num2").value);
   let exp = v1 ** v2;
   document.getElementById("total").value = exp;  
 }
 */

function cauculadora() {
    var radios = document.getElementsByName("operador");
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        break;
      }
    }

    let v1 = parseInt(document.getElementById("num1").value);
    let v2 = parseInt(document.getElementById("num2").value);
    let resultado=0
    switch (radios[i]) {
        case 1:
          resultado = v1 + v2;
        break;
        case 2:
          resultado = v1 - v2;
        break;
        case 3:
          resultado = v1 * v2;
        break;
        case 4:
          resultado = v1 / v2;
        break;
    }
    document.getElementById("total").value = resultado;
}

