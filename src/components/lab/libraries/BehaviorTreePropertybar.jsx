import React from "react";
import { useSelector } from "react-redux";
import TextField from "@bit/m3yevn.react-xper-ui.text-input";
import styled from "styled-components";
import Button from "@bit/m3yevn.react-xper-ui.button";

const SidePane = styled("div")`
  position: absolute;
  right: 0px;
  min-height: 100vh;
  min-width: 300px;
  overflow-y: scroll;
  background: gray;
  display: inline-flex;
  flex-direction: column;
  padding: 8px;
`;

export default () => {
  const editor = useSelector((state) => state?.editor?.editor);
  const [selected, setSelected] = React.useState();

  React.useEffect(() => {
    const handleEvent = () => {
      const project = editor.project.get();
      const tree = project.trees.getSelected();
      const selected = tree.blocks.getSelected()?.[0];

      if (!!selected) {
        setSelected(selected);
      }
    };

    if (!!editor?.on) {
      editor.on("blockselected", handleEvent);
      editor.on("blockdeselected", handleEvent);
      editor.on("blockremoved", handleEvent);
      editor.on("treeselected", handleEvent);
      editor.on("nodechanged", handleEvent);
    }

    return () => {
      if (!!editor?.off) {
        editor.off("blockselected", handleEvent);
        editor.off("blockdeselected", handleEvent);
        editor.off("blockremoved", handleEvent);
        editor.off("treeselected", handleEvent);
        editor.off("nodechanged", handleEvent);
      }
    };
  }, [editor]);

  const handleSave = () => {
    const project = editor.project.get();
    const tree = project.trees.getSelected();
    tree.blocks.update(tree.blocks.getSelected()?.[0], selected);
  };

  const handleChange = (e) => {
    setSelected({ ...selected, description: e.target.value });
  };

  return (
    <SidePane>
      <div>Title</div>
      <TextField value={selected?.title} />
      <hr />
      <div>Description</div>
      <TextField value={selected?.description} onChange={handleChange} />
      <hr />
      <Button disabled={!selected?.title} onClick={handleSave}>
        Save
      </Button>
    </SidePane>
  );
};
