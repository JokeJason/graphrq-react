import { Handle, Position } from 'reactflow';
import { NodeData } from '../types.ts';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';

export type RequirementNodeComponentProps = {
  data: NodeData;
  isConnectable: boolean;
};

const RequirementNode = ({
  data,
  isConnectable,
}: RequirementNodeComponentProps) => {
  return (
    <Card>
      <Handle
        type={'target'}
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <CardHeader>
        <Heading as="h4" size="md">
          {data.title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing={4}></Stack>
        <Box>
          <Heading size={'xs'}>Description</Heading>
          <Text pt={'2'} fontSize={'sm'}>
            {data.description}
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
