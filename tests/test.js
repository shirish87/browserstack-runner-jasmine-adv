

describe('test', function() {
    it('should pass', function() {
        expect(10 === 10).toEqual(true);
    });

    it('should fail gloriously', function() {
        expect(10 === "10").toEqual(false);
    });
})
