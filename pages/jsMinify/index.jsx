import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Textarea
} from "@chakra-ui/react";
import { useState } from "react";
import Menu from '../components/Menu';
import CopyClipboard from "../components/CopyClipboard";

export default function JSMinify() {

  const [string, setString] = useState('');
  const [isDisplay, setDisplay] = useState(true);

  const handleChange = (e) => {
    setDisplay(false);
    setString(e.target.value);
  }

  const formatString = () => {
    setDisplay(true);
    var axios = require('axios');
    var qs = require('qs');

    var data = qs.stringify({
      'input': string
    });
    var config = {
      method: 'post',
      url: 'https://www.toptal.com/developers/javascript-minifier/api/raw',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setString(response.data);
      })
      .catch(function (error) {
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
            JS Code
          </FormLabel>
          <Textarea
            onChange={handleChange}
            placeholder='Paste your JS code here'
            rows={'8'} />
          <Button
            onClick={formatString}
            my='4'>
            Minify
          </Button>
          <Textarea
            value={isDisplay && string}
            placeholder='Result'
            readOnly
            rows={'8'} />
          <CopyClipboard
            copyText={string} />
        </FormControl>
      </Container>
    </Menu>
  )
}
