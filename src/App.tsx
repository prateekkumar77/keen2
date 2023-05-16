import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'


function App() {

  return <Grid templateAreas={{
    base: `"offers" "nav" "main"`,
    lg: `"offers offers" "nav nav" "side main"`
  }}>
    <Show>
    <GridItem area='offers' bg='#CD4587'>
      Offers
    </GridItem>
    </Show>
    <GridItem area='nav' bg='#09B3B0'>
      <Navbar />
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
