// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########
import React, { useEffect, useContext } from "react";

import CharacterState from "../CharacterStateContext";
// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########



function Counter({ cost, id, products }) {
  // ########## ########## ########## ########## ##########
  // ########## ######### TAKE CONTEXT ######### ##########
  // ########## ########## ########## ########## ##########
  const { healthPoint, satietyPoint, energyPoint, happinessPoint, foodTotalVal, medsTotalVal, foodArr, medsArr } = useContext(CharacterState);

  const [foodTotal , setFoodTotal] = foodTotalVal;
  const [medsTotal , setMedsTotal] = medsTotalVal;

  const [food, setFood] = foodArr;
  const [meds, setMeds] = medsArr;
  // ########## ########## ########## ########## ##########
  // ########## ######### TAKE CONTEXT ######### ##########
  // ########## ########## ########## ########## ##########



  // ########## ########## ########## ########## ##########
  // ######## ######## BUTTONS FUNCTIONS ######### ########
  // ########## ########## ########## ########## ##########
  const [timer, setTimer] = React.useState(200);

  // ########## ######### PLUS BUTTON ########## ##########
  const [isDownPlusButton, setIsDownPlusButton] = React.useState(0);
  let myCount;
  if(products === "food"){
    myCount = food[id].inBasket;
  }else if(products === "meds"){
    myCount = meds[id].inBasket;
  }
  
  function inc() {
    if (myCount < 999) {
      if(products === "food"){
        food[id].inBasket++;
        setFoodTotal((setFood) => setFood + cost);
        
      }else if(products === "meds"){
        meds[id].inBasket++;
        setMedsTotal((medsTotal) => medsTotal + cost);
      }
    }
  }

  function upPlusButton() {
    setIsDownPlusButton(0);
    setTimer(200);
  }
  function downPlusButton() {
    setIsDownPlusButton(1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isDownPlusButton === 1) {
        inc();
        if (timer > 70) {
          setTimer(timer - 5);
        }
      }
    }, timer);
    return () => clearInterval(interval);
  }, [isDownPlusButton, myCount, timer]);

  // ########## ######### MINUS BUTTON ######### ##########
  const [isDownMinusButton, setIsDownMinusButton] = React.useState(0);

  function dec() {
    if (myCount > 0) {
      if(products === "food"){
        food[id].inBasket--;
        setFoodTotal((setFood) => setFood - cost);
      }else if(products === "meds"){
        meds[id].inBasket--;
        setMedsTotal((medsTotal) => medsTotal - cost);
      }
    }
  }

  function upMinusButton() {
    setIsDownMinusButton(0);
    setTimer(200);
  }
  function downMinusButton() {
    setIsDownMinusButton(1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isDownMinusButton === 1) {
        dec();
        if (timer > 70) {
          setTimer(timer - 5);
        }
      }
    }, timer);
    return () => clearInterval(interval);
  }, [isDownMinusButton, myCount, timer]);
  // ########## ########## ########## ########## ##########
  // ######## ######## BUTTONS FUNCTIONS ######### ########
  // ########## ########## ########## ########## ##########



  return (
    <section className="field-row foodCounter">
      <button
        className="minusButton"
        onPointerUp={upMinusButton}
        onPointerOut={upMinusButton}
        onPointerDown={downMinusButton}
        onClick={dec}
      ></button>
      <h6 className="foodItemNum">{myCount}</h6>
      <button
        className="plusButton"
        onPointerUp={upPlusButton}
        onPointerOut={upPlusButton}
        onPointerDown={downPlusButton}
        onClick={inc}
      ></button>
    </section>
  );
}
export default Counter;
