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
		var totalAlmoco = [(retornoAlmHora*60) + retornoAlmMin] - [(saidaAlmHora*60) + saidaAlmMin ];
		var horasTrabalhadas = totalSaida - (totalEntrada + totalAlmoco);
		var horatotal =0;
		var mintotal = 0;
		var horaFinal=0;
		var minFinal=0;

		    alert(totalAlmoco);
		
			
				if (horasTrabalhadas<60) {
		
					horaFinal = 0;
					minFinal = horasTrabalhadas;

					formulario.totalHora.value = 0;
					formulario.totalMin.value = minFinal;
					
				}	

				else

				{
			
		 			alert(horasTrabalhadas);
			
					while (horasTrabalhadas>=60){
					horaFinal=horaFinal+1;
					horasTrabalhadas=horasTrabalhadas-60;
					}
			
					minFinal = horasTrabalhadas;
			
					formulario.totalHora.value = horaFinal;
					formulario.totalMin.value = minFinal;
				}
					
					/*if(horatotal < 8){

					formulario.deveHora.value = 8 - horaFinal;
					formulario.deveMin.value = minFinal;
					formulario.bancoHora.value = 0;
					formulario.bancoMin.value = 0;
         	    }
			
			
         	}

				if(horasTrabalhadas > 8){

					formulario.banco.value = horasTrabalhadas.toFixed(2) -8;
					formulario.deve.value = 0;
				}

					
					
					*/
			   
		
			 
		
	}
	