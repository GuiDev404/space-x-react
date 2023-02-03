import { Box, Flex, HStack, Icon, Link, Spacer, Tag, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import { FaWikipediaW } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";
import { RiArticleLine } from "react-icons/ri";

import ErrorMessage from "../components/ErrorMessage";

import Loader from "../components/Loader";

import { useLaunch } from "../hooks/useLaunch";
import { formatDate } from "../utils/date";
import BackButton from "../components/BackButton";

const LaunchDetails = () => {
  const { details, error, loading } = useLaunch();

  const bgItem = useColorModeValue("gray.100", "gray.900");
  const colorTheme = useColorModeValue("gray.800", "gray.400");

  const timestamp = new Date(details?.launch_date_local).getTime();
  const date = details?.launch_date_local && formatDate(timestamp, "MMMM d 'del' yyyy");

  if (error)
    return (
      <ErrorMessage
        title={error?.message ?? ''}
        description={"No se pudo recuperar el lanzamiento. Lo sentimos."}
      />
    );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box bg={bgItem} p={4} my={2} borderRadius="md">
          <BackButton mb={2} />

          <Flex display="flex">
            <Text fontSize="1.2rem">
              Mission: <strong> {details.mission_name} </strong>
            </Text>
            <Spacer />
            <Tag height='2rem' colorScheme={details.launch_success ? "green" : "red"}>
              {details.launch_success ? "Success" : "Failure"}
            </Tag>
          </Flex>

          <VStack spacing={3} alignItems="start">
            <Flex align="center">
              <Icon as={HiCalendar} color={colorTheme} />
              <Text mx={1} fontSize="sm" color={colorTheme}>
                {date}
              </Text>
            </Flex>

            <Text py={3} color="gray.500" as='p'>
              {details?.details && details.details.length ? details.details : <Text as='span' textTransform='uppercase' fontSize='sm'> No description available </Text>}
            </Text>

            {details.rocket?.rocket_name &&
              <Box>
                <Text mb={1} fontWeight="600">
                  Rocket:
                </Text>
                
                <Flex gap={2}>
                <Text fontWeight='600'>
                  Name: <Link
                    state={details.rocket}
                    fontWeight="400"
                    color="gray.500"
                    as={LinkRouter}
                    to={`/rockets/${details.rocket?.rocket_id}`}
                  >
                    {details.rocket?.rocket_name}
                  </Link>
                </Text>
                
                <Spacer  />

                  <Text fontWeight='600'>
                    Type: <Text as='span' fontWeight='400' color="gray.500">
                      {details.rocket?.rocket_type}
                    </Text>
                  </Text>
                </Flex>
              </Box>
            }

            {details?.links && (details?.links.article_link || details?.links.wikipedia) &&
              <Box>
                <Text mb={1} fontWeight="600">
                  Read more:
                </Text>

                <HStack spacing={4} fontSize='sm'>
                  {Boolean(details?.links.article_link) &&
                    <HStack>
                      <Icon as={RiArticleLine} color='gray.500'  />
                      <Link rel='noopener noreferrer' target='_blank' href={details.links.article_link}> 
                        Article
                      </Link>
                    </HStack>
                  }

                  {Boolean(details?.links.wikipedia) &&
                    <HStack>
                      <Icon as={FaWikipediaW} color='gray.500'  />
                      <Link rel='noopener noreferrer' target='_blank' href={details.links.wikipedia}>
                        Article of Wikipedia
                      </Link>
                    </HStack>
                  }
                </HStack>

              </Box>
            }
          </VStack>
        </Box>
      )}
    </>
  );
};

export default LaunchDetails;
