// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

const check = (a, x) => a.includes(x);

check([66, 101], 66) //? true
check([80, 117, 115, 104, 45, 85, 112, 115], 45) //? true
check(['t', 'e', 's', 't'], 'e'); //? true
check(['what', 'a', 'great', 'kata'], 'kat') //? false