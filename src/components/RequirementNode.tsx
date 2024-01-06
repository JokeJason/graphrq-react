import { useAppSelector } from '@/app/hooks.ts';
import useDrawerDisclosure from '@/app/hooks/useDrawerDisclosure.ts';
import { NodeData } from '@/types.ts';
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { Handle, NodeProps, Position } from 'reactflow';

const RequirementNode = ({ id, isConnectable }: NodeProps) => {
  const nodeData: NodeData = useAppSelector(
    state => state.requirement.nodes.find(n => n.id === id)?.data,
  );
  const { onDrawerOpen } = useDrawerDisclosure();

  if (!nodeData) return <p>Loading</p>;

  return (
    <Card id={id} onClick={onDrawerOpen} width={'400px'}>
      <Handle
        type={'target'}
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <CardHeader>
        <Heading size={'md'}>{nodeData.title}</Heading>
      </CardHeader>
      <HStack marginX={'20px'} spacing={'10px'}>
        <Badge>{nodeData.category}</Badge>
      </HStack>
      <CardBody>
        <Stack divider={<StackDivider />} spacing={4}></Stack>
        <Box>
          <Heading size={'xs'}>Description</Heading>
          <Text pt={'2'} fontSize={'sm'}>
            {nodeData.description}
          </Text>
        </Box>
      </CardBody>
      <Handle
        type={'source'}
        position={Position.Right}
        id="b"
        isConnectable={isConnectable}
      />
    </Card>
  );
};

export default RequirementNode;
