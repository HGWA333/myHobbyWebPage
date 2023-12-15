import { motion } from "framer-motion";

import styled from "styled-components";
const MenuBtn = ({
  scale,
  MenuBtnOnClick,
  menuTopLineRangeOffset,
  menuTopPathLength,
  menuMiddleLineRangeOffset,
  menuMiddlePathLength,
  menuBottomLineRangeOffset,
  menuBottomPathLength,
  toggleMenu,
  setModalOpen,
  closeModal,
}) => {
  const menuBtnHandle = () => {
    toggleMenu();
    MenuBtnOnClick();
    setModalOpen(1);
  };

  return (
    <MenuStyle>
      <div
        onClick={menuBtnHandle}
        style={{
          width: "80px",
          height: "80px",
        }}
      >
        <motion.div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            scale,
          }}
        >
          <svg
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transformOrigin: "0 0",
            }}
            viewBox="0 0 100 100"
          >
            <motion.path
              d="M 30 40, L 70 40, C 90 40 90 75 60 85, A 40 40 0 0 1 20 20, L 80 80"
              strokeWidth={"2px"}
              stroke={"white"}
              fill="none"
              style={{
                pathOffset: menuTopLineRangeOffset,
                pathLength: menuTopPathLength,
              }}
            />
            <motion.path
              d="M 30 50 L 70 50"
              strokeWidth={"2px"}
              stroke={"white"}
              fill="none"
              style={{
                pathOffset: menuMiddleLineRangeOffset,
                pathLength: menuMiddlePathLength,
              }}
            />
            <motion.path
              d="M 70 60 L 30 60 C 10 60 10 20 40 15 A 40 38 0 1 1 20 80 L 80 20"
              strokeWidth={"2px"}
              stroke={"white"}
              fill="none"
              style={{
                pathOffset: menuBottomLineRangeOffset,
                pathLength: menuBottomPathLength,
              }}
            />
          </svg>
        </motion.div>
      </div>
    </MenuStyle>
  );
};

export default MenuBtn;
const MenuStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & div:hover {
    transform: scale(0.95);
    transition: 0.8s;
    //cursor: pointer;
  }
  & svg > :nth-child(1) {
    stroke: ${({ theme }) => theme.icon};
  }
  & svg > :nth-child(2) {
    stroke: ${({ theme }) => theme.icon};
  }
  & svg > :nth-child(3) {
    stroke: ${({ theme }) => theme.icon};
  }
`;
