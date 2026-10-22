export function solve_04_oop_inheritance_refactor() {
  class Animal {
    speak() {
      return "Animal sound";
    }
  }
  class Dog extends Animal {
    speak() {
      return "Woof!";
    }
  }

  return new Dog().speak();
}