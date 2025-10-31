🧩 DOM (Document Object Model) — Concept Breakdown

When your browser loads an HTML page, it doesn’t just display it —
it transforms it into a structured tree of objects.

Every HTML tag (<h1>, <p>, <div>, etc.) becomes a node in this tree.
This structure is called the DOM, and it’s how JavaScript talks to and controls HTML.

🌉 Think of the DOM as a Bridge Between:

HTML (structure) ↔ JavaScript (logic)

DOM = Document + Object + Model
Part	Description
Document	Your HTML file — the content being rendered.
Object	Every HTML element becomes an object when loaded.
Model	The structured, tree-like representation of those objects.
🪴 Example Visualization
{
  "name": "HTMLDocument",
  "rootElement": "html",
  "elements": ["head", "body"]
}

🔍 DOM Methods — Finding Elements

DOM methods are like search tools that help JavaScript find elements in your HTML.

Method	What it Does	Example
.getElementById("idName")	Finds an element by its id	document.getElementById("heading1")
.getElementsByClassName("className")	Finds all elements with a given class	document.getElementsByClassName("para1")
.getElementsByTagName("tagName")	Finds all elements with a certain tag	document.getElementsByTagName("p")
🎨 DOM Properties — Changing Things Dynamically

Once you grab an element, you can change its content, style, and attributes.

🧠 .innerHTML

Used to change the inside text/content of an HTML tag:

heading.innerHTML = "This is the first DOM basic introduction class";

🎨 .style

Used to change CSS properties directly through JavaScript:

heading.style.backgroundColor = "red";
para.style.fontSize = "30px";
pTag.style.textDecoration = "underline";

⚙️ Attributes — Adding & Checking

You can add, get, or check attributes like id, class, or src.

pTag.setAttribute("id", "para2");
let para2 = document.getElementById("para2");

if (para2.getAttribute("class")) {
  para2.style.backgroundColor = "green";
} else {
  para2.style.backgroundColor = "pink";
}

🧩 What’s Happening:

Added a new id to the paragraph.

Checked if it has a class.

Changed its color based on that condition.

⚡ Events — Interacting with the User

“Any action performed by the user is called an event.”

Common Examples:
User Action	Event Type
Clicking a button	onclick
Typing in an input field	oninput
Hovering over an element	onmouseover
💡 Quick Tip:

You can handle events in JavaScript like this:

button.onclick = function() {
  alert("Button was clicked!");
};


✨ The DOM is the heart of web interactivity.
It’s where HTML structure meets JavaScript logic —
turning static pages into living, dynamic experiences. 🚀
