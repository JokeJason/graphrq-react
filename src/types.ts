export type NodeData = {
  title: string;
  description: string | null | undefined;
};

export type RequirementNodeDataChange = {
  id: string;
  data: NodeData;
};
