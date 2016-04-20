function createLCDString(input) {
    var LCDNumber = loadLCDNumber();
    var numberArray = splitNumber(input);
    var LCDArray = searchSameNumber(numberArray,LCDNumber);
    print(LCDArray);
}

function splitNumber(input) {
    input = input + '';
    var numberArray = input.split('');
    for(var i = 0; i<numberArray.length;i++){
        numberArray[i] = parseInt(numberArray[i]);
    }
    return numberArray;
}

function searchSameNumber(numberArray, LCDNumber) {
    var LCDArray = [];
    for(var j = 0; j<LCDNumber.length;j++) {
        LCDArray[j] = '';
        for (var i = 0; i < numberArray.length; i++) {
            LCDArray[j] += LCDNumber[j][numberArray[i]];
        }
    }
    return LCDArray;
}

function print(LCDArray) {
    var printLCD = '';
    for(var i = 0; i<LCDArray.length;i++){
       printLCD += (LCDArray[i]+'\n');
    }
    console.log(printLCD);
}