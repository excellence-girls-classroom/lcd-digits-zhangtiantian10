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

function mergeLCDArray(LCDNumber,numberArray) {
    var LCDArray = '';
    for (var i = 0; i < numberArray.length; i++) {
        LCDArray += LCDNumber[numberArray[i]];
    }
    return LCDArray;
};

function searchSameNumber(numberArray, LCDNumber) {
    var LCDArray = [];
    for(var j = 0; j<LCDNumber.length;j++) {
        LCDArray[j] = mergeLCDArray(LCDNumber[j],numberArray);
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
