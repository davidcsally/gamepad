import React from 'react'
import styled from 'styled-components'

export interface Props {
  xAxis: number;
  yAxis: number;
}

const Container = styled.div`
  height: 10rem;
  width: 10rem;
  border: 0.125rem solid black;
  border-radius: 50%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  /* Vertical Line */
  &:before {
    content: "";
    height: 100%;
    width: 2px;
    background-color: blue;
    position: absolute;
  }

  /* Horizontal Line */
  &:after {
    content: "";
    height: 2px;
    width: 100%;
    background-color: red;
    position: absolute;
  }
`

const Dot = styled.div.attrs((props) => ({
  style: {
    top: `${props.top / 2}%`,
    left: `${props.left / 2}%`,
  }
}))`
  width: 1rem;
  height: 1rem;
  background-color: black;
  position: relative;
  border-radius: 50%;
  z-index: 2;
`;

export const Joystick: React.FC<Props> = ({ xAxis, yAxis }) => (
  <div>
    <Container>
      <Dot top={yAxis * 100} left={xAxis * 100} />
    </Container>
  </div>
)
