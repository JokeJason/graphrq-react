import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';

const NodeInfoDrawer = (isOpen: boolean, onClose: () => void) => {
  return (
    <Drawer placement={'right'} isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth={'1px'}>Basic Drawer</DrawerHeader>
      </DrawerContent>
      <DrawerBody>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </DrawerBody>
    </Drawer>
  );
};

export default NodeInfoDrawer;
