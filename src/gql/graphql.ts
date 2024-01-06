/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any; }
  /** A String formatted as email */
  StringWithFormatemail: { input: any; output: any; }
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: 'CreateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateRequirementsMutationResponse = {
  __typename?: 'CreateRequirementsMutationResponse';
  info: CreateInfo;
  requirements: Array<Requirement>;
};

export type CreateTestResultsMutationResponse = {
  __typename?: 'CreateTestResultsMutationResponse';
  info: CreateInfo;
  testResults: Array<TestResult>;
};

export type CreateTestsMutationResponse = {
  __typename?: 'CreateTestsMutationResponse';
  info: CreateInfo;
  tests: Array<Test>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelectionNonNullable = {
  __typename?: 'DateTimeAggregateSelectionNonNullable';
  max: Scalars['DateTime']['output'];
  min: Scalars['DateTime']['output'];
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: 'DateTimeAggregateSelectionNullable';
  max?: Maybe<Scalars['DateTime']['output']>;
  min?: Maybe<Scalars['DateTime']['output']>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID']['output'];
  shortest: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRequirements: CreateRequirementsMutationResponse;
  createTestResults: CreateTestResultsMutationResponse;
  createTests: CreateTestsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteRequirements: DeleteInfo;
  deleteTestResults: DeleteInfo;
  deleteTests: DeleteInfo;
  deleteUsers: DeleteInfo;
  updateRequirements: UpdateRequirementsMutationResponse;
  updateTestResults: UpdateTestResultsMutationResponse;
  updateTests: UpdateTestsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};


export type MutationCreateRequirementsArgs = {
  input: Array<RequirementCreateInput>;
};


export type MutationCreateTestResultsArgs = {
  input: Array<TestResultCreateInput>;
};


export type MutationCreateTestsArgs = {
  input: Array<TestCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationDeleteRequirementsArgs = {
  delete?: InputMaybe<RequirementDeleteInput>;
  where?: InputMaybe<RequirementWhere>;
};


export type MutationDeleteTestResultsArgs = {
  where?: InputMaybe<TestResultWhere>;
};


export type MutationDeleteTestsArgs = {
  delete?: InputMaybe<TestDeleteInput>;
  where?: InputMaybe<TestWhere>;
};


export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
};


export type MutationUpdateRequirementsArgs = {
  connect?: InputMaybe<RequirementConnectInput>;
  connectOrCreate?: InputMaybe<RequirementConnectOrCreateInput>;
  create?: InputMaybe<RequirementRelationInput>;
  delete?: InputMaybe<RequirementDeleteInput>;
  disconnect?: InputMaybe<RequirementDisconnectInput>;
  update?: InputMaybe<RequirementUpdateInput>;
  where?: InputMaybe<RequirementWhere>;
};


export type MutationUpdateTestResultsArgs = {
  update?: InputMaybe<TestResultUpdateInput>;
  where?: InputMaybe<TestResultWhere>;
};


export type MutationUpdateTestsArgs = {
  connect?: InputMaybe<TestConnectInput>;
  connectOrCreate?: InputMaybe<TestConnectOrCreateInput>;
  create?: InputMaybe<TestRelationInput>;
  delete?: InputMaybe<TestDeleteInput>;
  disconnect?: InputMaybe<TestDisconnectInput>;
  update?: InputMaybe<TestUpdateInput>;
  where?: InputMaybe<TestWhere>;
};


export type MutationUpdateUsersArgs = {
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  requirements: Array<Requirement>;
  requirementsAggregate: RequirementAggregateSelection;
  requirementsConnection: RequirementsConnection;
  testResults: Array<TestResult>;
  testResultsAggregate: TestResultAggregateSelection;
  testResultsConnection: TestResultsConnection;
  tests: Array<Test>;
  testsAggregate: TestAggregateSelection;
  testsConnection: TestsConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};


export type QueryRequirementsArgs = {
  options?: InputMaybe<RequirementOptions>;
  where?: InputMaybe<RequirementWhere>;
};


export type QueryRequirementsAggregateArgs = {
  where?: InputMaybe<RequirementWhere>;
};


export type QueryRequirementsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<RequirementSort>>>;
  where?: InputMaybe<RequirementWhere>;
};


export type QueryTestResultsArgs = {
  options?: InputMaybe<TestResultOptions>;
  where?: InputMaybe<TestResultWhere>;
};


export type QueryTestResultsAggregateArgs = {
  where?: InputMaybe<TestResultWhere>;
};


export type QueryTestResultsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TestResultSort>>>;
  where?: InputMaybe<TestResultWhere>;
};


export type QueryTestsArgs = {
  options?: InputMaybe<TestOptions>;
  where?: InputMaybe<TestWhere>;
};


export type QueryTestsAggregateArgs = {
  where?: InputMaybe<TestWhere>;
};


export type QueryTestsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TestSort>>>;
  where?: InputMaybe<TestWhere>;
};


export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};

export type Requirement = {
  __typename?: 'Requirement';
  children: Array<Requirement>;
  childrenAggregate?: Maybe<RequirementRequirementChildrenAggregationSelection>;
  childrenConnection: RequirementChildrenConnection;
  createdAt: Scalars['DateTime']['output'];
  creator?: Maybe<User>;
  creatorAggregate?: Maybe<RequirementUserCreatorAggregationSelection>;
  creatorConnection: RequirementCreatorConnection;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  parent?: Maybe<Requirement>;
  parentAggregate?: Maybe<RequirementRequirementParentAggregationSelection>;
  parentConnection: RequirementParentConnection;
  tests: Array<Test>;
  testsAggregate?: Maybe<RequirementTestTestsAggregationSelection>;
  testsConnection: RequirementTestsConnection;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type RequirementChildrenArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<RequirementOptions>;
  where?: InputMaybe<RequirementWhere>;
};


