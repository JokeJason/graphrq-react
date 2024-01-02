import { NodeType } from './types.ts';

const convertRequirementToReactFlowNode = (requirement: {
  id: any;
  title: any;
  description: any;
}): NodeType => {
  return {
    id: requirement.id,
    data: { title: requirement.title, description: requirement.description },
    position: { x: 0, y: 0 },
    type: 'requirement',
  };
};

export const createReactFlowNodes = (
  requirements: Array<{ id: string; title: string; description: string }>,
): NodeType[] => {
  return requirements.map(req => convertRequirementToReactFlowNode(req));
};

// const createEdge = (
//   parentNode: { id: any },
//   childNode: { id: any },
// ): EdgeType => {
//   return {
//     id: `edge-${parentNode.id}<->${childNode.id}`,
//     source: parentNode.id,
//     target: childNode.id,
//   };
// };
