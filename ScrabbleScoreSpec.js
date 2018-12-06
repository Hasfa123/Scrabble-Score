
describe('ScrabbleScore', function(){
    it('should compute the score of an empty word as zero', function(){
        expect(scrabbleScore("")).toEqual(0);
    });
    it('should compute zero for null cases', function(){
        expect(scrabbleScore(null)).toEqual(0);
    });
    it('should score case insensitive words', function(){
        expect(scrabbleScore('LOVE')).toEqual(7);
    });
    it('should score a very short word', function(){
        expect(scrabbleScore("a")).toEqual(1);
    });
    it('should compute the score of a given word', function(){
        expect(scrabbleScore('algorithm')).toEqual(15);
    });
})