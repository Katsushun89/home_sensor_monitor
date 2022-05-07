import { GraphQLResult } from "@aws-amplify/api-graphql";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { useState, useCallback, useRef } from 'react';

import * as queries from './graphql/queries';
import {
    CO2sensor,
    ByCO2TimestampQueryVariables,
    ByCO2TimestampQuery,
} from './API';
import { timeStamp } from "console";

export const useCO2sensors = (): {
    co2sensors: readonly CO2sensor[];
    requestCO2sensors: (from: number, to: number) => Promise<void>;
} => {
    const [co2sensors, setCO2sensors] = useState<readonly CO2sensor[]>([]);
    const now = new Date();
    const timestampMin = useRef(Math.floor(now.getTime() / 1000));
    
    const requestCO2sensors = useCallback(async (from: number, to: number) => {
        if (from >= timestampMin.current) {
            return;
        }

        const variables = {
            type: 'CO2sensor',
            limit: 500,
            sortDirection: 'ASC',
            timestamp: {between: [from, to]},
        } as ByCO2TimestampQueryVariables

        const { data } = (await API.graphql(
            graphqlOperation(queries.byCO2Timestamp, variables)
        )) as GraphQLResult<ByCO2TimestampQuery>;

        setCO2sensors((ms) =>
            [
                ...ms,
                ...((data?.byCO2Timestamp?.items?.filter(
                Boolean
                ) as readonly CO2sensor[]) ?? []),
            ]
        );
    }, []);

    return { co2sensors, requestCO2sensors };
}