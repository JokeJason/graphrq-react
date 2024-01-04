export type NodeData = {
  title: string;
  description: string | undefined;
};

export type RequirementNodeDataChange = {
  id: string;
  data: NodeData;
};
