import ReactFlow, { Background, Controls, NodeTypes } from 'reactflow';
import 'reactflow/dist/style.css';

import RequirementNode from './components/RequirementNode.tsx';

const nodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Hello' },
    type: 'requirement',
  },
];

const nodeTypes: NodeTypes = { requirement: RequirementNode };

const Flow = () => {
  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
