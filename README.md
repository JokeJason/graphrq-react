# React frontend of GraphRQ

Objective of this project is to create a simple React frontend for GraphRQ. A graph database powered requirement
management system.

This React frontend provides a flowchart style visualization of the requirement graph. It also provides a simple
interface to add new requirements and links between them.

## Tech Stack

- React (vite)
- TypeScript
- ReactFlow
- GraphQL (Apollo Client + GraphQL Code Generator)

## Development

When creating new gql query, you should use GraphQL Code generator to generate the TypeScript type definition of the
query. (i.e. you need run `yarn generate`, once you defined a graphql operation in `operations.graphql` file) Please
refer to [GraphQL Code generator](https://the-guild.dev/graphql/codegen/docs/guides/react-vue) for
details.

## Todo

- [x] Add Code Generator for TypeScript support: [GraphQL Code generator](https://the-guild.dev/graphql/codegen) (
  please read
  specially [TypedDocumentNode](https://the-guild.dev/blog/typed-document-node) for details)
  or [Apollo Code generator](https://www.apollographql.com/blog/typescript-graphql-code-generator-generate-graphql-types)