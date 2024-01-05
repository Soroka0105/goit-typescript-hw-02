/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum day{
  MONDAY,
  TUESDAY
}
function isWeekend (weekday):boolean {
if (weekday === day.MONDAY || weekday === day.MONDAY ) {
  return true
}
return false
}