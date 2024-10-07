import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { Provider } from 'react-redux';
import store from './app/store';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const queryClient = new QueryClient()
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    {/* Provider 使用 react 的 context API 共享全域資料 */}
    <Provider store={store}>
      <App />
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);
