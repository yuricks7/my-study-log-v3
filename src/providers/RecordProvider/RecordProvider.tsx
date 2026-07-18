import { createContext } from "react";

import type { FC } from "react";
import type { StatesType } from "@/@types/StatesType";

import { useRecordForm } from "./useRecordForm";
import { useRecordList } from "./useRecordList";
import { useDialogState } from "./useDialogState";
import { useRecordActions } from "./useRecordActions";

type Props = {
  children: React.ReactNode;
}

export const RecordContext = createContext<StatesType | null>(null);

export const RecordProvider: FC<Props> = (props) => {
  const { children } = props;

  const form = useRecordForm();
  const list = useRecordList();
  const dialog = useDialogState();
  const actions = useRecordActions(
    list.records,
    list.setRecords,
    list.setSum,
    form.hasInputError,
    form.initializeForm
  );

  const closeDialog = () => {
    form.initializeForm();
    list.fetchList();
    dialog.closeDialog();
  }

  const value = {
    ...form,
    ...list,
    ...actions,
    isDialogOpen: dialog.isDialogOpen,
    openDialog: dialog.openDialog,
    closeDialog,
    }

  return (
    <RecordContext.Provider value={value}>
      {children}
    </RecordContext.Provider>
  )
}