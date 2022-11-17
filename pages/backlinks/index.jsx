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

export default function Backlinks() {

  const [string, setString] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setString(e.target.value);
  }

  function checkDomain() {

    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://api.ip2whois.com/v2?key=65ED04B517E05788FA98313B0DEB8ADE&domain=webpeak.com',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
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
            Backlinks Domain
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
