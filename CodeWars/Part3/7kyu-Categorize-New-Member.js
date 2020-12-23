// Sollution first
// const openOrSenior = data => data.map(d => {
//     if(d[0] >= 55 && d[1] > 7) return 'Senior';
//     else return 'Open';
//   });

const openOrSenior = data => data.map( ([age, v]) => ( age >= 55 && v > 7)? 'Senior': 'Open');

// Sample Tests:
Test.assertSimilar(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
Test.assertSimilar(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]),['Open', 'Open', 'Open', 'Open'])
Test.assertSimilar(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])
