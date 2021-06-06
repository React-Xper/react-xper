import React from "react";
import { Main, Box, Heading, Text } from "grommet";
import BehaviorTreeSidebar from "./BehaviorTreeSidebar";
import BehaviorTreePropertybar from "./BehaviorTreePropertybar";
import { useDispatch, useSelector } from "react-redux";

const { b3e = {}, angular = {} } = window;

export default () => {
  const b3Ref = React.useRef();
  const dispatch = useDispatch();
  const editor = useSelector((state) => state?.editor?.editor);
  const name = useSelector((state) => state?.editor?.draggingNode);

  React.useEffect(() => {
    window.editor = new b3e.editor.Editor();
    dispatch({ type: "EDITOR", payload: window.editor });
    angular.element(window.editor._game.canvas).attr("b3-drop-node", true);
    angular.element(window.editor._game.canvas).attr("id", "b3-canvas");

    window.editor.project.create();

    const b3Canvas = document.getElementById("b3-canvas");

    if (b3Ref.current) {
      b3Ref.current.appendChild(b3Canvas);
    }
  }, [dispatch]);

  const handleDrop = (e) => {
    const project = editor.project.get();
    const tree = project.trees.getSelected();
    const point = tree.view.getLocalPoint(e.clientX, e.clientY);
    tree.blocks.add(name, point.x, point.y);
    editor._game.canvas.focus();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Main pad="small">
      <Heading level="2">Behavior3 Experiment</Heading>
      <Box style={{ border: "2px solid black", minHeight: "80vh" }}>
        <BehaviorTreeSidebar />
        <div ref={b3Ref} onDragOver={handleDragOver} onDrop={handleDrop} />
        <BehaviorTreePropertybar />
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
};
