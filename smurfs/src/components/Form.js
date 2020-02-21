import React from "react";
import axios from "axios";
import {Form, Field, withFormik} from "formik";
import {populateSmurfs} from "../actions";
import styled from "styled-components";

const StyledForm = styled(Form)`
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

function SmurfForm({toggleEdit}) {
  return (
    <StyledForm>
      Name<Field type="text" name="name" placeholder="Input smurf name" />
      Age<Field type="text" name="age" placeholder="Input smurf age" />
      Height<Field type="text" name="height" placeholder="Input smurf height" />
      <input type="submit" value={toggleEdit ? "Update!" : "Add!"} />
    </StyledForm>
  );
}

const FormikSmurfForm = withFormik({
  mapPropsToValues: ({name, age, height}) => ({name: name || '', age: age || '0', height: height || '0cm'}),
  handleSubmit(values, {props: {dispatch, id, toggleEdit}}) {
    if (toggleEdit) {
      axios.put(`http://localhost:3333/smurfs/${id}`, values)
        .then(({data}) => {dispatch(populateSmurfs(data)); toggleEdit()})
        .catch(e => console.dir(e));
    } else {
      axios.post("http://localhost:3333/smurfs", values)
        .then(({data}) => dispatch(populateSmurfs(data)))
        .catch(e => console.dir(e));
    }
  }
})(SmurfForm);

export default FormikSmurfForm;
