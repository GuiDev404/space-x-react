import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Flex minH="95vh" mt='-10' justifyContent="center" alignItems="center">
      <Stack spacing={4} direction="column" alignItems="center">
        <Heading ml="-1" as="h1" fontWeight="800" fontSize={{ base: '5xl', sm: '7xl', md: "9xl" }}>
          Oops!
        </Heading>
        <Heading
          as="h2"
          color="gray.500"
          fontSize="3xl"
          textAlign='center'
          textTransform="uppercase"
        >
          404 - page not found
        </Heading>
        <Text textAlign='center'  color="gray.300">
          La pagina que intenta buscar no esta disponible, porque fue eliminada o hubo un error de tipeo en la URL, controle esta ultima accion. Si no es asi lo sentimos puede volver al inicio haciendo click en el siguiente boton.
        </Text>
        <Button as={Link} to='/' textTransform="uppercase" fontSize="sm" w='fit-content'>
          VOLVER AL INICIO
        </Button>
      </Stack>
    </Flex>
  );
};

export default NotFound;
