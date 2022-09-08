import styled from "styled-components";
import { GameReportDisplay } from "./GameReportDisplay";
import { GameSelect } from "./GameSelect";
import { SpiritBoard } from "./SpiritBoard";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Simulator = () => {
  return (
    <Container>
      <GameSelect />
      <SpiritBoard />
      <GameReportDisplay />
    </Container>
  );
};

export default Simulator;
