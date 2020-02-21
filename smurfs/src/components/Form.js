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

function SmurfForm({toggleEdit, isSubmitting, status}) {
  return (
    <StyledForm>
      Name<Field type="text" name="name" placeholder="Input smurf name" />
      Age<Field type="text" name="age" placeholder="Input smurf age" />
      Height<Field type="text" name="height" placeholder="Input smurf height" />
      <input disabled={isSubmitting} type="submit" value={toggleEdit ? "Update!" : "Add!"} />
      {status && <p>{status}</p>}
    </StyledForm>
  );
}

const FormikSmurfForm = withFormik({
  mapPropsToValues: ({name = '', age = '0', height = '0cm'}) => ({name: name, age: age, height: height}),
  handleSubmit(values, {setSubmitting, setStatus, props: {dispatch, id, toggleEdit}}) {
    if (toggleEdit) {
      axios.put(`http://localhost:3333/smurfs/${id}`, values)
        .then(({data}) => {
          dispatch(populateSmurfs(data));
          toggleEdit();
          setSubmitting(false);
          setStatus('');
        })
        .catch(e => {
          console.dir(e);
          setSubmitting(false);
          setStatus(e.response.data.Error);
        });
    } else {
      axios.post("http://localhost:3333/smurfs", values)
        .then(({data}) => {
          dispatch(populateSmurfs(data));
          setSubmitting(false);
          setStatus('');
        })
        .catch(e => {
          console.dir(e);
          setSubmitting(false);
          setStatus(e.response.data.Error);
        });
    }
  }
})(SmurfForm);

export default FormikSmurfForm;
