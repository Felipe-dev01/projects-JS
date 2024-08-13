function calculadora() {
  var radios = document.getElementsByName("operador");
  var operador;

  for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          operador = parseInt(radios[i].value);
          break;
      }
  }

  let v1 = parseFloat(document.getElementById("num1").value);
  let v2 = parseFloat(document.getElementById("num2").value);
  let resultado = 0;

  switch (operador) {
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
