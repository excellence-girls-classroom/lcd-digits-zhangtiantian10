describe('LCD',function () {
    var lcdNumber;
    var input,inputTwo;
    
    beforeEach(function () {
        lcdNumber = loadLCDNumberDict();
        inputTwo = 51340;
        input = 26789;
    });
    describe('unit test',function () {
        describe('splitInput',function () {

            it('correct',function () {
                var numberArray = [5,1,3,4,0];
                expect(splitInput(inputTwo)).toEqual(numberArray);
            });
        });

        describe('generateLCDLines',function () {

            it('correct',function () {
                var lcdArray = ['._. ._. ._. ._. ._. ',
                    '._| |_. ..| |_| |_| ',
                    '|_. |_| ..| |_| ..| '];
                expect(generateLCDLines([2,6,7,8,9],lcdNumber)).toEqual(lcdArray);
            });
        });

        describe('generateLCDText',function () {
            var lcdLines;
            beforeEach(function () {
                lcdLines = ['._. ... ._. ... ._. ', '|_. ..| ._| |_| |.| ', '._| ..| ._| ..| |_| '];
            });
            it('correct', function () {
                var lcdText = '._. ... ._. ... ._. \n' +
                    '|_. ..| ._| |_| |.| \n' +
                    '._| ..| ._| ..| |_| \n';
                expect(generateLCDText(lcdLines)).toEqual(lcdText);
            });
        });
    });

    describe('integration testing',function () {

        it('correct',function () {

            spyOn(console, 'log');
            createLCDString(inputTwo);
           var printLCD = '._. ... ._. ... ._. \n'+
                          '|_. ..| ._| |_| |.| \n'+
                          '._| ..| ._| ..| |_| \n';
            expect(console.log).toHaveBeenCalledWith(printLCD);
        });
    });
});