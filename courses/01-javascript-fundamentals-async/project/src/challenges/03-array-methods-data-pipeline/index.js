export function solve_03_array_methods_data_pipeline() {
  const numArray = [1, 2, 3, 4, 5];
  //map will double ,filter gets greater than or equal to 6, reduce adds the remaining ones
  const total = numArray.map((num) => num * 2).filter((num) => num >= 6).reduce((sum, num) => sum + num, 0);
  return total;
}