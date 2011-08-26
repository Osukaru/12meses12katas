var StringCalculator = function() {
		sumaLosNumerosDeLaCadena = function( cadenaConNumerosSeparadosPorComas ) {  	   
			var coleccionDeCadenasConNumeros, coleccionDeNumeros;
			coleccionDeCadenasConNumeros = cadenaConNumerosSeparadosPorComas.split(",");
			coleccionDeNumeros = coleccionDeCadenasConNumeros.map(function(valor) {return valor - 0} );
			return coleccionDeNumeros.reduce(function(valorPrevio, valorActual) {return valorPrevio + valorActual});
		}

	return {
		add : sumaLosNumerosDeLaCadena
	}     
}();
