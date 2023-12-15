import { ReactComponent as MoonIcon } from "./svg/moon.svg";
import { ReactComponent as SunIcon } from "./svg/sun.svg";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../module/themeSlice.js";
import styled from "styled-components";

const Toggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    handleThemeToggle(isEnabled);
  }, [isEnabled]);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };

  return (
    <>
      <ToggleStyled>
        <label className="toggle-wrapper" htmlFor="toggle">
          <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
            <span className="hidden">{isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}</span>
            <div className="icons">
              <SunIcon />
              <MoonIcon />
            </div>
            <input id="toggle" name="toggle" type="checkbox" onClick={toggleState} />
          </div>
        </label>
      </ToggleStyled>
    </>
  );
};
export default Toggle;

const ToggleStyled = styled.div`
  .darkmode::before {
    transform: translateX(0);
  }

  .hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .toggle-wrapper {
    width: 130px;
    display: block;
    margin: auto;
  }

  .toggle {
    height: 0.925rem; /* 25 / 16px = 1.56rem */
    width: 6.875rem; /* 110 / 16px = 6.76rem */
    max-width: 120px;
    max-height: 19px;
    background: ${({ theme }) => theme.foreground};
    border-radius: 2rem;
    padding: 12px;
    position: relative;
    transition: background ${({ theme }) => theme.transition};
  }

  .toggle::before {
    content: "";
    display: block;
    height: 1.55rem; /* 28px / 16px = 1.75rem */
    width: 1.55rem;
    max-width: 30px;
    max-height: 30px;
    left: 0.95rem;
    bottom: 7px;
    border-radius: 33px;
    background: ${({ theme }) => theme.header};
    position: absolute;
    z-index: 2;
    transform: translate(0);
    transition: transform ${({ theme }) => theme.transition}, background ${({ theme }) => theme.transition};
  }

  .toggle.enabled::before {
    transform: translateX(78px);
  }

  .toggle input {
    opacity: 0;
    position: absolute;
    top: 0;
  }

  .toggle:hover {
    transform: scale(0.97);
    transition: 0.8s;
    //cursor: pointer;
  }

  .toggle .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 5px;
  }

  .toggle .icons svg {
    fill: ${({ theme }) => theme.backround};
    height: 1.5625rem; /* 25px / 16px = 1.5625rem */
    width: 1.5625rem;

    z-index: 0;
  }

  @media (max-width: 768px) {
    .toggle {
      height: 15px;
      width: 85px;
    }
    .toggle.enabled::before {
      transform: translateX(60px);
    }

    .toggle::before {
      height: 1.55rem; /* 28px / 16px = 1.75rem */
      width: 1.55rem;
      left: 0.81rem;
    }
    .toggle .icons svg {
      fill: ${({ theme }) => theme.backround};
      height: 20px; /* 25px / 16px = 20px */
      width: 20px;
    }
    .toggle-wrapper {
      width: 100px;
      display: block;
      margin: auto;
    }
  }
`;
