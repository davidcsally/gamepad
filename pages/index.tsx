import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { MappedProController } from '../src/components/FaceButtons'
import { withGamepad } from '../src/hocs/withGamepad'
import { ConnectedVibrator } from '../src/components/Vibrator'

const WrappedProController = withGamepad(MappedProController)

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
`

const Card = styled.div`
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  & h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  & p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  font-family: 'Press Start 2P', var(--default-fonts);
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Gamepad API Demo</title>
        <meta
          name="description"
          content="This demonstrates how to use the Gamepad API in modern browsers, including Chrome, Edge, Safari, and Firefox."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
          Connect your gamepad!
        </Title>
        <Grid>
          <Card>
            <h2>Switch Pro Controller</h2>
            <WrappedProController />
          </Card>
          <Card>
            <h2>Bzzzz zzzz </h2>
            <ConnectedVibrator />
          </Card>
        </Grid>
      </Main>
    </Container>
  )
}
