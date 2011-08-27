var StringCalculator = function() {
		sumaFilasDeNumeros = function(cadena) {  	   
			var separador = ",", arrayDeNumeros;
			if (tieneMarcaDeSeparador(cadena)) {
				separador = obtieneSeparador(cadena);
				cadena = quitaMarcaDeSeparador(cadena);
			}
			arrayDeNumeros = convierteCadenaEnArrayDeNumeros(cadena, separador);
			return sumaArrayDeNumeros(arrayDeNumeros);
		}
		
		tieneMarcaDeSeparador = function(cadena) {
			return cadena.substring(0,2) === "//" ? true : false;
		}

		obtieneSeparador = function(cadena) {
			return cadena.substring(2,3);
		}
		
		quitaMarcaDeSeparador = function(cadena) {
			return cadena.substr(4);
		}

		convierteCadenaEnArrayDeNumeros = function(cadena, separador) {
			var arrayDeCadenas, arrayDeNumeros;
			cadena = reemplazaSaltosDeLineaPorSeparadores(cadena, separador);;
			arrayDeCadenas = cadena.split(separador);
			arrayDeNumeros = arrayDeCadenas.map(convierteCadenaEnNumero);
			compruebaNumerosNegativos(arrayDeNumeros);
			return arrayDeNumeros;
		}

		convierteCadenaEnNumero = function(cadena) {
			return cadena - 0;
		}

		compruebaNumerosNegativos = function(arrayDeNumeros) {
			var arrayDeNumerosNegativos = arrayDeNumeros.filter(function(element) {return (element < 0)});
			if (arrayDeNumerosNegativos.length > 0) {
				throw(new Error("negatives not allowed: " + arrayDeNumerosNegativos.join(", ")));
			}
		}

		reemplazaSaltosDeLineaPorSeparadores = function(cadena, separador) {
			return cadena.replace(/\n/g, separador);
		}

		sumaArrayDeNumeros = function (arrayDeNumeros) {
			return arrayDeNumeros.reduce(function(valorPrevio, valorActual) {return valorPrevio + valorActual});
		}

	return {
		add : sumaFilasDeNumeros
	}     
}();
