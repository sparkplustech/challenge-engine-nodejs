export function solve_07_promises_chain_rejection_handling() {
  function getName() {
    return Promise.resolve("Aryan");
  }

  function greet(name) {
    return Promise.resolve(`Hello ${name}`);
  }

  return getName().then(greet).catch((e) => `Error ${e.message}`);

}