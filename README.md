🧠 Concept Breakdown — DOM (Document Object Model)

When your browser loads an HTML page, it doesn’t just display it.
It converts it into a structured tree of objects — every tag (<h1>, <p>, <div>, etc.) becomes a node in this tree.
This structure is called the DOM, and it’s how JavaScript talks to and controls HTML.

Think of the DOM as a bridge that connects:

🧾 HTML (structure) ↔ ⚙️ JavaScript (logic)

🌳 DOM = Document + Object + Model
Term	Meaning
Document	Your HTML file — the content being rendered.
Object	Every HTML element becomes an object when loaded.
Model	The structured, tree-like representation of those objects.

Example visualization:

{
  name: "HTMLDocument",
  rootElement: "html",
  elements: ["head", "body"]
}

🧩 DOM Methods — Finding Elements

DOM methods are like search tools that help JS find elements in your HTML.

Method	What it Does	Example
.getElementById("idName")	Finds an element by its id	document.getElementById("heading1")
.getElementsByClassName("className")	Finds all elements with a given class	document.getElementsByClassName("para1")
.getElementsByTagName("tagName")	Finds all elements with a certain tag	document.getElementsByTagName("p")
💡 DOM Properties — Changing Things Dynamically

Once you grab an element, you can change its content, style, and attributes.

📝 .innerHTML

Used to change the inside text/content of an HTML tag.

heading.innerHTML = "This is the first DOM basic introduction class";

🎨 .style

Used to change CSS properties directly through JS.

heading.style.backgroundColor = "red";
para.style.fontSize = "30px";
pTag.style.textDecoration = "underline";

🧱 Attributes — Adding & Checking

You can add, get, or check attributes (like id, class, src, etc.).

pTag.setAttribute("id", "para2");
let para2 = document.getElementById("para2");

if (para2.getAttribute("class")) {
  para2.style.backgroundColor = "green";
} else {
  para2.style.backgroundColor = "pink";
}


Here, we:

Gave the paragraph a new id.

Checked if it has a class.

Changed its color based on that condition.

⚡ Events — Interacting with the User

“Any action performed by the user is called an event.”

Examples:

Clicking a button → onclick

Typing in a field → oninput

Hovering → onmouseover

(You haven’t added events yet, but that’s the next step in DOM mastery.)

🧭 Summary of the Code You Wrote

✅ HTML:

One heading (h1)

Two paragraphs (p)

JS script linked at the bottom.

✅ JavaScript:

Selected HTML elements by ID, Class, and Tag.

Logged them in the console.

Changed their text using .innerHTML.

Styled them using .style.

Managed attributes (setAttribute, getAttribute).

Used a condition to dynamically change style.

🔥 TL;DR — What You Just Did

You built the foundation of DOM manipulation:

Learned to access elements.

Learned to modify content, style, and attributes.

Built the mental bridge between HTML and JavaScript.