describe('LCD',function () {
    var LCDNumber;
    var input,inputTwo;
    
    beforeEach(function () {
        LCDNumber = loadLCDNumber();
        inputTwo = 51340;
        input = 26789;
    });

    describe('splitNumber',function () {
      
        it('correct',function () {
           var numberArray = [5,1,3,4,0];
            expect(splitNumber(inputTwo)).toEqual(numberArray);
        });
    });

    describe('searchSameNumber',function () {

        it('correct',function () {
           var LCDArray = ['._. ._. ._. ._. ._. ',
                           '._| |_. ..| |_| |_| ',
                           '|_. |_| ..| |_| ..| '];
            expect(searchSameNumber([2,6,7,8,9],LCDNumber)).toEqual(LCDArray);
        });
    });

    describe('print',function () {

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