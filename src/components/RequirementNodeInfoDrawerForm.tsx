import { SubmitHandler, useForm } from 'react-hook-form';
import { NodeData } from '@/types.ts';
import {
  Box,
  Button,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

interface RequirementNodeInfoDrawerFormProps {
  id: string;
  data: NodeData;
  onClose: () => void;
}

const RequirementNodeInfoDrawerForm: React.FC<
  RequirementNodeInfoDrawerFormProps
> = ({ id, data, onClose }) => {
  // use React state to store the title and description
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);

  useEffect(() => {
    setTitle(data.title);
    setDescription(data.description);
  }, [data]);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<NodeData>();
  const onSubmit: SubmitHandler<NodeData> = data => console.log(data);

  return (
    <DrawerContent id={id}>
      <DrawerHeader borderBottomWidth={'1px'}>
        Requirement Node Details
      </DrawerHeader>
      <DrawerBody>
        <Stack spacing="24px">
          <Box>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              {...register('title', { required: true })}
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Box>
          <Box>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Input
              {...register('description', { required: false })}
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </Box>
        </Stack>
      </DrawerBody>

      <DrawerFooter borderTopWidth={'1px'}>
        <Button variant="outline" mr={3} onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme="blue" onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
};

export default RequirementNodeInfoDrawerForm;
