// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########
import { useContext } from "react";

import Draggable from "react-draggable";

import CharacterState from "./CharacterStateContext";
// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########

function DevWindow() {
  const myId = 4;
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

  const [windowStates] = windowStatesVal;
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

  return (
    <Draggable handle=".title-bar-text" bounds="body">
      <div
        onPointerDown={() => toFront(myId)}
        className={`
        window 
        ${windowStates[myId].animation}
        ${windowStates[myId].hidden}
        ${"zIndex" + windowStates[myId].zIndex}
      `}
      >
        <div className="title-bar">
          <div className="title-bar-text">Some buttons for devs</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={() => close(myId)}></button>
          </div>
        </div>
        <div className="window-body">
          <section className="field-row">
            <button onClick={() => adder("health", -1)}>Hurt</button>
            <button onClick={() => adder("health", 1)}>Heal</button>
          </section>
          <section className="field-row">
            <button onClick={() => adder("satiety", -1)}>Starve</button>
            <button onClick={() => adder("satiety", 1)}>Feed</button>
          </section>

          <section className="field-row">
            <button onClick={() => adder("energy", -1)}>Not sleep</button>
            <button onClick={() => adder("energy", 1)}>Sleep</button>
          </section>
          <section className="field-row">
            <button onClick={() => adder("happiness", -1)}>Be sad</button>
            <button onClick={() => adder("happiness", 1)}>Rejoice</button>
          </section>
          <section className="field-row">
            <section
              className="field-row"
              style={{
                width: `100%`,
                boxShadow: `inset -1px -1px #dfdfdf, inset 1px 1px grey`,
                background: `linear-gradient(to right,  var(--themeColor) ${
                  health * 10
                }%,silver ${health * 10}%)`,
                height: 10 + "px"
              }}
            ></section>
            <p
              style={{
                width: `40px`,
                textAlign: `right`
              }}
            >
              {Math.round(health * 100) / 100}
            </p>
          </section>
          <section className="field-row">
            <section
              className="field-row"
              style={{
                width: `100%`,
                boxShadow: `inset -1px -1px #dfdfdf, inset 1px 1px grey`,
                background: `linear-gradient(to right,  var(--themeColor) ${
                  satiety * 10
                }%,silver ${satiety * 10}%)`,
                height: 10 + "px"
              }}
            ></section>
            <p
              style={{
                width: `40px`,
                textAlign: `right`
              }}
            >
              {Math.round(satiety * 100) / 100}
            </p>
          </section>
          <section className="field-row">
            <section
              className="field-row"
              style={{
                width: `100%`,
                boxShadow: `inset -1px -1px #dfdfdf, inset 1px 1px grey`,
                background: `linear-gradient(to right,  var(--themeColor) ${
                  energy * 10
                }%,silver ${energy * 10}%)`,
                height: 10 + "px"
              }}
            ></section>
            <p
              style={{
                width: `40px`,
                textAlign: `right`
              }}
            >
              {Math.round(energy * 100) / 100}
            </p>
          </section>
          <section className="field-row">
            <section
              className="field-row"
              style={{
                width: `100%`,
                boxShadow: `inset -1px -1px #dfdfdf, inset 1px 1px grey`,
                background: `linear-gradient(to right,  var(--themeColor) ${
                  happiness * 10
                }%,silver ${happiness * 10}%)`,
                height: 10 + "px"
              }}
            ></section>
            <p
              style={{
                width: `40px`,
                textAlign: `right`
              }}
            >
              {Math.round(happiness * 100) / 100}
            </p>
          </section>
        </div>
      </div>
    </Draggable>
  );
}
export default DevWindow;
