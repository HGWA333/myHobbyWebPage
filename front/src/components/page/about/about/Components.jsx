import styled from "styled-components";
import "../../../../font/font.css";
import img1 from "../../../../img/1.jpg";
const AboutComponent = () => {
  return (
    <>
      <AboutContent>
        <div className="AboutContentItem1">
          <AboutItemBox1>
            <div>
              <span className="FontB">About</span>
              <span className="FontL">고객사와 동반 성장하는 안전진단전문기관, (주)파드</span>
            </div>
          </AboutItemBox1>
          <AboutItemBox2>
            <div className="FlexM LineB">
              <span className="FontBs">CEO Greeting</span>
              <span className="FontLs">대표 인사말</span>
            </div>
            <div className="FlexCol ">
              <AboutItemTextCol>
                <span className="FontMs">
                  (주)파드는 건축물에 대한 ‘안전점검 및 진단, 법원감정 및 하자진단’ 등을 주요 사업으로 하는 정부공인
                  안전진단전문기관입니다.
                </span>
                <span className="Stext">
                  ‘주식회사 파드’는 국민의 생명과 재산보호를 이념으로 건축물에 대한 ‘안전점검 및 진단, 내진성능평가,
                  하자진단 및 법원감정’ 등을 주요 사업으로 하는 국토교통부 지정 정부공인 안전진단전문기관입니다. 건축 전
                  과정에 대한 전문화된 기술력을 바탕으로 실효성 있는 안전지킴이시스템을 구축하여 건축물의 부실과 재해,
                  분쟁 등을 사전에 예방함으로서 지속가능 건축이라는 궁극의 목표를 향해 차별화된 Solution을 제시하고
                  있습니다. 특히 실천적 이론과 다양한 실무경험을 바탕으로 ‘사용자 시각’ 에서의 분석된 결과를 통해 사전
                  사고 예방이 가능하며 건축 외 토목, 전기, 설비 등 전 분야 전문가들과 활발한 교류로 충분한 기술 인프라를
                  갖추어 합리적인 전문성을 확보하고 있습니다. 수익만을 추구하는 기업이 아닌 공익을 우선시 하는
                  기업정신을 바탕으로 고객사와 동반성장하는 안전진단전문기관이 될 수 있도록 임직원 모두 사명감을 가지고
                  최선을 다하겠습니다. 감사합니다.
                </span>
              </AboutItemTextCol>
              <AboutItemTextCol>
                <AboutItemTextRow>
                  <span className="FontBs">방승호</span>
                  <span className="Mtext">대표</span>
                </AboutItemTextRow>
              </AboutItemTextCol>
              <AboutItemTextCol>
                <span className="FontLs">법원감정인 / 기 술 사</span>
                <span className="FontLs">한양대학교 스마트공학융합부 겸임교수</span>
              </AboutItemTextCol>

              <div></div>
            </div>
          </AboutItemBox2>
          <AboutItemBox1>
            <div className="FlexM LineB">
              <span className="FontBs">Philosophy of Technology</span>
              <span className="FontLs">기술철학</span>
            </div>
            <div className="FlexCol">
              <div className="FlexRow">
                <div>
                  <AboutItemTextRow>
                    <span className="FontMs">총체적 기술서비스 제공</span>
                  </AboutItemTextRow>
                  <AboutItemTextCol>
                    <span className="Stext">
                      ‘파드’는 건축 계약을 시작으로 설계, 인테리어, 시공, 유지관리 등 건축물의 전 생애주기에서 발생되는
                      문제에 대한종합적인 기술 서비스를 제공합니다.
                    </span>
                  </AboutItemTextCol>
                </div>
                <div>
                  <AboutItemTextRow>
                    <span className="FontMs">기술자로서의 윤리규범을 준수</span>
                  </AboutItemTextRow>
                  <AboutItemTextCol>
                    <span className="Stext">
                      ‘파드’의 모든 구성원은 올바른 가치관을 확립하고 윤리규범의 실천에 솔선수범함으로써 선진적인 건축
                      문화 창달에 앞장서고 있습니다.
                    </span>
                  </AboutItemTextCol>
                </div>
              </div>
              <div className="FlexRow">
                <div>
                  <AboutItemTextRow>
                    <span className="FontMs">건축물 특성화 분석</span>
                  </AboutItemTextRow>
                  <AboutItemTextCol>
                    <span className="Stext">
                      ‘파드’는 교육시설, 의료시설, 판매시설, 문화시설 등 각 건축물 특성에 대한 이해를 바탕으로 최적화된
                      전문성과 총체적 기술진단서비스를 제공합니다.
                    </span>
                  </AboutItemTextCol>
                </div>
                <div>
                  <AboutItemTextRow>
                    <span className="FontMs">근본적인 해결방안 제시</span>
                  </AboutItemTextRow>
                  <AboutItemTextCol>
                    <span className="Stext">
                      ‘파드’는 고객의 입장에서의 고민을 시작으로 발생된 문제에 대해 명확한 인과관계를 분석하여 가장
                      근본적이고, 실효성 있는 해결방안을 제시함으로써 고객의 시간과 비용을 절감합니다.
                    </span>
                  </AboutItemTextCol>
                </div>
              </div>
              <div className="FlexRow">
                <div>
                  <AboutItemTextRow>
                    <span className="FontMs">고객을 위한 기술 가치 이상의 솔루션</span>
                  </AboutItemTextRow>
                  <AboutItemTextCol>
                    <span className="Stext">
                      ‘파드’는 우리 고객에게 단기 프로젝트가 아닌 지속 가능한 신뢰 관계가 형성될 수 있도록 ‘고객 전용
                      자문시스템’을 구축하여 운영하고 있습니다.
                    </span>
                  </AboutItemTextCol>
                </div>
                <div></div>
              </div>
            </div>
          </AboutItemBox1>
          <AboutItemBox2>
            <div className="FlexM">
              <span className="FontBs">History</span>
              <span className="FontLs">연혁</span>
            </div>
            <div className="FlexCol">
              <div className="FlexRow BorderTop">
                <AboutItemTextRow>
                  <span className="FontMs">2021</span>
                  <span className="FontMs">. 3</span>
                </AboutItemTextRow>
                <AboutItemTextRow>
                  <span className="FontLs">(주)파드 안전진단전문기관 면허 등록</span>
                </AboutItemTextRow>

                <div></div>
              </div>
              <div className="FlexRow BorderTop">
                <AboutItemTextRow>
                  <span className="FontMs">2018</span>
                  <span className="FontMs">. 11</span>
                </AboutItemTextRow>
                <AboutItemTextRow>
                  <span className="FontLs">방건축기술사사무소 개설</span>
                </AboutItemTextRow>
                <div></div>
              </div>
            </div>
          </AboutItemBox2>
        </div>
        {/* <img src={img1} alt="asd"></img> */}
      </AboutContent>
    </>
  );
};

