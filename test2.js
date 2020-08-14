let n = 3;
function salary(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return 2*salary(n-1);
}
console.log(salary(n))