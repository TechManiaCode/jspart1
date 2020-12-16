function depositProfit(deposit, rate, threshold) {
    let currentDeposit = deposit;
    let counter = 0;
    while(currentDeposit < threshold) {
        currentDeposit *= (1 + rate/100);
        counter++;
    }
    return counter;
}