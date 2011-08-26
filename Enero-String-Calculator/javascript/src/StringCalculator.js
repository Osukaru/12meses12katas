var StringCalculator = function() {
		sumaLosNumerosDeLaCadena = function( cadenaConLineasDeNumerosSeparadosPorComas ) {  	   
			var cadenaConNumerosSeparadosPorComas, coleccionDeCadenasConNumeros, coleccionDeNumeros;
			cadenaConNumerosSeparadosPorComas = cadenaConLineasDeNumerosSeparadosPorComas.replace(/\n/g, ",");
			coleccionDeCadenasConNumeros = cadenaConNumerosSeparadosPorComas.split(",");
			coleccionDeNumeros = coleccionDeCadenasConNumeros.map(function(valor) {return valor - 0} );
			return coleccionDeNumeros.reduce(function(valorPrevio, valorActual) {return valorPrevio + valorActual});
		}

	return {
		add : sumaLosNumerosDeLaCadena
	}     
}();
