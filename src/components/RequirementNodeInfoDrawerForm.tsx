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

interface RequirementNodeInfoDrawerFormProps {
  onClose: () => void;
}

const RequirementNodeInfoDrawerForm: React.FC<
  RequirementNodeInfoDrawerFormProps
> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<NodeData>();
  const onSubmit: SubmitHandler<NodeData> = data => console.log(data);

  return (
    <DrawerContent>
      <DrawerHeader borderBottomWidth={'1px'}>
        Requirement Node Details
      </DrawerHeader>
      <DrawerBody>
        <Stack spacing="24px">
          <Box>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input {...register('title', { required: true })} />
          </Box>
          <Box>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Input {...register('description', { required: false })} />
          </Box>
        </Stack>
      </DrawerBody>

      <DrawerFooter borderTopWidth={'1px'}>
        <Button variant="outline" mr={3} onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme="blue" onClick={onSubmit}>
          Submit
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
};

export default RequirementNodeInfoDrawerForm;
