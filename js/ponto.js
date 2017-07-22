function calcular () {
		var formulario = document.getElementById("formulario");
		var horaEntrada = +formulario.he.value
		var minEntrada =+formulario.me.value;
		var horaSaida = +formulario.hs.value;
		var minSaida = +formulario.ms.value;
		var alm = +formulario.alm.value;
		var deve = +formulario.deve.value;
		var banco = +formulario.banco.value;

		var totalEntrada = (horaEntrada*60) + minEntrada;
		var totalSaida = (horaSaida*60) + minSaida;

		var horasTrabalhadas = [(totalSaida - totalEntrada)-(alm*60)]/60;
         
         if(horasTrabalhadas < 8){

         		formulario.deve.value = 8 - horasTrabalhadas
         		formulario.banco.value = 0;
         	}

         if(horasTrabalhadas > 8){

         		formulario.banco.value = horasTrabalhadas -8
         		formulario.deve.value = 0;
         	}



		formulario.total.value = horasTrabalhadas.toFixed(2);
	}
	