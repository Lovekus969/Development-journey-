# Development-journey-

Say “Hi” to pain, shake hands with it. This is my journey.





Date: 31 May
Topic Covered: How Text Works in the DOM (JavaScript)
What is the DOM in JavaScript?
🔹 DOM = Document Object Model
It’s a tree-like structure that represents the entire web page.
JavaScript uses the DOM to interact with and manipulate HTML & CSS
 What We Learned:
textContent

Returns all text, including hidden elements.

Does not consider CSS or visibility.

Fast and safe for scripting.

innerText

Returns only visible text (ignores display: none).

Considers layout and styles.

Slower (triggers reflow/repaint).
innerHTML

Returns the full HTML content (with tags).

Useful to insert/remove elements with structure.

⚠️ Can be a security risk if used with untrusted data.


-------------------------Inside JS function Reduce ----------------------------------------------
What is reduce()?
reduce() is a higher-order function used to combine all elements of an array into a single value using a callback function.

It’s powerful because it can:

Calculate the  sum/product, Flatten arrays, Count occurreces ,Group data
Implement map, filter, and more under the hood

****



Use textContent for raw, fast, and secure data extraction.

Use innerText only when you care about what the user actually sees.

Use innerHTML when you're injecting complex HTML, but sanitize it.

Use console.log() to log values (text, numbers, or properties).

Use console.dir() when you're debugging and need to explore the object's internals.

You can't chain .property after console.dir(), because it doesn't return the object—it just logs it.


TOday we will see some linklist data structure problem 
The this keyword in JavaScript refers to the context in which a function is executed — it’s a way to access the object that is currently calling the function.

Understanding this is very important for FAANG interviews, especially for object-oriented JS, event handling, and React class components.
Question ........... Both Array.prototype.toString() and Array.prototype.join() convert an array to a string in JavaScript. Why does JavaScript have both methods if they appear to do the same thing? In what scenarios would you prefer one over the other?"
JavaScript provides both toString() and join() for different levels of control and semantic clarity, even though their default behavior is similar.

🧠 Similarity:
Both methods return a string representation of an array.

If no separator is passed to join(), it defaults to a comma, just like toString().

javascript
Copy
Edit
let arr = [1, 2, 3];
arr.toString(); // "1,2,3"
arr.join();     // "1,2,3"
🔍 Difference:
------------------**toString()** ----------------- is a generic method inherited from Object. prototype (redefined by Array.prototype) and is meant for quick stringification, often automatically called in string contexts.
console.log([1, 2, 3] + ""); // "1,2,3" — toString() is called implicitly


-------------------**join()** ---------------------- is specific to arrays and allows for custom separators, making it more powerful and versatile when formatting output.
arr.join(" - "); // "1 - 2 - 3"
arr.join("");    // "123"
🚀 When to use which:
Use Case	Method
Quick conversion, no formatting	toString()
Custom formatting or separators	join()
Implicit coercion (e.g., logging)	toString() (automatically called)
Generating formatted strings	join()

✅ Bonus (FAANG Edge):
Understanding the subtle difference shows your awareness of JavaScript's prototypal inheritance and built-in method design. This helps in writing clean, readable, and performance-aware code in large systems.
| Function  | Logic Like   | Returns `true` if...        |     |                               |
| --------- | ------------ | --------------------------- | --- | ----------------------------- |
| `some()`  | `OR` (\`     |                             | \`) | **Any** one condition is true |
| `every()` | `AND` (`&&`) | **All** conditions are true |     |                               |

What is the Spread Operator ... in JavaScript?
It’s used to unpack elements from an array (or object) — so you can copy, merge, or expand values individually.

Q. Difference between innerText and textContent?.
Both innerText and textContent are used in JavaScript to get or change the text inside an HTML element. But they are a little different.

The innerText shows only the text that is visible on the screen. If some text is hidden using CSS (like display: none), innerText will not include that hidden text. On the other hand, textContent gives all the text, even if it is hidden. It does not care about styles.

Also, textContent is usually faster, because it just reads the text without checking how the page looks. But innerText is slower because it looks at the styles and layout of the page.

In short:

Use innerText when you want to get only what the user can see.

Use textContent when you want all the text, even if it’s hidden.

 What are DOM Events?
DOM events are actions or happenings that occur in the web page, which the browser can detect and respond to. For example, when a user clicks a button, moves the mouse, types on the keyboard, or submits a form, all these are called events. JavaScript can listen for these events and run some code when they happen. This makes the web page interactive.
