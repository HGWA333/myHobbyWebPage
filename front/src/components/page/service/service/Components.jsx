import styled from "styled-components";
import "../../../../font/font.css";
const ServiceComponent = ({ textData, serviceSelected, setServiceSelected }) => {
  return (
    <>
      <ServiceContent>
        <div className="ServiceContentItem1">
          <ServiceItemBox1 className="MarginB">
            <div>
              <span className="FontB PaddingL">SERVICES</span>
              <span className="FontL PaddingL">(주)파드의 기술철학이 녹아든 서비스 분야</span>
            </div>
          </ServiceItemBox1>
          <ServiceItemBox1>
            <ServiceMainFlexCol>
              <ServiceFlexRow>
                {textData.map(({ title, color }, i) => {
                  return (
                    <div
                      key={i}
                      className="ServiceFlexR"
                      style={{ color: i === serviceSelected ? color : "#0e1c2f" }}
                      onClick={() => setServiceSelected(i)}
                      transition={{ fontSize: { duration: 0.3 } }}
                    >
                      <div className={`ServiceFont FontM PaddingL`}>
                        <span className={` ${i === serviceSelected ? "UnderLine" : ""}`}> {title}</span>
                      </div>
                    </div>
                  );
                })}
              </ServiceFlexRow>
              <ServiceFlexCol>
                {serviceSelected === 0 && (
                  <>
                    <ServiceItemBox2>
                      <div className="FlexM PaddingL">
                        <span className="FontBs">Safety Inspection of Construction Site</span>
                        <span className="FontLs">건설현장 정기안전점검</span>
                      </div>
                      <div className="FlexCol ">
                        <ServiceItemTextCol>
                          <span className="Stext PaddingR">
                            건설기술진흥법 제62조, 동법 시행령 제 87~101조에 의거하여 건설업자 및 주택건설등록업자는
                            건설공사의 안전을 확보하기 위하여 착공 전 안전관리계획 수립 후 이에 따라 정기안전점검 및
                            초기 점검을 실시하여야 합니다.
                          </span>
                        </ServiceItemTextCol>
                      </div>
                    </ServiceItemBox2>
                  </>
                )}
                {serviceSelected === 1 && (
                  <>
                    <ServiceItemBox2>
                      <div className="FlexM PaddingL">
                        <span className="FontBs">Safety Inspection of Buildings</span>
                        <span className="FontLs">건축물 정기안전점검</span>
                      </div>
                      <div className="FlexCol ">
                        <ServiceItemTextCol>
                          <span className="Stext PaddingR">
                            시설물의 안전관리 및 유지관리에 관한 특별법 제7조 및 동시행령 제9조에 따라 건축물관리주체는
                            시설물의 안전과 기능을 유지하기 위하여 국토교통부 관련 지침에 따라 정기안전점검 및
                            정밀안전진단을 실시하여야 합니다.
                          </span>
                        </ServiceItemTextCol>
                      </div>
                    </ServiceItemBox2>
                  </>
                )}
                {serviceSelected === 2 && (
                  <>
                    <ServiceItemBox2>
                      <div className="FlexM PaddingL">
                        <span className="FontBs">Build-up Relief Service </span>
                        <span className="FontLs">빌드업 안심서비스</span>
                      </div>
                      <div className="FlexCol ">
                        <ServiceItemTextCol>
                          <span className="Stext PaddingR">
                            건축사업 발주자를 위한 안심보호시스템으로 계약, 시공, 완공, 분쟁 등 전 과정에서 발생될
                            리스크를 사전에 도출하고 해결함으로써 고객의 시간적, 비용적, 정신적 피해 예방이 가능한
                            서비스입니다.
                          </span>
                        </ServiceItemTextCol>
                      </div>
                    </ServiceItemBox2>
                  </>
                )}
                {serviceSelected === 3 && (
                  <>
                    <ServiceItemBox2>
                      <div className="FlexM PaddingL">
                        <span className="FontBs">Building Defect Diagnosis</span>
                        <span className="FontLs">건축물 하자진단</span>
                      </div>
                      <div className="FlexCol ">
                        <ServiceItemTextCol>
                          <span className="Stext PaddingR">
                            건축공사 과정에서 발생된 피해 항목을 도출하여 객관적 사실 근거를 통해 효과적 대응이 가능한
                            진단으로 원만한 문제 해결이 될 수 있도록 유도합니다.
                          </span>
                        </ServiceItemTextCol>
                      </div>
                    </ServiceItemBox2>
                  </>
                )}
                {serviceSelected === 4 && (
                  <>
                    <ServiceItemBox2>
                      <div className="FlexM PaddingL">
                        <span className="FontBs">Legal Assessment</span>
                        <span className="FontLs">법원감정</span>
                      </div>
                      <div className="FlexCol ">
                        <ServiceItemTextCol>
                          <span className="Stext PaddingR">
                            건설소송 과정에서 발생된 문제 항목에 대해 중립적 판단이 이루어질 수 있도록 전문적 경험과
                            지식을 바탕으로 법원을 대신하여 인과관계를 증명하고 해결방안을 제시합니다.
                          </span>
                        </ServiceItemTextCol>
                      </div>
                    </ServiceItemBox2>
                  </>
                )}
              </ServiceFlexCol>
            </ServiceMainFlexCol>
          </ServiceItemBox1>
        </div>
      </ServiceContent>
    </>
  );
};

export default ServiceComponent;

