import { Provider } from '../src/components/ui/provider'
import { render } from '@testing-library/react'

export function renderWithProvider(ui: React.ReactElement) {
  return render(<Provider>{ui}</Provider>)
}