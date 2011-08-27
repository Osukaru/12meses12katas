var StringCalculator = function() {
		sumaFilasDeNumeros = function(cadena) {  	   
			var separador = ",", arrayDeNumeros;
			if (tieneMarcaDeSeparador(cadena)) {
				separador = obtieneSeparador(cadena);
				cadena = quitarMarcaDeSeparador(cadena);
			}
			arrayDeNumeros = convertirCadenaEnArrayDeNumeros(cadena, separador);
			return sumaArrayDeNumeros(arrayDeNumeros);
		}
		
		tieneMarcaDeSeparador = function(cadena) {
			return cadena.substring(0,2) === "//" ? true : false;
		}

		obtieneSeparador = function(cadena) {
			return cadena.substring(2,3);
		}
		
		quitarMarcaDeSeparador = function(cadena) {
			return cadena.substr(4);
		}

		convertirCadenaEnArrayDeNumeros = function(cadena, separador) {
			var arrayDeCadenas, arrayDeNumeros;
			cadena = reemplazarSaltosDeLineaPorSeparadores(cadena, separador);;
			arrayDeCadenas = cadena.split(separador);
			arrayDeNumeros = arrayDeCadenas.map(function(valor) {return valor - 0});
			return arrayDeNumeros;
		}

		reemplazarSaltosDeLineaPorSeparadores = function(cadena, separador) {
			return cadena.replace(/\n/g, separador);
		}

		sumaArrayDeNumeros = function (arrayDeNumeros) {
			return arrayDeNumeros.reduce(function(valorPrevio, valorActual) {return valorPrevio + valorActual});
		}

	return {
		add : sumaFilasDeNumeros
	}     
}();
