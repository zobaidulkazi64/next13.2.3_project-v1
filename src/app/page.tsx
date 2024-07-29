import React from 'react'
import { Flex, Text, Button, ThemePanel } from "@radix-ui/themes";
import Header from '@/components/Header/Header';
import DropdownMenuComponent from '@/components/Header/DropdownMenuComponent';
const HomePage = () => {
  return (
    <div>
      <Header />

      <DropdownMenuComponent />
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Lets go</Button>
        <p className='text-9xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          laudantium temporibus eius ullam modi tempore ad, in ipsum saepe
          consequatur possimus, nisi deserunt error, veniam magnam nostrum
          molestiae exercitationem. Dolorem?
        </p>
      </Flex>
    </div>
  );
}

export default HomePage