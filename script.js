const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//state
const initialState = {
  value: 0,
};

//reducer
function counterreducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
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
    type: "increment",
  });
});
decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
