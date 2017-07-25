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
		var deve = +formulario.deve.value;
		var banco = +formulario.banco.value;
		
		
		
		var totalEntrada = (horaEntrada*60) + minEntrada;
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


		
		formulario.total.value = horasTrabalhadas.toFixed(2) ;
	}
	