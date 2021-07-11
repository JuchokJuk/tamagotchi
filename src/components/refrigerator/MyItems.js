// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########
import { useContext } from "react";

import CharacterState from "../CharacterStateContext";
// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########

function MyItems({ items }) {
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
  const [health, setHealth] = healthPoint;
  const [satiety, setSatiety] = satietyPoint;
  const [energy, setEnergy] = energyPoint;
  const [happiness, setHappiness] = happinessPoint;

  const [food, setFood] = foodArr;
  const [meds, setMeds] = medsArr;

  const [windowStates, setWindowStates] = windowStatesVal;

  let insert = [];
  let myStore;

  if (items === "food") {
    insert = food;
    myStore = 2;
  } else if (items === "meds") {
    insert = meds;
    myStore = 3;
  }
  // ########## ########## ########## ########## ##########
  // ########## ######### TAKE CONTEXT ######### ##########
  // ########## ########## ########## ########## ##########

  // ########## ########## ########## ########## ##########
  // ########## ######### MY FUNCTIONS ######### ##########
  // ########## ########## ########## ########## ##########
  function open(myStore) {
    toFront(myStore);
    windowStates[myStore].hidden = "";
    windowStates[myStore].animation = "appear";
  }

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

  function adder(characteristic, value) {
    switch (characteristic) {
      case "health":
        if (health + value > 10) {
          setHealth(10);
        } else if (health + value < 0) {
          setHealth(0);
        } else {
          setHealth((health) => health + value);
        }
        break;

      case "satiety":
        if (satiety + value > 10) {
          setSatiety(10);
        } else if (satiety + value < 0) {
          setSatiety(0);
        } else {
          setSatiety((satiety) => satiety + value);
        }
        break;

      case "energy":
        if (energy + value > 10) {
          setEnergy(10);
        } else if (energy + value < 0) {
          setEnergy(0);
        } else {
          setEnergy((energy) => energy + value);
        }
        break;

      case "happiness":
        if (happiness + value > 10) {
          setHappiness(10);
        } else if (happiness + value < 0) {
          setHappiness(0);
        } else {
          setHappiness((happiness) => happiness + value);
        }
        break;
      default:
        console.error("There is no such characteristic: " + characteristic);
    }
  }

  // ########## ########## EAT BUTTON ########## ##########
  function eat(id) {
    if (items === "food") {
      food[id].inRefrigerator--;

      adder("health", food[id].addHealth);
      adder("satiety", food[id].addSatiety);
      adder("energy", food[id].addEnergy);
      adder("happiness", food[id].addHappiness);
    } else if (items === "meds") {
      meds[id].inRefrigerator--;

      adder("health", meds[id].addHealth);
      adder("satiety", meds[id].addSatiety);
      adder("energy", meds[id].addEnergy);
      adder("happiness", meds[id].addHappiness);
    }
  }
  // ########## ########## ########## ########## ##########
  // ########## ######### MY FUNCTIONS ######### ##########
  // ########## ########## ########## ########## ##########

  const myItems = [];

  for (let i = 0; i < insert.length; i++) {
    if (insert[i].inRefrigerator > 0) {
      myItems.push(
        <div className="foodItem" key={i}>
          <div className="foodImg"></div>
          <div className="foodHeader">
            <div>{insert[i].title}</div>
            <div className="count">{insert[i].inRefrigerator}</div>
          </div>
          <div className="foodText">Very teasty burger</div>

          <button className="eatButton" onClick={() => eat(i)}>
            Eat
          </button>
        </div>
      );
    }
  }

  myItems.push(
    <div className="plusFood" key={999}>
      <button className="eatButton" onClick={() => open(myStore)}>
        Buy more
      </button>
    </div>
  );
  return <>{myItems}</>;
}
export default MyItems;
