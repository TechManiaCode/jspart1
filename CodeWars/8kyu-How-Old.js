/**
 * It gives age response based on Math.sign function that returns (-1,0,1).
 * 
 * @param {number} yearBorn A year of birth
 * @param {number} yearAsked A year we ask for to calculate age
 * @returns {string} Response about age
 */
function calculateAge(yearBorn, yearAsked) {
  const years = yearAsked - yearBorn;
  const absYears = Math.abs(years);
  const timespan = absYears > 1 ? 'years' : 'year';
  
  const response = new Map([
    [-1,`You will be born in ${absYears} ${timespan}.`],
    [0, `You were born this very year!`],
    [1, `You are ${absYears} ${timespan} old.`]  
  ]);
  
  return response.get(Math.sign(years))
}

calculateAge(2000, 2019) //?
calculateAge(2000, 1500) //?
calculateAge(2000, 2000) //?