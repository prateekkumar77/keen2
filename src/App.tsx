import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'

function App() {

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "side main"`
  }}>
    <GridItem area='nav' bg='#09B3B0'>
      Nav
    </GridItem>
    <Show above='lg'>
    <GridItem area='side' bg='coral'>
      Side
    </GridItem>
    </Show>
    <GridItem area='main' bg='#F1FAF9'>
      Main
    </GridItem>

  </Grid>
}

export default App
