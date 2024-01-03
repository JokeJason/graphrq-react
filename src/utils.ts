import { EdgeType, NodeType } from './types.ts';

const convertRequirementToReactFlowNode = (requirement: {
  id: string;
  title: string;
  description: string;
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

const convertRequirementWithChildrenToReactFlowEdges = (requirement: {
  id: any;
  children: {
    id: string;
  }[];
}): EdgeType[] => {
  return requirement.children.map(child => {
    return {
      id: `edge-${requirement.id}<->${child.id}`,
      source: requirement.id,
      target: child.id,
    };
  });
};

export const createReactFlowEdges = (
  requirements: Array<{
    id: string;
    title: string;
    description: string;
    children: { id: string }[];
  }>,
): EdgeType[] => {
  return requirements.flatMap(req =>
    convertRequirementWithChildrenToReactFlowEdges(req),
  );
};
