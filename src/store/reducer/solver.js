import { SET_CIRCUIT_SYMBOLS } from "../actions/solver";
import CircuitElements from "../../models/circiut-elements";

const initialState = {
  circuitData: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CIRCUIT_SYMBOLS:
      let circuitElements = [];
      let newElement;
      action.resData.forEach(element => {
        newElement = new CircuitElements(
          Math.floor(Math.random() * 100000).toString(),
          element[0],
          element[1],
          element[2],
          element[3],
          element[4],
          element[5],
          element[6]
        );
        circuitElements.push(newElement);
      });
      return {
        ...state,
        circuitData: circuitElements
      }
    default:
      return state;
  }
};