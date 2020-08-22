import React, { useReducer, useState, useEffect, useRef } from "react";
import { Main, Box, Heading, Text } from "grommet";
import { Stage, Layer, Circle, Arrow } from "react-konva";

const initialState = {
  a: { x: 100, y: 100 },
  b: { x: 500, y: 100 },
  stageConfig: {
    height: 0,
    width: 0,
    draggable: true,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "a":
      return { ...state, a: action.payload };
    case "b":
      return { ...state, b: action.payload };
    case "stageConfig":
      return {
        ...state,
        stageConfig: {
          ...state.stageConfig,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default function TwoCircle() {
  const [circle, dispatchCircle] = useReducer(reducer, initialState);
  const [points, setPoints] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const pointforA = { x: 0, y: 0 };
    const pointforB = { x: 0, y: 0 };

    if (circle.a.x > circle.b.x) {
      pointforA.x = circle.a.x - 50;
      pointforB.x = circle.b.x + 50;
    } else if (circle.a.x < circle.b.x) {
      pointforA.x = circle.a.x + 50;
      pointforB.x = circle.b.x - 50;
    } else {
      pointforA.x = circle.a.x;
      pointforB.x = circle.b.x;
    }
    pointforA.y = circle.a.y;
    pointforB.y = circle.b.y;

    const pointA = Object.values({ ...circle.a, ...pointforA });
    const pointB = Object.values({ ...circle.b, ...pointforB });

    setPoints([...pointA, ...pointB]);
  }, [circle.a, circle.b]);

  useEffect(() => {
    const handleResizeCanvas = () => {
      dispatchCircle({
        type: "stageConfig",
        payload: {
          height: wrapperRef.current.clientHeight,
          width: wrapperRef.current.clientWidth,
        },
      });
    };
    handleResizeCanvas();
    window.addEventListener("resize", handleResizeCanvas);

    return () => {
      window.removeEventListener("resize", handleResizeCanvas);
    };
  }, []);

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
      <Heading level="2">Two Circles Experiment</Heading>
      <Box
        style={{ border: "2px solid black", minHeight: "80vh" }}
        ref={wrapperRef}
      >
        <Stage {...circle.stageConfig}>
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
