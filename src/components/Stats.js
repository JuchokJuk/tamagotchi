// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########
import React, { useContext } from "react";

import Draggable from "react-draggable";

import CharacterState from "./CharacterStateContext";
// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########

function Stats() {
  const myId = 0;
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

  const [windowStates, setWindowStates] = windowStatesVal;
  // ########## ########## ########## ########## ##########
  // ########## ######### TAKE CONTEXT ######### ##########
  // ########## ########## ########## ########## ##########

  // ########## ########## ########## ########## ##########
  // ########## ########## DRAW STATS ########## ##########
  // ########## ########## ########## ########## ##########
  const healthLevel = [];
  for (let i = 1; i <= bufer(health); i++) {
    healthLevel.push(<div className="line" key={i}></div>);
  }
  const satietyLevel = [];
  for (let i = 1; i <= bufer(satiety); i++) {
    satietyLevel.push(<div className="line" key={i}></div>);
  }
  const energyLevel = [];
  for (let i = 1; i <= bufer(energy); i++) {
    energyLevel.push(<div className="line" key={i}></div>);
  }
  const happinessLevel = [];
  for (let i = 1; i <= bufer(happiness); i++) {
    happinessLevel.push(<div className="line" key={i}></div>);
  }

  function bufer(value) {
    if (value > 10) {
      value = 10;
    } else if (value < 0) {
      value = 0;
    } else {
      value = Math.round(value);
    }
    return value;
  }
  // ########## ########## ########## ########## ##########
  // ########## ########## DRAW STATS ########## ##########
  // ########## ########## ########## ########## ##########

  // ########## ########## ########## ########## ##########
  // ########## ######### MY FUNCTIONS ######### ##########
  // ########## ########## ########## ########## ##########
  function close() {
    windowStates[myId].animation = "disappear";
    setTimeout(function () {
      windowStates[myId].hidden = "hidden";
    }, 500);
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
  // ########## ########## ########## ########## ##########
  // ########## ######### MY FUNCTIONS ######### ##########
  // ########## ########## ########## ########## ##########

  return (
    <Draggable handle=".title-bar-text" bounds="body">
      <div
        onPointerDown={() => toFront(myId)}
        className={`
        window stats
        ${windowStates[myId].animation}
        ${windowStates[myId].hidden}
        ${"zIndex" + windowStates[myId].zIndex}
      `}
      >
        <div className="title-bar">
          <div className="title-bar-text">Stats</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={() => close(myId)}></button>
          </div>
        </div>
        <div className="window-body">
          <div className="statContainer">
            <div className="health"></div>

            <div className="progressbar">{healthLevel}</div>
          </div>
          <div className="statContainer">
            <div className="satiety"></div>

            <div className="progressbar">{satietyLevel}</div>
          </div>
          <div className="statContainer">
            <div className="energy"></div>

            <div className="progressbar">{energyLevel}</div>
          </div>
          <div className="statContainer">
            <div className="happiness"></div>

            <div className="progressbar">{happinessLevel}</div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
export default Stats;
