import * as utils from './utils.ts';
import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks.ts';
import { loadEdges, loadNodes } from './requirementSlice.ts';
import Flow from './components/Flow.tsx';

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
      dispatch(loadNodes(utils.createReactFlowNodes(data.requirements)));
      dispatch(loadEdges(utils.createReactFlowEdges(data.requirements)));
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
