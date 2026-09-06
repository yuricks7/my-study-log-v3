import "@testing-library/jest-dom";
import { cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import type { Mock } from "vitest";

import { renderApp } from "../../test-utils/renderApp";

// データの準備
const prevRecord = {
  id: "1",
  created_at: new Date(),
  title: "既存",
  time: 1,
};

const newRecord = {
  id: "new-id",
  created_at: new Date(),
  title: "React 勉強",
  time: 3,
};

const deletingData = {
  id: "deletingData01",
  created_at: new Date(),
  title: "削除テスト",
  time: 5,
};

// テスト
describe("学習記録アプリのテスト", () => {
  // Supabase モック
  vi.mock("@/utils/supabase/dbUsecase", () => ({
    dbUsecase: {
      fetchList: vi.fn(),
      add: vi.fn(),
      update: vi.fn(),
      remove: vi.fn(),
    },
  }));

  // テストの準備
  const setup = async (options?: { mockFetch?: any[] }) => {
    const { dbUsecase } = await import("@/utils/supabase/dbUsecase");

    // mockDataを使用
    if (options?.mockFetch) {
      (dbUsecase.fetchList as Mock).mockResolvedValue(options.mockFetch);
    }

    // Appコンポーネントを準備
    renderApp();

    // UI操作を名前付き関数として定義
    return {
      openDialog: async () => {
        const btn = screen.getByRole("button", { name: "新規登録" });
        await userEvent.click(btn);
      },
      getInputs: () => ({
        title: screen.getByTestId("input-text"),
        time:  screen.getByTestId("input-number"),
      }),
      submit: async () => {
        const btn = screen.getByRole("button", { name: "登録" });
        await userEvent.click(btn);
      }
    }
  }

  // モックの初期設定
  let dbUsecase: any;
  beforeEach(async () => {
    dbUsecase = (await import("@/utils/supabase/dbUsecase")).dbUsecase;
  });

  // リセット
  afterEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });

  // -------------------------------------------------------
  // 1. 学習記録が登録できること
  // -------------------------------------------------------
  test("モーダルを使って学習記録が登録できる", async () => {
    // モック
    (dbUsecase.add as Mock).mockResolvedValue(newRecord);
    (dbUsecase.fetchList as Mock).mockResolvedValue([newRecord]);

    // 準備
    const { openDialog, getInputs, submit } = await setup();

    await openDialog();

    // データを入力
    const { title, time } = getInputs();
    await userEvent.type(title, newRecord.title);
    await userEvent.type(time, `${newRecord.time}`);
    await submit();

    // チェック
    await waitFor(() => {
      expect(screen.getByText(newRecord.title)).toBeInTheDocument();
      expect(screen.getByText(`${newRecord.time}時間`)).toBeInTheDocument();
    })
  });

  const TITLE_REQUIRED_MSG = "学習内容は必須です";
  const  TIME_REQUIRED_MSG = "学習時間は必須です";

  // -------------------------------------------------------
  // 2. titleエラー
  // -------------------------------------------------------
  test("学習内容がないときに登録するとエラーが出る", async () => {
    // 準備
    const { openDialog, getInputs, submit } = await setup(
      {mockFetch: [prevRecord]}
    );
    await openDialog();

    // データを入力
    const { title, time } = getInputs();
    await userEvent.type(title, "a");
    await userEvent.clear(title); // いったん入力してから消す
    await userEvent.type(time, "2");
    await submit();

    // チェック
    await waitFor(() => {
      expect(screen.getByText(TITLE_REQUIRED_MSG)).toBeInTheDocument();
    });
  });

  // -------------------------------------------------------
  // 3. timeエラー
  // -------------------------------------------------------
  test("学習時間がないときに登録するとエラーが出る", async () => {
    // 準備
    const { openDialog, getInputs, submit } = await setup(
      {mockFetch: [prevRecord]}
    );
    await openDialog();

    // データを入力
    const { title, time } = getInputs();
    await userEvent.type(title, "a");
    await userEvent.type(time, "1");
    await userEvent.clear(time); // いったん入力してから消す
    await submit();

    // チェック
    await waitFor(() => {
      expect(screen.getByText(TIME_REQUIRED_MSG)).toBeInTheDocument();
    });
  });

  // -------------------------------------------------------
  // 4. 未入力のエラー（両方空）
  // -------------------------------------------------------
  test("入力欄を両方空にするとエラーが表示される", async () => {
    // 準備
    const { openDialog, getInputs, submit } = await setup(
      {mockFetch: [prevRecord]}
    );
    await openDialog();

    // データを入力
    const { title, time } = getInputs();
    await userEvent.type(title, "a");
    await userEvent.clear(title); // いったん入力してから消す
    await userEvent.type(time, "1");
    await userEvent.clear(time);  // いったん入力してから消す
    await submit();

    // チェック
    await waitFor(() => {
      expect(screen.getByText(TITLE_REQUIRED_MSG)).toBeInTheDocument();
      expect(screen.getByText( TIME_REQUIRED_MSG)).toBeInTheDocument();
    });
  });

  // -------------------------------------------------------
  // 5. 0以上でないときのエラー
  // -------------------------------------------------------
  test("学習時間を0以下にするとエラーが表示される", async () => {
    // 準備
    const { openDialog, getInputs, submit } = await setup(
      {mockFetch: [prevRecord]}
    );
    await openDialog();

    // データを入力
    // ※Chakra UIの仕様で「負の値を入力した瞬間に空（`null`）になる」ので、いったん正の値を入力してから訂正する
    const { time } = getInputs();
    const MINUS_VALUE = -1;
    await userEvent.type(time, "1");
    await userEvent.clear(time);
    await userEvent.type(time, `${MINUS_VALUE}`);
    await submit();

    // チェック
    await waitFor(() => {
      expect(time).toHaveValue(MINUS_VALUE);
      expect(screen.getByText("1時間以上を入力してください")).toBeInTheDocument();
    });
  });

  // -------------------------------------------------------
  // 6. 学習記録が削除できること
  // -------------------------------------------------------
  test("削除ボタンを押すと学習記録が削除できる", async () => {
    // 準備
    // fetch(1)
    await setup({mockFetch: [deletingData]});

    // 初期表示確認
    await waitFor(() => {
      expect(screen.getByText(deletingData.title)).toBeInTheDocument();
    });

    // remove → fetchList(2)
    vi.spyOn(window, "confirm").mockReturnValue(true); // confirmをモック（これが最重要）
    (dbUsecase.remove as Mock).mockResolvedValueOnce(undefined);
    (dbUsecase.fetchList as Mock).mockResolvedValueOnce([]);

    // 削除ボタンを押す
    const deleteButton = screen.getByRole("button", { name: "delete" });
    await userEvent.click(deleteButton);

    // DOM が消えることを確認
    await waitFor(() => {
      expect(screen.queryByText(deletingData.title)).not.toBeInTheDocument();
    });
  });

  // -------------------------------------------------------
  // 7. データを更新できること
  // -------------------------------------------------------
  test.skip("モーダルを使ってデータを更新できる", async () => {
    // (1) 初期fetch
    (dbUsecase.fetchList as Mock).mockResolvedValueOnce([prevRecord]);

    await setup();

    // 初期チェック
    await waitFor(() => {
      expect(screen.getByText(prevRecord.title)).toBeInTheDocument();
    });

    // (2) update（の返り値は`Record`1件のみ）
    vi.spyOn(window, "confirm").mockReturnValue(true);
    (dbUsecase.update as Mock).mockResolvedValueOnce(newRecord);
    (dbUsecase.fetchList as Mock).mockResolvedValueOnce([newRecord]);

    // 編集ボタン
    const editButton = screen.getByRole("button", { name: "edit" });
    await userEvent.click(editButton);

    // データを入力
    const title = screen.getByTestId("input-text");
    const time  = screen.getByTestId("input-number");

    await userEvent.clear(title);
    await userEvent.type(title, newRecord.title);

    await userEvent.clear(time);
    await userEvent.type(time, `${newRecord.time}`);

    const submitButton = screen.getByRole("button", { name: "更新" });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByText(prevRecord.title)).not.toBeInTheDocument();
      expect(screen.getByText(newRecord.title)).toBeInTheDocument();
    });
  });
});
