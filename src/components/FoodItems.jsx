import Item from "./Item";

function FoodItems({ foodItems }) {
//   let foodItems = ["food1", "food2", "food3", "food4", "food5"];
  // console.log(foodItems);
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item) => {
            {console.log(item)}
          <Item key={item} foodItem={item} />;
        })}
      </ul>
    </>
  );
}

export default FoodItems;
