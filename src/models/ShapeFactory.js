const defaultShape = (x, y) => {
  return { x, y, draggable: true };
};

export const ShapeFactory = {
  circle: ({ x, y }, id) => {
    return {
      id,
      ...defaultShape(x, y),
      shape: "circle",
      radius: 20,
      fill: "limegreen",
    };
  },

  square: ({ x, y }, id) => {
    return {
      id,
      ...defaultShape(x, y),
      shape: "square",
      width: 30,
      height: 30,
      fill: "magenta",
    };
  },

  triangle: ({ x, y }, id) => {
    return {
      id,
      ...defaultShape(x, y),
      shape: "triangle",
      height: 30,
      width: 30,
      sides: 3,
      fill: "maroon",
    };
  },
};
