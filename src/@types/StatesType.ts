import { Record } from "@/domain/record";

export type StatesType = {
  title: string;
  setTitle: (value: string) => void;

  time: number;
  setTime: (value: number) => void;

  records?: Record[];
  setRecords?: (value: Record[]) => void;

  sum?: number;
  setSum?: (value: number) => void;

  hasTitleError?: boolean;
  setHasTitleError?: (value: boolean) => void;

  hasTimeError?: boolean;
  setHasTimeError?: (value: boolean) => void;

  updateSumTime?: (arr: Record[]) => number;

  onAdd?: (title: string, time: number) => void;
  handleAdd: (title: string, time: number) => void;
  handleUpdate: (id: string, title: string, time: number) => void;
  handleDelete?: (id: string) => void;

  selectedRecord: Record | null;
  setSelectedRecord: (value: Record | null) => void;

  isCreateOpen?: boolean;
  isEditOpen?: boolean;
  openCreateDialog?: () => void;
  openEditDialog?: (record: Record) => void;
  closeAll: () => void;
}