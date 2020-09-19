import React, { useState } from "react";
import { Main, Box, Heading, Paragraph, Text, Button } from "grommet";
import _cloneDeep from "lodash/cloneDeep";

const LayoutWithoutComposition = ({ cartItems }) => {
  return (
    <Box style={{ border: "solid 2px black" }}>
      <CartItems cartItems={cartItems} />
    </Box>
  );
};

const LayoutWithComposition = ({ children }) => {
  return <Box style={{ border: "solid 2px black" }}>{children}</Box>;
};

const CartItems = ({ cartItems }) => {
  return (
    <ul>
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
        <Heading level="2">Avoid props drilling with Composition</Heading>
        <Paragraph fill={true}>
          In a typical React application, data is passed top-down (parent to
          child) via props, but this can be cumbersome for certain types of
          props. If a UI design is required to be nested such as dialog or
          popover, those props has to be drilled down each and every level.
          <br />
          <br />
          To avoid this, we can use a pattern called Composition which utilizes
          the <code>children</code> props and then render them instead of
          drilling props.
        </Paragraph>
      </Box>
      <Box style={{ marginBottom: "30px" }}>
        <Button color="brand" label="Fruit 🍑 " onClick={handleAddToCart} />
        <Button color="brand" label="Meat 🥩" onClick={handleAddToCart} />
        <Button color="brand" label="Beer 🍺" onClick={handleAddToCart} />
        <Button color="brand" label="Vege 🥬" onClick={handleAddToCart} />
      </Box>
      <Box>
        <strong>Shopping Cart without Composition inside layout</strong>
        <br />
        It needs multiple level drilling of cartItems props.
        <LayoutWithoutComposition cartItems={cartItems} />
        <hr />
      </Box>
      <Box>
        <strong>Shopping Cart with Composition inside layout</strong>
        <br />
        It only needs one level props assigning
        <LayoutWithComposition>
          <CartItems cartItems={cartItems} />
        </LayoutWithComposition>
        <hr />
      </Box>
      <Box style={{ marginTop: 30 }}>
        <Text>
          View code at{" "}
          <a href="https://github.com/m3yevn/reacthesis/blob/master/src/components/lab/concepts/Composition.jsx">
            Github
          </a>
        </Text>
      </Box>
    </Main>
  );
};
