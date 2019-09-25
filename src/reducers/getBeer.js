import { beerConstants } from "../constants";
const initialState = {
  beers: {},
  addFbeers: {},
  favorites: {}
};
export const getBeer = (state = { initialState }, action) => {
  switch (action.type) {
    case beerConstants.GET_BEERS:
      return Object.assign({}, state, { beers: action.payload });

    case beerConstants.GET_BEER_BY_NAME:
      return Object.assign({}, state, { beers: action.payload });

    case beerConstants.ADD_FAVORITE:
      if (
        state === undefined &&
        state === "" &&
        state.some(el => el === action.payload)
      ) {
        return state;
      } else {
        const addFbeers = {
          ...state.addFbeers,
          [action.payload.id]: action.payload
        };
        const favorites = {...state.favorites, [action.payload.id] : action.payload}
        // console.log("reducers : ", favorites);
        return Object.assign({}, state, {
          addFbeers: addFbeers,
          favorites: favorites
        });
      }
    case beerConstants.REMOVE_FAVORITE:
      if (
        state === undefined &&
        state === "" &&
        state.some(el => el === action.payload)
      ) {
        return state;
      } else {
        const want = Object.values(state.addFbeers).filter(
          el => parseInt(el.id) !== parseInt(action.payload)
        );
        return Object.assign({}, state, {
          addFbeers: want,
          favorites: want
        });
      }
    default:
      return state;
  }
};