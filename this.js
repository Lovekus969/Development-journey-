const person = {
  name: "Kush",
  greet: function () {
    console.log("Hi, I'm " + this.name); // 'this' refers to person
  }
};
person.greet(); // Hi, I'm Kush
