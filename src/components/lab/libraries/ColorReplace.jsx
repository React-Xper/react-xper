import React from "react";
import { Main, Box, Heading, Text } from "grommet";
import { Stage, Layer, Rect } from "react-konva";
import Konva from "konva";

const stageConfig = {
  height: 0,
  width: 0,
  draggable: true,
};

const reducer = (state = stageConfig, action) => {
  return {
    ...state,
    ...action.payload,
  };
};

export default function ColorReplace() {
  const [stage, dispatchStage] = React.useReducer(reducer, stageConfig);
  const wrapperRef = React.useRef(null);
  const layerRef = React.useRef(null);

  React.useEffect(() => {
    const loadImage = new window.Image();
    loadImage.crossOrigin = "Anonymous";
    loadImage.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // make manual drawings
      ctx.drawImage(loadImage, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      const pix = imageData.data;
      const newColor = { r: 0, g: 0, b: 0, a: 0 };

      for (let i = 0, n = pix.length; i < n; i += 4) {
        const r = pix[i];
        const g = pix[i + 1];
        const b = pix[i + 2];

        // If its white or close then change it
        if (r >= 230 && g >= 230 && b >= 230) {
          // Change the white to whatever.
          pix[i] = newColor.r;
          pix[i + 1] = newColor.g;
          pix[i + 2] = newColor.b;
          pix[i + 3] = newColor.a;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      const image = new Konva.Image({
        image: canvas,
        draggable: true,
        height: canvas.height,
        width: canvas.width,
      });
      layerRef.current.add(image);

      // such as canvas is updated we need to redraw the layer
      layerRef.current.batchDraw();
    };
    loadImage.src = require("assets/img/rose.jpg");
  }, []);

  React.useEffect(() => {
    const handleResizeCanvas = () => {
      dispatchStage({
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

  return (
    <Main pad="small">
      <Heading level="2">Color Replace Experiment</Heading>
      <Box
        style={{ border: "2px solid black", minHeight: "80vh" }}
        ref={wrapperRef}
      >
        <Stage {...stage}>
          <Layer ref={layerRef}>
            <Rect
              x={0}
              y={0}
              width={wrapperRef.current && wrapperRef.current.clientWidth}
              height={wrapperRef.current && wrapperRef.current.clientHeight}
              fill="#333"
            />
          </Layer>
        </Stage>
      </Box>
      <Box style={{ marginTop: 30 }}>
        <Text>
          View code at{" "}
          <a href="https://github.com/m3yevn/react-xper/blob/master/src/components/lab/libraries/ColorReplace.jsx">
            Github
          </a>
        </Text>
      </Box>
    </Main>
  );
}
