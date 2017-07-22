 <script>
  
  /* Autor:Marcos
     Data: 10/08/2015
     programa: Calculo do IMC 
  */
  function calcularImc () {
    var formulario = document.getElementById("formulario");
    var kilos = +formulario.kilos.value;
    var metros =+formulario.metros.value;
    var centimetro = +formulario.cm.value;
    var altura  = (metros * 100  + centimetro) /100 ;
    var imc = kilos / (altura * altura);
    formulario.imc.value = imc.toFixed(2);
  }
  </script>