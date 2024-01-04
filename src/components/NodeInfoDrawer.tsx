import { Drawer, DrawerOverlay } from '@chakra-ui/react';
import RequirementNodeInfoDrawerForm from '@/components/RequirementNodeInfoDrawerForm.tsx';
import { useAppSelector } from '@/app/hooks.ts';

interface NodeInfoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NodeInfoDrawer: React.FC<NodeInfoDrawerProps> = ({ isOpen, onClose }) => {
  const selectedNode = useAppSelector(state =>
    state.requirement.nodes.find(node => node.selected === true),
  );

  if (!selectedNode) {
    return null;
  }

  return (
    <Drawer placement={'right'} isOpen={isOpen} onClose={onClose} size={'sm'}>
      <DrawerOverlay />
      <RequirementNodeInfoDrawerForm
        onClose={onClose}
        id={selectedNode.id}
        data={selectedNode.data}
      />
    </Drawer>
  );
};

export default NodeInfoDrawer;
