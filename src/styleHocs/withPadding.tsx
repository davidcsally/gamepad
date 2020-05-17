import React from 'react'
import styled from 'styled-components'

export const withPadding = (WrappedComponent, padding = 0) =>
  styled(WrappedComponent)`
    padding: ${padding};
  `