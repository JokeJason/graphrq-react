import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactFlowProvider } from 'reactflow';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ReactFlowProvider>
          <App />
        </ReactFlowProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
);
