import { addRecord, updateRecord, deleteRecord, calcSum } from "@/utils/functions/recordUtils";
import { dbUsecase } from "@/utils/supabase/dbUsecase";
import { Record } from "@/domain/record";

export function useRecordActions(
  records: Record[],
  setRecords: (r: Record[]) => void,
  setSum: (n: number) => void,
  hasInputError: (title: string, time: number) => boolean,
  initializeForm: () => void
) {
  const confirmInput = (title: string, time: number, action: string): boolean => {
    let m = '';
    m += `この内容で${action}しますか？\n`
    m += `内容：${title}\n`;
    m += `時間：${time}時間`;
    return confirm(m);
  };

  const handleAdd = async (title: string, time: number) => {
    if (hasInputError(title, time)) return;
    if (!confirmInput(title, time, "追加")) return;

    const newRecord = await dbUsecase.add(title, time);
    const newList = addRecord(records, newRecord);
    setRecords(newList);
    setSum(calcSum(newList));
    initializeForm();
  };

  const handleUpdate = async (id: string, title: string, time: number) => {
    if (hasInputError(title, time)) return;
    if (!confirmInput(title, time, "上書き")) return;

    const newRecord = await dbUsecase.update(id, title, time);
    const newList = updateRecord(records, newRecord);
    setRecords(newList);
    setSum(calcSum(newList));
    initializeForm();
  };

  const handleDelete = async (id: string) => {
    await dbUsecase.remove(id);
    const newList = deleteRecord(records, id);
    setRecords(newList);
    setSum(calcSum(newList));
  };

  return { handleAdd, handleUpdate, handleDelete };
}