// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########
import { useContext, useState, useEffect } from "react";

import CharacterState from "./CharacterStateContext";
// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########

function SceneInterface({ room }) {
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
    windowStatesVal,
    sceneVal
  } = useContext(CharacterState);

  const [scene, setScene] = sceneVal;
  // ########## ########## ########## ########## ##########
  // ########## ######### TAKE CONTEXT ######### ##########
  // ########## ########## ########## ########## ##########

  // ########## ########## ########## ########## ##########
  // ########## ######### MY FUNCTIONS ######### ##########
  // ########## ########## ########## ########## ##########
const D = document.body;
function setThemeColor(room){
  if(room === "kitchen"){
    D.style.setProperty('--themeColor', `hsl(160, 52%, 30%)`);
    D.style.setProperty('--themeColorLight', `hsl(160, 40%, 53%)`);
  }else if(room === `bedroom`){
    D.style.setProperty('--themeColor', `hsl(30, 52%, 30%)`);
    D.style.setProperty('--themeColorLight', `hsl(30, 40%, 53%)`);
  } else if(room === `bathroom`){
    D.style.setProperty('--themeColor', `hsl(180, 52%, 30%)`);
    D.style.setProperty('--themeColorLight', `hsl(180, 40%, 53%)`);
  }else if (room === `livingroom`){
    D.style.setProperty('--themeColor', `hsl(0, 52%, 30%)`);
    D.style.setProperty('--themeColorLight', `hsl(0, 40%, 53%)`);
  }
}
  function goLeft() {
    if (room === "kitchen") {
      setScene({
        activeRoom: "bathroom",
        animtion: ""
      });
      setThemeColor("bathroom");
    }
    if (room === "livingroom") {
      setScene({
        activeRoom: "kitchen",
        animtion: ""
      });
      setThemeColor("kitchen");
    }
    if (room === "bedroom") {
      setScene({
        activeRoom: "livingroom",
        animtion: ""
      });
      setThemeColor("livingroom");
    }
    if (room === "bathroom") {
      setScene({
        activeRoom: "bedroom",
        animtion: ""
      });
      setThemeColor("bedroom");
    }
    console.log(scene);
  }
  function goRight() {
    if (room === "kitchen") {
      setScene({
        activeRoom: "livingroom",
        animtion: ""
      });
      setThemeColor("livingroom");
    }
    if (room === "livingroom") {
      setScene({
        activeRoom: "bedroom",
        animtion: ""
      });
      setThemeColor("bedroom");
    }
    if (room === "bedroom") {
      setScene({
        activeRoom: "bathroom",
        animtion: ""
      });
      setThemeColor("bathroom");
    }
    if (room === "bathroom") {
      setScene({
        activeRoom: "kitchen",
        animtion: ""
      });
      setThemeColor("kitchen");
    }
    console.log(scene);
  }
  // ########## ########## ########## ########## ##########
  // ########## ######### MY FUNCTIONS ######### ##########
  // ########## ########## ########## ########## ##########
  return (
    <>
      <div class="sceneInterfaceContainer">
        <div class="moneyContainer">
          <div class="money">
            <h3>999 $</h3>
          </div>
        </div>
        <div class="buttonsContainer">
          <div class="leftButton" onClick={() => goLeft()}>
            <div class="roomIcon"></div>
            <div class="changeRoomButton">
              <h5>Go left</h5>
            </div>
          </div>
          <div class="rightButton" onClick={() => goRight()}>
            <div class="roomIcon"></div>
            <div class="changeRoomButton">
              <h5>Go right</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SceneInterface;
