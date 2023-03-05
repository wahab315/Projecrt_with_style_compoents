import styled from "styled-components";

export const GoalItem = styled.li`
  margin: 1rem 0;
  background: #8b005d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;
  padding: 1rem 2rem;
  cursor: pointer;
`;

export const GoalList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const InputField = styled.div`
  margin: 0.5rem 0;

  & > label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & > input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & > input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
