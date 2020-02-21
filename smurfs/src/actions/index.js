import axios from "axios";

const POPULATE_SMURFS = "POPULATE_SMURFS";

function populateSmurfs() {
  return dispatch => {
    axios.get("http://localhost:3333/smurfs")
      .then(({data}) => dispatch({type: POPULATE_SMURFS, payload: data}))
      .catch(e => console.log(e));
  }
}

export {POPULATE_SMURFS, populateSmurfs};
