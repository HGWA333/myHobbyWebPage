import React from "react";
import styled from "styled-components";
import logo1 from "../../../img/logo.svg";
import MenuBtn from "../../function/menu/MenuBtn.jsx";
import Toggle from "../../theme/Toggle.jsx";
const Header = ({
  MenuBtnstate,
  modalOpen,
  scrollToTop,
  scale,
  MenuBtnOnClick,
  menuTopLineRangeOffset,
  menuTopPathLength,
  menuMiddleLineRangeOffset,
  menuMiddlePathLength,
  menuBottomLineRangeOffset,
  menuBottomPathLength,
  setModalOpen,
  toggleMenu,
  closeModal,
  homeClick,
}) => {
  const scrollMan = () => {
    scrollToTop();
    homeClick();
  };

  return (
    <>
      <HeaderStyled>
        <div className="FlexBox">
          <div className="Header">
            <div className="HeaderItem1">
              <img src={logo1} onClick={scrollMan} alt="" />
            </div>
            <div className="HeaderItem2">
              <MenuBtn
                scale={scale}
                MenuBtnOnClick={MenuBtnOnClick}
                menuTopLineRangeOffset={menuTopLineRangeOffset}
                menuTopPathLength={menuTopPathLength}
                menuMiddleLineRangeOffset={menuMiddleLineRangeOffset}
                menuMiddlePathLength={menuMiddlePathLength}
                menuBottomLineRangeOffset={menuBottomLineRangeOffset}
                menuBottomPathLength={menuBottomPathLength}
                setModalOpen={setModalOpen}
                toggleMenu={toggleMenu}
                closeModal={closeModal}
              ></MenuBtn>
              <Toggle />
            </div>
          </div>
        </div>
      </HeaderStyled>
    </>
  );
};

const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  & .Header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 100%;
    position: fixed;
    height: 52px;
    z-index: 100;
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.foreground};
    transition: color ${({ theme }) => theme.transition};
    & .HeaderItem1 {
      padding-left: 80px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex: 1 1;
      & img {
        width: 25%;
        height: 25%;
        min-width: 120px;
        min-height: 120px;
        max-width: 135px;
        max-height: 135px;
        border-radius: 0;
        object-fit: contain;
        color: ${({ theme }) => theme.foreground};
      }
      & img:hover {
        transform: scale(0.97);
        transition: 0.74s;
        //cursor: pointer;
      }
    }
    & .HeaderItem2 {
      padding-right: 80px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 1 1;
    }
  }

  @media (max-width: 768px) {
    & .Header {
      height: 52px;
    }
  }
`;

export default Header;
