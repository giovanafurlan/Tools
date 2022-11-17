import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import Menu from '../components/Menu';
import { useState } from "react";

export default function Whois() {

  const [string, setString] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setString(e.target.value);
  }

  function checkDomain() {
    fetch("/api/whois", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          url: string
        },
      }),
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
             Whois Domain
          </FormLabel>
          <Input
            onChange={handleChange}
            placeholder='Paste the domain here'
            rows={'8'} />
          <Button
            onClick={checkDomain}
            my='4'>
            Check
          </Button>
          <Text
            id="demo">
            {result}
          </Text>
        </FormControl>
      </Container>
    </Menu>
  )
}
