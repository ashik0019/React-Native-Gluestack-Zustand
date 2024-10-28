import React from 'react';
import { Button, ButtonText, Input, InputField, Text, VStack } from '@gluestack-ui/themed';

const HomeScreen = () => {
  return (
    <VStack space={4} alignItems="center" mt={108}>
      <Text fontSize="2xl" color="primary.500">
        Welcome to Gluestack UI!
      </Text>

      <Input variant="outline" size="md">
        <InputField placeholder="Enter Text here..." />
      </Input>

      <Button size="md" variant="solid" action="primary" onPress={() => alert('Button Pressed')}>
        <ButtonText color="white">Hello World!</ButtonText>
      </Button>
    </VStack>
  );
};

export default HomeScreen;
