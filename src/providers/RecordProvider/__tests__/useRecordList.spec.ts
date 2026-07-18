import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react';
import { useRecordList } from '../useRecordList';
import { calcSum } from '@/utils/recordUtils';

// Record を使わない（プレーンオブジェクトでモック）
const mockRecords = [
  { id: '1', title: 'Title1', time: 1, created_at: '', updated_at: '' },
  { id: '2', title: 'Title2', time: 2, created_at: '', updated_at: '' },
];

// dbUsecase をモック
vi.mock('@/utils/supabase/dbUsecase', () => ({
  dbUsecase: {
    fetchList: vi.fn().mockResolvedValue(mockRecords),
  },
}));

describe('useRecordList', () => {
  test('fetchList が Supabase のデータを正しくセットする', async () => {
    const { result } = renderHook(() => useRecordList());

    await act(async () => {
      await result.current.fetchList();
    });

    // 値を決め打ちしてるので変える余地あり
    expect(result.current.records[0].title).toBe('勉強の記録1');
    expect(result.current.records[0].time).toBe(1);
    expect(result.current.sum).toBe(85);
  });
});
