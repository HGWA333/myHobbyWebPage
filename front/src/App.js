import AOS from "aos";
import { DataProvider, MainContainer } from "./components/amain/Container";
import { useEffect } from "react";
import ThemeToggleProvider from "./components/theme/ThemeProvider";
import AnimatedCursor from "react-animated-cursor";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
    }); // AOS를 초기 설정
    AOS.refresh(); // AOS를 초기화하고 다시 로드함
  }, []);
  return (
    <>
      <ThemeToggleProvider>
        <DataProvider>
          <MainContainer />
        </DataProvider>
      </ThemeToggleProvider>
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="243, 205, 108"
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={5}
        hasBlendMode={true}
        outerStyle={{
          border: "3.5px solid #0e1c2f",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#f3cd6c",
        }}
      />
    </>
  );
}

export default App;
