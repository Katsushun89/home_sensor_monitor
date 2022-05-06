/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEnvsensor = /* GraphQL */ `
  mutation CreateEnvsensor(
    $input: CreateEnvsensorInput!
    $condition: ModelEnvsensorConditionInput
  ) {
    createEnvsensor(input: $input, condition: $condition) {
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
export const updateEnvsensor = /* GraphQL */ `
  mutation UpdateEnvsensor(
    $input: UpdateEnvsensorInput!
    $condition: ModelEnvsensorConditionInput
  ) {
    updateEnvsensor(input: $input, condition: $condition) {
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
export const deleteEnvsensor = /* GraphQL */ `
  mutation DeleteEnvsensor(
    $input: DeleteEnvsensorInput!
    $condition: ModelEnvsensorConditionInput
  ) {
    deleteEnvsensor(input: $input, condition: $condition) {
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
export const createCO2sensor = /* GraphQL */ `
  mutation CreateCO2sensor(
    $input: CreateCO2sensorInput!
    $condition: ModelCO2sensorConditionInput
  ) {
    createCO2sensor(input: $input, condition: $condition) {
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
export const updateCO2sensor = /* GraphQL */ `
  mutation UpdateCO2sensor(
    $input: UpdateCO2sensorInput!
    $condition: ModelCO2sensorConditionInput
  ) {
    updateCO2sensor(input: $input, condition: $condition) {
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
export const deleteCO2sensor = /* GraphQL */ `
  mutation DeleteCO2sensor(
    $input: DeleteCO2sensorInput!
    $condition: ModelCO2sensorConditionInput
  ) {
    deleteCO2sensor(input: $input, condition: $condition) {
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
