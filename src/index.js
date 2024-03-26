import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menue />
      <Futtrer />
    </div>
  );
}
function Header() {
  // const style ={fontSize:"48px" , color:"red" , textTransform: "uppercase"}
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza go</h1>;
    </header>
  );
}
function Menue() {
  const pizzas = pizzaData ;
  // const pizzas = [];
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menue</h2>
      
      {numPizza > 0 ? (
        <React.Fragment>
          
        <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All
        from our stone oven, all organic, all delicious.
      </p>
        <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
          </React.Fragment>
        
      ) : (
        <p>siz boshqa payt keling</p>
      )}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "Sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Futtrer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 17;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour = {openHour} closeHour = {closeHour} />
      ) : (
        <p>
          sizni biz {openHour}:00 dan {closeHour}:00 gacha kutamiz </p>
      )}
    </footer>
  );
}
function Order({openHour, closeHour}) {
  return (
    <div className="order">
    <p>
      Biz {openHour}:00 dan  {closeHour}:00 gacha ochiqmiz . Tashrif buyuring yoki online
      xarid qiling .
    </p>
    <button className="btn">ORDER</button>
  </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
