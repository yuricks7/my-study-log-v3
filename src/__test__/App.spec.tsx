import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import { Record } from "@/domain/record";
import { renderApp } from "../../test-utils/renderApp";
import { waitForTable } from "../../test-utils/waitForTable";

// テスト
describe("App", () => {
  // モック関数の定義
  const mockGetAllRecords = vi.fn().mockResolvedValue([
    new Record('1', "Title1", 1, "2021-01-01T000:00:00Z"),
    new Record('2', "Title2", 2, "2021-01-01T000:00:00Z"),
    new Record('3', "Title3", 3, "2021-01-01T000:00:00Z"),
    new Record('4', "Title4", 4, "2021-01-01T000:00:00Z"),
  ]);

  vi.mock("@/lib/record", () => {
    return {
      // モックしたい関数: モック関数,
      GetAllRecords: mockGetAllRecords,
    };
  });

  // -------------------------------------------------------
  // 1. ローディング画面
  // -------------------------------------------------------
  test.skip("ローディング画面を見ることが出来る", async () => {
    renderApp();

    const loading = screen.getByTestId('loading-screen');
    expect(loading).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // 2. タイトル
  // -------------------------------------------------------
  test("タイトルがあること", async () => {
    renderApp();
    await waitForTable();

    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // 3. 登録ボタン
  // -------------------------------------------------------
  test("新規登録ボタンがある", async () => {
    renderApp();
    await waitForTable();

    const recordButton = screen.getByRole('button', { name: /新規登録/i });
    expect(recordButton).toBeInTheDocument();
  });

  // -------------------------------------------------------
  // 4. テーブル
  // -------------------------------------------------------
  test("テーブルを見ることが出来る", async () => {
    renderApp();
    await waitForTable();

    const todosTable = screen.getByTestId('table');
    expect(todosTable).toBeInTheDocument();
  });
});