import React from 'react';
import logo from './logo.svg';
import './App.css';
import Charts from './Charts';
import { Amplify } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);


function App() {
return (
    <Authenticator>
        {({ signOut, user }) => (
        <div className="App">
            <header className="App-header">
            <h1 className="Title">home-sensor-monitor</h1>
              </header>
              <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
);
}

export default App;
