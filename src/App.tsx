import ReactFlow, { Background, Controls, NodeTypes } from 'reactflow';
import 'reactflow/dist/style.css';

import RequirementNode from './components/RequirementNode.tsx';
import { useAppSelector } from './app/hooks.ts';
import { onNodesChange, onEdgesChange, onConnect } from './requirementSlice.ts';

const nodeTypes: NodeTypes = { requirement: RequirementNode };

const Flow = () => {
  const nodes = useAppSelector(state => state.requirement.nodes);
  const edges = useAppSelector(state => state.requirement.edges);

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
