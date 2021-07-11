// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########
import { useContext } from "react";

import Draggable from "react-draggable";

import CharacterState from "../CharacterStateContext";

import MyItems from "./MyItems";
// ########## ########## ########## ########## ##########
// ########## ########### IMPORTS ########### ###########
// ########## ########## ########## ########## ##########

function Refrigerator() {
  let myId = 1;
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

  const [food, setFood] = foodArr;
  const [meds, setMeds] = medsArr;

  const [windowStates, setWindowStates] = windowStatesVal;
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

  // ######### ########## TABS FUNCTION ######### #########
  const tabs = document.querySelectorAll("menu[role=tablist]");

  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    const tabButtons = tab.querySelectorAll("menu[role=tablist] > button");

    tabButtons.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        tabButtons.forEach((button) => {
          if (
            button.getAttribute("aria-controls") ===
            e.target.getAttribute("aria-controls")
          ) {
            button.setAttribute("aria-selected", true);
            openTab(e, tab);
          } else {
            button.setAttribute("aria-selected", false);
          }
        });
      })
    );
  }

  function openTab(event, tab) {
    const articles = tab.parentNode.querySelectorAll('[role="tabpanel"]');
    articles.forEach((p) => {
      p.setAttribute("hidden", true);
    });
    const article = tab.parentNode.querySelector(
      `[role="tabpanel"]#${event.target.getAttribute("aria-controls")}`
    );
    article.removeAttribute("hidden");
  }
  // ########## ########## ########## ########## ##########
  // ########## ######### MY FUNCTIONS ######### ##########
  // ########## ########## ########## ########## ##########

  return (
    <Draggable handle=".title-bar-text" bounds="body">
      <div
        onPointerDown={() => toFront(myId)}
        className={`
                window refrigerator
                ${windowStates[myId].animation}
                ${windowStates[myId].hidden}
                ${"zIndex" + windowStates[myId].zIndex}
            `}
      >
        <div className="title-bar">
          <div className="title-bar-text">My food and pills are here</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={() => close(myId)}></button>
          </div>
        </div>
        <div className="window-body">
          <section className="tabs">
            <menu role="tablist" aria-label="Sample Tabs">
              <button role="tab" aria-selected="true" aria-controls="tab-A">
                Food
              </button>
              <button role="tab" aria-controls="tab-B">
                Meds
              </button>
            </menu>

            <article role="tabpanel" id="tab-A">
              <div className="itemsContainer">
                <div className="itemsContainerWrapper">
                  <MyItems items={"food"} />
                </div>
              </div>
            </article>

            <article role="tabpanel" hidden id="tab-B">
              <div className="itemsContainer">
                <div className="itemsContainerWrapper">
                  <MyItems items={"meds"} />
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </Draggable>
  );
}
export default Refrigerator;
