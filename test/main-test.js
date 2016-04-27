describe('LCD',function () {
    var LCDNumber;
    var input,inputTwo;
    
    beforeEach(function () {
        LCDNumber = loadLCDNumber();
        inputTwo = 110;
        input = 910;
    });

    describe('splitNumber',function () {
      
        it('correct',function () {
           var numberArray = [1,1,0];
            expect(splitNumber(inputTwo)).toEqual(numberArray);
        });
    });

    describe('searchSameNumber',function () {

        it('correct',function () {
           var LCDArray = ['... ... ._. ',
                           '..| ..| |.| ',
                           '..| ..| |_| '];
            expect(searchSameNumber([1,1,0],LCDNumber)).toEqual(LCDArray);
        });
    });

    describe('print',function () {

        it('correct',function () {

            spyOn(console, 'log');
            createLCDString(input);
           var printLCD = '._. ... ._. \n'+
               '|_| ..| |.| \n'+
               '..| ..| |_| \n';
            expect(console.log).toHaveBeenCalledWith(printLCD);
        });
    });
});