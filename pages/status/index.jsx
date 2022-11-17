import { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr
} from "@chakra-ui/react";
import Menu from '../components/Menu';

export default function Status() {

  const [string, setString] = useState('');
  const [result, setResult] = useState('');
  const [paths, setPaths] = useState([]);

  const handleChange = (e) => {
    setString(e.target.value);
  }

  function SendURL() {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user: {
        url: string
      }
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/status", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);

        setPaths(result.data);

        const data = result;
        setResult(
          <Table variant='simple'>
            <Tbody>
              <Tr>
                <Td>
                  URL
                </Td>
                <Td>
                  {data.meta.url}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  status code
                </Td>
                <Td>
                  {data.apiCode} {data.apiStatus}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  message
                </Td>
                <Td>
                  {data.message}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        );
      })
      .catch(error => console.log('error index', error));
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
          <TableContainer>
            {result}
          </TableContainer>
            {/* <TableContainer>
              <Table
                variant='simple'>
                <Tbody>
                  {paths.map((data, key) => {
                    return (
                      <Tr
                        key={key}>
                        <Td>
                          {data.link}
                        </Td>
                        <Td>
                          status {data.status}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer> */}
        </FormControl>
      </Container>
    </Menu>
  )
}
