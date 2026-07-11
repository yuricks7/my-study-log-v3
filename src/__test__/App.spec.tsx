import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import { Log } from "../domain/log";
import { renderApp } from "../../test-utils/renderApp";
import { waitForTable } from "../../test-utils/waitForTable";

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
  test("ローディング画面を見ることが出来る", async () => {
    renderApp();

    const loading = screen.getByTestId('loading-screen');
    expect(loading).toBeInTheDocument();
  });

  test("タイトルがあること", async () => {
    renderApp();
    await waitForTable();

    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
  });

  test("Logが4つ表示されること", async () => {
    renderApp();
    await waitForTable();

    const todos = screen.getByTestId('table').querySelectorAll('tr');

    const HEADER_ROW = 1;
    expect(todos.length - HEADER_ROW).toBe(4);
  });

  test("新規登録ボタンがある", async () => {
    renderApp();
    await waitForTable();

    const recordButton = screen.getByRole('button', { name: /新規登録/i });
    expect(recordButton).toBeInTheDocument();
  });

  test("テーブルを見ることが出来る", async () => {
    renderApp();
    await waitForTable();

    const todosTable = screen.getByTestId('table');
    expect(todosTable).toBeInTheDocument();
  });
});