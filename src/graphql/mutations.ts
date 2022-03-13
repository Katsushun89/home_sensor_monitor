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
