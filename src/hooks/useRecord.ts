
import { useContext } from "react";
import { RecordContext } from "@/providers/RecordProvider/RecordProvider";

import type { StatesType } from "@/@types/StatesType";

// コンテキストをエクスポート
// @ts-ignore TS2322: Type 'unknown' is not assignable to type 'StatesType'.
export const useRecord = (): StatesType => {
  const context = useContext(RecordContext);
  if (!context) {
    throw new Error('useRecord must be used inside RecordProvider');
  }

  return context;
};