import { UpdateRequirementsDocument } from '@/gql/graphql.ts';
import { NodeData } from '@/types.ts';
import { useMutation } from '@apollo/client';
import {
  Box,
  Button,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  FormLabel,
  Input,
  Spinner,
  Stack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface RequirementNodeInfoDrawerFormProps {
  id: string;
  data: NodeData;
  onClose: () => void;
}

const RequirementNodeInfoDrawerForm: React.FC<
  RequirementNodeInfoDrawerFormProps
> = ({ id, data, onClose }) => {
  const [updateRequirementNode, { loading, error }] = useMutation(
    UpdateRequirementsDocument,
  );

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
  const onSubmit: SubmitHandler<NodeData> = (data: NodeData) => {
    updateRequirementNode({
      variables: {
        where: {
          id: id,
        },
        update: {
          title: data.title,
          description: data.description,
        },
      },
    });

    // If mutation is successful, close the drawer
    // Note: no need to update store, as the cache will be updated by the return of mutation (refer to https://www.apollographql.com/docs/react/data/mutations/#include-modified-objects-in-mutation-responses)
    // App.tsx will use the updated cache to update RTK store, hence rerender components
    if (error === undefined && !loading) {
      onClose();
    }
  };

  if (loading)
    return (
      <DrawerContent id={id}>
        <DrawerHeader borderBottomWidth={'1px'}>
          Requirement Node Details
        </DrawerHeader>
        <DrawerBody>
          <Spinner />
        </DrawerBody>
      </DrawerContent>
    );

  if (error) {
    return (
      <DrawerContent id={id}>
        <DrawerHeader borderBottomWidth={'1px'}>
          Requirement Node Details
        </DrawerHeader>
        <DrawerBody>
          <p>Error: {error.message}</p>
        </DrawerBody>
      </DrawerContent>
    );
  }

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
        <Button colorScheme="orange" onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
};

export default RequirementNodeInfoDrawerForm;
