import { RequirementNodeDataChange } from '@/types.ts';
import { getLayoutedElements } from '@/utils/layout.ts';
import * as utils from '@/utils/utils.ts';
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

const initialState: { nodes: Node[]; edges: Edge[]; isDrawerOpen: boolean } = {
  nodes: [],
  edges: [],
  isDrawerOpen: false,
};

export const requirementSlice = createSlice({
  name: 'requirementNodes',
  initialState: initialState,
  reducers: {
    loadGraph: (state, action: PayloadAction<any>) => {
      if (state.nodes.length === 0) {
        const initialState = getLayoutedElements(
          utils.createReactFlowNodes(action.payload.requirements),
          utils.createReactFlowEdges(action.payload.requirements),
          'LR',
        );

        state.nodes = initialState.nodes;
        state.edges = initialState.edges;
      } else {
        // for each action.payload.requirements, find the corresponding node in state.nodes and update action.payload.requirements[i].data
        action.payload.requirements.forEach(
          (req: { id: string; title: any; description: any }) => {
            const node = state.nodes.find(n => n.id === req.id);
            if (node) {
              node.data = {
                title: req.title,
                description: req.description,
              };
            }
          },
        );
      }
    },
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
    setNodes: (state, action: PayloadAction<Node[]>) => {
      state.nodes = action.payload;
    },
    setEdges: (state, action: PayloadAction<Edge[]>) => {
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
  loadGraph,
  onConnect,
  changeEdges,
  changeNodes,
  setNodes,
  setEdges,
  changeRequirementNodeData,
  openDrawer,
  closeDrawer,
} = requirementSlice.actions;
