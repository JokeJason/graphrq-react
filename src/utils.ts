import { GetRequirementsQuery } from './gql/graphql.ts';
import { Edge, Node } from 'reactflow';

export const createReactFlowNodes = (
  requirements: GetRequirementsQuery['requirements'],
): Node[] => {
  return requirements.map(req =>
    // construct NodeType from single requirement
    ({
      id: req.id,
      data: {
        title: req.title,
        description: req.description,
      },
      position: {
        x: 0,
        y: 0,
      },
      type: req.__typename?.toLowerCase(),
    }),
  );
};

export const createReactFlowEdges = (
  requirements: GetRequirementsQuery['requirements'],
): Edge[] => {
  return requirements.flatMap(req =>
    // construct EdgeType from single requirement
    req.children.map(child => ({
      id: `${req.id}-${child.id}`,
      source: req.id,
      target: child.id,
    })),
  );
};
