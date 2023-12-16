import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import "aos/dist/aos.css";
import Slider from "../function/Slider/Slider";
import "../../font/font.css";
import img1 from "../../img/1.png";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.png";
import img4 from "../../img/1.png";
import img5 from "../../img/2.jpg";
import img6 from "../../img/3.png";

const MobileComponent = ({
  scrollToTop,
  LegalClick,
  DiagnosisClick,
  BuildUpClick,
  Inspection2Click,
  Inspection1Click,
  homeClick,
  serviceClick,
  tiltOptions,
  setIsHovered,
  aosAnimation,
}) => {
  const serviceMan = () => {
    serviceClick();
    scrollToTop();
  };
  return (
    <>
      <PcContent>
        {/* {data.a}
        <p>{data && data.MobileComponent}</p> */}
        <div className="FlexBox">
          <div className="SliderContent">
            <Slider />
          </div>
          <div className="ServiceContent">
            <div className="ServiceText" data-aos={aosAnimation} data-aos-offset="0">
              <div className="FontFixb">SERVICES</div>
              <div className="FontFixl">고객사와 동반 성장하는 안전진단전문기관</div>
            </div>

            <div className="ServiceItem" data-aos={aosAnimation} data-aos-offset="0">
              <ServiceItemImg imageurl={img1} onClick={Inspection1Click}>
                <span className="FontB"> 건설현장 정기 안전 점검</span>
                <span className="FontM"> Safety Inspection of Construction Site</span>
              </ServiceItemImg>
              <ServiceItemImg imageurl={img2} onClick={Inspection2Click}>
                <span className="FontB"> 건축물 정기안전점검</span>
                <span className="FontM"> Safety Inspection of Construction Site</span>
              </ServiceItemImg>
              <ServiceItemImg imageurl={img3} onClick={BuildUpClick}>
                <span className="FontB"> 빌드업 안심서비스</span>
                <span className="FontM"> Build-up Relief Service</span>
              </ServiceItemImg>
            </div>
            <div className="ServiceItem" data-aos={aosAnimation} data-aos-offset="0">
              <ServiceItemImg imageurl={img4} onClick={DiagnosisClick}>
                <span className="FontB"> 건축물 하자진단</span>
                <span className="FontM"> Building Defect Diagnosis </span>
              </ServiceItemImg>
              <ServiceItemImg imageurl={img5} onClick={LegalClick}>
                <span className="FontB"> 법원감정</span>
                <span className="FontM"> Legal Assessment</span>
              </ServiceItemImg>
              <ServiceItemImg imageurl={img6} onClick={serviceMan}>
                <span className="FontB"> 서비스 페이지</span>
                <span className="FontM"> Safety Inspection of Construction Site</span>
              </ServiceItemImg>
            </div>
          </div>
          <div className="CoreContent">
            <div className="CoreContentItem1" data-aos={aosAnimation} data-aos-offset="0">
              <span className="FontB"> CORE VALUE</span>
              <span className="FontL"> 핵심가치</span>
            </div>
            <div className="CoreContentItem2">
              <div className="CoreContentItem2Box">
                <div className="CoreContentTextFlex">
                  <span className="FontB"> HONEST</span>
                  <span className="FontM"> 진정성</span>
                  <div className="UnderLine"></div>
                  <span className="FontL">
                    고객의 입장에 대한 고민과이해를 바탕으로 일관성 있는 대화와 행동으로 소통합니다.
                  </span>
                </div>
              </div>
              <div className="CoreContentItem2Box">
                <div className="CoreContentTextFlex">
                  <span className="FontB"> PROFESSIONAL</span>
                  <span className="FontM"> 전문성</span>
                  <div className="UnderLine"></div>
                  <span className="FontL">
                    안전사고에 대한 체계적인데이터 분석을 통하여 보다본질적 고민과 해결을 추구합니다.
                  </span>
                </div>
              </div>
              <div className="CoreContentItem2Box">
                <div className="CoreContentTextFlex">
                  <span className="FontB"> PROGRESSIVE</span>
                  <span className="FontM"> 진취성</span>
                  <div className="UnderLine"></div>
                  <span className="FontL">
                    적극적이고 도전적인 사고와행동으로 Mobility를 구축하여새로운 건축문화를 개척합니다.
                  </span>
                </div>
              </div>
            </div>
            <Tilt
              className="parallax-effect-img-font"
              options={tiltOptions}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="CoreContentItem3" onClick={serviceMan}>
                <span className="FontB"> 서비스 바로가기</span>
                <span className="FontM"> Services</span>
              </div>
            </Tilt>
          </div>
          <div className="ImageContent" data-aos={aosAnimation}>
            <img src={img2} alt=""></img>
          </div>

          <div className="SubContent" data-aos={aosAnimation}>
            <Tilt
              className="parallax-effect-img"
              options={tiltOptions}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="ServiceItemBox1" data-aos={aosAnimation} onClick={serviceMan}>
                <Tilt
                  className="parallax-effect-img-font"
                  options={tiltOptions}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="SubFlex">
                    <span className="FontB"> 가나다라마바사</span>
                    <span className="FontM"> Safety Inspection of Construction Site</span>
                  </div>
                </Tilt>
              </div>
            </Tilt>
          </div>
        </div>
      </PcContent>
    </>
  );
};

