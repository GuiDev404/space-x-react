import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const BackButton = (props) => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <Button onClick={handleBack} type='button' size='sm' {...props}>
      Volver
    </Button>
  );
};

export default BackButton;
