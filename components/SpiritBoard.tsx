import styled from "styled-components";
import { State, useGlobalStore } from "../hooks/useStore";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
`;

const SpiritBoardImage = styled.img<{ url: string }>`
  width: 100%;
  pointer-events: none;
`;

const AbsoluteContents = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const GrowthOptionButton = styled.button<{
  x: number;
  y: number;
  w: number;
  h: number;
}>`
  position: absolute;
  top: ${(props) => props.y}%;
  left: ${(props) => props.x}%;
  width: ${(props) => props.w}%;
  height: ${(props) => props.h}%;
  background-color: rgba(140, 0, 200, 0.3);
`;

const GrowthTrackButton = styled.button<{
  x: number;
  y: number;
  w: number;
  h: number;
}>`
  position: absolute;
  top: ${(props) => props.y}%;
  left: ${(props) => props.x}%;
  width: ${(props) => props.w}%;
  height: ${(props) => props.h}%;
  background-color: rgba(140, 0, 200, 0.3);
  border-radius: 50%;
`;

export const SPIRIT_ASSETS = {
  Mud: {
    front: "/spirits/Mud/Spirit_Mud_Front.jpg",
  },
};

export const SpiritBoard = () => {
  const { spirit } = useGlobalStore((state) => state);
  return (
    <Container>
      <SpiritBoardImage src={SPIRIT_ASSETS.Mud.front} />
      <AbsoluteContents>
        <GrowthOptionButton x={41} y={4} w={17} h={15} />
        <GrowthOptionButton x={60} y={4.2} w={16} h={15} />
        <GrowthOptionButton x={78} y={4.4} w={20} h={15} />

        <GrowthTrackButton x={49} y={24.3} w={6.7} h={10.2} />
        <GrowthTrackButton x={56.6} y={24.4} w={6.7} h={10.2} />
        <GrowthTrackButton x={64.2} y={24.6} w={6.7} h={10.2} />
        <GrowthTrackButton x={71.6} y={24.7} w={6.7} h={10.2} />
        <GrowthTrackButton x={79} y={24.8} w={6.6} h={10.2} />
        <GrowthTrackButton x={86.6} y={24.9} w={6.6} h={10.2} />

        <GrowthTrackButton x={49} y={39.1} w={6.7} h={10.2} />
        <GrowthTrackButton x={56.6} y={39.2} w={6.7} h={10.2} />
        <GrowthTrackButton x={64.2} y={39.4} w={6.7} h={10.2} />
        <GrowthTrackButton x={71.6} y={39.5} w={6.7} h={10.2} />
        <GrowthTrackButton x={79.2} y={39.6} w={6.6} h={10.2} />
      </AbsoluteContents>
    </Container>
  );
};
