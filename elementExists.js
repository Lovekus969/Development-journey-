
function elementExists(arr, element) {
  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is equal to the target element
    if (arr[i] === element) {
      return true; // If found, return true
    }
  }

  // If loop finishes without finding the element, return false
  return false;
}

// Example usage:
console.log(elementExists([1, 2, 3, 4], 3));  // true (3 exists)
console.log(elementExists([1, 2, 3, 4], 5));  // false (5 doesn't exist)
