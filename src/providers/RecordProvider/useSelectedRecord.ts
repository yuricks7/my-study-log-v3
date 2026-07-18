import { useState } from "react";
import { Record } from "@/domain/record";

export function useSelectedRecord() {
  const [ selectedRecord, setSelectedRecord ] = useState<Record | null>(null);

  return {
    selectedRecord, setSelectedRecord
  };
}