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
	
});
