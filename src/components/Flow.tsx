import { gql, OperationVariables, QueryResult, useQuery } from '@apollo/client';
import * as utils from '../utils';
import ReactFlow, { Background, Controls, NodeTypes } from 'reactflow';
import RequirementNode from './RequirementNode.tsx';
import dagre from '@dagrejs/dagre';

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

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWith = 500;
const nodeHeight = 100;

const getLayoutedElements = (nodes: any[], edges: any[], direction = 'TB') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach(node => {
    dagreGraph.setNode(node.id, { width: nodeWith, height: nodeHeight });
  });

  edges.forEach(edge => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach(node => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? 'left' : 'top';
    node.sourcePosition = isHorizontal ? 'right' : 'bottom';

    node.position = {
      x: nodeWithPosition.x - nodeWith / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const Flow = () => {
  const { loading, error, data }: QueryResult<any, OperationVariables> =
    useQuery(GET_REQUIREMENTS);

  if (loading) return <p> Loading... </p>;
  if (error) return <p>Error: {error.message}</p>;

  const { nodes, edges } = getLayoutedElements(
    utils.createReactFlowNodes(data.requirements),
    utils.createReactFlowEdges(data.requirements),
    'LR',
  );

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
