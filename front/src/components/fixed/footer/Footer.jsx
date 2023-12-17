import styled from "styled-components";

const Footer = ({}) => {
  return (
    <>
      <FooterStyled>
        <div>footer</div>
      </FooterStyled>
    </>
  );
};

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: red;
  @media (max-width: 1280px) {
  }
`;

export default Footer;