export type RequirementChildrenAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RequirementWhere>;
};


export type RequirementChildrenConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RequirementChildrenConnectionSort>>;
  where?: InputMaybe<RequirementChildrenConnectionWhere>;
};


export type RequirementCreatorArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type RequirementCreatorAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type RequirementCreatorConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RequirementCreatorConnectionSort>>;
  where?: InputMaybe<RequirementCreatorConnectionWhere>;
};


export type RequirementParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<RequirementOptions>;
  where?: InputMaybe<RequirementWhere>;
};


export type RequirementParentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RequirementWhere>;
};


export type RequirementParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RequirementParentConnectionSort>>;
  where?: InputMaybe<RequirementParentConnectionWhere>;
};


export type RequirementTestsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TestOptions>;
  where?: InputMaybe<TestWhere>;
};


export type RequirementTestsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TestWhere>;
};


export type RequirementTestsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RequirementTestsConnectionSort>>;
  where?: InputMaybe<RequirementTestsConnectionWhere>;
};

export type RequirementAggregateSelection = {
  __typename?: 'RequirementAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type RequirementChildrenAggregateInput = {
  AND?: InputMaybe<Array<RequirementChildrenAggregateInput>>;
  NOT?: InputMaybe<RequirementChildrenAggregateInput>;
  OR?: InputMaybe<Array<RequirementChildrenAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<RequirementChildrenNodeAggregationWhereInput>;
};

export type RequirementChildrenConnectFieldInput = {
  connect?: InputMaybe<Array<RequirementConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<RequirementConnectWhere>;
};

