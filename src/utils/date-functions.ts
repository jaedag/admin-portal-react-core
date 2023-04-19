export const convertNeoWeekdayToJSWeekday = (neoWeekday: number): number => {
  return neoWeekday === 7 ? 0 : neoWeekday
}
