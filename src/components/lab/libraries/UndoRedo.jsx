import { Heading } from "components/styles/Heading";
import { Box, Main, Text, Button } from "grommet";
import React from "react";
import { Layer, Stage } from "react-konva";
import {
  clearShape,
  drawShape,
  drawActivity,
  undrawShape,
} from "utils/drawing/DrawShapes";
import { Activity } from "utils/activity/activityStore";

const stageConfig = {
  height: 0,
  width: 0,
  draggable: true,
};

export default class UndoRedo extends React.Component {
  state = {
    stageConfig,
    drawingMode: "",
    selectedId: "",
  };

  constructor() {
    super();
    this.wrapperRef = React.createRef();
    this.layerRef = React.createRef();
    this.activity = new Activity(50);
  }

  get option() {
    return {
      onClick: this.handleShapeClick,
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd,
    };
  }

  componentDidMount() {
    this.handleResizeCanvas();
    window.addEventListener("resize", this.handleResizeCanvas);
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeCanvas);
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("keyup", this.handleKeyUp);
  }

  handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "z") {
      this.handleUndo();
    }
    if (e.ctrlKey && e.key === "y") {
      this.handleRedo();
    }
    if (e.key === "Delete") {
      this.handleDelete();
    }
  };

  handleDelete = () => {
    if (!!this.state.selectedId) {
      const latestActivity = undrawShape(
        this.layerRef.current,
        this.state.selectedId
      );
      this.activity.setCurrent(latestActivity);
      this.setState({
        selectedId: "",
      });
    }
  };

  handleUndo = () => {
    try {
      drawActivity(this.layerRef.current, this.activity.undo(), {
        ...this.option,
        type: "undo",
      });
    } catch (ex) {
      alert(ex.message);
    }
  };

  handleRedo = () => {
    try {
      drawActivity(this.layerRef.current, this.activity.redo(), {
        ...this.option,
        type: "redo",
      });
    } catch (ex) {
      alert(ex.message);
    }
  };

  handleResizeCanvas = () => {
    this.setState({
      stageConfig: {
        ...this.state.stageConfig,
        height: this.wrapperRef.current.clientHeight,
        width: this.wrapperRef.current.clientWidth,
      },
    });
  };

  handleAddCircle = () => {
    this.setState({
      drawingMode: "circle",
    });
  };

  handleAddSquare = () => {
    this.setState({
      drawingMode: "square",
    });
  };

  handleAddTriangle = () => {
    this.setState({
      drawingMode: "triangle",
    });
  };

  handleShapeClick = (e) => {
    e.cancelBubble = true;
    this.setState({
      selectedId: e.target.attrs.id,
    });
  };

  handleDragStart = (e) => {
    this.previousAttrs = JSON.parse(JSON.stringify(e.target.attrs));
  };

  handleDragEnd = (e) => {
    const latestActivity = {
      operation: "move",
      type: "singular",
      payload: {
        prev: JSON.parse(JSON.stringify(this.previousAttrs)),
        current: JSON.parse(JSON.stringify(e.target.attrs)),
      },
    };
    this.activity.setCurrent(latestActivity);
  };

  handleClear = () => {
    const latestActivity = clearShape(this.layerRef.current);
    this.activity.setCurrent(latestActivity);
  };

  handleDraw = () => {
    const latestActivity = drawShape(
      this.layerRef.current,
      this.state.drawingMode,
      this.option
    );
    this.activity.setCurrent(latestActivity);
  };

  render() {
    const { stageConfig, drawingMode, selectedId } = this.state;

    return (
      <Main pad="small">
        <Heading level="2">Konva Undo/Redo Experiment</Heading>
        <Text>Drawing Shape : {drawingMode || "--"}</Text>
        <Text>Selected ID : {selectedId || "--"}</Text>
        <Box
          style={{
            border: "2px solid black",
            minHeight: "80vh",
          }}
          ref={this.wrapperRef}
        >
          <Stage {...stageConfig} onClick={this.handleDraw}>
            <Layer ref={this.layerRef}></Layer>
          </Stage>
        </Box>
        <div className="reacthesis-konva-toolbox">
          <Button color="brand" label="Circle" onClick={this.handleAddCircle} />
          <Button color="brand" label="Square" onClick={this.handleAddSquare} />
          <Button
            color="brand"
            label="Triangle"
            onClick={this.handleAddTriangle}
          />
          <Button color="brand" label="Clear" onClick={this.handleClear} />
        </div>
        <Text>{JSON.stringify(this.state.activity)}</Text>
        <Box style={{ marginTop: 30 }}>
          <Text>
            View code at{" "}
            <a href="https://github.com/m3yevn/reacthesis/blob/master/src/components/lab/libraries/UndoRedo.jsx">
              Github
            </a>
          </Text>
        </Box>
      </Main>
    );
  }
}
