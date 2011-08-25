var StringCalculator = function() {
	var BASE_DECIMAL = 10,
		sumaLosNumerosDeLaCadena = function( cadenaConNumeros ) {  	   
		if (cadenaConNumeros === "") {
			return 0;
		}
		else {
			return parseInt(cadenaConNumeros, BASE_DECIMAL);
		}
	}	   
	return {
		add : sumaLosNumerosDeLaCadena
	}     
}();
