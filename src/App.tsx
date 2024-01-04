import * as utils from './utils/utils.ts';
import { useQuery } from '@apollo/client';
import { useAppDispatch } from '@/app/hooks.ts';
import { setEdges, setNodes } from '@/features/ReactFlow/requirementSlice.ts';
import { getLayoutedElements } from '@/utils/layout.ts';
import { GetRequirementsDocument } from '@/gql/graphql.ts';
import Flow from '@/features/ReactFlow/Flow.tsx';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useAppDispatch();

  // apollo client's useQuery will use cache first
  // if useMutation is used in other components, the cache will be updated by
  // the return of mutation. Hence, there is no need for refetchQueries,
  // you can verify it by checking previousData of following useQuery
  const { loading, error, data } = useQuery(GetRequirementsDocument);

  useEffect(() => {
    if (data) {
      const initialStates = getLayoutedElements(
        utils.createReactFlowNodes(data.requirements),
        utils.createReactFlowEdges(data.requirements),
        'LR',
      );

      dispatch(setNodes(initialStates.nodes));
      dispatch(setEdges(initialStates.edges));
    }
  }, [data]);

  if (loading) return <p> Loading... </p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Flow />
    </>
  );
};

export default App;
