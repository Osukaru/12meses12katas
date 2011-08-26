var StringCalculator = function() {
		sumaLosNumerosDeLaCadena = function( cadenaConLineasDeNumerosSeparadosPorComas ) {  	   
			var c=cadenaConLineasDeNumerosSeparadosPorComas,cadenaConNumerosSeparadosPorComas, coleccionDeCadenasConNumeros, coleccionDeNumeros, separador = ",";
			if (c.substring(0,2)==="//") {
				separador = c.substring(2,3);
				dummy=c.slice(4);
				console.log(separador);
				console.log(c);
			}
			cadenaConNumerosSeparadosPorComas = cadenaConLineasDeNumerosSeparadosPorComas.replace(/\n/g, separador);
			coleccionDeCadenasConNumeros = cadenaConNumerosSeparadosPorComas.split(separador);
			coleccionDeNumeros = coleccionDeCadenasConNumeros.map(function(valor) {return valor - 0} );
			return coleccionDeNumeros.reduce(function(valorPrevio, valorActual) {return valorPrevio + valorActual});
		}

	return {
		add : sumaLosNumerosDeLaCadena
	}     
}();
