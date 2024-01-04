import * as utils from './utils/utils.ts';
import { useQuery } from '@apollo/client';
import { useAppDispatch } from '@/app/hooks.ts';
import { setEdges, setNodes } from '@/features/ReactFlow/requirementSlice.ts';
import { getLayoutedElements } from '@/utils/layout.ts';
import { GetRequirementsDocument } from '@/gql/graphql.ts';
import Flow from '@/features/ReactFlow/Flow.tsx';

const App = () => {
  const dispatch = useAppDispatch();

  const setInitialStates = (data: any) => {
    const initialStates = getLayoutedElements(
      utils.createReactFlowNodes(data.requirements),
      utils.createReactFlowEdges(data.requirements),
      'LR',
    );
    dispatch(setNodes(initialStates.nodes));
    dispatch(setEdges(initialStates.edges));
  };

  const { loading, error } = useQuery(GetRequirementsDocument, {
    onCompleted: setInitialStates,
  });

  if (loading) return <p> Loading... </p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Flow />
    </>
  );
};

export default App;
