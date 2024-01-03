import { useAppDispatch, useAppSelector } from '@/app/hooks.ts';
import 'reactflow/dist/style.css';

import ReactFlow, { Background, Controls, MiniMap, NodeTypes } from 'reactflow';
import { changeEdges, changeNodes, onConnect } from './requirementSlice.ts';
import RequirementNode from '@/components/RequirementNode.tsx';
import useDrawerDisclosure from '@/app/hooks/useDrawerDisclosure.ts';
import NodeInfoDrawer from '@/components/NodeInfoDrawer.tsx';

const nodeTypes: NodeTypes = { requirement: RequirementNode };

const Flow = () => {
  const dispatch = useAppDispatch();
  const nodes = useAppSelector(state => state.requirement.nodes);
  const edges = useAppSelector(state => state.requirement.edges);
  const { isDrawerOpen, onDrawerClose } = useDrawerDisclosure();

  return (
    <>
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
      <NodeInfoDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
    </>
  );
};

export default Flow;
