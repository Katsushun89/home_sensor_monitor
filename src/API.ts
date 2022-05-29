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

export type DeleteEnvsensorInput = {
  id: string,
};

export type CreateCO2sensorInput = {
  id?: string | null,
  type: string,
  deviceid: string,
  timestamp: number,
  concentration: number,
};

export type ModelCO2sensorConditionInput = {
  type?: ModelStringInput | null,
  deviceid?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  concentration?: ModelIntInput | null,
  and?: Array< ModelCO2sensorConditionInput | null > | null,
  or?: Array< ModelCO2sensorConditionInput | null > | null,
  not?: ModelCO2sensorConditionInput | null,
};

export type CO2sensor = {
  __typename: "CO2sensor",
  id: string,
  type: string,
  deviceid: string,
  timestamp: number,
  concentration: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateCO2sensorInput = {
  id: string,
  type?: string | null,
  deviceid?: string | null,
  timestamp?: number | null,
  concentration?: number | null,
};

export type DeleteCO2sensorInput = {
  id: string,
};

export type CreatePrssensorInput = {
  id?: string | null,
  type: string,
  deviceid: string,
  timestamp: number,
  pressure: number,
};

export type ModelPrssensorConditionInput = {
  type?: ModelStringInput | null,
  deviceid?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  pressure?: ModelIntInput | null,
  and?: Array< ModelPrssensorConditionInput | null > | null,
  or?: Array< ModelPrssensorConditionInput | null > | null,
  not?: ModelPrssensorConditionInput | null,
};

export type Prssensor = {
  __typename: "Prssensor",
  id: string,
  type: string,
  deviceid: string,
  timestamp: number,
  pressure: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePrssensorInput = {
  id: string,
  type?: string | null,
  deviceid?: string | null,
  timestamp?: number | null,
  pressure?: number | null,
};

export type DeletePrssensorInput = {
  id: string,
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


export type ModelCO2sensorFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  deviceid?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  concentration?: ModelIntInput | null,
  and?: Array< ModelCO2sensorFilterInput | null > | null,
  or?: Array< ModelCO2sensorFilterInput | null > | null,
  not?: ModelCO2sensorFilterInput | null,
};

export type ModelCO2sensorConnection = {
  __typename: "ModelCO2sensorConnection",
  items:  Array<CO2sensor | null >,
  nextToken?: string | null,
};

export type ModelPrssensorFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  deviceid?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  pressure?: ModelIntInput | null,
  and?: Array< ModelPrssensorFilterInput | null > | null,
  or?: Array< ModelPrssensorFilterInput | null > | null,
  not?: ModelPrssensorFilterInput | null,
};

export type ModelPrssensorConnection = {
  __typename: "ModelPrssensorConnection",
  items:  Array<Prssensor | null >,
  nextToken?: string | null,
};

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

export type CreateCO2sensorMutationVariables = {
  input: CreateCO2sensorInput,
  condition?: ModelCO2sensorConditionInput | null,
};

export type CreateCO2sensorMutation = {
  createCO2sensor?:  {
    __typename: "CO2sensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    concentration: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCO2sensorMutationVariables = {
  input: UpdateCO2sensorInput,
  condition?: ModelCO2sensorConditionInput | null,
};

export type UpdateCO2sensorMutation = {
  updateCO2sensor?:  {
    __typename: "CO2sensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    concentration: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCO2sensorMutationVariables = {
  input: DeleteCO2sensorInput,
  condition?: ModelCO2sensorConditionInput | null,
};

export type DeleteCO2sensorMutation = {
  deleteCO2sensor?:  {
    __typename: "CO2sensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    concentration: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePrssensorMutationVariables = {
  input: CreatePrssensorInput,
  condition?: ModelPrssensorConditionInput | null,
};

export type CreatePrssensorMutation = {
  createPrssensor?:  {
    __typename: "Prssensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    pressure: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePrssensorMutationVariables = {
  input: UpdatePrssensorInput,
  condition?: ModelPrssensorConditionInput | null,
};

export type UpdatePrssensorMutation = {
  updatePrssensor?:  {
    __typename: "Prssensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    pressure: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePrssensorMutationVariables = {
  input: DeletePrssensorInput,
  condition?: ModelPrssensorConditionInput | null,
};

export type DeletePrssensorMutation = {
  deletePrssensor?:  {
    __typename: "Prssensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    pressure: number,
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
  type: string,
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

export type GetCO2sensorQueryVariables = {
  id: string,
};

export type GetCO2sensorQuery = {
  getCO2sensor?:  {
    __typename: "CO2sensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    concentration: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCO2sensorsQueryVariables = {
  filter?: ModelCO2sensorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCO2sensorsQuery = {
  listCO2sensors?:  {
    __typename: "ModelCO2sensorConnection",
    items:  Array< {
      __typename: "CO2sensor",
      id: string,
      type: string,
      deviceid: string,
      timestamp: number,
      concentration: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByCO2TimestampQueryVariables = {
  type: string,
  timestamp?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCO2sensorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByCO2TimestampQuery = {
  byCO2Timestamp?:  {
    __typename: "ModelCO2sensorConnection",
    items:  Array< {
      __typename: "CO2sensor",
      id: string,
      type: string,
      deviceid: string,
      timestamp: number,
      concentration: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPrssensorQueryVariables = {
  id: string,
};

export type GetPrssensorQuery = {
  getPrssensor?:  {
    __typename: "Prssensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    pressure: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPrssensorsQueryVariables = {
  filter?: ModelPrssensorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrssensorsQuery = {
  listPrssensors?:  {
    __typename: "ModelPrssensorConnection",
    items:  Array< {
      __typename: "Prssensor",
      id: string,
      type: string,
      deviceid: string,
      timestamp: number,
      pressure: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByPrsTimestampQueryVariables = {
  type: string,
  timestamp?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPrssensorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByPrsTimestampQuery = {
  byPrsTimestamp?:  {
    __typename: "ModelPrssensorConnection",
    items:  Array< {
      __typename: "Prssensor",
      id: string,
      type: string,
      deviceid: string,
      timestamp: number,
      pressure: number,
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

export type OnCreateCO2sensorSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCO2sensorSubscription = {
  onCreateCO2sensor?:  {
    __typename: "CO2sensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    concentration: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCO2sensorSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCO2sensorSubscription = {
  onUpdateCO2sensor?:  {
    __typename: "CO2sensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    concentration: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCO2sensorSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCO2sensorSubscription = {
  onDeleteCO2sensor?:  {
    __typename: "CO2sensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    concentration: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePrssensorSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePrssensorSubscription = {
  onCreatePrssensor?:  {
    __typename: "Prssensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    pressure: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePrssensorSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePrssensorSubscription = {
  onUpdatePrssensor?:  {
    __typename: "Prssensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    pressure: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePrssensorSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePrssensorSubscription = {
  onDeletePrssensor?:  {
    __typename: "Prssensor",
    id: string,
    type: string,
    deviceid: string,
    timestamp: number,
    pressure: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
