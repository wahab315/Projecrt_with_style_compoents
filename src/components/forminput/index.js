import React from "react";
import { InputField } from "../../style";

const FromInput = (props) => {
  return (
    <>
      <InputField>{props.children}</InputField>
    </>
  );
};

export default FromInput;
