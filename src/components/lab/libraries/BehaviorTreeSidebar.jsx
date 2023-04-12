import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-xper-ui/dist/button";
import styled from "styled-components";

const SidePane = styled("div")`
  position: absolute;
  left: 0px;
  min-height: 100vh;
  min-width: 300px;
  overflow-y: scroll;
  background: gray;
  display: inline-flex;
  max-width: 300px;
  flex-direction: column;
`;

export default () => {
  const editor = useSelector((state) => state?.editor?.editor);
  const dispatch = useDispatch();
  const [nodes, setNodes] = React.useState();

  React.useEffect(() => {
    const trees = [];

    if (!!editor) {
      function _getTitle(node) {
        var title = node.title || node.name;
        title = title.replace(/(<\w+>)/g, function (match, key) {
          return "@";
        });
        return title;
      }

      const p = editor.project.get();
      const clonedNodes = {
        composite: [],
        decorator: [],
        action: [],
        condition: [],
      };

      p.nodes.each(function (node) {
        if (node.category === "tree") return;
        let list = clonedNodes[node.category];
        if (!list) return;
        list.push({
          name: node.name,
          title: _getTitle(node),
          isDefault: node.isDefault,
        });
      });

      setNodes(clonedNodes);

      const selected = p.trees.getSelected();
      p.trees.each(function (tree) {
        const root = tree.blocks.getRoot();
        trees.push({
          id: tree._id,
          name: root.title || "A behavior tree",
          active: tree === selected,
        });
      });
    }
  }, [editor]);

  const handleDragStart = (name) => (e) => {
    dispatch({ type: "DRAG", payload: name });
  };

  return (
    <SidePane>
      {!!nodes &&
        Object.keys(nodes).map((key) => (
          <div>
            <p style={{ textTransform: "capitalize" }}>{key}</p>
            {nodes?.[key].map((v) => (
              <Button onDragStart={handleDragStart(v?.name)} draggable={true}>
                {v?.title}
              </Button>
            ))}
          </div>
        ))}
    </SidePane>
  );
};
