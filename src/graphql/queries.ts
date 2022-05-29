/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEnvsensor = /* GraphQL */ `
  query GetEnvsensor($id: ID!) {
    getEnvsensor(id: $id) {
      id
      type
      deviceid
      timestamp
      illuminance
      power
      humidity
      temperature
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEnvsensors = /* GraphQL */ `
  query ListEnvsensors(
    $filter: ModelEnvsensorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnvsensors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        deviceid
        timestamp
        illuminance
        power
        humidity
        temperature
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const byTimestamp = /* GraphQL */ `
  query ByTimestamp(
    $type: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEnvsensorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        deviceid
        timestamp
        illuminance
        power
        humidity
        temperature
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCO2sensor = /* GraphQL */ `
  query GetCO2sensor($id: ID!) {
    getCO2sensor(id: $id) {
      id
      type
      deviceid
      timestamp
      concentration
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCO2sensors = /* GraphQL */ `
  query ListCO2sensors(
    $filter: ModelCO2sensorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCO2sensors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        deviceid
        timestamp
        concentration
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const byCO2Timestamp = /* GraphQL */ `
  query ByCO2Timestamp(
    $type: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCO2sensorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byCO2Timestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        deviceid
        timestamp
        concentration
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPrssensor = /* GraphQL */ `
  query GetPrssensor($id: ID!) {
    getPrssensor(id: $id) {
      id
      type
      deviceid
      timestamp
      pressure
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrssensors = /* GraphQL */ `
  query ListPrssensors(
    $filter: ModelPrssensorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrssensors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        deviceid
        timestamp
        pressure
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const byPrsTimestamp = /* GraphQL */ `
  query ByPrsTimestamp(
    $type: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPrssensorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byPrsTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        deviceid
        timestamp
        pressure
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
