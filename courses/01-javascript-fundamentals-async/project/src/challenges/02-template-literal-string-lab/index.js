export function solve_02_template_literal_string_lab() {
  const firstName = "alex";
  const score = 95;
  const course = "JavaScript";

  const upperFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  const message = `Name : ${upperFirstName}
  Score : ${score}
  Course : ${course}`;

  return message;
}