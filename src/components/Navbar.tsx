import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/keen.png'

const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <Text>Keen Clone</Text>
    </HStack>
  )
}

export default Navbar