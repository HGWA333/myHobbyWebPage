import styled from "styled-components";
import "../../../../font/font.css";
const ServiceComponent = ({ textData, serviceSelected, setServiceSelected }) => {
  return (
    <>
      <ServiceContent>
        <div className="ServiceContentItem1">
          <ServiceItemBox1 className="MarginB">
            <div>
              <span className="FontB">SERVICES</span>
              <span className="FontL">(주)파드의 기술철학이 녹아든 서비스 분야</span>
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
                      <div className="ServiceFont">
                        {title}
                        {i === serviceSelected && (
                          <div className="underline" style={{ backgroundColor: `${({ theme }) => theme.text}` }} />
                        )}
                        {!(serviceSelected === 1 && i === 2) && <></>}
                      </div>
                    </div>
                  );
                })}
              </ServiceFlexRow>
              <ServiceFlexCol>
                {serviceSelected === 0 && (
                  <>
                    <div> index (0) </div>
                  </>
                )}
                {serviceSelected === 1 && (
                  <>
                    <div> index (1) </div>
                  </>
                )}
                {serviceSelected === 2 && (
                  <>
                    <div> index (2) </div>
                  </>
                )}
                {serviceSelected === 3 && (
                  <>
                    <div> index (3) </div>
                  </>
                )}
                {serviceSelected === 4 && (
                  <>
                    <div> index (4) </div>
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
    padding-top: 8px;
    @media (max-width: 768px) {
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
  padding: 10px;
  padding-top: 100px;
  padding-bottom: 100px;
  /* border-bottom: 1.7px solid red; */
  border-left: 2px solid ${({ theme }) => theme.border};
  & .FlexM {
    flex: 20%;
    /* border: 1px solid red; */
  }
  & > div > span.Mtext {
    /* border: 1px solid black; */
  }
  & .FlexCol {
    flex: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    /* border: 1px solid red; */
  }
  & .FlexCol > .FlexRow {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    /* border: 1px solid red; */
  }
  & .FlexCol > .FlexRow > div {
    flex: 1;
    /* border: 1px solid red; */
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
      /* border: 1px solid red; */
    }
    & .FlexCol {
      flex: 100%;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
      /* border: 1px solid red; */
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
  width: 88.5%;
  background: ${({ theme }) => theme.two};
  transition: color ${({ theme }) => theme.transition};
  padding: 10px;
  padding-top: 100px;
  padding-bottom: 100px;
  /* border-bottom: 1.7px solid red; */
  border-left: 2px solid ${({ theme }) => theme.border};
  & .FlexM {
    flex: 20%;
    /* border: 1px solid red; */
  }
  & > div > span.Mtext {
    /* border: 1px solid black; */
  }
  & .FlexCol {
    flex: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    /* border: 1px solid red; */
  }
  & .FlexCol > .FlexRow {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    /* border: 1px solid red; */
  }
  & .FlexCol > .FlexRow > div {
    flex: 1;
    /* border: 1px solid red; */
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
      /* border: 1px solid red; */
    }
    & .FlexCol {
      flex: 100%;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
      /* border: 1px solid red; */
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

const ServiceItemTextRow = styled.div`
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
  justify-content: flex;
  align-items: flex;
  flex-direction: row;
  text-align: center;
  width: 100%;

  & .ServiceFlexR {
    flex: 1 1;
    flex-basis: content;
    flex-wrap: wrap;
  }

  & .ServiceFont {
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
