import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import $ from 'jquery';

export default function Status() {

  const [string, setString] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setString(e.target.value);
  }

  function urlExists(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        callback(xhr.status < 400);
      }
    };
    xhr.open('HEAD', url);
    xhr.send();
  }
  
  urlExists('https://www.figma.com/', function(exists) {
      console.log('"%s" exists?', 'https://www.figma.com/', exists);
  });

  return (
    <Container
      py='4'
      maxW={'8xl'}>
      <FormControl
        isRequired>
        <FormLabel>
          Domain
        </FormLabel>
        <Input
          onChange={handleChange}
          placeholder='Paste the domain here' />
        <Button
          my='4'>
          Check
        </Button>
        <Text>
          {result}
        </Text>
      </FormControl>
    </Container>
  )
}
