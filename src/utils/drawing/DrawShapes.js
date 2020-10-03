import Konva from "konva";
import { ShapeFactory } from "models/ShapeFactory";

export const clearShape = (layer) => {
  const stage = layer.getStage();

  const snapShot = layer.children.map((v) => v.attrs);
  layer.removeChildren();
  stage.batchDraw();
  return {
    operation: "delete",
    type: "multiple",
    payload: snapShot,
  };
};

export const undrawShape = (layer, id) => {
  const stage = layer.getStage();
  const selected = stage.findOne("#" + id);
  const selectedAttrs = JSON.parse(JSON.stringify(selected.attrs));

  selected.destroy();
  stage.batchDraw();

  return {
    operation: "delete",
    type: "singular",
    payload: selectedAttrs,
  };
};

export const drawShape = (layer, shapeType, option) => {
  let shape = null;

  const stage = layer.getStage();
  const pointer = {
    x: stage.getPointerPosition().x - stage.x(),
    y: stage.getPointerPosition().y - stage.y(),
  };

  switch (shapeType) {
    case "circle":
      shape = new Konva.Circle(
        ShapeFactory.circle(
          option?.undo?.pointer || pointer,
          option?.undo?.id || "C" + layer.children.length
        )
      );
      break;
    case "square":
      shape = new Konva.Rect(
        ShapeFactory.square(
          option?.undo?.pointer || pointer,
          option?.undo?.id || "S" + layer.children.length
        )
      );
      break;
    case "triangle":
      shape = new Konva.RegularPolygon(
        ShapeFactory.triangle(
          option?.undo?.pointer || pointer,
          option?.undo?.id || "T" + layer.children.length
        )
      );
      break;
    default:
      break;
  }

  if (!!shape) {
    shape.on("click", option.onClick);
    shape.on("dragstart", option.onDragStart);
    shape.on("dragend", option.onDragEnd);

    layer.add(shape);
    stage.batchDraw();

    return {
      operation: "add",
      type: "singular",
      payload: shape.attrs,
    };
  }
};

export const drawActivity = (layer, activity, option) => {
  const stage = layer.getStage();

  switch (activity.operation) {
    case "add":
      if (activity.type === "singular") {
        drawShape(layer, activity.payload.shape, {
          ...option,
          undo: {
            id: activity.payload.id,
            pointer: {
              x: activity.payload.x,
              y: activity.payload.y,
            },
          },
        });
      } else {
        activity.payload.forEach((act) => {
          drawShape(layer, act.shape, {
            ...option,
            undo: {
              id: act.id,
              pointer: { x: act.x, y: act.y },
            },
          });
        });
      }
      break;

    case "delete":
      if (activity.type === "singular") {
        const selected = stage.findOne("#" + activity.payload.id);
        selected.destroy();
      } else {
        activity.payload.forEach((act) => {
          const selected = stage.findOne("#" + act.id);
          selected.destroy();
        });
      }
      break;

    case "move":
      const selected = stage.findOne("#" + activity.payload.current.id);

      if (option?.type === "undo") {
        selected.x(activity.payload.prev.x);
        selected.y(activity.payload.prev.y);
      } else {
        selected.x(activity.payload.current.x);
        selected.y(activity.payload.current.y);
      }
      break;

    default:
      break;
  }

  stage.batchDraw();
};
