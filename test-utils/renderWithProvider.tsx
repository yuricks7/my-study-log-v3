import { render } from '@testing-library/react';
import { Provider } from '@/components/ui/provider';
import { RecordProvider } from '@/providers/RecordProvider/RecordProvider';

export function renderWithProvider(ui: React.ReactElement) {
  return render(
    <Provider>
      <RecordProvider>
        {ui}
      </RecordProvider>
    </Provider>
  )
}