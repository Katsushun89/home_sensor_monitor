import { GraphQLResult } from "@aws-amplify/api-graphql";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { useState, useCallback, useRef } from 'react';

import * as queries from './graphql/queries';
import {
    Prssensor,
    ByPrsTimestampQueryVariables,
    ByPrsTimestampQuery,
} from './API';
import { timeStamp } from "console";

export const usePrssensors = (): {
    prssensors: readonly Prssensor[];
    requestPrssensors: (from: number, to: number) => Promise<void>;
} => {
    const [prssensors, setPrssensors] = useState<readonly Prssensor[]>([]);
    const now = new Date();
    const timestampMin = useRef(Math.floor(now.getTime() / 1000));
    
    const requestPrssensors = useCallback(async (from: number, to: number) => {
        if (from >= timestampMin.current) {
            return;
        }

        const variables = {
            type: 'Prssensor',
            limit: 500,
            sortDirection: 'ASC',
            timestamp: {between: [from, to]},
        } as ByPrsTimestampQueryVariables

        const { data } = (await API.graphql(
            graphqlOperation(queries.byPrsTimestamp, variables)
        )) as GraphQLResult<ByPrsTimestampQuery>;

        setPrssensors((ms) =>
            [
                ...ms,
                ...((data?.byPrsTimestamp?.items?.filter(
                Boolean
                ) as readonly Prssensor[]) ?? []),
            ]
        );
    }, []);

    return { prssensors, requestPrssensors };
}