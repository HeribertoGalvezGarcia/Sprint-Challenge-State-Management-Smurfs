import React, {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {populateSmurfs} from "../actions";
import FormikSmurfForm from "./Form";

const StyledSmurf = styled.div`
  width: 30%;
  height: 200px;
  margin: 5px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: #444;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Name = styled.h3`
  margin: 0;
  padding: 0;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
`;

function Smurf({id, name, age, height}) {
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  function deleteSmurf() {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(({data}) => dispatch(populateSmurfs(data)))
  }
  function toggleEdit() {
    setEditing(edit => !edit);
  }
  if (editing) return <FormikSmurfForm  {...{id, name, age, height, dispatch, toggleEdit}} />;

  return (
    <StyledSmurf>
      <Name>{name}</Name>
      <Text>Age: {age}</Text>
      <Text>Height: {height}</Text>
      <div>
        <button onClick={deleteSmurf}>Delete</button>
        <button onClick={toggleEdit}>Edit</button>
      </div>
    </StyledSmurf>
  );
}

export default Smurf;
