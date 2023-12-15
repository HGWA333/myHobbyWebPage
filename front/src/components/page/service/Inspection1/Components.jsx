import styled from "styled-components";

const Inspection1Component = () => {
  return (
    <>
      <Inspection1Content>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
        <div> Inspection1Component </div>
      </Inspection1Content>
    </>
  );
};

export default Inspection1Component;

const Inspection1Content = styled.div`
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
