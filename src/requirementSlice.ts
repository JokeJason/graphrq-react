import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
} from 'reactflow';

const initialState: { nodes: Node[]; edges: Edge[] } = {
  nodes: [],
  edges: [],
};

export const requirementSlice = createSlice({
  name: 'requirementNodes',
  initialState: initialState,
  reducers: {
    onConnect: (state, action: PayloadAction<Connection>) => {
      state.edges = addEdge(action.payload, state.edges);
    },
    changeEdges: (state, action: PayloadAction<EdgeChange[]>) => {
      const changes = applyEdgeChanges(action.payload, state.edges);
      state.edges = changes as Draft<Edge[]>;
    },
    changeNodes: (state, action: PayloadAction<NodeChange[]>) => {
      const nodes = applyNodeChanges(action.payload, state.nodes);
      state.nodes = nodes as Draft<Node[]>;
    },
    loadNodes: (state, action: PayloadAction<Node[]>) => {
      state.nodes = action.payload;
    },
    loadEdges: (state, action: PayloadAction<Edge[]>) => {
      state.edges = action.payload;
    },
  },
});

export const { onConnect, changeEdges, changeNodes, loadNodes, loadEdges } =
  requirementSlice.actions;
