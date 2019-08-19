const arrayOfNumbersCreator = function(number) {
    
    let array = [];
    for (var i = 1; i <= number; i++) {
        array.push(i);
    }
    return array;
}

export default arrayOfNumbersCreator;
