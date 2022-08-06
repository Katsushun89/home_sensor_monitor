import { GraphQLResult } from "@aws-amplify/api-graphql";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { useState, useCallback, useRef } from 'react';

import * as queries from './graphql/queries';
import {
    Envsensor,
    ByTimestampQueryVariables,
    ByTimestampQuery,
} from './API';
import { timeStamp } from "console";

export const useEnvsensors = (): {
    envsensors: readonly Envsensor[];
    requestEnvsensors: (from: number, to: number, limit: number) => Promise<void>;
} => {
    const [envsensors, setEnvsensors] = useState<readonly Envsensor[]>([]);
    const now = new Date();
    const timestampMin = useRef(Math.floor(now.getTime() / 1000));
    
    const requestEnvsensors = useCallback(async (from: number, to: number, limit: number) => {
        if (from >= timestampMin.current) {
            return;
        }

        const variables = {
            type: 'Envsensor',
            limit: limit,
            sortDirection: 'ASC',
            timestamp: {between: [from, to]},
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