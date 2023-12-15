import React from "react";
import LottieAnimation from "../../../lottie/Lottie";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
const Test3Compoents = () => {
  const animationData = require("../../../lottie/test1.json"); // JSON 애니메이션 데이터 가져오기
  const scrollToSection = () => {
    scroll.scrollTo(2000); // 스크롤할 위치의 y축 좌표를 입력
  };

  return (
    <TestContent>
      <h1>Lottie Animation Example</h1>
      <motion.div whileHover={{ scale: 0.9 }}>
        <LottieAnimation animationData={animationData} />
      </motion.div>
      <div>
        <Link to="section" smooth={true} duration={500} offset={-50}>
          <button onClick={scrollToSection}>눌러봐</button>
        </Link>
        <div id="section" style={{ height: "100vh", backgroundColor: "black" }}></div>
      </div>
      <motion.div whileHover={{ scale: 0.9 }}>
        <LottieAnimation animationData={animationData} />
      </motion.div>
      <motion.div whileHover={{ scale: 0.9 }}>
        <LottieAnimation animationData={animationData} />
      </motion.div>
    </TestContent>
  );
};

export default Test3Compoents;

const TestContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: blue;

  @media (max-width: 768px) {
    background-color: green;
  }
`;
