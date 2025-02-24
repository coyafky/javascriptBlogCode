function CalculateAreaOfTriangle(s1, s2, s3) {
  let s = (s1 + s2 + s3) / 2;
  let area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
  return area;
}
console.log(CalculateAreaOfTriangle(5, 6, 7)); // 14.696938456699069
