/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEnvsensorInput = {
  id?: string | null,
  type: string,
  deviceid: string,
  timestamp: number,
  illuminance: number,
  power: number,
  humidity: number,
  temperature: number,
};

export type ModelEnvsensorConditionInput = {
  type?: ModelStringInput | null,
  deviceid?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  illuminance?: ModelFloatInput | null,
  power?: ModelIntInput | null,
  humidity?: ModelFloatInput | null,
  temperature?: ModelFloatInput | null,
  and?: Array< ModelEnvsensorConditionInput | null > | null,
  or?: Array< ModelEnvsensorConditionInput | null > | null,
  not?: ModelEnvsensorConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Envsensor = {
  __typename: "Envsensor",
  id: string,
  type: string,
  deviceid: string,
  timestamp: number,
  illuminance: number,
  power: number,
  humidity: number,
  temperature: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type DeleteEnvsensorInput = {
  id: string,
};

export type UpdateEnvsensorInput = {
  id: string,
  type?: string | null,
  deviceid?: string | null,
  timestamp?: number | null,
  illuminance?: number | null,
  power?: number | null,
  humidity?: number | null,
  temperature?: number | null,
};

export type ModelEnvsensorFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  deviceid?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  illuminance?: ModelFloatInput | null,
  power?: ModelIntInput | null,
  humidity?: ModelFloatInput | null,
  temperature?: ModelFloatInput | null,
  and?: Array< ModelEnvsensorFilterInput | null > | null,
  or?: Array< ModelEnvsensorFilterInput | null > | null,
  not?: ModelEnvsensorFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelEnvsensorConnection = {
  __typename: "ModelEnvsensorConnection",
  items:  Array<Envsensor | null >,
  nextToken?: string | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateEnvsensorMutationVariables = {
  input: CreateEnvsensorInput,
  condition?: ModelEnvsensorConditionInput | null,
};

export type CreateEnvsensorMutation = {
  createEnvsensor?:  {
    __typename: "Envsensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    illuminance: number,
    power: number,
    humidity: number,
    temperature: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteEnvsensorMutationVariables = {
  input: DeleteEnvsensorInput,
  condition?: ModelEnvsensorConditionInput | null,
};

export type DeleteEnvsensorMutation = {
  deleteEnvsensor?:  {
    __typename: "Envsensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    illuminance: number,
    power: number,
    humidity: number,
    temperature: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateEnvsensorMutationVariables = {
  input: UpdateEnvsensorInput,
  condition?: ModelEnvsensorConditionInput | null,
};

export type UpdateEnvsensorMutation = {
  updateEnvsensor?:  {
    __typename: "Envsensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    illuminance: number,
    power: number,
    humidity: number,
    temperature: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetEnvsensorQueryVariables = {
  id: string,
};

export type GetEnvsensorQuery = {
  getEnvsensor?:  {
    __typename: "Envsensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    illuminance: number,
    power: number,
    humidity: number,
    temperature: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListEnvsensorsQueryVariables = {
  filter?: ModelEnvsensorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnvsensorsQuery = {
  listEnvsensors?:  {
    __typename: "ModelEnvsensorConnection",
    items:  Array< {
      __typename: "Envsensor",
      id: string,
      type: string,
      deviceid: string,
      timestamp: number,
      illuminance: number,
      power: number,
      humidity: number,
      temperature: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByTimestampQueryVariables = {
  type?: string | null,
  timestamp?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEnvsensorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByTimestampQuery = {
  byTimestamp?:  {
    __typename: "ModelEnvsensorConnection",
    items:  Array< {
      __typename: "Envsensor",
      id: string,
      type: string,
      deviceid: string,
      timestamp: number,
      illuminance: number,
      power: number,
      humidity: number,
      temperature: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEnvsensorSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateEnvsensorSubscription = {
  onCreateEnvsensor?:  {
    __typename: "Envsensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    illuminance: number,
    power: number,
    humidity: number,
    temperature: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateEnvsensorSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateEnvsensorSubscription = {
  onUpdateEnvsensor?:  {
    __typename: "Envsensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    illuminance: number,
    power: number,
    humidity: number,
    temperature: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteEnvsensorSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteEnvsensorSubscription = {
  onDeleteEnvsensor?:  {
    __typename: "Envsensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    illuminance: number,
    power: number,
    humidity: number,
    temperature: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
