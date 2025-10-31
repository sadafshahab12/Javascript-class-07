// DOM --> Document Object Model
// Document --> html
// Object --> html ki file jb chrome browser ya ksi bhi browser mein load hoti h to kia h ? jitny bhi element wo tree form structure mein object ki form document mein save hojaty
//Model --> structured
// {
//     name :"htmldocument",
//     rootElement: "html",
//     element: ["head", "body"]
// }

// html or js k darmiyan ek bridge jo k html ko js se connect krta h
// html mein changes krny k lea hm DOM
// DOM is a tree like structure

// any atype of action done by user is called event

// Method --> use to get html elements
// .getElementById() --> function //
// .getElementByClassName()
//.getElementByTagName()

//properties --> // use to change html elements value
// .innerHtml  -> change inner content of html element
//  {
// p: [p.para, p]
// }
let heading = document.getElementById("heading1");
let para = document.getElementsByClassName("para1")[0];
let pTag = document.getElementsByTagName("p")[1];

console.log(heading);
console.log(para);
console.log(pTag);

heading.innerText = "This is the first dom basic introduction class";
para.innerHTML = "I am teaching ai agent";
pTag.innerHTML = "I am teaching maths.";

// .style property --> hmn kisi bhi element ka style (color size font style)
heading.style.backgroundColor = "red";
para.style.fontSize = "30px";
pTag.style.textDecoration = "underline";

// Attributes
pTag.setAttribute("id", "para2");
let para2 = document.getElementById("para2");
console.log(para2);

let anchorTag = document.getElementsByTagName("a");
console.log(anchorTag)
// anchorTag[0].setAttribute("src", "https://www.google.com");
if (para2.getAttribute("class")) {
  para2.style.backgroundColor = "green";
} else {
  para2.style.backgroundColor = "pink";
}
