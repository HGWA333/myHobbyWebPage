import styled from "styled-components";

const DiagnosisComponent = () => {
  return (
    <>
      <DiagnosisContent>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
        <div> DiagnosisComponent </div>
      </DiagnosisContent>
    </>
  );
};

export default DiagnosisComponent;

const DiagnosisContent = styled.div`
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
