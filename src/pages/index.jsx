import {
  Container
} from "@chakra-ui/react";
import Menu from './components/Menu';
import { useState } from "react";

export default function Home() {

  return (
    <Menu>
      <Container
        py='4'
        px='0'        maxW={'5xl'}>
        Welcome
      </Container>
    </Menu>
  )
}
