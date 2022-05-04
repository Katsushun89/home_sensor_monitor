import React from 'react';
import logo from './logo.svg';
import './App.css';
import Charts from './Charts';
import { Amplify } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);


function App() {
return (
    <AmplifyAuthenticator>
        <div className="App">
            <Charts/>
            <AmplifySignOut />
        </div>
    </AmplifyAuthenticator>
);
}

export default App;
