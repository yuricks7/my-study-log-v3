import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from '@/components/ui/provider';

import App from '@/App';
import { RecordProvider } from '@/providers/RecordProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <RecordProvider>
        <App />
      </RecordProvider>
    </Provider>
  </StrictMode>,
)