import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Textarea
} from "@chakra-ui/react";
import { useState } from "react";
import CopyClipboard from "./components/CopyClipboard";

export default function Home() {

  const [string, setString] = useState('');
  const [isDisplay, setDisplay] = useState(true);

  const handleChange = (e) => {
    setDisplay(false);
    setString(e.target.value);
  }

  const formatString = () => {
    setDisplay(true);
    let temp = string;
    temp = temp.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1")
      .replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1")
      .replace(/;}/g, "}")
      .replace(/\/\*.*?\*\//g, "");
    setString(temp);
  }

  return (
    <Container
      py='4'
      maxW={'8xl'}>
      <FormControl
        isRequired>
        <FormLabel>
          CSS Code
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