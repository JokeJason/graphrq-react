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

export type EdgeType = {
  id: string;
  source: string;
  target: string;
};
