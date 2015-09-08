describe('encrypt', function() {
    it("returns one character message as itself", function() {
        expect(encrypt('a')).to.equal('a');
    });

    it("returns one character message with punctuation and spaces as message without punctuation", function (){
        expect(encrypt('a! .,')).to.equal('a');
    });

    it("returns one character message to lowercase", function() {
        expect(encrypt('A')).to.equal('a');
    })

    it("returns a four character message to an encrypted string", function() {
        expect(encrypt('It is.')).to.equal('iits');
    })
});
