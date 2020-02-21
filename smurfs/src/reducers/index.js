import {POPULATE_SMURFS} from "../actions";

const initial_state = {smurfs: []};

function reducer(state = initial_state, {type, payload}){
  switch (type) {
    case POPULATE_SMURFS:
      return {
        ...state,
        smurfs: payload
      };
    default:
      return {...state};
  }
}

export default reducer;
