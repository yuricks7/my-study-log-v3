import App from "@/App";
import { renderWithProvider } from './renderWithProvider';

export function renderApp() {
  return renderWithProvider(<App />);
}