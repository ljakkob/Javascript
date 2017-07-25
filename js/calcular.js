function calcular () {
		var formulario = document.getElementById("formulario");
		var horaEntrada = +formulario.he.value
		var minEntrada =+formulario.me.value;
		var saidaAlmHora = +formulario.saidaAlmHora.value;
		var saidaAlmMin = +formulario.saidaAlmMin.value;
		var retornoAlmHora = +formulario.retornoAlmHora.value;
		var retornoAlmMin = +formulario.retornoAlmMin.value;
		var horaSaida = +formulario.hs.value;
		var minSaida = +formulario.ms.value;
		var deveHora = +formulario.deveHora.value;
		var deveMin = +formulario.deveMin.value;
		var bancoHora = +formulario.bancoHora.value;
		var bancoMin = +formulario.bancoMin.value;
		
		
		var totalEntrada = (horaEntrada*60) + minEntrada;
		var totalSaida = (horaSaida*60) + minSaida;
		var horasTrabalhadas = totalSaida - totalEntrada;
		var horatotal =0;
		var mintotal = 0;

		while (horasTrabalhadas >= 60)

			{
			horatotal=horatotal+1;
			horasTrabalhadas=horasTrabalhadas-60;
			
			if (horasTrabalhadas < 60){
				
				mintotal = horasTrabalhadas;
			
			}

			}
			
		alert(mintotal);
		
	    formulario.totalHora.value = horatotal;
		formulario.totalMin.value = mintotal;

         if(horasTrabalhadas < 8){

         		formulario.deve.value = 8 - horasTrabalhadas.toFixed(2);
         		formulario.banco.value = 0;
         	}

         if(horasTrabalhadas > 8){

         		formulario.banco.value = horasTrabalhadas.toFixed(2) -8;
         		formulario.deve.value = 0;
         	}


		
		
	}
	