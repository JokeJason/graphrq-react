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
import { RequirementNodeDataChange } from '../../types.ts';

const initialState: { nodes: Node[]; edges: Edge[]; isDrawerOpen: boolean } = {
  nodes: [],
  edges: [],
  isDrawerOpen: false,
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
    changeRequirementNodeData: (
      state,
      action: PayloadAction<RequirementNodeDataChange>,
    ) => {
      const node = state.nodes.find(n => n.id === action.payload.id);
      if (node) {
        node.data = action.payload.data;
      }
    },
    openDrawer: state => {
      state.isDrawerOpen = true;
    },
    closeDrawer: state => {
      state.isDrawerOpen = false;
    },
  },
});

export const {
  onConnect,
  changeEdges,
  changeNodes,
  loadNodes,
  loadEdges,
  changeRequirementNodeData,
  openDrawer,
  closeDrawer,
} = requirementSlice.actions;
