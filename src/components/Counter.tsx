import React, { useState } from 'react';
import { Button, Box, Heading } from '@chakra-ui/react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <Box
      p={6}
      mx="auto"
      mt="10%"
      maxW="400px"
      textAlign="center"
      borderRadius="md"
      boxShadow="md"
      bgGradient="linear(to-b, #FFFFFF, #87CEEB)"
      transition="background 0.5s ease"
    >
      <Heading mb={4} color="#333">
        Counter: {count}
      </Heading>
      <Button onClick={increment} m={2} colorScheme="teal" variant="solid">
        Increment
      </Button>
      <Button onClick={decrement} m={2} colorScheme="orange" variant="solid">
        Decrement
      </Button>
      <Button onClick={reset} m={2} colorScheme="red" variant="outline">
        Reset
      </Button>
    </Box>
  );
};

export default Counter;
