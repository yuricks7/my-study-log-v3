import { renderWithProvider } from '../../test-utils/renderWithProvider';
import { Button } from '@chakra-ui/react';
import { screen } from '@testing-library/react';

test('button renders', () => {
  renderWithProvider(<Button>Click</Button>);
  expect(screen.getByText('Click')).toBeInTheDocument();
})