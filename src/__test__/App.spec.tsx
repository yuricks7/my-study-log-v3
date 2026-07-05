import "@testing-library/jest-dom";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProvider } from "../../test-utils/renderWithProvider";

import App from "../App";

import { Log } from "../domain/log";

// モック関数の定義
const mockGetAllLogs = vi.fn().mockResolvedValue([
  new Log('1', "Title1", 1, "2021-01-01T000:00:00Z"),
  new Log('2', "Title2", 2, "2021-01-01T000:00:00Z"),
  new Log('3', "Title3", 3, "2021-01-01T000:00:00Z"),
  new Log('4', "Title4", 4, "2021-01-01T000:00:00Z"),
]);

vi.mock("../lib/log", () => {
  return {
    // モックしたい関数: () => モック関数(),
    GetAllLogs: () => mockGetAllLogs(),
  };
});

// テスト
describe("App", () => {
  test("タイトルがあること", async () => {
    renderWithProvider(<App />);
    await waitFor(() => screen.getByTestId('table'));
    const title = screen.getByTestId('title');

    expect(title).toBeInTheDocument();
  });

  test("Logが4つ表示されること", async () => {
    renderWithProvider(<App />);

    await waitFor(() => screen.getByTestId('table'));
    const todos = screen.getByTestId('table').querySelectorAll('tr');

    const HEADER_ROW = 1;
    expect(todos.length - HEADER_ROW).toBe(4);
  });
});