import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes.js";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../module/themeSlice.js";

const ThemeToggleProvider = ({ children }) => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const toggleThemeHandler = () => {
    dispatch(toggleTheme()); // Redux 액션 디스패치
  };

  // const [theme, setTheme] = useState("light"); // 초기 테마 설정

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light"); // 테마 전환 함수
  // };

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <>{children}</>
    </ThemeProvider>

    // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    //   <>
    //     {children}
    //     <button onClick={toggleTheme}>{theme === "light" ? "다크 모드로 변경" : "라이트 모드로 변경"}</button>
    //   </>
    // </ThemeProvider>
  );
};

export default ThemeToggleProvider;
