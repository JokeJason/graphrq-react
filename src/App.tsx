import * as utils from './utils.ts';
import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks.ts';
import { loadEdges, loadNodes } from './requirementSlice.ts';
import Flow from './components/Flow.tsx';
import { getLayoutedElements } from './layout.ts';

const GET_REQUIREMNTS = gql(`
  query Requirements {
    requirements {
      id
      title
      description
      children {
        id 
      }
    }
  }
`);

const App = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useQuery(GET_REQUIREMNTS);

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
