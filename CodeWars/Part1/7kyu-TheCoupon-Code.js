// Large Version //
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
    const months = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"];
    
    if (enteredCode === correctCode){
        const [_cmonth_day, _cyear] = currentDate.split(',');
        const [_emonth_day, _eyear] = expirationDate.split(',');
        if(Number(_cyear) <= Number(_eyear)){
            let [_cmonth, _cday] = _cmonth_day.split(' ');
            let [_emonth, _eday] = _emonth_day.split(' ');
            _cmonth = months.indexOf(_cmonth);
            _emonth = months.indexOf(_emonth);
            if(_cmonth < _emonth){
                return true;
            } else if(_cmonth === _emonth) {
              return (Number(_cday) <= Number(_eday))? true: false;
            } else return false;
        } else return false;
    } else return false;
};


const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate);
  };

// Sample Tests:
Test.assertEquals(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
Test.assertEquals(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);