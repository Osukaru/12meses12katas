describe("StringCalculator", function() {
	it("Una cadena vacia me devolvera como resultado el valor 0", function() {
		expect(StringCalculator.add("")).toEqual(0);
	});
	
	describe("Una cadena con un valor me devolverá el propio valor:", function() {
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
});
