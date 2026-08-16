import { useEffect, useState } from "react";
import { Record } from "@/domain/record";
import { calcSum } from "@/utils/functions/recordUtils";

import { dbUsecase } from '@/utils/supabase/dbUsecase';

export function useRecordList() {
  const [records, setRecords] = useState<Record[]>([]);
  const [sum, setSum] = useState(0);

  const fetchList = async () => {
    const list = await dbUsecase.fetchList();
    setRecords(list);
    setSum(calcSum(list));
  };

  useEffect(() => {
    fetchList();
  }, []);

  return { records, setRecords, sum, setSum, fetchList };
}