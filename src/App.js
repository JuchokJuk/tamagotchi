// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########
import React, { useState, useEffect } from "react";

import CharacterState from "./components/CharacterStateContext";

import "./98.css";
import "./vhs.css";

import "./style.css";
import "./sceneInterface.css";

import "./store.css";
import "./stats.css";

import Rooms from "./components/Rooms";
import Stats from "./components/Stats";
import DevWindow from "./components/DevWindow";
import Store from "./components/stores/Store";
import Refrigerator from "./components/refrigerator/Refrigerator";
// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########
//hey
export default function App() {
  // ########## ########## ########## ########## ##########
  // ########## ######### CONTEXT INIT ######### ##########
  // ########## ########## ########## ########## ##########
  const [health, setHealth] = useState(10);
  const [satiety, setSatiety] = useState(10);
  const [energy, setEnergy] = useState(10);
  const [happiness, setHappiness] = useState(10);

  const [foodTotal, setFoodTotal] = useState(0);
  const [medsTotal, setMedsTotal] = useState(0);

  // ########## ############ ITEMS ############# ##########
  const [food, setFood] = useState([
    {
      id: 0,
      title: "Chocolate",
      description:
        "The homeland of chocolate, like the cocoa tree, is Central and South America.",
      cost: 1,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 0,
      addSatiety: 1,
      addEnergy: 0,
      addHappiness: 0.5
    },
    {
      id: 1,
      title: "Milk",
      cost: 2,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 0,
      addSatiety: 1,
      addEnergy: 0,
      addHappiness: 0.5
    },
    {
      id: 2,
      title: "Ice cream",
      cost: 3,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 0,
      addSatiety: 1,
      addEnergy: 0,
      addHappiness: 0.5
    },
    {
      id: 3,
      title: "Nuggets",
      cost: 4,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 0,
      addSatiety: 1,
      addEnergy: 0,
      addHappiness: 0.5
    },
    {
      id: 4,
      title: "Cake",
      cost: 5,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 0,
      addSatiety: 1,
      addEnergy: 0,
      addHappiness: 0.5
    },
    {
      id: 5,
      title: "Jam",
      cost: 6,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 0,
      addSatiety: 1,
      addEnergy: 0,
      addHappiness: 0.5
    },
    {
      id: 6,
      title: "Sweets",
      cost: 7,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 0,
      addSatiety: 0.5,
      addEnergy: 0,
      addHappiness: 1
    },
    {
      id: 7,
      title: "Burger",
      cost: 8,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 0,
      addSatiety: 1,
      addEnergy: 0,
      addHappiness: 0.5
    },
    {
      id: 8,
      title: "Shawarma",
      cost: 9,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 0,
      addSatiety: 1,
      addEnergy: 0,
      addHappiness: 0.5
    },
    {
      id: 9,
      title: "Donut",
      cost: 10,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 0,
      addSatiety: 1,
      addEnergy: 0,
      addHappiness: 0.5
    }
  ]);
  const [meds, setMeds] = useState([
    {
      id: 0,
      title: "Pill",
      cost: 5,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 0.5,
      addSatiety: 0,
      addEnergy: 0,
      addHappiness: -0.5
    },
    {
      id: 1,
      title: "Strong pill",
      cost: 10,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 1,
      addSatiety: 0,
      addEnergy: 0,
      addHappiness: -1
    },
    {
      id: 2,
      title: "Syringe",
      cost: 7,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 1.5,
      addSatiety: 0,
      addEnergy: 0,
      addHappiness: -0.5
    },
    {
      id: 3,
      title: "Potion",
      cost: 6,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 0,
      addSatiety: 0,
      addEnergy: 1,
      addHappiness: -1
    },
    {
      id: 4,
      title: "Plantain",
      cost: 99,
      inBasket: 0,
      inRefrigerator: 0,

      addHealth: 5,
      addSatiety: 0,
      addEnergy: 0,
      addHappiness: 0
    }
  ]);
  // ########## ###### WINDOWS PARAMETERS ###### ##########
  const [windowStates, setWindowStates] = useState([
    {
      id: 0,
      name: "stats",
      zIndex: 0,
      hidden: "",

      animation: "appear"
    },
    {
      id: 1,
      name: "refrigerator",
      zIndex: 1,

      hidden: "",
      animation: "appear"
    },
    {
      id: 2,
      name: "foodStore",
      zIndex: 2,

      hidden: "hidden",
      animation: ""
    },
    {
      id: 3,
      name: "drugStore",
      zIndex: 3,

      hidden: "hidden",
      animation: ""
    },
    {
      id: 4,
      name: "dev",
      zIndex: 4,

      hidden: "",
      animation: "appear"
    }
  ]);
  // ########## ########## ########## ########## ##########
  // ########## ####### ROOMS PARAMETERS ####### ##########
  // ########## ########## ########## ########## ##########
  const [scene, setScene] = useState({
    activeRoom: "livingroom", //or kitchen\bedroom\bathroom
    animtion: "" //or come\leave
  });

  const value = {
    healthPoint: [health, setHealth],
    satietyPoint: [satiety, setSatiety],
    energyPoint: [energy, setEnergy],
    happinessPoint: [happiness, setHappiness],

    foodTotalVal: [foodTotal, setFoodTotal],
    medsTotalVal: [medsTotal, setMedsTotal],

    foodArr: [food, setFood],
    medsArr: [meds, setMeds],

    windowStatesVal: [windowStates, setWindowStates],
    sceneVal: [scene, setScene]
  };
  // ########## ########## ########## ########## ##########
  // ########## ######### CONTEXT INIT ######### ##########
  // ########## ########## ########## ########## ##########

  // ########## ########## ########## ########## ##########
  // ########## ######### MY FUNCTIONS ######### ##########
  // ########## ########## ########## ########## ##########
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
  // ########## ########## ########## ########## ##########
  // ########## ######### MY FUNCTIONS ######### ##########
  // ########## ########## ########## ########## ##########

  // ########## ########## ########## ########## ##########
  // ########## ####### STATS DECREASER ######## ##########
  // ########## ########## ########## ########## ##########
  useEffect(() => {
    const interval = setInterval(() => {
      adder("health", healthDecrease);
    }, updateSpeed);
    return () => clearInterval(interval);
  }, [health]);

  useEffect(() => {
    const interval = setInterval(() => {
      adder("satiety", satietyDecrease);
    }, updateSpeed);
    return () => clearInterval(interval);
  }, [satiety]);

  useEffect(() => {
    const interval = setInterval(() => {
      adder("energy", energyDecrease);
    }, updateSpeed);
    return () => clearInterval(interval);
  }, [energy]);

  useEffect(() => {
    const interval = setInterval(() => {
      adder("happiness", happinessDecrease);
    }, updateSpeed);
    return () => clearInterval(interval);
  }, [happiness]);

  let updateSpeed = 500;
  let hardness = 0.001;
  let avgUllage = Math.pow(
    1 + (40 - health - satiety - energy - happiness) / 40,
    3
  );
  let healthDecrease = -1 * hardness * avgUllage;
  let satietyDecrease = -9 * hardness * avgUllage;
  let energyDecrease = -3 * hardness * avgUllage;
  let happinessDecrease = -6 * hardness * avgUllage;
  // ########## ########## ########## ########## ##########
  // ########## ####### STATS DECREASER ######## ##########
  // ########## ########## ########## ########## ##########

  return (
    <>
      <div className="lines"></div>
      <CharacterState.Provider value={value}>
        <Rooms />

        <Stats />
        <DevWindow />
        <Store
          title={"Order some food"}
          header={
            <>
              <h5>🍔Here you can find something 🥦teasty🌮</h5>
              <p>
                Shop for groceries online and get everything delivered around
                your schedule. We make it easy to scratch one more thing off
                your to-do list.
              </p>
            </>
          }
          products={"food"}
        />
        <Store
          title={"Order some meds"}
          header={
            <>
              <h5>💉Here you can find something 💊medicinal👩‍⚕️</h5>
              <p>
                ChemistDirect makes online shopping easier than ever before.
                Browse among thousands of toiletries, medicines, and beauty
                products online on ChemistDirect.
              </p>
            </>
          }
          products={"meds"}
        />
        <Refrigerator />
      </CharacterState.Provider>
    </>
  );
}
