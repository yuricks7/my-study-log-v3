import { supabase } from "@/utils/supabase";

import { Log } from "../domain/log";

export async function GetAllLogs(): Promise<Log[]> {
  const response = await supabase.from('my-study-log-v2').select('*');

  if (response.error) {
    throw new Error(response.error.message);
  }

  const logsData = response.data.map((log) => {
    return Log.newLog(log.id, log.title, log.time, log.created_at);
  })

  return logsData;
}