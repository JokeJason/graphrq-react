import { gql, OperationVariables, QueryResult, useQuery } from '@apollo/client';
import * as utils from '../utils';
import ReactFlow, { Background, Controls, NodeTypes } from 'reactflow';
import RequirementNode from './RequirementNode.tsx';

const GET_REQUIREMENTS = gql(`
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

const nodeTypes: NodeTypes = { requirement: RequirementNode };

const Flow = () => {
  const { loading, error, data }: QueryResult<any, OperationVariables> =
    useQuery(GET_REQUIREMENTS);

  if (loading) return <p> Loading... </p>;
  if (error) return <p>Error: {error.message}</p>;

  const nodes = utils.createReactFlowNodes(data.requirements);
  const edges = utils.createReactFlowEdges(data.requirements);

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={change => console.log(change)}
        edges={edges}
        onEdgesChange={change => console.log(change)}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
