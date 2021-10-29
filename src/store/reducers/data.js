import { initialState } from "../index";

export default function dataReducer(state = initialState.data, action) {
  console.log(action, state);

  const { type, payload } = action;

  switch (type) {
    case "FETCH_DATA":
      return {
        ...state,
        elements: payload,
      };
    default:
      return state;
  }
}