export type RequirementChildrenConnection = {
  __typename?: 'RequirementChildrenConnection';
  edges: Array<RequirementChildrenRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RequirementChildrenConnectionSort = {
  node?: InputMaybe<RequirementSort>;
};

export type RequirementChildrenConnectionWhere = {
  AND?: InputMaybe<Array<RequirementChildrenConnectionWhere>>;
  NOT?: InputMaybe<RequirementChildrenConnectionWhere>;
  OR?: InputMaybe<Array<RequirementChildrenConnectionWhere>>;
  node?: InputMaybe<RequirementWhere>;
};

export type RequirementChildrenCreateFieldInput = {
  node: RequirementCreateInput;
};

export type RequirementChildrenDeleteFieldInput = {
  delete?: InputMaybe<RequirementDeleteInput>;
  where?: InputMaybe<RequirementChildrenConnectionWhere>;
};

export type RequirementChildrenDisconnectFieldInput = {
  disconnect?: InputMaybe<RequirementDisconnectInput>;
  where?: InputMaybe<RequirementChildrenConnectionWhere>;
};

export type RequirementChildrenFieldInput = {
  connect?: InputMaybe<Array<RequirementChildrenConnectFieldInput>>;
  create?: InputMaybe<Array<RequirementChildrenCreateFieldInput>>;
};

export type RequirementChildrenNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RequirementChildrenNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RequirementChildrenNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RequirementChildrenNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RequirementChildrenRelationship = {
  __typename?: 'RequirementChildrenRelationship';
  cursor: Scalars['String']['output'];
  node: Requirement;
};

export type RequirementChildrenUpdateConnectionInput = {
  node?: InputMaybe<RequirementUpdateInput>;
};

export type RequirementChildrenUpdateFieldInput = {
  connect?: InputMaybe<Array<RequirementChildrenConnectFieldInput>>;
  create?: InputMaybe<Array<RequirementChildrenCreateFieldInput>>;
  delete?: InputMaybe<Array<RequirementChildrenDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RequirementChildrenDisconnectFieldInput>>;
  update?: InputMaybe<RequirementChildrenUpdateConnectionInput>;
  where?: InputMaybe<RequirementChildrenConnectionWhere>;
};

export type RequirementConnectInput = {
  children?: InputMaybe<Array<RequirementChildrenConnectFieldInput>>;
  creator?: InputMaybe<RequirementCreatorConnectFieldInput>;
  parent?: InputMaybe<RequirementParentConnectFieldInput>;
  tests?: InputMaybe<Array<RequirementTestsConnectFieldInput>>;
};

export type RequirementConnectOrCreateInput = {
  creator?: InputMaybe<RequirementCreatorConnectOrCreateFieldInput>;
};

export type RequirementConnectWhere = {
  node: RequirementWhere;
};

export type RequirementCreateInput = {
  children?: InputMaybe<RequirementChildrenFieldInput>;
  creator?: InputMaybe<RequirementCreatorFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<RequirementParentFieldInput>;
  tests?: InputMaybe<RequirementTestsFieldInput>;
  title: Scalars['String']['input'];
};

export type RequirementCreatorAggregateInput = {
  AND?: InputMaybe<Array<RequirementCreatorAggregateInput>>;
  NOT?: InputMaybe<RequirementCreatorAggregateInput>;
  OR?: InputMaybe<Array<RequirementCreatorAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<RequirementCreatorNodeAggregationWhereInput>;
};

export type RequirementCreatorConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type RequirementCreatorConnectOrCreateFieldInput = {
  onCreate: RequirementCreatorConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type RequirementCreatorConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type RequirementCreatorConnection = {
  __typename?: 'RequirementCreatorConnection';
  edges: Array<RequirementCreatorRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RequirementCreatorConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type RequirementCreatorConnectionWhere = {
  AND?: InputMaybe<Array<RequirementCreatorConnectionWhere>>;
  NOT?: InputMaybe<RequirementCreatorConnectionWhere>;
  OR?: InputMaybe<Array<RequirementCreatorConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type RequirementCreatorCreateFieldInput = {
  node: UserCreateInput;
};

export type RequirementCreatorDeleteFieldInput = {
  where?: InputMaybe<RequirementCreatorConnectionWhere>;
};

export type RequirementCreatorDisconnectFieldInput = {
  where?: InputMaybe<RequirementCreatorConnectionWhere>;
};

export type RequirementCreatorFieldInput = {
  connect?: InputMaybe<RequirementCreatorConnectFieldInput>;
  connectOrCreate?: InputMaybe<RequirementCreatorConnectOrCreateFieldInput>;
  create?: InputMaybe<RequirementCreatorCreateFieldInput>;
};

export type RequirementCreatorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RequirementCreatorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RequirementCreatorNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RequirementCreatorNodeAggregationWhereInput>>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type RequirementCreatorRelationship = {
  __typename?: 'RequirementCreatorRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type RequirementCreatorUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type RequirementCreatorUpdateFieldInput = {
  connect?: InputMaybe<RequirementCreatorConnectFieldInput>;
  connectOrCreate?: InputMaybe<RequirementCreatorConnectOrCreateFieldInput>;
  create?: InputMaybe<RequirementCreatorCreateFieldInput>;
  delete?: InputMaybe<RequirementCreatorDeleteFieldInput>;
  disconnect?: InputMaybe<RequirementCreatorDisconnectFieldInput>;
  update?: InputMaybe<RequirementCreatorUpdateConnectionInput>;
  where?: InputMaybe<RequirementCreatorConnectionWhere>;
};

export type RequirementDeleteInput = {
  children?: InputMaybe<Array<RequirementChildrenDeleteFieldInput>>;
  creator?: InputMaybe<RequirementCreatorDeleteFieldInput>;
  parent?: InputMaybe<RequirementParentDeleteFieldInput>;
  tests?: InputMaybe<Array<RequirementTestsDeleteFieldInput>>;
};

export type RequirementDisconnectInput = {
  children?: InputMaybe<Array<RequirementChildrenDisconnectFieldInput>>;
  creator?: InputMaybe<RequirementCreatorDisconnectFieldInput>;
  parent?: InputMaybe<RequirementParentDisconnectFieldInput>;
  tests?: InputMaybe<Array<RequirementTestsDisconnectFieldInput>>;
};

export type RequirementEdge = {
  __typename?: 'RequirementEdge';
  cursor: Scalars['String']['output'];
  node: Requirement;
};

export type RequirementOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more RequirementSort objects to sort Requirements by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RequirementSort>>;
};

export type RequirementParentAggregateInput = {
  AND?: InputMaybe<Array<RequirementParentAggregateInput>>;
  NOT?: InputMaybe<RequirementParentAggregateInput>;
  OR?: InputMaybe<Array<RequirementParentAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<RequirementParentNodeAggregationWhereInput>;
};

export type RequirementParentConnectFieldInput = {
  connect?: InputMaybe<RequirementConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<RequirementConnectWhere>;
};

export type RequirementParentConnection = {
  __typename?: 'RequirementParentConnection';
  edges: Array<RequirementParentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RequirementParentConnectionSort = {
  node?: InputMaybe<RequirementSort>;
};

export type RequirementParentConnectionWhere = {
  AND?: InputMaybe<Array<RequirementParentConnectionWhere>>;
  NOT?: InputMaybe<RequirementParentConnectionWhere>;
  OR?: InputMaybe<Array<RequirementParentConnectionWhere>>;
  node?: InputMaybe<RequirementWhere>;
};

export type RequirementParentCreateFieldInput = {
  node: RequirementCreateInput;
};

export type RequirementParentDeleteFieldInput = {
  delete?: InputMaybe<RequirementDeleteInput>;
  where?: InputMaybe<RequirementParentConnectionWhere>;
};

export type RequirementParentDisconnectFieldInput = {
  disconnect?: InputMaybe<RequirementDisconnectInput>;
  where?: InputMaybe<RequirementParentConnectionWhere>;
};

export type RequirementParentFieldInput = {
  connect?: InputMaybe<RequirementParentConnectFieldInput>;
  create?: InputMaybe<RequirementParentCreateFieldInput>;
};

export type RequirementParentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RequirementParentNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RequirementParentNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RequirementParentNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RequirementParentRelationship = {
  __typename?: 'RequirementParentRelationship';
  cursor: Scalars['String']['output'];
  node: Requirement;
};

export type RequirementParentUpdateConnectionInput = {
  node?: InputMaybe<RequirementUpdateInput>;
};

export type RequirementParentUpdateFieldInput = {
  connect?: InputMaybe<RequirementParentConnectFieldInput>;
  create?: InputMaybe<RequirementParentCreateFieldInput>;
  delete?: InputMaybe<RequirementParentDeleteFieldInput>;
  disconnect?: InputMaybe<RequirementParentDisconnectFieldInput>;
  update?: InputMaybe<RequirementParentUpdateConnectionInput>;
  where?: InputMaybe<RequirementParentConnectionWhere>;
};

export type RequirementRelationInput = {
  children?: InputMaybe<Array<RequirementChildrenCreateFieldInput>>;
  creator?: InputMaybe<RequirementCreatorCreateFieldInput>;
  parent?: InputMaybe<RequirementParentCreateFieldInput>;
  tests?: InputMaybe<Array<RequirementTestsCreateFieldInput>>;
};

export type RequirementRequirementChildrenAggregationSelection = {
  __typename?: 'RequirementRequirementChildrenAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<RequirementRequirementChildrenNodeAggregateSelection>;
};

export type RequirementRequirementChildrenNodeAggregateSelection = {
  __typename?: 'RequirementRequirementChildrenNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type RequirementRequirementParentAggregationSelection = {
  __typename?: 'RequirementRequirementParentAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<RequirementRequirementParentNodeAggregateSelection>;
};

export type RequirementRequirementParentNodeAggregateSelection = {
  __typename?: 'RequirementRequirementParentNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

/** Fields to sort Requirements by. The order in which sorts are applied is not guaranteed when specifying many fields in one RequirementSort object. */
export type RequirementSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type RequirementTestTestsAggregationSelection = {
  __typename?: 'RequirementTestTestsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<RequirementTestTestsNodeAggregateSelection>;
};

export type RequirementTestTestsNodeAggregateSelection = {
  __typename?: 'RequirementTestTestsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export type RequirementTestsAggregateInput = {
  AND?: InputMaybe<Array<RequirementTestsAggregateInput>>;
  NOT?: InputMaybe<RequirementTestsAggregateInput>;
  OR?: InputMaybe<Array<RequirementTestsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<RequirementTestsNodeAggregationWhereInput>;
};

export type RequirementTestsConnectFieldInput = {
  connect?: InputMaybe<Array<TestConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TestConnectWhere>;
};

export type RequirementTestsConnection = {
  __typename?: 'RequirementTestsConnection';
  edges: Array<RequirementTestsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RequirementTestsConnectionSort = {
  node?: InputMaybe<TestSort>;
};

export type RequirementTestsConnectionWhere = {
  AND?: InputMaybe<Array<RequirementTestsConnectionWhere>>;
  NOT?: InputMaybe<RequirementTestsConnectionWhere>;
  OR?: InputMaybe<Array<RequirementTestsConnectionWhere>>;
  node?: InputMaybe<TestWhere>;
};

export type RequirementTestsCreateFieldInput = {
  node: TestCreateInput;
};

export type RequirementTestsDeleteFieldInput = {
  delete?: InputMaybe<TestDeleteInput>;
  where?: InputMaybe<RequirementTestsConnectionWhere>;
};

export type RequirementTestsDisconnectFieldInput = {
  disconnect?: InputMaybe<TestDisconnectInput>;
  where?: InputMaybe<RequirementTestsConnectionWhere>;
};

export type RequirementTestsFieldInput = {
  connect?: InputMaybe<Array<RequirementTestsConnectFieldInput>>;
  create?: InputMaybe<Array<RequirementTestsCreateFieldInput>>;
};

export type RequirementTestsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RequirementTestsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<RequirementTestsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<RequirementTestsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RequirementTestsRelationship = {
  __typename?: 'RequirementTestsRelationship';
  cursor: Scalars['String']['output'];
  node: Test;
};

export type RequirementTestsUpdateConnectionInput = {
  node?: InputMaybe<TestUpdateInput>;
};

export type RequirementTestsUpdateFieldInput = {
  connect?: InputMaybe<Array<RequirementTestsConnectFieldInput>>;
  create?: InputMaybe<Array<RequirementTestsCreateFieldInput>>;
  delete?: InputMaybe<Array<RequirementTestsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RequirementTestsDisconnectFieldInput>>;
  update?: InputMaybe<RequirementTestsUpdateConnectionInput>;
  where?: InputMaybe<RequirementTestsConnectionWhere>;
};

export type RequirementUpdateInput = {
  children?: InputMaybe<Array<RequirementChildrenUpdateFieldInput>>;
  creator?: InputMaybe<RequirementCreatorUpdateFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<RequirementParentUpdateFieldInput>;
  tests?: InputMaybe<Array<RequirementTestsUpdateFieldInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RequirementUserCreatorAggregationSelection = {
  __typename?: 'RequirementUserCreatorAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<RequirementUserCreatorNodeAggregateSelection>;
};

export type RequirementUserCreatorNodeAggregateSelection = {
  __typename?: 'RequirementUserCreatorNodeAggregateSelection';
  email: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type RequirementWhere = {
  AND?: InputMaybe<Array<RequirementWhere>>;
  NOT?: InputMaybe<RequirementWhere>;
  OR?: InputMaybe<Array<RequirementWhere>>;
  childrenAggregate?: InputMaybe<RequirementChildrenAggregateInput>;
  /** Return Requirements where all of the related RequirementChildrenConnections match this filter */
  childrenConnection_ALL?: InputMaybe<RequirementChildrenConnectionWhere>;
  /** Return Requirements where none of the related RequirementChildrenConnections match this filter */
  childrenConnection_NONE?: InputMaybe<RequirementChildrenConnectionWhere>;
  /** Return Requirements where one of the related RequirementChildrenConnections match this filter */
  childrenConnection_SINGLE?: InputMaybe<RequirementChildrenConnectionWhere>;
  /** Return Requirements where some of the related RequirementChildrenConnections match this filter */
  childrenConnection_SOME?: InputMaybe<RequirementChildrenConnectionWhere>;
  /** Return Requirements where all of the related Requirements match this filter */
  children_ALL?: InputMaybe<RequirementWhere>;
  /** Return Requirements where none of the related Requirements match this filter */
  children_NONE?: InputMaybe<RequirementWhere>;
  /** Return Requirements where one of the related Requirements match this filter */
  children_SINGLE?: InputMaybe<RequirementWhere>;
  /** Return Requirements where some of the related Requirements match this filter */
  children_SOME?: InputMaybe<RequirementWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  creator?: InputMaybe<UserWhere>;
  creatorAggregate?: InputMaybe<RequirementCreatorAggregateInput>;
  creatorConnection?: InputMaybe<RequirementCreatorConnectionWhere>;
  creatorConnection_NOT?: InputMaybe<RequirementCreatorConnectionWhere>;
  creator_NOT?: InputMaybe<UserWhere>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  parent?: InputMaybe<RequirementWhere>;
  parentAggregate?: InputMaybe<RequirementParentAggregateInput>;
  parentConnection?: InputMaybe<RequirementParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<RequirementParentConnectionWhere>;
  parent_NOT?: InputMaybe<RequirementWhere>;
  testsAggregate?: InputMaybe<RequirementTestsAggregateInput>;
  /** Return Requirements where all of the related RequirementTestsConnections match this filter */
  testsConnection_ALL?: InputMaybe<RequirementTestsConnectionWhere>;
  /** Return Requirements where none of the related RequirementTestsConnections match this filter */
  testsConnection_NONE?: InputMaybe<RequirementTestsConnectionWhere>;
  /** Return Requirements where one of the related RequirementTestsConnections match this filter */
  testsConnection_SINGLE?: InputMaybe<RequirementTestsConnectionWhere>;
  /** Return Requirements where some of the related RequirementTestsConnections match this filter */
  testsConnection_SOME?: InputMaybe<RequirementTestsConnectionWhere>;
  /** Return Requirements where all of the related Tests match this filter */
  tests_ALL?: InputMaybe<TestWhere>;
  /** Return Requirements where none of the related Tests match this filter */
  tests_NONE?: InputMaybe<TestWhere>;
  /** Return Requirements where one of the related Tests match this filter */
  tests_SINGLE?: InputMaybe<TestWhere>;
  /** Return Requirements where some of the related Tests match this filter */
  tests_SOME?: InputMaybe<TestWhere>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RequirementsConnection = {
  __typename?: 'RequirementsConnection';
  edges: Array<RequirementEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String']['output'];
  shortest: Scalars['String']['output'];
};

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type Test = {
  __typename?: 'Test';
  category: TestCategory;
  createdAt: Scalars['DateTime']['output'];
  creator?: Maybe<User>;
  creatorAggregate?: Maybe<TestUserCreatorAggregationSelection>;
  creatorConnection: TestCreatorConnection;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  requirement?: Maybe<Requirement>;
  requirementAggregate?: Maybe<TestRequirementRequirementAggregationSelection>;
  requirementConnection: TestRequirementConnection;
  results: Array<TestResult>;
  resultsAggregate?: Maybe<TestTestResultResultsAggregationSelection>;
  resultsConnection: TestResultsConnection;
  status: TestStatus;
  updatedAt: Scalars['DateTime']['output'];
};


export type TestCreatorArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type TestCreatorAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type TestCreatorConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TestCreatorConnectionSort>>;
  where?: InputMaybe<TestCreatorConnectionWhere>;
};


export type TestRequirementArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<RequirementOptions>;
  where?: InputMaybe<RequirementWhere>;
};


export type TestRequirementAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RequirementWhere>;
};


export type TestRequirementConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TestRequirementConnectionSort>>;
  where?: InputMaybe<TestRequirementConnectionWhere>;
};


export type TestResultsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TestResultOptions>;
  where?: InputMaybe<TestResultWhere>;
};


export type TestResultsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TestResultWhere>;
};


export type TestResultsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TestResultsConnectionSort>>;
  where?: InputMaybe<TestResultsConnectionWhere>;
};

export type TestAggregateSelection = {
  __typename?: 'TestAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNonNullable;
};

export enum TestCategory {
  IntegrationTest = 'INTEGRATION_TEST',
  SystemTest = 'SYSTEM_TEST',
  UnitTest = 'UNIT_TEST'
}

export type TestConnectInput = {
  creator?: InputMaybe<TestCreatorConnectFieldInput>;
  requirement?: InputMaybe<TestRequirementConnectFieldInput>;
  results?: InputMaybe<Array<TestResultsConnectFieldInput>>;
};

export type TestConnectOrCreateInput = {
  creator?: InputMaybe<TestCreatorConnectOrCreateFieldInput>;
};

export type TestConnectWhere = {
  node: TestWhere;
};

export type TestCreateInput = {
  category: TestCategory;
  creator?: InputMaybe<TestCreatorFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  requirement?: InputMaybe<TestRequirementFieldInput>;
  results?: InputMaybe<TestResultsFieldInput>;
  status: TestStatus;
};

export type TestCreatorAggregateInput = {
  AND?: InputMaybe<Array<TestCreatorAggregateInput>>;
  NOT?: InputMaybe<TestCreatorAggregateInput>;
  OR?: InputMaybe<Array<TestCreatorAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TestCreatorNodeAggregationWhereInput>;
};

export type TestCreatorConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type TestCreatorConnectOrCreateFieldInput = {
  onCreate: TestCreatorConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type TestCreatorConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type TestCreatorConnection = {
  __typename?: 'TestCreatorConnection';
  edges: Array<TestCreatorRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TestCreatorConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type TestCreatorConnectionWhere = {
  AND?: InputMaybe<Array<TestCreatorConnectionWhere>>;
  NOT?: InputMaybe<TestCreatorConnectionWhere>;
  OR?: InputMaybe<Array<TestCreatorConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type TestCreatorCreateFieldInput = {
  node: UserCreateInput;
};

export type TestCreatorDeleteFieldInput = {
  where?: InputMaybe<TestCreatorConnectionWhere>;
};

export type TestCreatorDisconnectFieldInput = {
  where?: InputMaybe<TestCreatorConnectionWhere>;
};

export type TestCreatorFieldInput = {
  connect?: InputMaybe<TestCreatorConnectFieldInput>;
  connectOrCreate?: InputMaybe<TestCreatorConnectOrCreateFieldInput>;
  create?: InputMaybe<TestCreatorCreateFieldInput>;
};

export type TestCreatorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TestCreatorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TestCreatorNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TestCreatorNodeAggregationWhereInput>>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TestCreatorRelationship = {
  __typename?: 'TestCreatorRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type TestCreatorUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type TestCreatorUpdateFieldInput = {
  connect?: InputMaybe<TestCreatorConnectFieldInput>;
  connectOrCreate?: InputMaybe<TestCreatorConnectOrCreateFieldInput>;
  create?: InputMaybe<TestCreatorCreateFieldInput>;
  delete?: InputMaybe<TestCreatorDeleteFieldInput>;
  disconnect?: InputMaybe<TestCreatorDisconnectFieldInput>;
  update?: InputMaybe<TestCreatorUpdateConnectionInput>;
  where?: InputMaybe<TestCreatorConnectionWhere>;
};

export type TestDeleteInput = {
  creator?: InputMaybe<TestCreatorDeleteFieldInput>;
  requirement?: InputMaybe<TestRequirementDeleteFieldInput>;
  results?: InputMaybe<Array<TestResultsDeleteFieldInput>>;
};

export type TestDisconnectInput = {
  creator?: InputMaybe<TestCreatorDisconnectFieldInput>;
  requirement?: InputMaybe<TestRequirementDisconnectFieldInput>;
  results?: InputMaybe<Array<TestResultsDisconnectFieldInput>>;
};

export type TestEdge = {
  __typename?: 'TestEdge';
  cursor: Scalars['String']['output'];
  node: Test;
};

export type TestOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TestSort objects to sort Tests by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TestSort>>;
};

export type TestRelationInput = {
  creator?: InputMaybe<TestCreatorCreateFieldInput>;
  requirement?: InputMaybe<TestRequirementCreateFieldInput>;
  results?: InputMaybe<Array<TestResultsCreateFieldInput>>;
};

export type TestRequirementAggregateInput = {
  AND?: InputMaybe<Array<TestRequirementAggregateInput>>;
  NOT?: InputMaybe<TestRequirementAggregateInput>;
  OR?: InputMaybe<Array<TestRequirementAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TestRequirementNodeAggregationWhereInput>;
};

export type TestRequirementConnectFieldInput = {
  connect?: InputMaybe<RequirementConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<RequirementConnectWhere>;
};

export type TestRequirementConnection = {
  __typename?: 'TestRequirementConnection';
  edges: Array<TestRequirementRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TestRequirementConnectionSort = {
  node?: InputMaybe<RequirementSort>;
};

export type TestRequirementConnectionWhere = {
  AND?: InputMaybe<Array<TestRequirementConnectionWhere>>;
  NOT?: InputMaybe<TestRequirementConnectionWhere>;
  OR?: InputMaybe<Array<TestRequirementConnectionWhere>>;
  node?: InputMaybe<RequirementWhere>;
};

export type TestRequirementCreateFieldInput = {
  node: RequirementCreateInput;
};

export type TestRequirementDeleteFieldInput = {
  delete?: InputMaybe<RequirementDeleteInput>;
  where?: InputMaybe<TestRequirementConnectionWhere>;
};

export type TestRequirementDisconnectFieldInput = {
  disconnect?: InputMaybe<RequirementDisconnectInput>;
  where?: InputMaybe<TestRequirementConnectionWhere>;
};

export type TestRequirementFieldInput = {
  connect?: InputMaybe<TestRequirementConnectFieldInput>;
  create?: InputMaybe<TestRequirementCreateFieldInput>;
};

export type TestRequirementNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TestRequirementNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TestRequirementNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TestRequirementNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TestRequirementRelationship = {
  __typename?: 'TestRequirementRelationship';
  cursor: Scalars['String']['output'];
  node: Requirement;
};

export type TestRequirementRequirementAggregationSelection = {
  __typename?: 'TestRequirementRequirementAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TestRequirementRequirementNodeAggregateSelection>;
};

export type TestRequirementRequirementNodeAggregateSelection = {
  __typename?: 'TestRequirementRequirementNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type TestRequirementUpdateConnectionInput = {
  node?: InputMaybe<RequirementUpdateInput>;
};

export type TestRequirementUpdateFieldInput = {
  connect?: InputMaybe<TestRequirementConnectFieldInput>;
  create?: InputMaybe<TestRequirementCreateFieldInput>;
  delete?: InputMaybe<TestRequirementDeleteFieldInput>;
  disconnect?: InputMaybe<TestRequirementDisconnectFieldInput>;
  update?: InputMaybe<TestRequirementUpdateConnectionInput>;
  where?: InputMaybe<TestRequirementConnectionWhere>;
};

export type TestResult = {
  __typename?: 'TestResult';
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  passed: Scalars['Boolean']['output'];
  timestamp: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TestResultAggregateSelection = {
  __typename?: 'TestResultAggregateSelection';
  count: Scalars['Int']['output'];
  details: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  timestamp: DateTimeAggregateSelectionNonNullable;
  url: StringAggregateSelectionNonNullable;
};

export type TestResultConnectWhere = {
  node: TestResultWhere;
};

export type TestResultCreateInput = {
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  passed: Scalars['Boolean']['input'];
  url: Scalars['String']['input'];
};

export type TestResultEdge = {
  __typename?: 'TestResultEdge';
  cursor: Scalars['String']['output'];
  node: TestResult;
};

export type TestResultOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TestResultSort objects to sort TestResults by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TestResultSort>>;
};

/** Fields to sort TestResults by. The order in which sorts are applied is not guaranteed when specifying many fields in one TestResultSort object. */
export type TestResultSort = {
  details?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  passed?: InputMaybe<SortDirection>;
  timestamp?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
};

export type TestResultUpdateInput = {
  details?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  passed?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TestResultWhere = {
  AND?: InputMaybe<Array<TestResultWhere>>;
  NOT?: InputMaybe<TestResultWhere>;
  OR?: InputMaybe<Array<TestResultWhere>>;
  details?: InputMaybe<Scalars['String']['input']>;
  details_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  details_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  details_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  details_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  passed?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_GT?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  timestamp_LT?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  url_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  url_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  url_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type TestResultsAggregateInput = {
  AND?: InputMaybe<Array<TestResultsAggregateInput>>;
  NOT?: InputMaybe<TestResultsAggregateInput>;
  OR?: InputMaybe<Array<TestResultsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TestResultsNodeAggregationWhereInput>;
};

export type TestResultsConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TestResultConnectWhere>;
};

export type TestResultsConnection = {
  __typename?: 'TestResultsConnection';
  edges: Array<TestResultEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TestResultsConnectionSort = {
  node?: InputMaybe<TestResultSort>;
};

export type TestResultsConnectionWhere = {
  AND?: InputMaybe<Array<TestResultsConnectionWhere>>;
  NOT?: InputMaybe<TestResultsConnectionWhere>;
  OR?: InputMaybe<Array<TestResultsConnectionWhere>>;
  node?: InputMaybe<TestResultWhere>;
};

export type TestResultsCreateFieldInput = {
  node: TestResultCreateInput;
};

export type TestResultsDeleteFieldInput = {
  where?: InputMaybe<TestResultsConnectionWhere>;
};

export type TestResultsDisconnectFieldInput = {
  where?: InputMaybe<TestResultsConnectionWhere>;
};

export type TestResultsFieldInput = {
  connect?: InputMaybe<Array<TestResultsConnectFieldInput>>;
  create?: InputMaybe<Array<TestResultsCreateFieldInput>>;
};

export type TestResultsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TestResultsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TestResultsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TestResultsNodeAggregationWhereInput>>;
  details_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  details_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  details_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  details_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  details_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  timestamp_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TestResultsUpdateConnectionInput = {
  node?: InputMaybe<TestResultUpdateInput>;
};

export type TestResultsUpdateFieldInput = {
  connect?: InputMaybe<Array<TestResultsConnectFieldInput>>;
  create?: InputMaybe<Array<TestResultsCreateFieldInput>>;
  delete?: InputMaybe<Array<TestResultsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TestResultsDisconnectFieldInput>>;
  update?: InputMaybe<TestResultsUpdateConnectionInput>;
  where?: InputMaybe<TestResultsConnectionWhere>;
};

/** Fields to sort Tests by. The order in which sorts are applied is not guaranteed when specifying many fields in one TestSort object. */
export type TestSort = {
  category?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  status?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export enum TestStatus {
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Passed = 'PASSED',
  Pending = 'PENDING'
}

export type TestTestResultResultsAggregationSelection = {
  __typename?: 'TestTestResultResultsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TestTestResultResultsNodeAggregateSelection>;
};

export type TestTestResultResultsNodeAggregateSelection = {
  __typename?: 'TestTestResultResultsNodeAggregateSelection';
  details: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  timestamp: DateTimeAggregateSelectionNonNullable;
  url: StringAggregateSelectionNonNullable;
};

export type TestUpdateInput = {
  category?: InputMaybe<TestCategory>;
  creator?: InputMaybe<TestCreatorUpdateFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  requirement?: InputMaybe<TestRequirementUpdateFieldInput>;
  results?: InputMaybe<Array<TestResultsUpdateFieldInput>>;
  status?: InputMaybe<TestStatus>;
};

export type TestUserCreatorAggregationSelection = {
  __typename?: 'TestUserCreatorAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TestUserCreatorNodeAggregateSelection>;
};

export type TestUserCreatorNodeAggregateSelection = {
  __typename?: 'TestUserCreatorNodeAggregateSelection';
  email: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type TestWhere = {
  AND?: InputMaybe<Array<TestWhere>>;
  NOT?: InputMaybe<TestWhere>;
  OR?: InputMaybe<Array<TestWhere>>;
  category?: InputMaybe<TestCategory>;
  category_IN?: InputMaybe<Array<TestCategory>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  creator?: InputMaybe<UserWhere>;
  creatorAggregate?: InputMaybe<TestCreatorAggregateInput>;
  creatorConnection?: InputMaybe<TestCreatorConnectionWhere>;
  creatorConnection_NOT?: InputMaybe<TestCreatorConnectionWhere>;
  creator_NOT?: InputMaybe<UserWhere>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  requirement?: InputMaybe<RequirementWhere>;
  requirementAggregate?: InputMaybe<TestRequirementAggregateInput>;
  requirementConnection?: InputMaybe<TestRequirementConnectionWhere>;
  requirementConnection_NOT?: InputMaybe<TestRequirementConnectionWhere>;
  requirement_NOT?: InputMaybe<RequirementWhere>;
  resultsAggregate?: InputMaybe<TestResultsAggregateInput>;
  /** Return Tests where all of the related TestResultsConnections match this filter */
  resultsConnection_ALL?: InputMaybe<TestResultsConnectionWhere>;
  /** Return Tests where none of the related TestResultsConnections match this filter */
  resultsConnection_NONE?: InputMaybe<TestResultsConnectionWhere>;
  /** Return Tests where one of the related TestResultsConnections match this filter */
  resultsConnection_SINGLE?: InputMaybe<TestResultsConnectionWhere>;
  /** Return Tests where some of the related TestResultsConnections match this filter */
  resultsConnection_SOME?: InputMaybe<TestResultsConnectionWhere>;
  /** Return Tests where all of the related TestResults match this filter */
  results_ALL?: InputMaybe<TestResultWhere>;
  /** Return Tests where none of the related TestResults match this filter */
  results_NONE?: InputMaybe<TestResultWhere>;
  /** Return Tests where one of the related TestResults match this filter */
  results_SINGLE?: InputMaybe<TestResultWhere>;
  /** Return Tests where some of the related TestResults match this filter */
  results_SOME?: InputMaybe<TestResultWhere>;
  status?: InputMaybe<TestStatus>;
  status_IN?: InputMaybe<Array<TestStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TestsConnection = {
  __typename?: 'TestsConnection';
  edges: Array<TestEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateRequirementsMutationResponse = {
  __typename?: 'UpdateRequirementsMutationResponse';
  info: UpdateInfo;
  requirements: Array<Requirement>;
};

export type UpdateTestResultsMutationResponse = {
  __typename?: 'UpdateTestResultsMutationResponse';
  info: UpdateInfo;
  testResults: Array<TestResult>;
};

export type UpdateTestsMutationResponse = {
  __typename?: 'UpdateTestsMutationResponse';
  info: UpdateInfo;
  tests: Array<Test>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['StringWithFormatemail']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int']['output'];
  email: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserOnCreateInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  email?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  email_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GetRequirementsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRequirementsQuery = { __typename?: 'Query', requirements: Array<{ __typename?: 'Requirement', id: string, title: string, description?: string | null, children: Array<{ __typename?: 'Requirement', id: string }> }> };

export type CreateRequirementsMutationVariables = Exact<{
  input: Array<RequirementCreateInput> | RequirementCreateInput;
}>;


export type CreateRequirementsMutation = { __typename?: 'Mutation', createRequirements: { __typename?: 'CreateRequirementsMutationResponse', requirements: Array<{ __typename?: 'Requirement', id: string, title: string, description?: string | null }>, info: { __typename?: 'CreateInfo', nodesCreated: number } } };

export type UpdateRequirementsMutationVariables = Exact<{
  where?: InputMaybe<RequirementWhere>;
  update?: InputMaybe<RequirementUpdateInput>;
}>;


export type UpdateRequirementsMutation = { __typename?: 'Mutation', updateRequirements: { __typename?: 'UpdateRequirementsMutationResponse', requirements: Array<{ __typename?: 'Requirement', id: string, title: string, description?: string | null, children: Array<{ __typename?: 'Requirement', id: string }> }> } };

export type UpdateRequirementsToCreateChildrenMutationVariables = Exact<{
  where?: InputMaybe<RequirementWhere>;
  connectOrCreate?: InputMaybe<RequirementConnectOrCreateInput>;
  create?: InputMaybe<RequirementRelationInput>;
}>;


export type UpdateRequirementsToCreateChildrenMutation = { __typename?: 'Mutation', updateRequirements: { __typename?: 'UpdateRequirementsMutationResponse', info: { __typename?: 'UpdateInfo', nodesCreated: number, relationshipsCreated: number }, requirements: Array<{ __typename?: 'Requirement', id: string, title: string, description?: string | null, children: Array<{ __typename?: 'Requirement', id: string, title: string }> }> } };

export type ConnectRequirementsMutationVariables = Exact<{
  where?: InputMaybe<RequirementWhere>;
  connect?: InputMaybe<RequirementConnectInput>;
}>;


export type ConnectRequirementsMutation = { __typename?: 'Mutation', updateRequirements: { __typename?: 'UpdateRequirementsMutationResponse', info: { __typename?: 'UpdateInfo', relationshipsCreated: number }, requirements: Array<{ __typename?: 'Requirement', id: string, description?: string | null, title: string, children: Array<{ __typename?: 'Requirement', id: string, title: string, description?: string | null }> }> } };

export type DeleteRequirementsMutationVariables = Exact<{
  where?: InputMaybe<RequirementWhere>;
}>;


export type DeleteRequirementsMutation = { __typename?: 'Mutation', deleteRequirements: { __typename?: 'DeleteInfo', nodesDeleted: number, relationshipsDeleted: number } };


export const GetRequirementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetRequirementsQuery, GetRequirementsQueryVariables>;
export const CreateRequirementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRequirements"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RequirementCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRequirements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodesCreated"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRequirementsMutation, CreateRequirementsMutationVariables>;
export const UpdateRequirementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRequirements"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RequirementWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"update"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RequirementUpdateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRequirements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"update"},"value":{"kind":"Variable","name":{"kind":"Name","value":"update"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateRequirementsMutation, UpdateRequirementsMutationVariables>;
export const UpdateRequirementsToCreateChildrenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRequirementsToCreateChildren"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RequirementWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"connectOrCreate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RequirementConnectOrCreateInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"create"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RequirementRelationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRequirements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"connectOrCreate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"connectOrCreate"}}},{"kind":"Argument","name":{"kind":"Name","value":"create"},"value":{"kind":"Variable","name":{"kind":"Name","value":"create"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodesCreated"}},{"kind":"Field","name":{"kind":"Name","value":"relationshipsCreated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateRequirementsToCreateChildrenMutation, UpdateRequirementsToCreateChildrenMutationVariables>;
export const ConnectRequirementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConnectRequirements"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RequirementWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"connect"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RequirementConnectInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRequirements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"connect"},"value":{"kind":"Variable","name":{"kind":"Name","value":"connect"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"relationshipsCreated"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ConnectRequirementsMutation, ConnectRequirementsMutationVariables>;
export const DeleteRequirementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRequirements"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RequirementWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRequirements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodesDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"relationshipsDeleted"}}]}}]}}]} as unknown as DocumentNode<DeleteRequirementsMutation, DeleteRequirementsMutationVariables>;