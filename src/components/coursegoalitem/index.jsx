import React from "react";
import { GoalItem } from "../../style";

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
    console.log("hello World");
  };

  return (
    <>
      <GoalItem onClick={deleteHandler}>{props.children}</GoalItem>
    </>
  );
};

export default CourseGoalItem;
