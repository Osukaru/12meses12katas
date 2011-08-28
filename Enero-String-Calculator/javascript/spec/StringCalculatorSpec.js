describe("StringCalculator", function() {
	describe("Una cadena vacía devuelve como resultado el valor 0", function() {
		it("--> se cumple", function() {
			expect(StringCalculator.add("")).toEqual(0);
		});
	});
	
	describe("Una cadena con un valor me devolvera el propio valor:", function() {
		it("--> se cumple con el valor 0", function() {
			expect(StringCalculator.add("0")).toEqual(0);
		});

		it("--> se cumple con el valor 1", function() {
			expect(StringCalculator.add("1")).toEqual(1);
		});	
		
		it("--> se cumple con el valor 2", function() {
			expect(StringCalculator.add("2")).toEqual(2);
		});
	});

	describe("Una cadena con dos numeros separados por comas devolvera la suma de los valores:", function() {
		it("--> se cumple con los valores 1, 2", function() {
			expect(StringCalculator.add("1, 2")).toEqual(3);
		});

		it("--> se cumple con los valores 0, 1", function() {
			expect(StringCalculator.add("0, 1")).toEqual(1);
		});

		it("--> se cumple con los valores 2, 0", function() {
			expect(StringCalculator.add("2, 0")).toEqual(2);
		});

		it("--> se cumple con los valores 2, 2", function() {
			expect(StringCalculator.add("2, 2")).toEqual(4);
		});

		it("--> se cumple con los valores 0, 0", function() {
			expect(StringCalculator.add("0, 0")).toEqual(0);
		});
	});
	
	describe("Una cadena con cualquier cantidad de numeros separados por comas devolvera la suma de todos ellos", function() {
		it("--> se cumple con los valores 1, 2 y 3", function() {
			expect(StringCalculator.add("1, 2, 3")).toEqual(6);
		});
		
		it("--> se cumple con los valores 5, 6, 7 y 8", function() {
			expect(StringCalculator.add("5, 6, 7, 8")).toEqual(26);
		});
		
		it("--> se cumple con los valores 27, 89, 54, 23", function() {
			expect(StringCalculator.add("27, 89, 54, 23")).toEqual(193);
		});

		it("--> se cumple con los valores 123, 987", function() {
			expect(StringCalculator.add("123, 987")).toEqual(1110);
		});
	});

	describe("Se permite separar en lineas diferentes cadenas de numeros", function() {
		it("--> se cumple con dos lineas de un valor cada una", function() {
			expect(StringCalculator.add("1\n2")).toEqual(3);
		});
		
		it("--> se cumple con dos lineas vacias", function() {
			expect(StringCalculator.add("\n")).toEqual(0);
		});
		
		it("--> se cumple con varias lineas de diferentes cantidades de valores", function() {
			expect(StringCalculator.add("1, 2\n2\n2, 3, 4\n5, 1, 3")).toEqual(23);
		});
	});

	describe("Se permite especificar un separador diferente iniciando la cadena con //[separador]\n)", function() {
			it("--> se cumple si especificamos como separador ;", function() {
				expect(StringCalculator.add("//;\n1;2;3\n4;5;6\n7;8;9")).toEqual(45);
			});

			it("--> se cumple si especificamos como separador un salto de linea", function() {
				expect(StringCalculator.add("//\n\n1\n2\n3\n4\n5\n6\n7\n8\n9")).toEqual(45);
			});

	});

	
	describe("No se permiten numeros negativos", function() {
		it("--> al encontrar un numero negativo se produce una excepcion 'negatives not allowed: (numero)'", function() {	
			expect(function() {StringCalculator.add("1, 2, -3");}).toThrow(new Error("negatives not allowed: -3"));
		});
	
		it("--> al encontrar dos numeros negativo se produce una excepcion 'negatives not allowed: (numero1), (numero2)'", function() {	
			expect(function() {StringCalculator.add("1, -2, -3");}).toThrow(new Error("negatives not allowed: -2, -3"));
		});
	});

	describe("Los numeros mayores que mil se ignoran", function() {
		it("--> se cumple con los valores 2 y 1001", function() {
			expect(StringCalculator.add("2, 1001")).toEqual(2);
		});	
	});

	describe("Los separadores pueden tener cualquier longitud", function() {
		it("--> se cumple si especificamos como separador ***", function() {
			expect(StringCalculator.add("//[***]\n1***2***3")).toEqual(6);
		});	
	});
	
	describe("Se pueden especificar varios separadores", function() {
		it("--> se cumple si especificamos como separadores * y %", function() {
			expect(StringCalculator.add("//[*][%]\n1*2%3")).toEqual(6);
		});	
		
		it("--> se cumple si especificamos como separadores ** y %%%", function() {
			expect(StringCalculator.add("//[**][%%%]\n1**2%%%3")).toEqual(6);
		});	
		
		it("--> se cumple si especificamos como separadores *+ y %/", function() {
			expect(StringCalculator.add("//[*+][%/]\n1*+2%/3")).toEqual(6);
		});	
	});
	
});	
