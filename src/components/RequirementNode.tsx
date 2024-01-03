import { Handle, NodeProps, Position } from 'reactflow';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Editable,
  EditableInput,
  EditablePreview,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { changeRequirementNodeData } from '../requirementSlice.ts';
import { NodeData } from '../types.ts';
import useDrawerDisclosure from '../app/hooks/useDrawerDisclosure.ts';

const RequirementNode = ({ id, isConnectable }: NodeProps) => {
  const nodeData: NodeData = useAppSelector(
    state => state.requirement.nodes.find(n => n.id === id)?.data,
  );
  const dispatch = useAppDispatch();
  const { onDrawerOpen } = useDrawerDisclosure();

  if (!nodeData) return <p>Loading</p>;

  return (
    <Card id={id} onClick={onDrawerOpen}>
      <Handle
        type={'target'}
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <CardHeader>
        <Heading as="h4" size="md">
          <Editable
            defaultValue={nodeData.title}
            onChange={text =>
              dispatch(
                changeRequirementNodeData({
                  id: id,
                  data: { title: text, description: nodeData.description },
                }),
              )
            }
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Heading>
      </CardHeader>
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
