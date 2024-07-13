import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let Fooditem = ["Fruits", "Vagetables", "Pulses", "Meat", "Natural Drinks"];
  let Drinks = [
    "Water",
    "Milk",
    "Sugarcane Juice",
    "Milk Shakes",
    "Fresh Fruits necter",
  ];

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  let Baverages = [
    "7up",
    "Pepsi",
    "Gormet Cola",
    "Fizup",
    "Next Cola",
    "Big Apple",
    "Lemonade",
  ];
  return (
    <>
      <h1>Healthy Food</h1>
      <br />

      <ul className="list-group list-group-flush">
        {Fooditem.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
      <br />
      <h1>Healthy Drinks</h1>
      <br />

      <ul className="list-group list-group-flush">
        {Drinks.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>

      <br />
      <h1>Baverages</h1>
      <ul className="list-group list-group-flush">
        {Baverages.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
      <br />
      <h1>Numbers</h1>
      <br />
      <ul className="list-group list-group-flush">
        {numbers.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
