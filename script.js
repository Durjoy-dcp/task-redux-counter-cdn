const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//state
const initialState = {
  value: 0,
};

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

//reducer
function counterreducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.playload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.playload,
    };
  } else {
    return state;
  }
}
const store = Redux.createStore(counterreducer);
render();
function render() {
  const state = store.getState();
  counterEl.innerText = state.value;
}
store.subscribe(render);
incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: INCREMENT,
    playload: 5,
  });
});
decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: DECREMENT,
    playload: 2,
  });
});
