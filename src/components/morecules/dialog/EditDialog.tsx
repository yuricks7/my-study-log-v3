import { memo, useEffect } from 'react';
import {
  Input,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogBody,
  Field,
  DialogFooter,
  DialogCloseTrigger,
  DialogRoot
} from '@chakra-ui/react'

import type React from 'react';

import { PrimaryButton } from '@/components/atoms/button/PrimaryButton';

import { useRecord } from '@/hooks/useRecord';

type Props = {
  onClickButton: () => void;
}

export const EditDialog: React.FC<Props> = memo((props) => {
  const isAdmin = true;

  const {
    selectedRecord,
    title, setTitle,
    time, setTime,
    handleUpdate,
    isEditOpen, closeAll
  } = useRecord();

  // ダイアログの初期値を設定する
  useEffect(() => {
    if (isEditOpen && selectedRecord) {
      setTitle(selectedRecord.title);
      setTime(selectedRecord.time);
    }
  }, [isEditOpen, selectedRecord])

  const onChangeTitle = (event: any) => {
    // @ts-ignore TS18047: 'event.target' is possibly 'null'.
    setTitle(event.target.value);
  };

  const onChangeTime = (event: any) => {
    // @ts-ignore TS18047: 'event.target' is possibly 'null'.
    setTime(Number(event.target.value));
  };

  return (
    <DialogRoot
      lazyMount
      open={isEditOpen}
      onOpenChange={(e) => {
        if (!e.open) closeAll();
      }}
      // motionPreset="slide-in-bottom"
      motionPreset="scale"
      trapFocus={false}
    >
      <DialogContent pb={2}>
        <DialogHeader>
          <DialogTitle>{'記録編集'}</DialogTitle>
        </DialogHeader>

        <DialogBody mx={4}>
          <Field.Root>
            <Field.Label>学習内容</Field.Label>
            <Input
              value={title}
              readOnly={!isAdmin}
              onChange={onChangeTitle}
            />

            <Field.Label>学習時間</Field.Label>
            <Input
              value={time}
              readOnly={!isAdmin}
              onChange={onChangeTime}
            />
          </Field.Root>
        </DialogBody>

        {isAdmin && (
          <DialogFooter>
            <PrimaryButton
              onClick={() => {
                if (!selectedRecord) return;
                handleUpdate(selectedRecord.id, title, time);
                closeAll();
              }}
            >
              {'更新'}
            </PrimaryButton>
          </DialogFooter>
        )}

        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
});