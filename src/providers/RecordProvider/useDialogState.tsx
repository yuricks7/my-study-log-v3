import { useState } from "react";

export function useDialogState() {
  const [ isCreateOpen, setCreateOpen ] = useState(false);
  const [ isEditOpen, setEditOpen ] = useState(false);

  return {
    isCreateOpen,
    isEditOpen,
    setEditOpen,
    setCreateOpen,
  };
}