const ServiceContent = styled.div`
  overflow-x: hidden;
  width: 100%;
  background: ${({ theme }) => theme.btn4};
  transition: color ${({ theme }) => theme.transition};
  margin-top: 74px;
  letter-spacing: 0.1rem;
  & .PaddingL {
    padding-left: 60px;
  }
  & .PaddingR {
    margin-right: 50px;
  }
  & .MarginB {
    border-bottom: 2px solid ${({ theme }) => theme.border1};
  }
  & span {
    padding: 7px;
    text-align: left;
  }

  & .ServiceContentItem1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  & .FontLs,
  & .FontBs,
  & .FontMs,
  & .Stext {
    line-height: 1.8;
    margin-top: 30px;
    padding: 0px;
  }
  & .FontB {
    font-size: clamp(2.3rem, 2vw, 2rem);
    font-family: Gb;
    align-self: flex-start;
    text-align: left;
  }
  & .FontBs {
    font-size: clamp(1.5rem, 2vw, 1.3rem);
    font-family: Gb;
    align-self: flex-start;
    text-align: left;
  }

  & .FontM {
    font-size: clamp(1rem, 2vw, 1.3rem);
    font-family: Gm;
    align-self: flex-start;
    text-align: left;
  }

  & .FontL {
    font-size: clamp(1.8rem, 2vw, 1.5rem);
    font-family: Gl;
    align-self: flex-start;
    text-align: left;
  }
  & .FontLs {
    font-size: clamp(1.5rem, 2vw, 1.3rem);
    font-family: Gl;
    align-self: flex-start;
    text-align: left;
    margin-top: 10px;
  }

  & .LText {
    font-family: Gb;
    font-size: clamp(1rem, 2vw, 1rem);

    @media (max-width: 768px) {
      font-size: clamp(1.4rem, 2vw, 1rem);
    }
  }
  & .Mtext {
    font-family: Gm;
    font-size: clamp(0.7rem, 1vw, 1rem);
    align-self: center;

    @media (max-width: 768px) {
      font-size: clamp(0.85rem, 1.5vw, 1rem);
    }
  }
  & .Stext {
    font-family: Gl;
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    padding-top: 8px;
    padding-left: 50px;
    padding-right: 50px;
    @media (max-width: 768px) {
      padding-top: 0px;
      padding-left: 0px;
      padding-right: 0px;
      font-size: clamp(0.9rem, 2vw, 1.3rem);
    }
  }

  @media (max-width: 767px) {
    font-size: clamp(0.875rem, 2vw, 1.125rem);
    & .ServiceContentItem2 {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
  }

  @media (min-width: 1024px) {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
  }
`;

const ServiceItemBox1 = styled.div`
  color: ${({ theme }) => theme.two};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 88.5%;
  background: ${({ theme }) => theme.one};
  transition: color ${({ theme }) => theme.transition};
  padding-top: 100px;
  padding-bottom: 100px;

  border-left: 2px solid ${({ theme }) => theme.border};
  & .FlexM {
    flex: 20%;
  }
  & > div > span.Mtext {
  }
  & .FlexCol {
    flex: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  & .FlexCol > .FlexRow {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
  }
  & .FlexCol > .FlexRow > div {
    flex: 1;
  }
  & .FlexRow > div {
    @media (max-width: 768px) {
      margin-top: 38px;
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;

    & > div {
      margin-bottom: 10px;
      text-align: left;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    justify-items: stretch;
    & > div {
      flex: 1;
    }
    & .FlexM {
      flex: 100%;
    }
    & .FlexCol {
      flex: 100%;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
    }
    & .FlexCol > .FlexRow {
      flex: 1;
      flex-direction: column;
      & .FlexRow {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
      }
    }
  }
`;
const ServiceItemBox2 = styled.div`
  color: ${({ theme }) => theme.one};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  background: ${({ theme }) => theme.two};
  transition: color ${({ theme }) => theme.transition};
  padding-top: 100px;
  padding-bottom: 100px;

  border-left: 2px solid ${({ theme }) => theme.border};
  & .FlexM {
    flex: 20%;
  }
  & > div > span.Mtext {
  }
  & .FlexCol {
    flex: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  & .FlexCol > .FlexRow {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
  }
  & .FlexCol > .FlexRow > div {
    flex: 1;
  }
  & .FlexRow > div {
    @media (max-width: 768px) {
      margin-top: 38px;
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    margin-bottom: 10px;

    & > div {
      margin-bottom: 10px;
      text-align: left;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    justify-items: stretch;
    & > div {
      flex: 1;
    }
    & .FlexM {
      flex: 100%;
    }
    & .FlexCol {
      flex: 100%;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
    }
    & .FlexCol > .FlexRow {
      flex: 1;
      flex-direction: column;
      & .FlexRow {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
      }
    }
  }
`;

// const ServiceItemTextRow = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-start;
//   flex-direction: row;
//   text-align: left;
//   width: 100%;

//   @media (min-width: 768px) {
//     align-items: flex-start;
//   }
// `;
const ServiceItemTextCol = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;
const ServiceMainFlexCol = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const ServiceFlexRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  text-align: center;
  width: 100%;
  & .UnderLine {
    border-bottom: 2px solid ${({ theme }) => theme.underline1};
  }
  & .ServiceFlexR {
    flex: 1 1;
    flex-wrap: wrap;
    padding-right: 30px;
  }

  & .ServiceFont {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
    color: ${({ theme }) => theme.two};
    transition: color ${({ theme }) => theme.transition};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const ServiceFlexCol = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;
