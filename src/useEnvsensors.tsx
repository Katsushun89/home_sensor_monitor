import { GraphQLResult } from "@aws-amplify/api-graphql";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { useState, useCallback, useRef } from 'react';

import awsExports from './aws-exports'
import * as queries from './graphql/queries';
import {
    Envsensor,
    ListEnvsensorsQueryVariables,
    ListEnvsensorsQuery,
} from './API'

export const useEnvsensors = (): {
    envsensors: readonly Envsensor[];
    requestEnvsensors: (from: number, to: number) => Promise<void>;
} => {
    const [envsensors, setEnvsensors] = useState<readonly Envsensor[]>([]);
    const timestampMin = useRef(Math.floor(Date.now() / 1000))
    
    const requestEnvsensors = useCallback(async (from: number, to: number) => {
        if (from >= timestampMin.current) return;

        const { data } = (await API.graphql(
            graphqlOperation(queries.listEnvsensors, {
                type: 'Envsensor',
                timestamp: { between: [from, timestampMin.current] },
                limit: 500,
            } as ListEnvsensorsQueryVariables)
        )) as GraphQLResult<ListEnvsensorsQuery>;

        timestampMin.current = from;

        setEnvsensors((ms) =>
            [
                ...ms,
                ...((data?.listEnvsensors?.items?.filter(
                Boolean
                ) as readonly Envsensor[]) ?? []),
            ].sort((a, b) => (a.timestamp ?? 0) - (b.timestamp ?? 0))
        );
    }, []);

    return { envsensors, requestEnvsensors };
}