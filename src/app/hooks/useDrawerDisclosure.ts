import { useAppSelector } from '../hooks.ts';
import { useCallback } from 'react';
import {
  closeDrawer,
  openDrawer,
} from '@/features/ReactFlow/requirementSlice.ts';
import { useDispatch } from 'react-redux';

const useDrawerDisclosure = () => {
  const dispatch = useDispatch();

  const isDrawerOpen = useAppSelector(state => state.requirement.isDrawerOpen);

  const onDrawerOpen = useCallback(() => dispatch(openDrawer()), [dispatch]);
  const onDrawerClose = useCallback(() => dispatch(closeDrawer()), [dispatch]);

  return { isDrawerOpen, onDrawerOpen, onDrawerClose };
};

export default useDrawerDisclosure;
