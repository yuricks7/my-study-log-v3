import { Record } from '@/domain/record';

export const addRecord = (records: Record[], newRecord: Record): Record[] => {
  return [...records, newRecord];
};

export const updateRecord = (records: Record[], updatedRecord: Record): Record[] => {
  return records.map((record) =>
    record.id === updatedRecord.id ? updatedRecord : record)
}

export const deleteRecord = (records: Record[], id: string): Record[] => {
  return records.filter((record) => record.id !== id);
}

export const calcSum = (records: Record[]) => {
  return records.reduce((sum: number, record: Record) => sum + record.time, 0);
}