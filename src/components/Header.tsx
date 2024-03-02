import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      p={4}
      bg="teal.500"
      color="white"
      boxShadow="md"
    >
      <Link to="/">
        <Heading as="h2" size="lg">
          My App
        </Heading>
      </Link>
      <Flex gap={5} align="center" justify="space-between">
        <Link to="/" _hover={{ textDecoration: 'none' }}>
          <Text fontSize="lg" fontWeight="bold" _hover={{ color: 'teal.300' }}>
            Counter
          </Text>
        </Link>
        <Link to="/userform" _hover={{ textDecoration: 'none' }}>
          <Text fontSize="lg" fontWeight="bold" _hover={{ color: 'teal.300' }}>
            User Data
          </Text>
        </Link>
        <Link to="/richtexteditor" _hover={{ textDecoration: 'none' }}>
          <Text fontSize="lg" fontWeight="bold" _hover={{ color: 'teal.300' }}>
            Rich Text Editor
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
