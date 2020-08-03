import React from "react";
import { Main, Box, Heading, Paragraph, Text } from "grommet";
import { Stage, Layer, Circle, Arrow } from "react-konva";
import { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";

const initialState = {
  a: { x: 100, y: 100 },
  b: { x: 500, y: 100 },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "a":
      return { ...state, a: action.payload };
    case "b":
      return { ...state, b: action.payload };
    default:
      return state;
  }
};

export default function Konva() {
  const [circle, dispatchCircle] = useReducer(reducer, initialState);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const pointA = Object.values({ ...circle.a, x: circle.a.x + 50 });
    const pointB = Object.values({ ...circle.b, x: circle.b.x - 50 });
    setPoints([...pointA, ...pointB]);
  }, [circle.a, circle.b]);

  const stageConfig = {
    height: 1024,
    width: 1024,
  };

  const handleDrag = (e) => {
    dispatchCircle({
      type: e.currentTarget.attrs.id,
      payload: {
        x: e.currentTarget.attrs.x,
        y: e.currentTarget.attrs.y,
      },
    });
  };

  return (
    <Main pad="small">
      <Box>
        <Heading level="2">Konva Lab</Heading>
        <Paragraph fill={true}></Paragraph>
      </Box>
      <Box style={{ border: "2px solid black" }}>
        <Stage {...stageConfig}>
          <Layer>
            <Circle
              x={circle.a.x}
              y={circle.a.y}
              radius={50}
              draggable
              fill="skyblue"
              id="a"
              onDragMove={handleDrag}
            />
            <Circle
              x={circle.b.x}
              y={circle.b.y}
              radius={50}
              draggable
              fill="magenta"
              id="b"
              onDragMove={handleDrag}
            />
            <Arrow points={points} stroke={"black"} />
          </Layer>
        </Stage>
      </Box>
      <Box style={{ marginTop: 30 }}>
        <Text>
          View code at{" "}
          <a href="https://github.com/m3yevn/reacthesis/blob/master/src/components/lab/concepts/Konva.jsx">
            Github
          </a>
        </Text>
      </Box>
    </Main>
  );
}
