import { GraphQLResult } from "@aws-amplify/api-graphql";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { useState, useCallback, useRef } from 'react';

import * as queries from './graphql/queries';
import {
    Envsensor,
    ByTimestampQueryVariables,
    ByTimestampQuery,
} from './API';

export const useEnvsensors = (): {
    envsensors: readonly Envsensor[];
    requestEnvsensors: () => Promise<void>;
} => {
    const [envsensors, setEnvsensors] = useState<readonly Envsensor[]>([]);
    
    const requestEnvsensors = useCallback(async () => {

        const variables = {
            type: 'Envsensor',
            limit: 1500,
            sortDirection: 'ASC'
        } as ByTimestampQueryVariables

        const { data } = (await API.graphql(
            graphqlOperation(queries.byTimestamp, variables)
        )) as GraphQLResult<ByTimestampQuery>;
      
        setEnvsensors((ms) =>
            [
                ...ms,
                ...((data?.byTimestamp?.items?.filter(
                Boolean
                ) as readonly Envsensor[]) ?? []),
            ]
        );
    }, []);

    return { envsensors, requestEnvsensors };
}