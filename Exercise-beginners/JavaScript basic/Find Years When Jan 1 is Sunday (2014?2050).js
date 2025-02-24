function FindYearsWhenJan1isSunday(){
    var year = 2014;
    var years = [];
    while(year <= 2050){
        var date = new Date(year, 0, 1);
        if(date.getDay() === 0){ // 0 is Sunday
            years.push(year);
        }
        year++;
    }
    return years;
}
console.log(FindYearsWhenJan1isSunday()); // [2017, 2023, 2028, 2034, 2040, 2045]