import { apolloClient } from '@/app/services/apolloClient.ts';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ReactFlowProvider } from 'reactflow';
import App from './App.tsx';
import { store } from './app/store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <ReactFlowProvider>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </ReactFlowProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
);
