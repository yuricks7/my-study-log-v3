import { useState } from "react";

export function useDialogState() {
  const [ isCreateOpen, setCreateOpen ] = useState(false);
  const [ isEditOpen, setEditOpen ] = useState(false);

  // const openCreate = () => setCreateOpen(true);
  // const openEdit = () => setEditOpen(true);

  // const closeAll = () => {
  //   setCreateOpen(false);
  //   setEditOpen(false);
  // };

  return {
    isCreateOpen,
    isEditOpen,
    setEditOpen,
    setCreateOpen,
    // openCreate,
    // openEdit,
    // closeAll,
  };
}