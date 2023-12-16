import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {

   let foodItems = ["food1", "food2", "food3", "food4", "food5"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage foodItems={foodItems} />
      <FoodItems foodItems={foodItems} />
    </>
  );
}

export default App;
