function calcular () {
		var formulario = document.getElementById("formulario");
		var horaEntrada = +formulario.he.value
		var minEntrada =+formulario.me.value;
		var horaSaida = +formulario.hs.value;
		var minSaida = +formulario.ms.value;
		var almHora = +formulario.almHora.value;
		var almMin = +formulario.var almMin .value;
		var deveHora = +formulario.deveHora.value;
		var deveMin = +formulario.var deveMin.value;
		var bancoHora = +formulario.bancoHora.value;
		var bancoMin = +formulario.bancoMin.value;
		
		
		formulario.he.value = dt[3];
        formulario.me.value = dt[4];
		
		
		
		/*var totalEntrada = (horaEntrada*60) + minEntrada;
		var totalSaida = (horaSaida*60) + minSaida;
		

	
		var horasTrabalhadas = [(totalSaida - totalEntrada)-alm*60]/60;
         

		var horasTrabalhadas = [(totalSaida - totalEntrada)-(alm*60)]/60;
		var resto = horasTrabalhadas % 60;
		 

         if(horasTrabalhadas < 8){

         		formulario.deve.value = 8 - horasTrabalhadas.toFixed(2);
         		formulario.banco.value = 0;
         	}

         if(horasTrabalhadas > 8){

         		formulario.banco.value = horasTrabalhadas.toFixed(2) -8;
         		formulario.deve.value = 0;
         	}


		
		formulario.total.value = horasTrabalhadas.toFixed(2) ;*/
	}
	