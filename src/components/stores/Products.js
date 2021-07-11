// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########
import React, { useContext } from "react";

import CharacterState from "../CharacterStateContext";

import Counter from "./Counter";
// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########



function Products({ products }) {

  // ########## ########## ########## ########## ##########
  // ########## ######### TAKE CONTEXT ######### ##########
  // ########## ########## ########## ########## ##########
  const { healthPoint, satietyPoint, energyPoint, happinessPoint, foodTotalVal, medsTotalVal, foodArr, medsArr, windowStatesVal } = useContext(CharacterState);

  const [food, setFood] = foodArr;
  const [meds, setMeds] = medsArr;

  let myProducts = [];

  if (products === "food") {
    myProducts = food;
  } else if (products === "meds") {
    myProducts = meds;
  }
  // ########## ########## ########## ########## ##########
  // ########## ######### TAKE CONTEXT ######### ##########
  // ########## ########## ########## ########## ##########



  const itemsForSale = [];
  for (let i = 0; i < myProducts.length; i++) {
    itemsForSale.push(
      <div className="foodItem" key={i}>
        <div className="foodImg"></div>
        <div className="foodHeader">
          <div>{myProducts[i].title}</div>
          <div className="cost">{myProducts[i].cost}</div>
        </div>
        <div className="foodText">Very teasty burger</div>

        <Counter cost={myProducts[i].cost} id={myProducts[i].id} products={products} />

      </div>
    );
  }

  return <>{itemsForSale}</>;
}
export default Products;
