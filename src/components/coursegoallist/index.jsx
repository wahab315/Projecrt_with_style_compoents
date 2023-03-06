import React from "react";
import { GoalList } from "../../style";
import CourseGoalItem from "../coursegoalitem";

const CourseGoalList = (props) => {
  return (
    <>
      <GoalList>
        {props.items.map((goal) => (
          <CourseGoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
            {goal.text}
          </CourseGoalItem>
        ))}
      </GoalList>
    </>
  );
};

export default CourseGoalList;
