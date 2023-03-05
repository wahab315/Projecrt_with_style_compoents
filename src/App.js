import "./App.css";
import CourseForm from "./components/courseform";
import CourseGoalList from "./components/coursegoallist";

function App() {
  const courseGoals = [
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ];

  return (
    <>
      <div>
        <section id="goal-form">
          <CourseForm />
        </section>
        <section id="goals">
          <CourseGoalList items={courseGoals} />
        </section>
      </div>
    </>
  );
}

export default App;
