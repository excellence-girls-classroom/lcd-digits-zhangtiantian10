/**
 * Created by zhangtian on 16-4-19.
 */
describe('LCD',function () {
    var LCDNumber;
    var input;
    
    beforeEach(function () {
       LCDNumber = loadLCDNumber();
       input = 910; 
    });
    describe('splitNumber',function () {
      
        it('correct',function () {
           var numberArray = [9,1,0];
            expect(splitNumber(input)).toEqual(numberArray);
        });
    });

    describe('searchSameNumber',function () {

        it('correct',function () {
           var LCDArray = ['._....._.',
                           '|_|..||.|',
                           '..|..||_|'];
            expect(searchSameNumber([9,1,0],LCDNumber)).toEqual(LCDArray);
        });
    });
    describe('print',function () {

        it('correct',function () {

            spyOn(console, 'log');
            createLCDString(input);
           var printLCD = '._....._.\n'+
               '|_|..||.|\n'+
               '..|..||_|\n';
            expect(console.log).toHaveBeenCalledWith(printLCD);
        });
    })
});