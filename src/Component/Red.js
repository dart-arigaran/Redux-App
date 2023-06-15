// import React from "react";

// function red() {
//   //SELECTOR
//   const VADI_COM = "VADIVELU COMEDY";
//   const COUND_COM = "COUNDAMANI COMEDY";
//   return <div></div>;
// }

// export default red;
import createStore from "redux";

//reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};
//store
const store = createStore(reducer);

store.subscribe(() => {
  console.log("current state", store.getState());
});
//action
function Red() {
  store.dispatch({
    type: "INCREMENT",
    payload: 1,
  });

  store.dispatch({
    type: "INCREMENT",
    payload: 5,
  });

  store.dispatch({
    type: "DECREMENT",
    payload: 2,
  });
}

export default Red;
