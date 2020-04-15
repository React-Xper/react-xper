import React, { useState, useEffect } from 'react';
import { Main, TextInput, Box, Heading, Paragraph } from 'grommet';

export function UseEffect() {
  const [c, setC] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const handleOnChangeA = (e) => {
    setA(e.target.value);
  }

  const handleOnChangeB = (e) => {
    setB(e.target.value);
  }

  useEffect(() => {
    const c = parseInt(a) + parseInt(b);
    setC(c);
  }, [a, b]);

  return (
    <Main pad="xlarge">
      <Box>
        <Heading level="2">useEffect hook</Heading>
        <Paragraph fill="true">
          This hook is use for doing side effects in stateless functional components.
          It is dependent on its array of dependencies to trigger again.
          In the below example, a and b are passed as dependencies in useEffect hook to add two values and set value of c.
          <br />
          <br />
          <code>
            {`useEffect(() => `}
            <br />
            {`const c = parseInt(a) + parseInt(b);`}
            <br />
            {`setC(c);`}
            <br />
            {`, [a, b]);`}
          </code>
        </Paragraph>
      </Box>
      <label>A</label>
      <TextInput value={a} onChange={handleOnChangeA} />
      <label>B</label>
      <TextInput value={b} onChange={handleOnChangeB} />
      <label>=</label>
      <label>C</label>
      <label>{c}</label>
    </Main>
  )
}