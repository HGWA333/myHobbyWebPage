import styled from "styled-components";

const CorpComponent = () => {
  return (
    <>
      <CorpContent>
        <div> CorpComponent </div>
        <div> CorpComponent </div>
        <div> CorpComponent </div>
        <div> CorpComponent </div>
        <div> CorpComponent </div>
        <div> CorpComponent </div>
        <div> CorpComponent </div>
        <div> CorpComponent </div>
        <div> CorpComponent </div>
        <div> CorpComponent </div>
        <div> CorpComponent </div>
        <div> CorpComponent </div>
        <div> CorpComponent </div>
      </CorpContent>
    </>
  );
};

export default CorpComponent;

const CorpContent = styled.div`
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
