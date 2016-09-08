// Recursive function for calculating days between dates

function daysInMonth (month_number, year) {
  if (month_number == 4 || month_number == 6 || month_number == 9 || month_number == 11)
    return 30
  if (month_number == 2) {
    if (year % 4 == 0)
      return 29
    return 28
  }
  return 31
}

function daysBetweenDates (acc, d1, m1, y1, d2, m2, y2) {
  if ((d1 == d2) && (m1 == m2) && (y1 == y2))
    return acc
  if (d1 == daysInMonth(m1, y1)) {
    d1 = 0
    m1++
  }
  if (m1 == 13) {
    m1 = 1
    y1++
  }
  acc++
  d1++
  return daysBetweenDates(acc, d1, m1, y1, d2, m2, y2)
}

console.log(daysBetweenDates(0, 5, 1, 1991, 6, 6, 2016))
