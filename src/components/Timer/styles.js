import styled, { keyframes } from "styled-components";

const progressColor = "#3D2992";
const progressContainer = "#f0f0f0";
const progressContainerHover = "#efebff";
const backgroundColor = "#ffffff";

const blink = keyframes`
    50% {
        opacity: 0;
    }
`;

export const TimerContainer = styled.div`
  position: relative;
  width: min(50vh, 70vw);
  height: min(50vh, 70vw);
  background: ${progressContainer};
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset 0px 3px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircularProgress = styled.div`
  position: absolute;
  width: 90%;
  height: 90%;
  background: ${backgroundColor};
  border-radius: 50%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background: ${progressContainerHover};
  }
`;

export const Segment1 = styled.div.attrs(({ completed }) => ({
  style: {
    transform: `rotate(270deg) skew(${
      completed < 25 ? (completed * -90) / 25 + 90 : 0
    }deg)`,
  },
}))`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: ${progressColor};
  transform-origin: 0 0;
`;

export const Segment2 = styled.div.attrs(({ completed }) => ({
  style: {
    transform: `rotate(0deg) skew(${
      completed < 25 ? 90 : completed < 50 ? (completed * -90) / 25 + 180 : 0
    }deg)`,
  },
}))`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: ${progressColor};
  transform-origin: 0 0;
`;

export const Segment3 = styled.div.attrs(({ completed }) => ({
  style: {
    transform: `rotate(90deg) skew(${
      completed < 50 ? 90 : completed < 75 ? (completed * -90) / 25 + 90 : 0
    }deg)`,
  },
}))`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: ${progressColor};
  transform-origin: 0 0;
`;
export const Segment4 = styled.div.attrs(({ completed }) => ({
  style: {
    transform: `rotate(180deg) skew(${
      completed < 75 ? 90 : completed < 100 ? (completed * -90) / 25 + 180 : 0
    }deg)`,
  },
}))`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: ${progressColor};
  transform-origin: 0 0;
`;
export const Time = styled.p`
  font-size: min(10vh, 15vw);
  font-weight: bold;
  margin: 0;
  color: ${progressColor};
  opacity: 1;
  animation: ${({ timerOver }) => timerOver && blink} 2s linear infinite;
`;

export const Label = styled.p`
  font-size: min(4vh, 6vw);
  font-weight: bold;
  margin: 0;
  margin-top: min(2vh, 2vw);
  color: ${progressColor};
`;
