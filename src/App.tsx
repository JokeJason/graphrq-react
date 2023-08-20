import ReactFlow, { Background, Controls, NodeTypes } from 'reactflow';
import 'reactflow/dist/style.css';
import { shallow } from 'zustand/shallow';

import useStore, { RFState } from './store.ts';

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

import RequirementNode from './components/RequirementNode.tsx';

const nodeTypes: NodeTypes = { requirement: RequirementNode };

const Flow = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    selector,
    shallow,
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
