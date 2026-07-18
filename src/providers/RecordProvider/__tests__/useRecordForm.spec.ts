import { renderHook, act } from "@testing-library/react";
import { useRecordForm } from "../useRecordForm";

describe('useRecordForm', () => {
  test('タイトルと時間が更新される', () => {
    const { result } = renderHook(() => useRecordForm());

    act(() => {
      result.current.setTitle('React 勉強');
      result.current.setTime(3);
    });

    expect(result.current.title).toBe('React 勉強');
    expect(result.current.time).toBe(3);
  });

  test('バリデーションが正しく動く', () => {
    const { result } = renderHook(() => useRecordForm());

    // タイトル: 空、時間: 0 → エラー
    act(() => {
      const hasError = result.current.hasInputError('', 0);
      expect(hasError).toBe(true);
    });

    expect(result.current.hasTitleError).toBe(true);
    expect(result.current.hasTimeError).toBe(true);

    // タイトル: あり、時間: あり → エラーなし
    act(() => {
      const hasError = result.current.hasInputError('React', 2);
      expect(hasError).toBe(false);
    });

    expect(result.current.hasTitleError).toBe(false);
    expect(result.current.hasTimeError).toBe(false);
  });

  test('initializeFormが初期化する', () => {
    const { result } = renderHook(() => useRecordForm());

    act(() => {
      result.current.setTitle('テスト');
      result.current.setTime(5);
    });

    act(() => {
      result.current.initializeForm();
    });

    expect(result.current.title).toBe('');
    expect(result.current.time).toBe(0);
  });
});