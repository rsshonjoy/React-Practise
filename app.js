const domContainer = document.querySelector("#root");

const myElement = React.createElement("div", null, [
  "RS Shonjoy",
  React.createElement("p", null, "Hello world"),
  React.createElement("p", null, "Hello world")
])

ReactDOM.render(myElement, domContainer);
