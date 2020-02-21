import React from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import Smurf from "./Smurf";
import FormikSmurfForm from "./Form";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function Smurfs() {
  const dispatch = useDispatch();
  const smurfs = useSelector(({smurfs}) => smurfs);

  return (
    <Container>
      {smurfs.map(smurf => <Smurf key={smurf.id} {...smurf}/>)}
      <FormikSmurfForm dispatch={dispatch} />
    </Container>
  );
}

export default Smurfs;
