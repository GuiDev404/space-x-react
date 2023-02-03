import { Box, Button, Flex, Icon, Spacer, Tag, Text, useColorModeValue } from "@chakra-ui/react";
import { memo } from "react";
import { HiCalendar } from "react-icons/hi";

import { Link } from "react-router-dom";
import { formatDate } from "../utils/date";

const LaunchItem = ({
  flight_number,
  mission_name,
  launch_year,
  launch_success,
  launch_date_local,
  details,
  rocket,
  links
  // ...other
}) => {
  const bgItem = useColorModeValue("gray.100", "gray.900")
  const colorTheme = useColorModeValue("gray.800", "gray.400")

  const bgBtnDetails = useColorModeValue("gray.200", "gray.800")

  const timestamp = new Date(launch_date_local).getTime();
  const formattedDate = formatDate(timestamp, "MMMM d 'del' yyyy");

  const launch_details = {
    flight_number,
    mission_name,
    launch_year,
    launch_success,
    launch_date_local,
    details,
    rocket,
    links
    // ...other,
  };

  return (
    <Box bg={bgItem} p={4} my={2} borderRadius="md">
      <Flex display="flex">
        <Text fontSize="1.2rem">
          Mission: <strong> {mission_name} </strong> ({launch_year})
        </Text>
        <Spacer />
        <Tag  height='2rem' size={{ base: 'sm', sm: 'md' }} colorScheme={launch_success ? "green" : "red"}>
          {launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>
      <Flex align="center">
        <Icon as={HiCalendar} color={colorTheme} />
        <Text mx={1} fontSize="sm" color={colorTheme}>
          {formattedDate}
        </Text>
      </Flex>
      <Text mt={1} color="gray.500" noOfLines={2}>
        {details && details.length ? (
          details
        ) : (
          <Text as="span" fontWeight='500' textTransform="uppercase" fontSize="sm">
            No description available
          </Text>
        )}
      </Text>

      <Button
        as={Link}
        state={launch_details}
        to={`/launch/${flight_number}`}
        bg={bgBtnDetails}
        color={colorTheme}
        size="sm"
        my={2}
        border="1px solid transparent"
        // _hover={{ bg: "none", border: "1px solid", borderColor: "gray.400" }}
      >
        Mas detalles
      </Button>
    </Box>
  );
};

export default memo(LaunchItem);
