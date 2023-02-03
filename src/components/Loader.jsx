import { Box, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box width='100%' textAlign='center'>
      <Spinner my={5} />
    </Box>
  )
}

export default Loader