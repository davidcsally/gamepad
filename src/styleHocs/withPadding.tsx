import React from 'react'
import styled from 'styled-components'

interface Props {
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
}

const exists = value => typeof value !== 'undefined' ? true : false

export const withPadding = (
  WrappedComponent,
  {
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  }: Props
) =>
  styled(WrappedComponent)`
    ${exists(padding) && `padding: ${padding};`}
    ${exists(paddingTop) && `padding-top: ${paddingTop};`}
    ${exists(paddingBottom) && `padding-bottom: ${paddingBottom};`}
    ${exists(paddingLeft) && `padding-left: ${paddingLeft};`}
    ${exists(paddingRight) && `padding-right: ${paddingRight};`}
  `