export default MobileComponent;

const PcContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 3rem;
  background: ${({ theme }) => theme.one};
  color: ${({ theme }) => theme.two};
  transition: color ${({ theme }) => theme.transition};

  & .FlexBox {
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 80px;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    letter-spacing: 0.3vw;
  }

  & .SliderContent {
    width: 100%;
    background: ${({ theme }) => theme.one};
    transition: color ${({ theme }) => theme.transition};
    padding-top: 9rem;
    padding-bottom: 1.3rem;
    margin-top: 40px;
    margin-bottom: 300px;
    font-size: clamp(1rem, 4vw, 2rem);
  }
  & .ServiceContent {
    width: 100%;
    background: ${({ theme }) => theme.one};
    transition: color ${({ theme }) => theme.transition};
    padding-top: 2rem;
    padding-bottom: 1.3rem;
    font-size: clamp(1rem, 4vw, 2rem);
    & p {
      font-size: clamp(0.8rem, 2.5vw, 1.4rem);
    }
  }
  & .ServiceText {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 400px;

    & > :nth-child(1) {
      align-self: center;
      font-size: clamp(1.3rem, 2vw, 1.5rem);
    }
    & > :nth-child(2) {
      align-self: center;
    }
  }
  & .ServiceItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.one};
    transition: color ${({ theme }) => theme.transition};
    padding-bottom: 1.3rem;
    font-size: clamp(1rem, 4vw, 2rem);
    gap: 1.4rem;
    & p {
      font-size: clamp(0.8rem, 2.5vw, 1.4rem);
    }

    & .parallax-effect-img {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      background: ${({ theme }) => theme.one};
      transition: color ${({ theme }) => theme.transition};
      padding-top: 2rem;
      padding-bottom: 1.3rem;

      font-size: clamp(1rem, 4vw, 2rem);
      gap: 1.4rem;
      transition: transform 0.3s ease-in-out;
    }
    & .parallax-effect-img-font > :first-child {
      font-size: clamp(1rem, 1.5vw, 1.3rem);
      align-self: flex-start;
      text-align: left;
      padding-top: 1rem;
    }
    & .parallax-effect-img-font > :nth-child(2) {
      font-size: clamp(0.3rem, 1vw, 0.7rem);
      align-self: flex-start;
      text-align: left;
      padding-top: 0.8rem;
    }
  }
  & .ServiceItemBox {
    padding-left: 11px;
    flex: 1 1;
    flex-basis: auto;
    height: 36vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.one};
    color: ${({ theme }) => theme.one};
    transition: color ${({ theme }) => theme.transition};
    border-radius: 5px;
    background-image: url("http://www.fadcorp.co.kr/img/pages/main/services/siocs.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    //cursor: pointer;
  }
  & .ServiceItemBox1 {
    padding-left: 11px;
    flex: 1 1;
    flex-basis: auto;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.one};
    color: ${({ theme }) => theme.one};
    transition: color ${({ theme }) => theme.transition};
    border-radius: 5px;
    background-image: url(${img3});
    background-size: contain;
    background-repeat: no-repeat;
    //cursor: pointer;
    & .SubFlex {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  & .ServiceItemBox:hover {
    border-radius: 15px;
    transform: scale(1.02);
    transition: 1.1s;
    opacity: 0.5;
    box-shadow: 5px 2px 3px 0px ${({ theme }) => theme.hoverCard};
  }
  & .ServiceItemBox1:hover {
    border-radius: 15px;
    transform: scale(1.02);
    transition: 1.1s;
    opacity: 0.7;
  }
  & .CoreContent {
    width: 100%;
    background: ${({ theme }) => theme.one};
    color: ${({ theme }) => theme.two};
    transition: color ${({ theme }) => theme.transition};
    padding-top: 9rem;
    padding-bottom: 1.3rem;
    font-size: clamp(1rem, 4vw, 2rem);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & .CoreContentItem1 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 80px;
      margin-bottom: 240px;
      width: 100%;

      & > :nth-child(1) {
        align-self: center;
        font-size: clamp(1.3rem, 2vw, 1.5rem);
      }
      & > :nth-child(2) {
        align-self: center;
        font-size: clamp(1rem, 1.5vw, 1.3rem);
      }
    }
    & .CoreContentItem2 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: row;

      gap: 3.8rem;

      & .CoreContentItem2Box {
        width: 100%;
        flex: 1 1;
        flex-basis: auto;

        & .CoreContentTextFlex {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;

          & > span,
          & > div {
            flex: 1 1;
            flex-basis: auto;
            align-self: center;
            text-align: center;
          }

          & > :nth-child(1) {
            font-size: clamp(1.7rem, 2vw, 1.8rem);
          }
          & > :nth-child(2) {
            padding-bottom: 16px;
            font-weight: 900;
            font-size: clamp(0.9rem, 2vw, 1.4rem);
          }
          & > :nth-child(4) {
            margin-top: 16px;
            font-size: clamp(1rem, 2vw, 1.3rem);
            letter-spacing: 0.3rem;
            line-height: 1.8;
            font-weight: 500;
          }
        }
      }
    }
    & .CoreContentItem3 {
      margin-top: 300px;
      flex: 1 1;
      flex-basis: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & > :nth-child(1) {
        align-self: center;
      }
      & > :nth-child(2) {
        align-self: center;
      }
    }

    & .UnderLine {
      width: 100%;
      height: 0.1rem;
      border-radius: 3px;
      border-bottom: 1.3px solid ${({ theme }) => theme.underline1};
      color: ${({ theme }) => theme.underline1};
    }
  }
  & .ImageContent {
    background: ${({ theme }) => theme.one};
    color: ${({ theme }) => theme.two};
    transition: color ${({ theme }) => theme.transition};
    padding-top: 9rem;
    padding-bottom: 1.3rem;
    font-size: clamp(1rem, 4vw, 2rem);

    & img {
      width: 100%;
      object-fit: cover;
    }
  }
  & .SubContent {
    background: ${({ theme }) => theme.one};
    color: ${({ theme }) => theme.two};
    transition: color ${({ theme }) => theme.transition};
    padding-top: 9rem;
    padding-bottom: 1.3rem;
    font-size: clamp(1rem, 4vw, 2rem);
    margin-bottom: 100px;
  }

  & .FontFixb {
    font-size: clamp(1rem, 1.5vw, 1.3rem);
    font-family: Gb;
    align-self: flex-start;
    text-align: left;
    padding-top: 1rem;
  }
  & .FontFixm {
    font-size: clamp(1rem, 1.5vw, 1.3rem);
    font-family: Gm;
    align-self: flex-start;
    text-align: left;
    padding-top: 1rem;
  }
  & .FontFixl {
    font-size: clamp(1rem, 1.5vw, 1.3rem);
    font-family: Gl;
    align-self: flex-start;
    text-align: left;
    padding-top: 1rem;
  }
  & .FontB {
    font-size: clamp(1rem, 1.5vw, 1.3rem);
    font-family: Gb;
    align-self: flex-start;
    text-align: left;
    padding-top: 1rem;
  }
  & .FontB:hover {
    color: ${({ theme }) => theme.two};
    transform: scale(0.97);
    transition: 0.8s;
  }
  & .FontM {
    font-size: clamp(0.3rem, 1vw, 0.7rem);
    font-family: Gm;
    align-self: flex-start;
    text-align: left;
    padding-top: 0.8rem;
  }
  & .FontM:hover {
    color: ${({ theme }) => theme.two};
    transform: scale(0.97);
    transition: 0.8s;
  }
  & .FontL {
    font-size: clamp(0.3rem, 1vw, 0.7rem);
    font-family: Gl;
    font-weight: 600;
    align-self: flex-start;
    text-align: left;
    margin-top: 10px;
    padding-top: 0.8rem;
  }
  & .FontL:hover {
    color: ${({ theme }) => theme.two};
    transform: scale(0.97);
    transition: 0.8s;
  }
  @media (max-width: 1024px) {
    & .ServiceItemBox {
      flex: 1 1;
      flex-basis: auto;
      flex-direction: row;

      & .parallax-effect-img {
        flex: 1 1;
        flex-basis: auto;
        flex-direction: row;
      }
      & .parallax-effect-img-font > :first-child {
        font-size: clamp(1rem, 1.5vw, 1.3rem);
        align-self: flex-start;
        text-align: left;
        padding-top: 1rem;
      }
      & .parallax-effect-img-font > :nth-child(2) {
        font-size: clamp(0.3rem, 1vw, 0.7rem);
        align-self: flex-start;
        text-align: left;
        padding-top: 0.8rem;
      }
    }
    & .FontB {
      font-size: clamp(1.3rem, 2vw, 2rem);
      font-family: Gb;
      align-self: flex-start;
      text-align: left;
      padding-top: 1rem;
    }
    & .FontM {
      flex: 1 1;
      font-family: Gl;
      font-size: clamp(0.9rem, 2vw, 1.3rem);
      font-weight: 600;
      text-align: left;
      align-self: flex-start;
      position: relative;
      top: 7px;
      padding-top: 1rem;
    }
    @media (max-width: 768px) {
      .CoreContentItem2 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 3.8rem;
        flex-wrap: wrap;
      }
    }
  }
`;

const ServiceItemImg = styled.div`
  padding-left: 11px;
  flex: 1 1;
  flex-basis: auto;
  height: 36vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.one};
  color: ${({ theme }) => theme.one};
  transition: color ${({ theme }) => theme.transition};
  border-radius: 5px;
  background-image: url("${(props) => props.imageurl}");
  background-size: cover;
  background-repeat: no-repeat;
  //cursor: pointer;

  &:hover {
    border-radius: 15px;
    transform: scale(1.03);
    transition: 1.1s;
    opacity: 0.5;
    box-shadow: 5px 2px 3px 0px ${({ theme }) => theme.hoverCard};
  }
`;
