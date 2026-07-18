import { useEffect, useState } from "react";
import { Record } from "@/domain/record";
import { calcSum } from "@/utils/recordUtils";

export function useRecordList() {
  const [records, setRecords] = useState<Record[]>([]);
  const [sum, setSum] = useState(0);

  const fetchList = async () => {
    // テストのエラー対策（遅延import）
    const { dbUsecase } = await import('@/utils/supabase/dbUsecase');

    const list = await dbUsecase.fetchList();
    setRecords(list);
    setSum(calcSum(list));
  };

  useEffect(() => {
    fetchList();
  }, []);

  return { records, setRecords, sum, setSum, fetchList };
}
