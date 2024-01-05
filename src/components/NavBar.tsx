import { useAppDispatch } from '@/app/hooks.ts';
import { createNewRequirement } from '@/features/ReactFlow/requirementSlice.ts';
import { AddIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';

const NavBar = () => {
  const dispatch = useAppDispatch();

  return (
    // TODO: navbar is not taking the correct space on page. Need work its relationship with Flow

    // a simple fixed navbar on the top with only a plus button in the middle
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
      bg="gray.700"
      p="2"
      justifyContent="center"
    >
      <IconButton
        aria-label="Add"
        icon={<AddIcon />}
        colorScheme="teal"
        size="lg"
        onClick={() => dispatch(createNewRequirement())}
      />
    </Flex>
  );
};

export default NavBar;
