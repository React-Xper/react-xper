import React from "react";
import { Main, Box, Heading, Paragraph, Text, Button } from "grommet";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const styles = {
  listWrapper: {
    overflow: "scroll",
    height: "50vh",
    justifyContent: "center",
    marginTop: 20,
    border: "solid 2px var(--brand)",
  },
  row: {
    flexDirection: "row",
    display: "flex",
  },
};

async function getCountries() {
  const countries = await fetch("https://restcountries.eu/rest/v2/all").then(
    (result) => {
      return result.json();
    }
  );
  return countries;
}

export default function Refs() {
  const listRef = useRef(null);
  const [countries, setCountries] = useState([]);

  const CountryList = () => {
    return (
      <div>
        <table>
          <tbody ref={listRef}>
            {countries.map((value, index) => {
              return (
                <tr style={styles.row} key={index}>
                  <td>{index + 1}.</td>
                  <td>{value.name}</td>
                  <td>
                    <img alt="flag" style={{ width: 20 }} src={value.flag} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const handleScrollUp = () => {
    listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScrollDown = () => {
    listRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    getCountries().then((result) => {
      setCountries(result);
    });
  }, []);

  return (
    <Main pad="xlarge">
      <Box>
        <Heading level="2">Access DOM elements using useRef hook</Heading>
        <Paragraph fill={true}>
          This hook is use for referencing the DOM. useRef returns a mutable ref
          object whose .current property is initialized to the passed argument
          (initialValue). The returned object will persist for the full lifetime
          of the component.
          <br />
          <br />
          In below example, the country list table body is referenced using
          useRef and scrollIntoView when the buttons are clicked.
        </Paragraph>
      </Box>
      <Box style={{ width: "50%" }}>
        <p>Click the buttons to scroll up and down of the country list</p>
        <Button color="brand" label="Scroll Down!" onClick={handleScrollDown} />
        <br />
        <Button color="neutral-2" label="Scroll Up!" onClick={handleScrollUp} />
        <div style={styles.listWrapper}>
          {!countries.length && <Text>Fetching countries...</Text>}
          {!!countries.length && <CountryList />}
        </div>
      </Box>
      <Box style={{ marginTop: 30 }}>
        <Text>
          View code at{" "}
          <a href="https://github.com/m3yevn/reacthesis/blob/master/src/components/labs/Refs.jsx">
            Github
          </a>
        </Text>
      </Box>
    </Main>
  );
}
