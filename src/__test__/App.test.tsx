import "@testing-library/jest-dom";
import { act, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import type { Mock } from "vitest";

import { renderApp } from "../../test-utils/renderApp";

// Supabase モック
vi.mock("@/utils/supabase/dbUsecase", () => ({
  dbUsecase: {
    fetchList: vi.fn(),
    add: vi.fn(),
    update: vi.fn(),
    remove: vi.fn(),
  },
}));

describe("学習記録アプリのテスト", () => {
  const setup = () => {
    renderApp();
    const openButton = screen.getByRole("button", { name: "新規登録" })
    return { openButton };
  };

  // モックの初期設定
  beforeEach(async () => {

  });

  // リセット
  afterEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });

  // -------------------------------------------------------
  // 1. 学習記録が登録できること
  // -------------------------------------------------------
  test("学習記録が登録できること", async () => {
    // モック
    const { dbUsecase } = await import("@/utils/supabase/dbUsecase");

    const prevData = {
      id: "aaaaaa",
      created_at: new Date(),
      title: "勉強の記録10",
      time: 10,
    };
    const newData = {
      id: "new-id",
      created_at: new Date(),
      title: "React 勉強",
      time: 3,
    };

    (dbUsecase.add as Mock).mockResolvedValue(newData);
    (dbUsecase.fetchList as Mock).mockResolvedValue([prevData, newData]);

    // テスト
    const { openButton } = setup();
    await userEvent.click(openButton);

    const titleInput = screen.getByTestId("input-text");
    const timeInput  = screen.getByTestId("input-number");

    const title = "React 勉強";
    const time  = "3";
    await userEvent.type(titleInput, title);
    await userEvent.type( timeInput, time);

    const submitButton = screen.getByRole("button", { name: "登録" });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(`${time}時間`)).toBeInTheDocument();
    });
  });

  const titleRequiredMsg = "学習内容は必須です";
  const  timeRequiredMsg = "学習時間は必須です"

  // -------------------------------------------------------
  // 2. 学習内容がないときに登録するとエラーがでる
  // -------------------------------------------------------
  test.skip("学習内容がないときに登録するとエラーがでる", async () => {
    // モック
    const { dbUsecase } = await import("@/utils/supabase/dbUsecase");

    const prevData = {
      id: "aaaaaa",
      created_at: new Date(),
      title: "勉強の記録10",
      time: 10,
    };

    (dbUsecase.fetchList as Mock).mockResolvedValue([prevData]);

    // テスト
    const { openButton } = setup();
    await userEvent.click(openButton);

    const titleInput = screen.getByTestId("input-text");
    const timeInput  = screen.getByTestId("input-number");

    // タイトルは一度触ってから空にする
    await userEvent.type(titleInput, "a");
    await userEvent.clear(titleInput);

    // 数値は入力
    userEvent.type(timeInput, "2");

    // ダイアログが複数開いてないか確認
    screen.debug(); // 現在の DOM を出力
    const dialogs = document.querySelectorAll('[role="dialog"]');
    console.log('dialog count:', dialogs.length);
    console.log('dialog count:', document.querySelectorAll('[role="dialog"]').length);

    const submitButton = screen.getByRole("button", { name: "登録" });
    await userEvent.click(submitButton);

    await vi.waitFor(() => {
      expect(screen.getByText(titleRequiredMsg)).toBeInTheDocument();
    });
  });

  // -------------------------------------------------------
  // 3. 学習時間がないときに登録するとエラーがでる
  // -------------------------------------------------------
  test("学習時間がないときに登録するとエラーがでる", async () => {
    // モック
    const { dbUsecase } = await import("@/utils/supabase/dbUsecase");

    const prevData = {
      id: "aaaaaa",
      created_at: new Date(),
      title: "勉強の記録10",
      time: 10,
    };

    (dbUsecase.fetchList as Mock).mockResolvedValue([prevData]);

    // テスト
    const { openButton } = setup();
    await userEvent.click(openButton);

    const titleInput = screen.getByTestId("input-text");
    const timeInput  = screen.getByTestId("input-number");

    // タイトルを入力
    await userEvent.type(titleInput, "a");

    // 数値は一度触ってから空にする
    await userEvent.type(timeInput, "1");
    await userEvent.clear(timeInput);

    const submitButton = screen.getByRole("button", { name: "登録" });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(timeRequiredMsg)).toBeInTheDocument();
    });
  });

  // -------------------------------------------------------
  // 4. 未入力のエラー（両方空）
  // -------------------------------------------------------
  test("未入力のエラーが表示される", async () => {
    // モック
    const { dbUsecase } = await import("@/utils/supabase/dbUsecase");

    const prevData = {
      id: "aaaaaa",
      created_at: new Date(),
      title: "勉強の記録10",
      time: 10,
    };

    (dbUsecase.fetchList as Mock).mockResolvedValue([prevData]);

    // テスト
    const { openButton } = setup();
    await userEvent.click(openButton);

    const titleInput = screen.getByTestId("input-text");
    const timeInput  = screen.getByTestId("input-number");

    // 一度触ってから空にする
    await userEvent.type(titleInput, "a");
    await userEvent.clear(titleInput);
    await userEvent.type(timeInput, "1");
    await userEvent.clear(timeInput);

    const submitButton = screen.getByRole("button", { name: "登録" });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(titleRequiredMsg)).toBeInTheDocument();
      expect(screen.getByText(timeRequiredMsg)).toBeInTheDocument();
    });
  });

  // -------------------------------------------------------
  // 5. 0以上でないときのエラー
  // -------------------------------------------------------
  test("学習時間が0以下のときにエラーが表示される", async () => {
    // モック
    const { dbUsecase } = await import("@/utils/supabase/dbUsecase");

    const prevData = {
      id: "aaaaaa",
      created_at: new Date(),
      title: "勉強の記録10",
      time: 10,
    };

    (dbUsecase.fetchList as Mock).mockResolvedValue([prevData]);

    // テスト
    const { openButton } = setup();
    await userEvent.click(openButton);

    // Chakra UIの仕様で「負の値を入力した瞬間に空（`null`）になる」ので、いったん正の値を入力してから訂正する
    const timeInput  = screen.getByTestId("input-number");
    await userEvent.type(timeInput, "1");
    await userEvent.clear(timeInput);
    const MINUS_VALUE = -1;
    await userEvent.type(timeInput, `${MINUS_VALUE}`);

    const submitButton = screen.getByRole("button", { name: "登録" });
    await userEvent.click(submitButton);

    await vi.waitFor(() => {
      expect(timeInput).toHaveValue(MINUS_VALUE);
      expect(screen.getByText("1時間以上を入力してください")).toBeInTheDocument();
    });
  });

  // -------------------------------------------------------
  // 6. 学習記録が削除できること
  // -------------------------------------------------------
  test("学習記録が削除できること", async () => {
    const { dbUsecase } = await import("@/utils/supabase/dbUsecase");

    const mockData = {
      id: "mockData01",
      created_at: new Date(),
      title: "削除テスト",
      time: 5,
    };

    // confirm を必ずモックする（これが最重要）
    vi.spyOn(window, "confirm").mockReturnValue(true);

    // fetchList → remove → fetchList
    (dbUsecase.fetchList as Mock).mockResolvedValueOnce([mockData]);
    (dbUsecase.remove as Mock).mockResolvedValueOnce(undefined);
    (dbUsecase.fetchList as Mock).mockResolvedValueOnce([]);

    renderApp();

    // 初期表示確認
    await waitFor(() => {
      expect(screen.getByText(mockData.title)).toBeInTheDocument();
    });

    // 削除ボタンを押す
    const deleteButton = screen.getByRole("button", { name: "delete" });
    await userEvent.click(deleteButton);

    // DOM が消えることを確認
    await waitFor(() => {
      expect(screen.queryByText(mockData.title)).not.toBeInTheDocument();
    });
  });
});
