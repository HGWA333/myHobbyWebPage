import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import PcComponent from "../container/PcComponent.jsx";
import MobileComponent from "../container/MobileComponent.jsx";
import MenuBar from "../function/menu/MenuBar.jsx";
import Header from "../fixed/header/Header.jsx";
import AboutComponent from "../page/about/about/Components.jsx";
import CorpComponent from "../page/about/corp/Components.jsx";
import PeopleComponent from "../page/about/people/Components.jsx";
import ServiceCompoent from "../page/service/service/Components.jsx";
import BuildComponent from "../page/service/build/Components.jsx";
import DiagnosisComponent from "../page/service/diagnosis/Components.jsx";
import Inspection1Component from "../page/service/Inspection1/Components.jsx";
import Inspection2Component from "../page/service/Inspection2/Components.jsx";
import LegalComponent from "../page/service/legal/Components.jsx";
import Test3Compoents from "../page/test/test3/Components.jsx";
import FontText from "../page/test/test4/Compoents.jsx";

import "../function/menu/modal.css";

const MainComponent = ({
  modalHandlers,
  toggleHandlers,
  viewHandlers,
  aosAnimationHandlers,
  menuHandlers,
  routeHandlers,
  tiltHandlers,
  menuBtnHandlers,
  scrollHandlers,
  serviceHandlers,
}) => {
  const {
    aboutClick,
    corpClick,
    peopleClick,
    homeClick,
    serviceClick,
    testPage1Click,
    Inspection1Click,
    Inspection2Click,
    BuildUpClick,
    DiagnosisClick,
    LegalClick,
  } = routeHandlers;
  const { modalOpen, setModalOpen, modalRef, closeModal } = modalHandlers;
  // const { currentTheme, handleThemeToggle } = toggleHandlers;
  const { data, windowWidth } = viewHandlers;
  const { aosAnimation } = aosAnimationHandlers;
  const { toggleMenu } = menuHandlers;
  const { tiltOptions, setIsHovered } = tiltHandlers;
  const { scrollToTop } = scrollHandlers;
  const {
    scale,
    MenuBtnstate,
    MenuBtnOnClick,
    menuTopLineRangeOffset,
    menuTopPathLength,
    menuMiddleLineRangeOffset,
    menuMiddlePathLength,
    menuBottomLineRangeOffset,
    menuBottomPathLength,
  } = menuBtnHandlers;
  const { textData, serviceSelected, setServiceSelected } = serviceHandlers;
  return (
    <>
      <MainContents>
        {/* 
        <p>현재 화면 너비: {windowWidth}px</p> */}
        {windowWidth < 768 ? (
          <>
            {/* <p>Mobile 화면용 컨텐츠</p> */}
            {/* <div className="Header">
              <div className="HeaderItem1">
                <img src={logo1} onClick={homeClick} alt=""></img>
              </div>
              <div className="HeaderItem2">
                <MenuBtn setModalOpen={setModalOpen} toggleMenu={toggleMenu} closeModal={closeModal}></MenuBtn>
                <Toggle />
              </div>
            </div> */}
            <Header
              scrollToTop={scrollToTop}
              scale={scale}
              modalOpen={modalOpen}
              MenuBtnstate={MenuBtnstate}
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
              homeClick={homeClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <MobileComponent
                    scrollToTop={scrollToTop}
                    data={data}
                    tiltOptions={tiltOptions}
                    setIsHovered={setIsHovered}
                    aosAnimation={aosAnimation}
                    serviceClick={serviceClick}
                    Inspection1Click={Inspection1Click}
                    Inspection2Click={Inspection2Click}
                    BuildUpClick={BuildUpClick}
                    DiagnosisClick={DiagnosisClick}
                    LegalClick={LegalClick}
                    homeClick={homeClick}
                    testPage1Click={testPage1Click}
                  />
                }
              />
              <Route path="/test1" element={<Test3Compoents />} />
              <Route path="/about" element={<AboutComponent />} />
              <Route path="/corp" element={<CorpComponent />} />
              <Route path="/people" element={<PeopleComponent />} />
              <Route path="/service" element={<ServiceCompoent />} />
              <Route path="/inspection1" element={<Inspection1Component />} />
              <Route path="/inspection2" element={<Inspection2Component />} />
              <Route path="/build" element={<BuildComponent />} />
              <Route path="/diagnosis" element={<DiagnosisComponent />} />
              <Route path="/legal" element={<LegalComponent />} />
            </Routes>
            {/* <div className="Footer">    </div> */}
            {modalOpen == 1 && (
              <MenuBar
                modalRef={modalRef}
                closeModal={closeModal}
                aboutClick={aboutClick}
                homeClick={homeClick}
                serviceClick={serviceClick}
                Inspection1Click={Inspection1Click}
                Inspection2Click={Inspection2Click}
                BuildUpClick={BuildUpClick}
                DiagnosisClick={DiagnosisClick}
                LegalClick={LegalClick}
                corpClick={corpClick}
                peopleClick={peopleClick}
                testPage1Click={testPage1Click}
                scrollToTop={scrollToTop}
              />
            )}
          </>
        ) : (
          <>
            {/* <p>PC 화면용 컨텐츠</p> */}
            {/* <div className="Header">
              <div className="HeaderItem1">
                <img src={logo1} onClick={homeClick} alt=""></img>
              </div>
              <div className="HeaderItem2">
                <MenuBtn setModalOpen={setModalOpen} toggleMenu={toggleMenu} closeModal={closeModal}></MenuBtn>
                <Toggle />
              </div>
            </div> */}
            <Header
              scrollToTop={scrollToTop}
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
              homeClick={homeClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <PcComponent
                    scrollToTop={scrollToTop}
                    data={data}
                    tiltOptions={tiltOptions}
                    setIsHovered={setIsHovered}
                    aosAnimation={aosAnimation}
                    serviceClick={serviceClick}
                    Inspection1Click={Inspection1Click}
                    Inspection2Click={Inspection2Click}
                    BuildUpClick={BuildUpClick}
                    DiagnosisClick={DiagnosisClick}
                    LegalClick={LegalClick}
                    homeClick={homeClick}
                    testPage1Click={testPage1Click}
                  />
                }
              />
              <Route path="/test1" element={<Test3Compoents />} />
              <Route path="/about" element={<AboutComponent />} />
              <Route path="/corp" element={<CorpComponent />} />
              <Route path="/people" element={<PeopleComponent />} />
              <Route
                path="/service"
                element={
                  <ServiceCompoent
                    textData={textData}
                    serviceSelected={serviceSelected}
                    setServiceSelected={setServiceSelected}
                  />
                }
              />
              <Route path="/inspection1" element={<Inspection1Component />} />
              <Route path="/inspection2" element={<Inspection2Component />} />
              <Route path="/build" element={<BuildComponent />} />
              <Route path="/diagnosis" element={<DiagnosisComponent />} />
              <Route path="/legal" element={<LegalComponent />} />
            </Routes>
            {/* <div className="Footer">
              <button onClick={handleThemeToggle}>테마</button>
              <Toggle />
            </div> */}
            {modalOpen == 1 && (
              <MenuBar
                modalRef={modalRef}
                closeModal={closeModal}
                aboutClick={aboutClick}
                homeClick={homeClick}
                serviceClick={serviceClick}
                Inspection1Click={Inspection1Click}
                Inspection2Click={Inspection2Click}
                BuildUpClick={BuildUpClick}
                DiagnosisClick={DiagnosisClick}
                LegalClick={LegalClick}
                corpClick={corpClick}
                peopleClick={peopleClick}
                testPage1Click={testPage1Click}
                scrollToTop={scrollToTop}
              />
            )}
          </>
        )}
      </MainContents>
    </>
  );
};

export default MainComponent;

const MainContents = styled.div`
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
    /* position: fixed; */
    top: 0;
    left: 0;
    width: 100%;
    height: 74px;
    z-index: 100;
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.foreground};
    transition: color ${({ theme }) => theme.transition};
    & .HeaderItem1 {
      padding-left: 74px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex: 1 1;
      & img {
        width: 50%;
        height: 50%;
        min-width: 120px;
        min-height: 120px;
        max-width: 165px;
        max-height: 165px;
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
      padding-right: 74px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 1 1;
    }
  }

  & .Footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    /* position: fixed; */
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 100;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
  }
`;
