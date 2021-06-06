import React, { useState } from "react";
import { Main, Box, Heading, Paragraph, Text, Button } from "grommet";
import _cloneDeep from "lodash/cloneDeep";

const LayoutWithoutRenderProps = ({ cartItems, color }) => {
  return (
    <Box style={{ border: "solid 2px black" }}>
      <CartItems cartItems={cartItems} color={color} />
    </Box>
  );
};

const LayoutWithRenderProps = ({ render }) => {
  return <Box style={{ border: "solid 2px black" }}>{render()}</Box>;
};

const CartItems = ({ cartItems, color }) => {
  return (
    <ul style={{ color }}>
      {!!cartItems?.length
        ? cartItems.map((item, i) => <li key={i}>{item}</li>)
        : "Empty cart 🛒"}
    </ul>
  );
};

export default () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (e) => {
    const index = cartItems.findIndex((item) => item === e.target.innerText);
    const newCartItems = _cloneDeep(cartItems);

    if (index >= 0) {
      newCartItems.splice(index, 1);
    } else {
      newCartItems.push(e.target.innerText);
    }

    setCartItems(newCartItems);
  };

  return (
    <Main pad="xlarge">
      <Box>
        <Heading level="2">Avoid props drilling with Render Props</Heading>
        <Paragraph fill={true}>
          In a typical React application, data is passed top-down (parent to
          child) via props, but this can be cumbersome for certain types of
          props. If a UI design is required to be nested such as dialog or
          popover, those props has to be drilled down each and every level.
          <br />
          <br />
          To avoid this, we can use a pattern called Render props which utilizes
          the <code>render</code> function props and then execute them instead
          of drilling props.
          <br />
          <br />
          This is an alternative way for Composition.
        </Paragraph>
      </Box>
      <Box style={{ marginBottom: "30px" }}>
        <Button color="brand" label="Fruit 🍑 " onClick={handleAddToCart} />
        <Button color="brand" label="Meat 🥩" onClick={handleAddToCart} />
        <Button color="brand" label="Beer 🍺" onClick={handleAddToCart} />
        <Button color="brand" label="Vege 🥬" onClick={handleAddToCart} />
      </Box>
      <Box>
        <strong>Shopping Cart without Render props inside layout</strong>
        <br/>
        It needs multiple level drilling of cartItems props and color props to
        assign font color.
        <LayoutWithoutRenderProps color="maroon" cartItems={cartItems} />
        <hr />
      </Box>
      <Box>
        <strong>Shopping Cart with Render props inside layout</strong>
        <br/>
        It only needs one level props assigning.
        <LayoutWithRenderProps
          render={() => <CartItems cartItems={cartItems} color={"limegreen"} />}
        />
        <hr />
      </Box>
      <Box style={{ marginTop: 30 }}>
        <Text>
          View code at{" "}
          <a href="https://github.com/m3yevn/react-xper/blob/master/src/components/lab/concepts/RenderProps.jsx">
            Github
          </a>
        </Text>
      </Box>
    </Main>
  );
};
