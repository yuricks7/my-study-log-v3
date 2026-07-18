import { createContext } from "react";

import type { FC } from "react";
import type { StatesType } from "@/@types/StatesType";

import { useRecordForm } from "./useRecordForm";
import { useRecordList } from "./useRecordList";
import { useDialogState } from "./useDialogState";
import { useRecordActions } from "./useRecordActions";
import { useSelectedRecord } from "./useSelectedRecord";

type Props = {
  children: React.ReactNode;
}

export const RecordContext = createContext<StatesType | null>(null);

export const RecordProvider: FC<Props> = (props) => {
  const { children } = props;

  const form = useRecordForm();
  const list = useRecordList();

  const { selectedRecord, setSelectedRecord } = useSelectedRecord();
  const { isEditOpen, isCreateOpen, setEditOpen, setCreateOpen } = useDialogState();

  const openEditDialog = (record) => {
    setSelectedRecord(record);
    setEditOpen(true);
  };

  const openCreateDialog = () => {
    setSelectedRecord(null);
    setCreateOpen(true);
  };

  const closeAll = () => {
    form.initializeForm();
    list.fetchList();
    setEditOpen(false);
    setCreateOpen(false);
  };

  const actions = useRecordActions(
    list.records,
    list.setRecords,
    list.setSum,
    form.hasInputError,
    form.initializeForm
  );

  const value: StatesType = {
    ...form,
    ...list,
    ...actions,
    selectedRecord,
    setSelectedRecord,
    isCreateOpen,
    isEditOpen,
    openCreateDialog,
    openEditDialog,
    closeAll,
  }

  return (
    <RecordContext.Provider value={value}>
      {children}
    </RecordContext.Provider>
  )
}