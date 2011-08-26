describe("StringCalculator", function() {
	it("Una cadena vacia me devolvera como resultado el valor 0", function() {
		expect(StringCalculator.add("")).toEqual(0);
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

		it("--> se cumple con los valores 123456789, 987654321", function() {
			expect(StringCalculator.add("123456789, 987654321")).toEqual(1111111110);
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
});
