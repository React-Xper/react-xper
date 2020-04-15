import React, { useState, useEffect, useMemo } from 'react';
import { Main, TextInput, Box, Heading, Paragraph, Button } from 'grommet';

export function UseMemo() {
  const [c, setC] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [time, setTime] = useState(0);

  const [aMemo, setAMemo] = useState(0);
  const [bMemo, setBMemo] = useState(0);

  const handleOnChangeA = (e) => {
    setA(e.target.value);
  }

  const handleOnChangeB = (e) => {
    setB(e.target.value);
  }

  const combine = (a, b) => {
    return parseInt(a) + parseInt(b);
  }

  const normalCombine = () => {
    var t0 = performance.now();
    setC(combine(a, b));
    var t1 = performance.now();
    setTime(t1 - t0);
  }

  const memoCombine = () => {
    var t0 = performance.now();
    setAMemo(a);
    setBMemo(b);
    var t1 = performance.now();
    setTime(t1 - t0);
  }

  useMemo(() => {
    setC(combine(aMemo, bMemo));
  }, [aMemo, bMemo]);

  return (
    <Main pad="xlarge">
      <Box>
        <Heading level="2">useMemo hook</Heading>
        <Paragraph fill="true">
          This hook is use for returning memoized value of a function.
        </Paragraph>
      </Box>
      <label>A</label>
      <TextInput value={a} onChange={handleOnChangeA} />
      <label>B</label>
      <TextInput value={b} onChange={handleOnChangeB} />
      <br />
      <Button label="Normal Calculate" onClick={normalCombine} />
      <Button label="Memo Calculate" onClick={memoCombine} />
      <label>=</label>
      <label>C</label>
      <label>{c}</label>
      <label>Duration: {time}</label>
    </Main>
  )
}