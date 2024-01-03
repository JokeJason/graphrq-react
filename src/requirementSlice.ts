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
  description: string | null | undefined;
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

const initialNodes: NodeType[] = [];

const initialEdges: EdgeType[] = [];

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
    changeEdges: (state, action: PayloadAction<EdgeChange[]>) => {
      const changes = applyEdgeChanges(action.payload, state.edges);
      state.edges = changes as Draft<EdgeType[]>;
    },
    changeNodes: (state, action: PayloadAction<NodeChange[]>) => {
      const nodes = applyNodeChanges(action.payload, state.nodes);
      state.nodes = nodes as Draft<NodeType[]>;
    },
    loadNodes: (state, action: PayloadAction<NodeType[]>) => {
      state.nodes = action.payload;
    },
    loadEdges: (state, action: PayloadAction<EdgeType[]>) => {
      state.edges = action.payload;
    },
  },
});

export const { onConnect, changeEdges, changeNodes, loadNodes, loadEdges } =
  requirementSlice.actions;
