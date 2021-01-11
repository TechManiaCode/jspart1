/**
 * Given positive integer num, returns the sum of all odd Fibonacci numbers lower or equal to num.
 */
function sumOddFibonacciNumbers(num) {
    let sum = 0;
    let prev = 0;
    let current = 1;
    
    while(current <= num){
        if(current % 2 !== 0)
            sum += current;
        const next = current + prev;
        prev = current;
        current = next;
    }
    return sum;
}