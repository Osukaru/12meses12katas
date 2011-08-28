var StringCalculator = function() {
		sumaFilasDeNumeros = function(cadena) {  	   
			var separador = [","], arrayDeNumeros;
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
			var arrayDeSeparadores;
			cadena = cadena.substring(2, cadena.indexOf("\n", 3));
			if (cadena.length === 1) {
				return [cadena];
			}
			else
			{
				arrayDeSeparadores = cadena.split("]");
				arrayDeSeparadores.pop();
				arrayDeSeparadores = arrayDeSeparadores.map(function(element) {return element.substr(1)});
				return arrayDeSeparadores
			}
		}
		
		quitaMarcaDeSeparador = function(cadena) {
			return cadena.substr(cadena.indexOf("\n"));
		}

		convierteCadenaEnArrayDeNumeros = function(cadena, separador) {
			var arrayDeCadenas, arrayDeNumeros;
			cadena = reemplazaSaltosDeLineaPorSeparadores(cadena, separador[0]);
			cadena = unificaSeparador(cadena, separador);
			arrayDeCadenas = cadena.split(separador[0]);
			arrayDeNumeros = arrayDeCadenas.map(convierteCadenaEnNumero);
			compruebaNumerosNegativos(arrayDeNumeros);
			return arrayDeNumeros;
		}

		convierteCadenaEnNumero = function(cadena) {
			var numero = cadena - 0;
			return numero > 1000 ? 0 : numero;
		}

		compruebaNumerosNegativos = function(arrayDeNumeros) {
			var arrayDeNumerosNegativos = arrayDeNumeros.filter(function(element) {return (element < 0)});
			if (arrayDeNumerosNegativos.length > 0) {
				throw(new Error("negatives not allowed: " + arrayDeNumerosNegativos.join(", ")));
			}
		}

		unificaSeparador = function(cadena, separador){
			for (var i = 0; i < separador.length; i++) {
				cadena = cadena.replace(separador[i], separador[0]);
			};
			return cadena;
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
