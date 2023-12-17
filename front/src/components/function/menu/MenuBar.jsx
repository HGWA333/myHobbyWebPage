import styled from "styled-components";
import img1 from "../../../img/1.jpg";
import img2 from "../../../img/2.jpg";
import img3 from "../../../img/2.png";
import img4 from "../../../img/2.png";
import img5 from "../../../img/2.png";
import "../../../font/font.css";

const MenuBar = ({
  scrollToTop,
  aboutClick,
  corpClick,
  peopleClick,
  LegalClick,
  DiagnosisClick,
  BuildUpClick,
  Inspection2Click,
  Inspection1Click,
  modalRef,
  testPage1Click,
  homeClick,
  serviceClick,
  closeModal,
}) => {
  const testPage1 = () => {
    testPage1Click();
    closeModal();
    scrollToTop();
  };
  const servicePage = () => {
    serviceClick();
    closeModal();
    scrollToTop();
  };
  const rootPage = () => {
    homeClick();
    closeModal();
    scrollToTop();
  };
  const corpPage = () => {
    corpClick();
    scrollToTop();
    closeModal();
  };
  const aboutPage = () => {
    aboutClick();
    closeModal();
    scrollToTop();
  };
  const peoplePage = () => {
    peopleClick();
    closeModal();
    scrollToTop();
  };
  return (
    <>
      <ModalStyle ref={modalRef}>
        <ItemImg imageurl={({ theme }) => theme.img1} className="FontB" onClick={aboutPage}>
          About
        </ItemImg>
        <ItemImg imageurl={({ theme }) => theme.img1} className="FontB" onClick={peoplePage}>
          People
        </ItemImg>
        <ItemImg imageurl={({ theme }) => theme.img1} className="FontB" onClick={servicePage}>
          Service
        </ItemImg>
        <ItemImg imageurl={({ theme }) => theme.img1} className="FontB" onClick={testPage1}>
          TestPage
        </ItemImg>
      </ModalStyle>
    </>
  );
};

const ModalStyle = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.menu};
  color: ${({ theme }) => theme.foreground};
  transition: color ${({ theme }) => theme.transition};
  position: fixed;
  left: 0;
  right: 0;
  top: 74px;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  & .FontB {
    display: grid;
    place-items: center;
    font-size: clamp(4rem, 3.8vw, 6rem);
    font-family: Gb;
    padding-top: 1rem;
    color: ${({ theme }) => theme.two};
  }
  & .FontB:hover {
    color: ${({ theme }) => theme.imghover};
    transform: scale(0.97);
    transition: 0.8s;
  }
  & .FontM {
    display: grid;
    place-items: center;
    font-size: clamp(0.3rem, 1vw, 0.7rem);
    font-family: Gm;
    padding-top: 0.8rem;
  }
  & .FontM:hover {
    color: ${({ theme }) => theme.one};
    transform: scale(0.97);
    transition: 0.8s;
  }
  & .FontL {
    display: grid;
    place-items: center;
    font-size: clamp(0.3rem, 1vw, 0.7rem);
    font-family: Gl;
    padding-top: 0.8rem;
  }
  & .FontL:hover {
    color: ${({ theme }) => theme.one};
    transform: scale(0.97);
    transition: 0.8s;
  }
`;

export default MenuBar;

const ItemImg = styled.div`
  flex: 1 1;
  height: 10.4rem;
  margin-bottom: 5px;
  background-image: url("${(props) => props.imageurl}");
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(0.98);
    transition: 0.69s;
  }
  @media (max-width: 768px) {
  }
`;
