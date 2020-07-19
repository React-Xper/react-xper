import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toggleTheme } from "utils/actions/actionToggleTheme";
import { store } from "utils/store";
import { useSelector } from "react-redux";

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 10px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: var(--brand);

      &:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
        content: "🌜";
      }
    }
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 34px;

    &::before {
      position: absolute;
      content: "🌞";
      text-align: center;
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
    }
  }
`;

export function Switch() {
  const [toggle, setToggle] = useState(false);
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    if (theme === "light") {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }, [theme]);

  const handleToggleSwitch = () => {
    store.dispatch(toggleTheme());
  };

  return (
    <Label>
      <input type="checkbox" checked={toggle} onChange={handleToggleSwitch} />
      <span></span>
    </Label>
  );
}
