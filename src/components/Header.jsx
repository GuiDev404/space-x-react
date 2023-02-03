import { Heading, Box, Flex } from "@chakra-ui/react";

const Header = ({ title, options }) => {
  return (
    <Box as="header">
      <Flex
        alignItems="center"
        flexWrap={{ base: "wrap", sm: "nowrap" }}
        justifyContent={{ base: "flex-start", sm: "space-between" }}
      >
        <Heading
          as="h1"
          textAlign="center"
          my={4}
          size={{ base: "xl", sm: "lg" }}
        >
          {title}
        </Heading>

        <Box
          display="flex"
          width={{ base: "100%", sm: "auto" }}
          alignItems="center"
          gap={2}
        >
          {options}
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
