// const root= document.getElementById("root")
// const heading =document.createElement("h1");
// const heading2 =document.createElement("h2");
// heading.innerHTML="Hello Aman";
// heading2.innerHTML="Hello Aman";
// root.appendChild(heading)
// root.appendChild(heading2)

const heading = React.createElement("h1",{},"Hello aman");
const heading2 = React.createElement("h2",{},"Hello Aman");
const container =React.createElement("div",{},[heading, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)
console.log([heading, heading2]);