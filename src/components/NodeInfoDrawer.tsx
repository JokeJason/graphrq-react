import { Drawer, DrawerOverlay } from '@chakra-ui/react';
import RequirementNodeInfoDrawerForm from '@/components/RequirementNodeInfoDrawerForm.tsx';

interface NodeInfoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NodeInfoDrawer: React.FC<NodeInfoDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer placement={'right'} isOpen={isOpen} onClose={onClose} size={'sm'}>
      <DrawerOverlay />
      <RequirementNodeInfoDrawerForm onClose={onClose} />
    </Drawer>
  );
};

export default NodeInfoDrawer;
