import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Textarea
} from "@chakra-ui/react";
import { useState } from "react";
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
    let temp = string;
    temp = temp
    setString(temp);
  }
 
  return (
    <Container
      py='4'
      maxW={'8xl'}>
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
  )
}
