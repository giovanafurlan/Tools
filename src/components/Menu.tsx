import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image
} from '@chakra-ui/react';
import Link from 'next/link';
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import dynamic from 'next/dynamic'
import React from 'react';
const DarkLight = dynamic(() => import("./DarkLight"));

export default function Menu({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logos = useColorModeValue('/images/webpeak-preto.webp', '/images/webpeak-branco.webp');
  const cor2 = useColorModeValue('white', 'gray.900');

  const Links = [
    {
      caminho: '/cssMinify',
      titulo: 'CSS Minify'
    },
    {
      caminho: '/htmlMinify',
      titulo: 'HTML Minify'
    },
    {
      caminho: '/jsMinify',
      titulo: 'JS Minify'
    },
    {
      caminho: '/status',
      titulo: 'Status'
    },
    {
      caminho: '/whois',
      titulo: 'Whois'
    },
    {
      caminho: '/backlinks',
      titulo: 'Backlinks'
    }
  ];

  const bg = useColorModeValue('white', 'gray.900');
  const color = useColorModeValue('gray.700', 'white');

  return (
    <Box>
      <Box
        pos='fixed'
        zIndex={1}
        w={'full'}
        background={cor2}
        height='70px'>
        <Flex
          h={16}
          margin='0 auto'
          w={{
            lg: '5xl',
            sm: 'auto'
          }}
          px={{
            lg: '0',
            sm: '2'
          }}
          align='center'
          justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <GrClose style={{ marginLeft: 12 }} /> : <FiMenu style={{ marginLeft: 12 }} />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Link
            href={'/'}
            legacyBehavior>
            <a>
            </a>
          </Link>
          <HStack
            as={'nav'}
            spacing={6}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link, idx) => (
              <NavLink
                key={idx}
                caminho={link.caminho}>
                <a>{link.titulo}</a>
              </NavLink>
            ))}
          </HStack>
          <Flex
            gap={'5'}
            justifyContent={'center'}>
            <DarkLight />
          </Flex>
        </Flex>
        {isOpen ? (
          <Box
            pos='fixed'
            display={{
              lg: 'none',
              md: 'none',
              sm: 'flex'
            }}
            bg={bg}
            color={color}
            w='full'
            px='4'
            pb='6'
            borderRadius={'lg'}
            zIndex={1}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, idx) => (
                <NavLink
                  key={idx}
                  caminho={link.caminho}>
                  {link.titulo}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box
        pt={'80px'}>
        {children}
      </Box>
    </Box>
  );
}

function NavLink({ children, caminho }) {
  const cor = useColorModeValue('gray.400', 'gray.600');

  return (
    <Box
      fontWeight={'500'}
      fontSize='14px'
      _hover={{
        textDecoration: 'none',
        color: cor
      }}
      cursor='pointer'>
      <Link
        legacyBehavior
        href={caminho}>
        {children}
      </Link>
    </Box>
  )
}