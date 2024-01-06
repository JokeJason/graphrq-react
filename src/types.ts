import { RequirementCategory } from '@/gql/graphql.ts';

export type NodeData = {
  title: string;
  description: string | undefined;
  category: RequirementCategory;
};

export type RequirementNodeDataChange = {
  id: string;
  data: NodeData;
};
