import styled from "styled-components";

const LegalComponent = () => {
  return (
    <>
      <LegalContent>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
        <div> LegalComponent </div>
      </LegalContent>
    </>
  );
};

export default LegalComponent;

const LegalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: blue;

  @media (max-width: 768px) {
    background-color: green;
  }
`;
