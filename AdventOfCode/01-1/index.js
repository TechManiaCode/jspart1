fetch('input.txt')
  .then(response => response.text())
  .then(text => text.split(`\n`).map(el => parseInt(el)))
  .then(data => data.reduce(multiplyPairWithSum2020, null))
  .then(result => console.log(result));

function multiplyPairWithSum2020 (result, itm, idx, arr) {
  const validPair = arr.find((pair, pairIdx) => (idx !== pairIdx) && (itm + pair === 2020));
  return validPair ? itm * validPair : result;
}