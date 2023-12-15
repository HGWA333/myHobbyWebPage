import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Test4Compoents = () => {
  const textData = [
    {
      title: "건설현장 정기안전점검",
      color: "#ff0055",
    },
    {
      title: "건설현장 정기안전점검",
      color: "#0099ff",
    },
    {
      title: "건설현장 정기안전점검",
      color: "#22cc88",
    },
    {
      title: "건설현장 정기안전점검",
      color: "#ffaa00",
    },
  ];
  const [selected, setSelected] = useState(0);
  const [uniqueValues, setUniqueValues] = useState(Array(textData.length).fill(""));
  // const handleUniqueChange = (index, value) => {
  //   const newUniqueValues = [...uniqueValues];
  //   newUniqueValues[index] = value;
  //   setUniqueValues(newUniqueValues);
  // };

  return (
    <TextStyle>
      <div className="FlexBox1">
        {textData.map(({ title, color }, i) => {
          return (
            <motion.li
              key={i}
              className="title"
              style={{ color: i === selected ? color : "#333" }}
              onClick={() => setSelected(i)}
              layout // layout 속성 추가
              transition={{ fontSize: { duration: 0.3 } }} // 애니메이션 트랜지션 설정
            >
              {title}
              {i === selected && (
                <motion.div layoutId={`underline-${i}`} className="underline" style={{ backgroundColor: color }} />
              )}
              {/* 각각의 i 값에 따라 다른 태그 출력 */}
              {!(selected === 1 && i === 2) && <></>}
            </motion.li>
          );
        })}
      </div>

      {/* 추가적으로 선택된 값에 대한 고유한 태그 출력 */}
      <div className="FlexBox2">
        {selected === 0 && (
          <>
            <div> index (0) </div>
            <div> index (0) </div>
            <div> index (0) </div>
          </>
        )}
        {selected === 1 && (
          <>
            <div> index (1) </div>
            <div> index (1) </div>
            <div> index (1) </div>
          </>
        )}
        {selected === 2 && (
          <>
            <div> index (2) </div>
            <div> index (2) </div>
            <div> index (2) </div>
          </>
        )}
        {selected === 3 && (
          <>
            <div> index (3) </div>
            <div> index (3) </div>
            <div> index (3) </div>
          </>
        )}
      </div>
    </TextStyle>
  );
};

export default Test4Compoents;

const TextStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: yellow;
  & .FlexBox1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  & .FlexBox2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  & .title {
    font-size: 1rem;
    position: relative;
    //cursor: pointer;
  }

  & .underline {
    width: 100%;
    height: 0.1rem;
    border-radius: 1px;
  }
`;
