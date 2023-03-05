import React from "react";
import { GoalItem } from "../../style";

const CourseGoalItem = (props) => {
  return (
    <>
      <GoalItem>{props.children}</GoalItem>
    </>
  );
};

export default CourseGoalItem;
