import React, { useState, useMemo } from "react";
import { Main, TextInput, Box, Heading, Paragraph, Text } from "grommet";

export default function Memoization() {
  const [length, setLength] = useState(3);
  const [name, setName] = useState("John Doe");

  return (
    <Main pad="xlarge">
      <Box>
        <Heading level="2">
          Memoization using useMemo, useCallback and React.memo
        </Heading>
        <Paragraph fill={true}>
          useMemo hook is use for returning memoized value of a function. It can
          be used similarly to shouldComponentUpdate lifecycle to prevent
          rerender of components which props does not change. Check in the
          console.log to see that fibonacci numbers won't rerender if name is
          changed and vice versa. useCallback is very similar to useMemo but it
          is used for functions instead of returning the cached values.
          React.memo is a wrapper function to memoize the pure function
          component to avoid re-rendering if the props won't change.
        </Paragraph>
      </Box>
      <Box>
        <label>Name</label>
        <TextInput value={name} onChange={(e) => setName(e.target.value)} />
        <label>Number</label>
        <TextInput
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <br />
        <NameDisplay name={name}></NameDisplay>
        <FibDisplay length={length}></FibDisplay>
      </Box>
      <Box style={{ marginTop: 30 }}>
        <Text>
          View code at{" "}
          <a href="https://github.com/m3yevn/reacthesis/blob/master/src/components/labs/Memoization.jsx">
            Github
          </a>
        </Text>
      </Box>
    </Main>
  );
}

function FibDisplay({ length }) {
  const numbers = useMemo(() => {
    console.log("Calculating numbers...");
    const result = [1, 1];
    for (let i = 2; i < length; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result;
  }, [length]);

  return (
    <p>
      {length} numbers of the fibonacci sequence: {numbers.join(", ")}
    </p>
  );
}

const NameDisplay = React.memo(function ({ name }) {
  console.log("Rendering name...");
  return <p>Your name is {name}</p>;
});
