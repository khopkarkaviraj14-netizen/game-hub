import React from 'react'
import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/icons8-logo-64.webp';

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px' />
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar
