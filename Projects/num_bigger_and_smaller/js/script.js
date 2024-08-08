function analisar(){
  const v1 = (document.getElementById("num1").value);
  const v2 = (document.getElementById("num2").value);
  const v3 = (document.getElementById("num3").value);
  resultado = "";

  if (v1 == v2 == v3) {
    resultado = "Os numeros são iguais";
  } else{
    if (v1 == v2) {
      if (v1 > v3) {
        resultado = "O 1º & 2º são iguais, o 3º é o maior";
      } else {
        resultado = "O 1º & 2º são iguais, o 3º é menor que o 1º & 2º";
      }
    } else{
      if (v1 == v3) {
        if (v1 > v2) {
          resultado = "O 1º & 3º são iguais, o 2º é o maior";
        } else {
          resultado = "O 1º & 3º são iguais, o 2º é menor que o 1º & 2º";
        }
      } else {
        if (v1 > v2) {
          if (v1 > v3) {
            if (v2 > v3) {
              resultado = "O 1º é o maior, o 3º é o menor";
            } else {
              resultado = "O 1º é o maior, o 2º é o menor";
            }
          } else {
            resultado = "O 3º é o maior, o 2º é o menor";
          }
        } else {
          if (v2 > v3) {
            if (v1 > v3) {
              resultado = "O 2º é o maior, o 3º é o menor";
            } else {
              resultado = "O 2º é o maior, o 1º é o menor";
            }
          } else {
            resultado = "O 3º é o maior, o 1º é o menor";
          }
        }
      }
    }
  }
  document.getElementById("resultado").value = resultado;
}