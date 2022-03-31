import React, { useEffect, useState } from 'react'
import { GraphQLResult } from "@aws-amplify/api-graphql";
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import * as queries from './graphql/queries';
import {
    Envsensor,
    ListEnvsensorsQueryVariables,
    ListEnvsensorsQuery,
    ByTimestampQueryVariables,
    ByTimestampQuery,
} from './API'
import './Charts.css';

const Charts = () => {
  const [envsensors, setEnvsensors] = useState<readonly Envsensor[]>([])

  useEffect(() => {
    fetchList()
  }, [])

  async function fetchList() {
    try {
        /*
        const variables = {
            type: 'Envsensor',
            limit: 500
        } as ListEnvsensorsQueryVariables

        const { data } = (await API.graphql(
            graphqlOperation(queries.listEnvsensors, variables)
        )) as GraphQLResult<ListEnvsensorsQuery>;
*/

        const variables = {
            type: 'Envsensor',
            limit: 500,
            sortDirection: 'ASC'
        } as ByTimestampQueryVariables

        const { data } = (await API.graphql(
            graphqlOperation(queries.byTimestamp, variables)
        )) as GraphQLResult<ByTimestampQuery>;
        
        console.log(data);
        const envsensor = ((data?.byTimestamp?.items?.filter(Boolean)) as readonly Envsensor[]) ?? []
        setEnvsensors(envsensor)
        console.log(envsensor)
    } catch (err) { console.log('error fetching envSensors') }
  }

  return (
    <div>
        <h2>listEnvsensors</h2>
    </div>
  )
}


export default Charts;