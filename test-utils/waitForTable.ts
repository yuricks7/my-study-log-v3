import { screen, waitFor } from "@testing-library/react";

export async function waitForTable() {
  await waitFor(() => {
    expect(screen.getByTestId('table')).toBeInTheDocument();
  })
}