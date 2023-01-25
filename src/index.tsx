import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import App from './App';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime:Infinity
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<QueryClientProvider client={queryClient}>
<React.StrictMode>
   <App/>
  </React.StrictMode>
  <ReactQueryDevtools />
</QueryClientProvider>
);
