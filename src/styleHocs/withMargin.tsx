import React from 'react'
import styled from 'styled-components'

export const withMargin = (WrappedComponent, margin = 0) =>
  styled(WrappedComponent)`
    margin: ${margin};
  `