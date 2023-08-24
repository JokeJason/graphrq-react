import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  EdgeChange,
  NodeChange,
} from 'reactflow';

export type NodeDataType = {
  title: string;
  description: string;
};

export type NodeType = {
  id: string;
  data: NodeDataType;
  position: {
    x: number;
    y: number;
  };
  type: string | undefined;
};

type EdgeType = {
  id: string;
  source: string;
  target: string;
};

type requirementNodeStateProps = {
  nodes: NodeType[];
  edges: EdgeType[];
};

const initialNodes: NodeType[] = [
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

const initialEdges: EdgeType[] = [{ id: '1-2', source: '1', target: '2' }];

const initialState: requirementNodeStateProps = {
  nodes: initialNodes,
  edges: initialEdges,
};

export const requirementSlice = createSlice({
  name: 'requirementNodes',
  initialState: initialState,
  reducers: {
    onConnect: (state, action: PayloadAction<Connection>) => {
      state.edges = addEdge(action.payload, state.edges);
    },
    onEdgesChange: (state, action: PayloadAction<EdgeChange[]>) => {
      state.edges = applyEdgeChanges(action.payload, state.edges);
    },
    onNodesChange: (state, action: PayloadAction<NodeChange[]>) => {
      state.nodes = applyNodeChanges(action.payload, state.nodes) as Draft<
        NodeType[]
      >;
    },
  },
});

export const { onConnect, onEdgesChange, onNodesChange } =
  requirementSlice.actions;
