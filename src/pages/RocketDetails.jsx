import { Box, Flex, Heading, Image, Spacer, Tag, useColorModeValue,Text } from "@chakra-ui/react";
import BackButton from "../components/BackButton";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import useRocket from "../hooks/useRocket";

const RocketDetails = () => {
  const { loading, details, error } = useRocket();
  
  const bgItem = useColorModeValue("gray.100", "gray.900");
  // const colorTheme = useColorModeValue("gray.800", "gray.400");


  if (error)
    return (
      <ErrorMessage
        title={error?.message ?? ''} 
        description={"No pudimos recuperar el cohete. Lo sentimos."}
      />
    );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box bg={bgItem} p={4} my={2} borderRadius="md">
          <BackButton />

          {details?.flickr_images && (
            <Image 
              src={details?.flickr_images?.[0]}
              objectFit='cover'
              rounded='md'
              my={4} 
            />
          )}

          <Flex display="flex" alignItems='center'>
            <Heading as="h2" fontSize="1.2rem" fontWeight="bold">
              {details.rocket_name}
            </Heading>
            <Spacer />
            <Tag colorScheme={details.active ? "green" : "red"}>
              {details.active ? "Active" : "No active"}
            </Tag>
          </Flex>

          <Text py={3} color="gray.500" as="p">
            {details?.description && details.description.length ? (
              details.description
            ) : (
              <Text as="span" textTransform="uppercase" fontSize="sm">
                No description available
              </Text>
            )}
          </Text>
        </Box>
      )}
    </>
  );
};

export default RocketDetails;
