import { useAppSelector } from '../app/hooks.ts';
import 'reactflow/dist/style.css';

import ReactFlow, { Background, Controls, NodeTypes } from 'reactflow';
import {
  onConnect,
  onEdgesChange,
  onNodesChange,
} from '../requirementSlice.ts';
import RequirementNode from './RequirementNode.tsx';

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
