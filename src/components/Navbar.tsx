import { Center, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/keen.png'
import DarkModeSwitch from './DarkModeSwitch'

const Navbar = () => {
  return (
    <HStack spacing={15} alignItems='center'>
        <Image src={logo} boxSize='60px'/>
        <Text >Keen Clone</Text>
        <DarkModeSwitch />
    </HStack>
  )
}

export default Navbar