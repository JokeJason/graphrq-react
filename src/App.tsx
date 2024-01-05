import { useAppDispatch } from '@/app/hooks.ts';
import NavBar from '@/components/NavBar.tsx';
import Flow from '@/features/ReactFlow/Flow.tsx';
import { loadGraph } from '@/features/ReactFlow/requirementSlice.ts';
import { GetRequirementsDocument } from '@/gql/graphql.ts';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useAppDispatch();

  // apollo client's useQuery will use cache first
  // if useMutation is used in other components, the cache will be updated by
  // the return of mutation. Hence, there is no need for refetchQueries,
  // you can verify it by checking previousData of following useQuery
  const { loading, error, data } = useQuery(GetRequirementsDocument);

  // TODO: refetch to update graph is not successful when creating new node or deleting node
  useEffect(() => {
    if (data) {
      dispatch(loadGraph(data));
    }
  }, [data]);

  if (loading) return <p> Loading... </p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <NavBar />
      <Flow />
    </>
  );
};

export default App;
