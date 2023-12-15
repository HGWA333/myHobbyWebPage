import styled from "styled-components";

const BuildComponent = () => {
  return (
    <>
      <BuildContent>
        <div> BuildComponent </div>
        <div> BuildComponent </div>
        <div> BuildComponent </div>
        <div> BuildComponent </div>
        <div> BuildComponent </div>
        <div> BuildComponent </div>
        <div> BuildComponent </div>
        <div> BuildComponent </div>
        <div> BuildComponent </div>
        <div> BuildComponent </div>
        <div> BuildComponent </div>
        <div> BuildComponent </div>
        <div> BuildComponent </div>
      </BuildContent>
    </>
  );
};

export default BuildComponent;

const BuildContent = styled.div`
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
