# Development-journey-
We will proceed from the  very intial phase . html to the entire journey of full stack all in one in this repo . and i will upload my entire notes up to date and in final i will upload the all of the notes and books which helps me to get out from this journey remember 






Date: 31 May
✅ Topic Covered: How Text Works in the DOM (JavaScript)
🧠 What We Learned:
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




Use textContent for raw, fast, and secure data extraction.

Use innerText only when you care about what the user actually sees.

Use innerHTML when you're injecting complex HTML, but sanitize it.
