function demo() {
  var x;            // hoisted declaration
  console.log(x);   // undefined (because x is declared but not assigned yet)
  x = 7;
  console.log(x);   // 7
}
