function isLowerCaseAt(str, index) {
  const char = str.charAt(index);
  return char === char.toLowerCase() && char !== char.toUpperCase();
}

// Example usage:
console.log(isLowerCaseAt("JavaScript", 4)); // true (S is at index 4)
console.log(isLowerCaseAt("HELLO", 1));      // false (E is not lowercase)
