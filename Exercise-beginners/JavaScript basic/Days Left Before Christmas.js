function DayLeftBeforeChristmas() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let christmas = new Date(year, 11, 25);
  if (month == 12 && day > 25) {
    christmas.setFullYear(year + 1);
  }
  let one_day = 1000 * 60 * 60 * 24;
  let day_left = Math.ceil((christmas.getTime() - date.getTime()) / one_day);
  return day_left;
}

console.log(DayLeftBeforeChristmas()); // 305
