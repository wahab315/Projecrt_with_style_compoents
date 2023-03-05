import React from "react";
import { Button } from "../button";
import FromInput from "../forminput";

const CourseForm = () => {
  return (
    <>
      <form>
        <FromInput>
          <label>Course Goals</label>
          <input type="text" />
        </FromInput>
        <Button>Submit</Button>
      </form>
    </>
  );
};

export default CourseForm;
