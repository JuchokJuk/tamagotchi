// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########
import {
  useContext,
  useRef,
  useLayoutEffect,
  useState,
  useEffect
} from "react";

import CharacterState from "./CharacterStateContext";
import SceneInterface from "./SceneInterface";
// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########

function Rooms() {
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

  const [windowStates, setWindowStates] = windowStatesVal;
  const [scene, setScene] = sceneVal;
  // ########## ########## ########## ########## ##########
  // ########## ######### TAKE CONTEXT ######### ##########
  // ########## ########## ########## ########## ##########

  // ########## ########## ########## ########## ##########
  // ########## ######### MY FUNCTIONS ######### ##########
  // ########## ########## ########## ########## ##########
  function open() {
    toFront(0);
    windowStates[0].hidden = "";
    windowStates[0].animation = "appear";
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

  function livingroomToKitchen() {
    setScene({
      activeRoom: "kitchen", //or kitchen\bedroom\bathroom
      animtion: "" //or come\leave
    });
    console.log(scene);
  }

  // ########## ########## ########## ########## ##########
  // ########## ######### MY FUNCTIONS ######### ##########
  // ########## ########## ########## ########## ##########

  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  useLayoutEffect(() => {
    if (windowWidth >= 26 && windowHeight >= 26) {
      if ((windowWidth - 26) / (windowHeight - 26) > 1 / 1.75) {
        setDimensions({
          height: windowHeight - 26,
          width: (windowHeight - 26) / 1.75
        });
      } else {
        setDimensions({
          width: windowWidth - 26,
          height: (windowWidth - 26) * 1.75
        });
      }
    } else {
      setDimensions({
        width: 0,
        height: 0
      });
    }
  }, [windowWidth, windowHeight]);

  return (
    <>
      <div className="window noShadow">
        <div className="window-body">
          <div className="roomContainer">
            <div
              className={`
              room
               ${scene.activeRoom}
               `}
              ref={targetRef}
              style={{
                width: dimensions.width + "px",
                height: dimensions.height + "px"
              }}
            >
              <div
                style={{
                  width: dimensions.width / 3 + "px",
                  height: dimensions.width / 1.5 + "px",
                  magrinLeft: 0 + "px",
                  marginTop: dimensions.width / 1 + "px"
                }}
                onClick={() => open()}
                className="cat"
              ></div>
              <SceneInterface room={scene.activeRoom} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Rooms;
