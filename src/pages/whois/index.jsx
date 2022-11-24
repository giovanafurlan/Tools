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
  Tr,
} from "@chakra-ui/react";
import Menu from '../../components/Menu';
import { useState } from "react";

export default function Whois() {

  const [string, setString] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setString(e.target.value);
  }

  function checkDomain() {
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

    fetch("/api/whois", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);

        const data = result;
        setResult(
          <Table variant='simple'>
            <Tbody>
              <Tr>
                <Td>
                  Domain
                </Td>
                <Td>
                  {data.domain}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Registrar
                </Td>
                <Td>
                  {data.registrar.name}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Registrar URL
                </Td>
                <Td>
                  {data.registrar.url}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Registrant
                </Td>
                <Td>
                  {data.registrant.organization}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Create Date
                </Td>
                <Td>
                  {data.create_date}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Update Date
                </Td>
                <Td>
                  {data.update_date}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Expire Date
                </Td>
                <Td>
                  {data.expire_date}
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
          <TableContainer>
            {result}
          </TableContainer>
        </FormControl>
      </Container>
    </Menu>
  )
}
