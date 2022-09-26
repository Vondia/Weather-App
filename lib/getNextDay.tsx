export function getNextDay() {
  const date = new Date();
  const hour = date.getHours();
  if (hour >= 0 && hour < 3) {
    return [8, 16, 24, 32];
  }
  if (hour >= 3 && hour < 6) {
    return [7, 15, 23, 31];
  }
  if (hour >= 6 && hour < 9) {
    return [6, 14, 22, 30];
  }
  if (hour >= 9 && hour < 12) {
    return [5, 13, 21, 29];
  }
  if (hour >= 12 && hour < 15) {
    return [4, 12, 20, 28];
  }
  if (hour >= 15 && hour < 18) {
    return [3, 11, 19, 27];
  }
  if (hour >= 18 && hour < 21) {
    return [2, 10, 18, 26];
  }
  if (hour >= 21 && hour < 24) {
    return [1, 9, 17, 25];
  }
}
