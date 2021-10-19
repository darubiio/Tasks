import React from 'react';
import {
  Input,
  // Button,
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  // DrawerCloseButton,
} from "@chakra-ui/react";

export const DrawerC = ({ isOpen, onClose, btnRef, taskD }) => {

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      // size={['sm', 'xs']}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        {/* <DrawerCloseButton /> */}
        <DrawerHeader>{taskD.name}</DrawerHeader>
        <DrawerBody>
          <Input placeholder="Type here..." />
        </DrawerBody>

        {/* <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter> */}
        
      </DrawerContent>
    </Drawer>
  )
};