import React, { useContext, useState } from "react";
import { Main, Box, Heading, Paragraph, Text, Button } from "grommet";
import _cloneDeep from "lodash/cloneDeep";

const CartContext = React.createContext([]);

const CartItemsWithHOC = () => {
  return (
    <CartContext.Consumer>
      {(cartItems) => (
        <ul>
          {!!cartItems?.length
            ? cartItems.map((item, i) => <li key={i}>{item}</li>)
            : "Empty cart 🛒"}
        </ul>
      )}
    </CartContext.Consumer>
  );
};

const CartItemsWithHook = () => {
  const cartItems = useContext(CartContext);

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
    <CartContext.Provider value={cartItems}>
      <Main pad="xlarge">
        <Box>
          <Heading level="2">Data sharing using Context</Heading>
          <Paragraph fill={true}>
            In a typical React application, data is passed top-down (parent to
            child) via props, but this can be cumbersome for certain types of
            props (e.g. locale preference, UI theme) that are required by many
            components within an application. Context provides a way to share
            values like these between components without having to explicitly
            pass a prop through every level of the tree.
            <br />
            <br />
            In below example, shopping cart items are added to another component
            without passing as a props. Instead, it use a Context provider and
            then either use a Higher-Order component called{" "}
            <code> Context.Consumer </code> or using <code> useContext </code>{" "}
            hooks.
          </Paragraph>
        </Box>
        <Box style={{ marginBottom: "30px" }}>
          <Button color="brand" label="Fruit 🍑 " onClick={handleAddToCart} />
          <Button color="brand" label="Meat 🥩" onClick={handleAddToCart} />
          <Button color="brand" label="Beer 🍺" onClick={handleAddToCart} />
          <Button color="brand" label="Vege 🥬" onClick={handleAddToCart} />
        </Box>
        <Box>
          <strong>Shopping Cart with HOC</strong>
          <br/>
          <CartItemsWithHOC />
          <hr />
        </Box>
        <Box>
          <strong>Shopping Cart with Hook</strong>
          <br/>
          <CartItemsWithHook />
          <hr />
        </Box>
        <Box style={{ marginTop: 30 }}>
          <Text>
            View code at{" "}
            <a href="https://github.com/m3yevn/react-xper/blob/master/src/components/lab/concepts/Context.jsx">
              Github
            </a>
          </Text>
        </Box>
      </Main>
    </CartContext.Provider>
  );
};
