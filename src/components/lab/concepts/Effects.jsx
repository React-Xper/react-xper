import React, { useState, useEffect } from "react";
import { Main, TextInput, Box, Heading, Paragraph, Text } from "grommet";

export function Effects() {
  const [c, setC] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const handleOnChangeA = (e) => {
    setA(e.target.value);
  };

  const handleOnChangeB = (e) => {
    setB(e.target.value);
  };

  useEffect(() => {
    const c = parseInt(a) + parseInt(b);
    setC(c);

    return () => {
      //clean up here.
    };
  }, [a, b]);

  return (
    <Main pad="xlarge">
      <Box>
        <Heading level="2">Side effects using useEffect hook</Heading>
        <Paragraph fill={true}>
          This hook is use for doing side effects in stateless functional
          components. It is dependent on its array of dependencies to trigger
          again. In the below example, a and b are passed as dependencies in
          useEffect hook to add two values and set value of c.
          <br />
          <br />
          Often, effects create resources that need to be cleaned up before the
          component leaves the screen, such as a subscription or timer ID. To do
          this, the function passed to useEffect may return a clean-up function.
          Example use case is unsubscribing a subscription.
        </Paragraph>
      </Box>
      <Box>
        <label>A</label>
        <TextInput value={a} onChange={handleOnChangeA} />
        <label>B</label>
        <TextInput value={b} onChange={handleOnChangeB} />
        <label>=</label>
        <label>C</label>
        <label>{c}</label>
      </Box>
      <Box style={{ marginTop: 30 }}>
        <Text>
          View code at{" "}
          <a href="https://github.com/m3yevn/reacthesis/blob/master/src/components/labs/Effects.jsx">
            Github
          </a>
        </Text>
      </Box>
    </Main>
  );
}
