// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########
import React, { useContext } from "react";

import Draggable from "react-draggable";

import CharacterState from "../CharacterStateContext";

import Products from "./Products";
// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########

function Store({ title, header, products }) {
  let myId;
  // ########## ########## ########## ########## ##########
  // ########## ######### TAKE CONTEXT ######### ##########
  // ########## ########## ########## ########## ##########
  const {
    healthPoint,
    satietyPoint,
    energyPoint,
    happinessPoint,
    foodTotalVal,
    medsTotalVal,
    foodArr,
    medsArr,
    windowStatesVal
  } = useContext(CharacterState);

  const [foodTotal, setFoodTotal] = foodTotalVal;
  const [medsTotal, setMedsTotal] = medsTotalVal;

  const [food, setFood] = foodArr;
  const [meds, setMeds] = medsArr;
  const [windowStates, setWindowStates] = windowStatesVal;

  let myProducts = [];
  let myTotal;

  if (products === "food") {
    myProducts = food;
    myTotal = foodTotal;
    myId = 2;
  } else if (products === "meds") {
    myProducts = meds;
    myTotal = medsTotal;
    myId = 3;
  }
  // ########## ########## ########## ########## ##########
  // ########## ######### TAKE CONTEXT ######### ##########
  // ########## ########## ########## ########## ##########

  // ########## ########## ########## ########## ##########
  // ########## ######### MY FUNCTIONS ######### ##########
  // ########## ########## ########## ########## ##########
  function toFront(id) {
    if (windowStates[id].zIndex !== windowStates.length - 1) {
      for (let i = 0; i < windowStates.length; i++) {
        if (windowStates[i].zIndex > windowStates[id].zIndex) {
          windowStates[i].zIndex--;
        }
      }
      windowStates[id].zIndex = windowStates.length - 1;
    }
  }

  function close() {
    windowStates[myId].animation = "disappear";
    setTimeout(function () {
      windowStates[myId].hidden = "hidden";
    }, 500);
  }

  // ########## ########## BUY BUTTON ########## ##########
  function buy() {
    if (products === "food") {
      for (let i = 0; i < food.length; i++) {
        food[i].inRefrigerator += food[i].inBasket;
        food[i].inBasket = 0;
        setFoodTotal(0);
      }
    } else if (products === "meds") {
      for (let i = 0; i < meds.length; i++) {
        meds[i].inRefrigerator += meds[i].inBasket;
        meds[i].inBasket = 0;
        setMedsTotal(0);
      }
    }
  }
  // ########## ########## ########## ########## ##########
  // ########## ######### MY FUNCTIONS ######### ##########
  // ########## ########## ########## ########## ##########

  return (
    <Draggable handle=".title-bar-text" bounds="body">
      <div
        onPointerDown={() => toFront(myId)}
        className={`
        window store
        ${windowStates[myId].animation}
        ${windowStates[myId].hidden}
        ${"zIndex" + windowStates[myId].zIndex}
      `}
      >
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={() => close(myId)}></button>
          </div>
        </div>
        <div className="window-body">{header}</div>

        <div className="itemsContainer">
          <div className="itemsContainerWrapper">
            <Products products={products} />
          </div>
        </div>

        <div className="window-body">
          <section className="field-row total">
            <h5>Total: {myTotal}</h5>
            <button onClick={buy}>Buy</button>
            <button>Cancel</button>
          </section>
        </div>
      </div>
    </Draggable>
  );
}
export default Store;
