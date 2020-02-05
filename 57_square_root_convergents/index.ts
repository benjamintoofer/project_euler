let denominator = 1;
let numerator = 1;
let count = 0;

const numOfDigits = (x: number) => {
    // console.log(`X: ${x}`);
    let digits = 0;
    let val = x;
    while ((val / 10) > 0) {
        digits++;
        // console.log(val)
        val = Math.trunc(val/10);
        console.log(`AFTER: ${val}`);
    }
    return digits;
}

for (let i = 0; i < 1000; i++) {

    const newDenominator = denominator + numerator;
    const newNumerator = newDenominator + denominator;
    if (numOfDigits(newNumerator) > numOfDigits(newDenominator)) {
        count++;
    }
    denominator = newDenominator;
    numerator = newNumerator;
}

console.log(count);