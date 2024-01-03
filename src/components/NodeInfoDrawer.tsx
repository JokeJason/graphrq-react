import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';

interface NodeInfoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NodeInfoDrawer: React.FC<NodeInfoDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer placement={'right'} isOpen={isOpen} onClose={onClose} size={'sm'}>
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
