import { initialState } from "../index";

export default function dataReducer(state = initialState.data, action) {
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
