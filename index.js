const getMiddle = word => {
    const indexShiftFromZero = 1;
    const indexShiftSliceEnd = 1;
    const center = (word.length - indexShiftFromZero)/ 2 //?
    const start = Math.floor(center);
    const end = Math.ceil(center) + indexShiftSliceEnd; //?
    return word.slice(start,end);
}

//sliceEndCompenser istnieje żeby wyjaśnić co się skraca w przypadku końcowego indeksu
getMiddle('test') //?
getMiddle('testing') //?
getMiddle('middle') //?
getMiddle('A') //?