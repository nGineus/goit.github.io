function myPow(base, exponent) {
    +base;
    +exponent;
    var result = 1;

    if (exponent != 0) {
        if (exponent > 0) {
            while (exponent >= 1) {
                result = result * base;
                exponent--;
            }
        } else {
            result = 1;
            while (exponent <= -1) {
                result = result / base;
                exponent++;
            }
        }
    }
    return (result);
}

value1 = prompt('Введите число');
value2 = prompt('Введите степень');
console.log('Число %s в степени %s равно %s', value1, value2, myPow(value1, value2));
