import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import Menu from '../../components/Menu';
import { useState } from "react";

export default function Backlinks() {

  const [string, setString] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setString(e.target.value);
  }

  function checkDomain() {

    var axios = require('axios');

    const post_array = [];
    
    post_array.push({
      "target": string,
      "mode": "as_is",
      "filters": ["dofollow", "=", true],
      "limit": 5
    });

    axios({
      method: 'post',
      url: 'https://api.dataforseo.com/v3/backlinks/backlinks/live',
      auth: {
        username: 'deyec27597@teknowa.com',
        password: '794b74ecf5f42e2d'
      },
      data: post_array,
      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      var result = response['data']['tasks'];
      // Result data
      console.log(result);
    }).catch(function (error) {
      console.log(error);
    });
  }

  return (
    <Menu>
      <Container
        py='4'
        px='0'
        maxW={'5xl'}>
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
