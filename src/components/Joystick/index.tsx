import React from 'react'
import styled from 'styled-components'

import { secondary, primary } from '../../styles/colors';

export interface Props {
  xAxis: number;
  yAxis: number;
  className?: string;
}

const Container = styled.div`
  height: 10rem;
  width: 10rem;
  border: 0.125rem solid ${secondary};
  border-radius: 50%;
  position: relative;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  /* Vertical Line */
  &:before {
    content: "";
    height: 100%;
    width: 2px;
    background-color: ${secondary};
    position: absolute;
  }

  /* Horizontal Line */
  &:after {
    content: "";
    height: 2px;
    width: 100%;
    background-color: ${secondary};
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
  background-color: ${primary};
  /* background-color: white; */
  /* border: 1px solid black;; */
  position: relative;
  border-radius: 50%;
  z-index: 2;
`;

export const Joystick: React.FC<Props> = ({ className, xAxis, yAxis }) => (
  <Container className={className}>
    <Dot top={yAxis * 100} left={xAxis * 100} />
  </Container>
)
