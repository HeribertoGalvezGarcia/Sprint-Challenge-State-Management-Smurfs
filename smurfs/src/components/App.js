import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import Smurfs from "./Smurfs";
import {populateSmurfs} from "../actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(populateSmurfs()), [dispatch]);

  return (
    <div>
      <Smurfs />
    </div>
  );
}

export default App;
