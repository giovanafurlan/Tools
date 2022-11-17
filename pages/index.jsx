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
        maxW={'8xl'}>
        Welcome
      </Container>
    </Menu>
  )
}
