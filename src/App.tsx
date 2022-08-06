import React from 'react';
import logo from './logo.svg';
import './App.css';
import DashboradContent from './Dashboard'
import { Amplify } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);


function App() {
return (
    <Authenticator>
        {({ signOut, user }) => (
            <DashboradContent />
        )}
    </Authenticator>
);
}

export default App;
