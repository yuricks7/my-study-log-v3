import { render } from '@testing-library/react'
import { Provider } from '../src/components/ui/provider'

export function renderWithProvider(ui: React.ReactElement) {
  return render(<Provider>{ui}</Provider>)
}