export default AboutComponent;

const AboutContent = styled.div`
  overflow-x: hidden;
  width: 100%;
  background: ${({ theme }) => theme.btn4};
  transition: color ${({ theme }) => theme.transition};
  margin-top: 74px;
  letter-spacing: 0.1rem;
  & .LineB {
    margin-bottom: 50px;
  }
  & .MarginB {
    border-bottom: 2px solid ${({ theme }) => theme.border1};
  }
  & .WidthE {
    border: 1px solid red;
    padding-right: 100px;
  }
  & span {
    padding: 7px;
    text-align: left;
  }

  & img {
    width: 100%;
    height: 300px;
    position: absolute;
    top: 350px;
    object-fit: cover;
  }

  & .AboutContentItem1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
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
  & .FontMs {
    font-size: clamp(1.3rem, 2vw, 1.1rem);
    font-family: Gm;
    align-self: flex-start;
    text-align: left;
    margin-bottom: 10px;
    @media (max-width: 768px) {
      font-size: clamp(1.45rem, 2vw, 1.3rem);
      line-height: 2;
    }
  }

  & .FontL {
    font-size: clamp(1.8rem, 2vw, 1.5rem);
    font-family: Gl;
    align-self: flex-start;
    text-align: left;
  }
  & .FontLs {
    font-size: clamp(1.3rem, 2vw, 1.3rem);
    font-family: Gl;
    align-self: flex-start;
    text-align: left;
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
    font-size: clamp(0.9rem, 1vw, 1.5rem);
    line-height: 2.5;
    @media (max-width: 768px) {
      font-size: clamp(0.9rem, 2vw, 1.3rem);
      margin-bottom: 20px;
    }
  }

  @media (max-width: 767px) {
    & .AboutContentItem2 {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
    }
  }
`;

const AboutItemBox1 = styled.div`
  color: ${({ theme }) => theme.two};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 88.5%;
  background: ${({ theme }) => theme.one};
  transition: color ${({ theme }) => theme.transition};
  padding: 10px;
  padding-top: 100px;
  padding-bottom: 100px;

  border-left: 2px solid ${({ theme }) => theme.border};
  & .FlexM {
    flex: 20%;
  }
  & > div > span.MediumText {
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
  & .FlexCol > .BorderTop {
    width: 90%;
  }

  & .BorderTop {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin: 0;
    border-top: 1px solid red;
    border-bottom: 1px solid red;
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
const AboutItemBox2 = styled.div`
  color: ${({ theme }) => theme.one};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 88.5%;
  background: ${({ theme }) => theme.two};
  transition: color ${({ theme }) => theme.transition};
  padding: 10px;
  padding-top: 100px;
  padding-bottom: 100px;

  border-left: 2px solid ${({ theme }) => theme.border};
  & .FlexM {
    flex: 20%;
  }
  & > div > span.MediumText {
  }
  & .BorderTop {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin: 0;
    border-top: 1px solid ${({ theme }) => theme.underline2};
    border-bottom: 1px solid ${({ theme }) => theme.underline2};
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
  & .FlexRow {
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

const AboutItemTextRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  text-align: left;
  width: 100%;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;
const AboutItemTextCol = styled.div`
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
