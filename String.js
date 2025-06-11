function reverseWords(sentence) {
  // Step 1: Split sentence into words
  const words = sentence.split(" ");

  // Step 2: Reverse the array of words
  const reversed = words.reverse();

  // Step 3: Join them back into a string
  return reversed.join(" ");
}

// Test it
const input = "I earned 200 dollars today";
console.log(reverseWords(input)); // Output: "today dollars 200 earned I"
