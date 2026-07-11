import { supabase } from "@/utils/supabase/supabase";

import { Record } from "@/domain/record";

export async function GetAllRecords(): Promise<Record[]> {
  const response = await supabase.from('my-study-record-v2').select('*');

  if (response.error) {
    throw new Error(response.error.message);
  }

  const recordsData = response.data.map((record) => {
    return Record.newRecord(record.id, record.title, record.time, record.created_at);
  })

  return recordsData;
}