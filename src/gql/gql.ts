/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetRequirements {\n  requirements {\n    id\n    title\n    description\n    children {\n      id\n    }\n  }\n}\n\nmutation CreateRequirements($input: [RequirementCreateInput!]!) {\n  createRequirements(input: $input) {\n    requirements {\n      id\n      title\n      description\n    }\n    info {\n      nodesCreated\n    }\n  }\n}\n\nmutation UpdateRequirements($where: RequirementWhere, $update: RequirementUpdateInput) {\n  updateRequirements(where: $where, update: $update) {\n    requirements {\n      id\n      title\n      description\n      children {\n        id\n      }\n    }\n  }\n}\n\nmutation UpdateRequirementsToCreateChildren($where: RequirementWhere, $connectOrCreate: RequirementConnectOrCreateInput, $create: RequirementRelationInput) {\n  updateRequirements(\n    where: $where\n    connectOrCreate: $connectOrCreate\n    create: $create\n  ) {\n    info {\n      nodesCreated\n      relationshipsCreated\n    }\n    requirements {\n      id\n      title\n      description\n      children {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation ConnectRequirements($where: RequirementWhere, $connect: RequirementConnectInput) {\n  updateRequirements(where: $where, connect: $connect) {\n    info {\n      relationshipsCreated\n    }\n    requirements {\n      id\n      description\n      title\n      children {\n        id\n        title\n        description\n      }\n    }\n  }\n}\n\nmutation DeleteRequirements($where: RequirementWhere) {\n  deleteRequirements(where: $where) {\n    nodesDeleted\n    relationshipsDeleted\n  }\n}": types.GetRequirementsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRequirements {\n  requirements {\n    id\n    title\n    description\n    children {\n      id\n    }\n  }\n}\n\nmutation CreateRequirements($input: [RequirementCreateInput!]!) {\n  createRequirements(input: $input) {\n    requirements {\n      id\n      title\n      description\n    }\n    info {\n      nodesCreated\n    }\n  }\n}\n\nmutation UpdateRequirements($where: RequirementWhere, $update: RequirementUpdateInput) {\n  updateRequirements(where: $where, update: $update) {\n    requirements {\n      id\n      title\n      description\n      children {\n        id\n      }\n    }\n  }\n}\n\nmutation UpdateRequirementsToCreateChildren($where: RequirementWhere, $connectOrCreate: RequirementConnectOrCreateInput, $create: RequirementRelationInput) {\n  updateRequirements(\n    where: $where\n    connectOrCreate: $connectOrCreate\n    create: $create\n  ) {\n    info {\n      nodesCreated\n      relationshipsCreated\n    }\n    requirements {\n      id\n      title\n      description\n      children {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation ConnectRequirements($where: RequirementWhere, $connect: RequirementConnectInput) {\n  updateRequirements(where: $where, connect: $connect) {\n    info {\n      relationshipsCreated\n    }\n    requirements {\n      id\n      description\n      title\n      children {\n        id\n        title\n        description\n      }\n    }\n  }\n}\n\nmutation DeleteRequirements($where: RequirementWhere) {\n  deleteRequirements(where: $where) {\n    nodesDeleted\n    relationshipsDeleted\n  }\n}"): (typeof documents)["query GetRequirements {\n  requirements {\n    id\n    title\n    description\n    children {\n      id\n    }\n  }\n}\n\nmutation CreateRequirements($input: [RequirementCreateInput!]!) {\n  createRequirements(input: $input) {\n    requirements {\n      id\n      title\n      description\n    }\n    info {\n      nodesCreated\n    }\n  }\n}\n\nmutation UpdateRequirements($where: RequirementWhere, $update: RequirementUpdateInput) {\n  updateRequirements(where: $where, update: $update) {\n    requirements {\n      id\n      title\n      description\n      children {\n        id\n      }\n    }\n  }\n}\n\nmutation UpdateRequirementsToCreateChildren($where: RequirementWhere, $connectOrCreate: RequirementConnectOrCreateInput, $create: RequirementRelationInput) {\n  updateRequirements(\n    where: $where\n    connectOrCreate: $connectOrCreate\n    create: $create\n  ) {\n    info {\n      nodesCreated\n      relationshipsCreated\n    }\n    requirements {\n      id\n      title\n      description\n      children {\n        id\n        title\n      }\n    }\n  }\n}\n\nmutation ConnectRequirements($where: RequirementWhere, $connect: RequirementConnectInput) {\n  updateRequirements(where: $where, connect: $connect) {\n    info {\n      relationshipsCreated\n    }\n    requirements {\n      id\n      description\n      title\n      children {\n        id\n        title\n        description\n      }\n    }\n  }\n}\n\nmutation DeleteRequirements($where: RequirementWhere) {\n  deleteRequirements(where: $where) {\n    nodesDeleted\n    relationshipsDeleted\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;