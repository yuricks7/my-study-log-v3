import "@testing-library/jest-dom";
import { screen, waitFor } from "@testing-library/react";
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

const mockRecords = [
  {
    id: "aaaaaa",
    created_at: new Date(),
    title: "勉強の記録10",
    time: 10,
  },
];

describe("学習記録アプリのテスト", () => {
  const setup = () => {
    renderApp();
    const openButton   = screen.getByRole("button", { name: "新規登録" })
    return { openButton };
  };

  beforeEach(async () => {
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
  });

  // -------------------------------------------------------
  // 1. 学習記録が登録できること
  // -------------------------------------------------------
  test("学習記録が登録できること", async () => {
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

  // const titleRequiredMsg = "学習内容は必須です";
  // const  timeRequiredMsg = "学習時間は必須です"
  // // -------------------------------------------------------
  // // 2. 学習内容がないときに登録するとエラーがでる
  // // -------------------------------------------------------
  // test("学習内容がないときに登録するとエラーがでる", async () => {
  //   const { openButton } = setup();

  //   await userEvent.click(openButton);

  //   const titleInput = screen.getByTestId("input-text");
  //   const timeInput  = screen.getByTestId("input-number");

  //   userEvent.type(timeInput, "2");

  //   const submitButton = screen.getByRole("button", { name: "登録" });
  //   await userEvent.click(submitButton);

  //   await waitFor(() => {
  //     // expect(screen.getByText("1時間以上を入力してください")).toBeInTheDocument();
  //     expect(screen.getByText(titleRequiredMsg)).toBeInTheDocument();
  //   });
  // });

  // // -------------------------------------------------------
  // // 3. 学習時間がないときに登録するとエラーがでる
  // // -------------------------------------------------------
  // test("学習時間がないときに登録するとエラーがでる", async () => {
  //   const { titleInput, submitButton } = setup();

  //   userEvent.type(titleInput, "Ruby 勉強");
  //   fireEvent.click(submitButton);

  //   await waitFor(() => {
  //     expect(screen.getByText(timeRequiredMsg)).toBeInTheDocument();
  //   });
  // });

  // // -------------------------------------------------------
  // // 4. 未入力のエラー（両方空）
  // // -------------------------------------------------------
  // test("未入力のエラーが表示される", async () => {
  //   const { submitButton } = setup();

  //   fireEvent.click(submitButton);

  //   await waitFor(() => {
  //     expect(screen.getByText(titleRequiredMsg)).toBeInTheDocument();
  //     expect(screen.getByText(timeRequiredMsg)).toBeInTheDocument();
  //   });
  // });

  // // -------------------------------------------------------
  // // 5. 0以上でないときのエラー
  // // -------------------------------------------------------
  // test("学習時間が0以下のときにエラーが表示される", async () => {
  //   const { titleInput, timeInput, submitButton } = setup();

  //   userEvent.type(titleInput, "テスト");
  //   userEvent.type(timeInput, "0");

  //   fireEvent.click(submitButton);

  //   await waitFor(() => {
  //     expect(screen.getByText("1時間以上を入力してください")).toBeInTheDocument();
  //   });
  // });

  // // -------------------------------------------------------
  // // 6. 学習記録が削除できること
  // // -------------------------------------------------------
  // test("学習記録が削除できること", async () => {
  //   const { titleInput, timeInput, submitButton } = setup();

  //   const deleteTestTitle = "削除テスト";
  //   const deleteTestTime  = "5";
  //   userEvent.type(titleInput, deleteTestTitle);
  //   userEvent.type( timeInput, deleteTestTime);
  //   fireEvent.click(submitButton);

  //   const deleteButtons = await screen.findAllByRole("button", { name: "削除" });
  //   const lastDeleteButton = deleteButtons[deleteButtons.length - 1];

  //   fireEvent.click(lastDeleteButton);

  //   await waitFor(() => {
  //     expect(screen.queryByText(deleteTestTitle)).not.toBeInTheDocument();
  //     expect(screen.queryByText(`${deleteTestTime}時間`)).not.toBeInTheDocument();
  //   });
  // });
});
