import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const ErrorMessage = ({ title, description }) => {
  
  return (
    <Alert rounded="md" status="error">
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      <Link
        color="blue.100"
        as={RouterLink}
        mx={2}
        fontWeight="medium"
        to={`/`}
      >
        Volver
      </Link>
    </Alert>
  );
};

export default ErrorMessage;
