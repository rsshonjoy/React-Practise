const domContainer = document.querySelector("#root");

const myElement = React.createElement("div", null, [
  "RS Shonjoy",
  React.createElement("p", null, "Hello world"),
  React.createElement("p", null, "Hello world")
])

ReactDOM.render(myElement, domContainer);

let array = [];
increment = 0;
let container = document.querySelector('.container');

// fast method
while (increment < 10000) {
  array.push(++increment);
}

container.innerHTML = array.join(' ');