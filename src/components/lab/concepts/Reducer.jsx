import React from "react";
import { Main, Box, Heading, Paragraph, Text, Button } from "grommet";
import { useReducer } from "react";

const initialState = {
  b1: "red",
  b2: "purple",
  b3: "blue",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "b1":
      return { ...state, b1: state.b1 === "red" ? "green" : "red" };
    case "b2":
      return { ...state, b2: state.b2 === "purple" ? "orange" : "purple" };
    case "b3":
      return { ...state, b3: state.b3 === "blue" ? "pink" : "blue" };
    default:
      return state;
  }
};

export default function Reducer() {
  const [colors, dispatch] = useReducer(reducer, initialState);

  return (
    <Main pad="xlarge">
      <Box>
        <Heading level="2">Complex states using useReducer hook</Heading>
        <Paragraph fill={true}>
          {`An alternative to useState. Accepts a reducer of type (state, action)
          => newState, and returns the current state paired with a dispatch
          method. (If you’re familiar with Redux, you already know how this
          works.)`}
        </Paragraph>
      </Box>

      <Box className="reacthesis-concept-reducer__button-wrapper">
        <Paragraph style={{ backgroundColor: "whitesmoke", padding: "4px" }}>
          Current State = <br/>{JSON.stringify(colors)}
        </Paragraph>
        <Button
          label="Click to toggle between red and green"
          color={colors.b1}
          onClick={() => dispatch({ type: "b1" })}
        />
        <Button
          label="Click to toggle between purple and orange"
          color={colors.b2}
          onClick={() => dispatch({ type: "b2" })}
        />
        <Button
          label="Click to toggle between blue and pink"
          color={colors.b3}
          onClick={() => dispatch({ type: "b3" })}
        />
      </Box>
      <Box style={{ marginTop: 30 }}>
        <Text>
          View code at{" "}
          <a href="https://github.com/m3yevn/reacthesis/blob/master/src/components/lab/concepts/Reducer.jsx">
            Github
          </a>
        </Text>
      </Box>
    </Main>
  );
}
