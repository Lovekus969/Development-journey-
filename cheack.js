function isBlank(str) {
  return str.trim().length === 0;
}

// Example usage:
console.log(isBlank(""));         // true
console.log(isBlank("   "));      // true
console.log(isBlank("hello"));    // false
                        
