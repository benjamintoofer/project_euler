type FactorialFunction = (x: number) => number;

const combinatorics = (factorial: FactorialFunction) => (n: number, r: number) => {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

const factorial = (cache: number[]) => (x: number) => {
    if (x === 1) {
        return 1;
    }

    if (cache[x] !== undefined) {
        return cache[x];
    }
    
    if (cache[x - 1] !== undefined) {
        cache[x] = cache[x-1] * x;
        return cache[x];
    }
    return 1;
}
const cache: number[] = [1, 1];
const selection = combinatorics(factorial(cache));


const MILLION = 1000000;
let counter = 0;
for (let n = 1; n <= 100; n++) {
    for (let r = 1; r <= n; r++)  {
        // if (selection(n, r) > MILLION) {
        //     console.log("HERE");
        // }
        counter = selection(n, r) > MILLION ? counter + 1 : counter;
    }
}

console.log(counter);