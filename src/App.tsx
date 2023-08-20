import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Connection,
  Controls,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  NodeTypes,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useCallback, useState } from 'react';

import RequirementNode from './components/RequirementNode.tsx';

const initialNodes: Node[] = [
  {
    id: '1',
    data: { title: 'Req1', description: 'Description of Req1' },
    position: { x: 0, y: 0 },
    type: 'requirement',
  },
  {
    id: '2',
    data: { title: 'Req2', description: 'Description of Req2' },
    position: { x: 100, y: 100 },
    type: 'requirement',
  },
];

const initialEdges: Edge[] = [{ id: '1-2', source: '1', target: '2' }];

const nodeTypes: NodeTypes = { requirement: RequirementNode };

const Flow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds: Node[]) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds: Edge[]) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((eds: Edge[]) => addEdge(params, eds)),
    [],
  );

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
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
