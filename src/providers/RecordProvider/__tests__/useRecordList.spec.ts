import { renderHook, act } from '@testing-library/react';
import { vi } from 'vitest';
import type { Mock } from 'vitest';

import { useRecordList } from '@/providers/RecordProvider/useRecordList';
import { dbUsecase } from '@/utils/supabase/dbUsecase';
import { Record } from '@/domain/record';

// useRecordList が通常 import するモジュールを先にモックする
vi.mock('@/utils/supabase/dbUsecase', () => {
  return {
    dbUsecase: {
      fetchList: vi.fn(), // ここがモック関数になる
    },
  };
});

describe('useRecordActions', () => {
  test('fetchList が Supabase のデータを正しくセットする', async () => {
    // Supabase が返す「生データ」をモック
    const raw = [
      { id: '1', title: 'A', time: 10, created_at: '2024/01/01' },
      { id: '2', title: 'B', time: 20, created_at: '2024/01/02' },
    ];

    // fetchList の返り値を差し替え（Record.newRecord を通す）
    (dbUsecase.fetchList as Mock).mockResolvedValue(
      raw.map(r => Record.newRecord(r.id, r.title, r.time, r.created_at))
    );

    const { result } = renderHook(() => useRecordList());

    await act(async () => {
      await result.current.fetchList();
    });

    // records が正しくセットされているか
    expect(result.current.records).toHaveLength(2);
    expect(result.current.records[0]).toMatchObject({
      id: '1',
      title: 'A',
      time: 10,
      created_at: '2024/01/01',
    });

    // sum が正しく計算されているか
    expect(result.current.sum).toBe(30);
  });
});
