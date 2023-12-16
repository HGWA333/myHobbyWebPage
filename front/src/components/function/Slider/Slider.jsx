import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import img1 from "../../../img/1.png";
import img2 from "../../../img/2.jpg";
import img3 from "../../../img/3.png";
const imgs = [img1, img2, img3];
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Slider = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const selectImage = (idx) => {
    setSelectedImage(idx);
  };

  return (
    <SliderStyled>
      {imgs.map((image, idx) => (
        <motion.img
          key={idx}
          src={image}
          initial="hidden"
          animate={selectedImage === idx ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        />
      ))}
      <div className="BtnItem">
        {imgs.map((_, idx) => (
          <div key={idx}>
            <button className="BtnClick" onClick={() => selectImage(idx)} />
          </div>
        ))}
      </div>
    </SliderStyled>
  );
};

const SliderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 420px; // 이미지의 높이에 맞게 조정

  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  & .BtnItem {
    position: absolute;
    bottom: -120px;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;
    left: 50%;
  }
  & .BtnClick {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.btn1};
    color: ${({ theme }) => theme.foreground};
    transition: color ${({ theme }) => theme.transition};
    border: none;
    opacity: 0.9;
  }
  & .BtnClick:hover {
    background-color: ${({ theme }) => theme.btn2};
    color: ${({ theme }) => theme.foreground};
    scale: 0.9;
    transform: scale(1.7);
    opacity: 0.7;
    transition: 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    height: 270px; // 이미지의 높이에 맞게 조정
    & .BtnItem {
      left: 50%;
    }
  }
`;

export default Slider;
