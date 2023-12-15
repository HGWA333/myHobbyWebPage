import styled from "styled-components";

const Inspection2Component = () => {
  return (
    <>
      <Inspection2Content>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
        <div> Inspection2Component </div>
      </Inspection2Content>
    </>
  );
};

export default Inspection2Component;

const Inspection2Content = styled.div`
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
