import { useAppDispatch, useAppSelector } from '@/app/hooks.ts';
import 'reactflow/dist/style.css';

import ReactFlow, { Background, Controls, MiniMap, NodeTypes } from 'reactflow';
import { changeEdges, changeNodes, onConnect } from './requirementSlice.ts';
import RequirementNode from '@/components/RequirementNode.tsx';

const nodeTypes: NodeTypes = { requirement: RequirementNode };

const Flow = () => {
  const dispatch = useAppDispatch();
  const nodes = useAppSelector(state => state.requirement.nodes);
  const edges = useAppSelector(state => state.requirement.edges);

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={changes => dispatch(changeNodes(changes))}
        edges={edges}
        onEdgesChange={changes => dispatch(changeEdges(changes))}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default Flow;
