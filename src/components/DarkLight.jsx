import {
    Menu,
    MenuButton,
    useColorMode,
} from '@chakra-ui/react';
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

export default function DarkLight() {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Menu>
            <MenuButton
                aria-label='Dark Light'
                transition='all 0.2s'
                fontSize={'18px'}
                background='none'
                _hover={{ bg: 'none' }}
                onClick={toggleColorMode}>
                {colorMode === 'light' ?
                    <MdDarkMode color='tertiary' /> :
                    <BsFillSunFill color='tertiary' />}
            </MenuButton>
        </Menu>
    );
};