import React, { useState } from "react";
import { Button } from "../button";
import FromInput from "../forminput";

const CourseForm = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <FromInput>
          <label>Course Goals</label>
          <input type="text" onChange={goalInputChangeHandler} />
        </FromInput>
        <Button type="submit"> Submit</Button>
      </form>
    </>
  );
};

export default CourseForm;
