import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
}

const exists = value => typeof value !== 'undefined' ? true : false

export const withMargin = (WrappedComponent: any,
  {
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  }: Props
) =>
  styled(WrappedComponent)`
    ${exists(margin) && `margin: ${margin};`}
    ${exists(marginTop) && `margin-top: ${marginTop};`}
    ${exists(marginBottom) && `margin-bottom: ${marginBottom};`}
    ${exists(marginLeft) && `margin-left: ${marginLeft};`}
    ${exists(marginRight) && `margin-right: ${marginRight};`}
  `
