import { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text
} from "@chakra-ui/react";
import Menu from '../components/Menu';
import axios from 'axios';

export default function Status() {

  const [string, setString] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setString(e.target.value);
  }

  async function SendURL() {
    fetch("/api/status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          url: string
        },
      }),
    });

    await fetch("/api/status", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        console.log(JSON.parse(response.data));
        setResult()
      })
      .catch(function (error) {
        console.log('erro index', error);
      });

  }

  return (
    <Menu>
      <Container
        py='4'
        maxW={'8xl'}>
        <FormControl
          isRequired>
          <FormLabel>
            Status Domain
          </FormLabel>
          <Input
            onChange={handleChange}
            placeholder='Paste the domain here' />
          <Button
            onClick={() => { SendURL() }}
            my='4'>
            Check
          </Button>
          <Text>
            {result}
          </Text>
        </FormControl>
      </Container>
    </Menu>
  )
}
