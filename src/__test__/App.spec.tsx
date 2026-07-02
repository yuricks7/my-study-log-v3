import { render, screen } from '@testing-library/react';
import { user } from '../../vitest.setup';

import App from '../App';

beforeEach(() => {
  render(<App />);
});

test('Get startedが表示されている', () => {
  expect(screen.getByText('Get started')).toBeInTheDocument();
});
test('"Count is 0"ボタンが表示されている', () => {
  expect(screen.getByRole('button', { name: 'Count is 0' })).toBeInTheDocument();
});
test('"Count is 0"をクリックするとインクリメントされる', async () => {
  await user.click(screen.getByRole('button', { name: 'Count is 0' }));
  expect(screen.getByRole('button', { name: 'Count is 1' })).toBeInTheDocument();
});
