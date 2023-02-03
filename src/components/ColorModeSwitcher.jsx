import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  
  // ASI
  const SwitchIcon = colorMode === 'light' ? MdDarkMode : MdLightMode;
  // OR
  // const SwitchIcon = useColorModeValue(MdDarkMode, MdLightMode);

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    >

    </IconButton>
  )
}

export default ColorModeSwitcher