import * as utils from './utils/utils.ts';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useAppDispatch } from '@/app/hooks.ts';
import { loadEdges, loadNodes } from '@/features/ReactFlow/requirementSlice.ts';
import { getLayoutedElements } from '@/utils/layout.ts';
import { GetRequirementsDocument } from '@/gql/graphql.ts';
import Flow from '@/features/ReactFlow/Flow.tsx';

const App = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useQuery(GetRequirementsDocument);

  useEffect(() => {
    if (data) {
      const initialStates = getLayoutedElements(
        utils.createReactFlowNodes(data.requirements),
        utils.createReactFlowEdges(data.requirements),
        'LR',
      );

      dispatch(loadNodes(initialStates.nodes));
      dispatch(loadEdges(initialStates.edges));
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
