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

type Props = {
  mode: string,
  pageTitle: string,
  buttonLabel: string,
}

import { PrimaryButton } from '@/components/atoms/button/PrimaryButton';

import { useRecord } from '@/hooks/useRecord';

export const DialogForm: React.FC<Props> = memo((props) => {
  const { mode, pageTitle, buttonLabel } = props;

  const {
    title, setTitle,
    time, setTime,
    selectedRecord,
    handleAdd,
    handleUpdate,
    isCreateOpen, isEditOpen,
    closeAll
  } = useRecord();

  const isOpen = mode === "create" ? isCreateOpen : isEditOpen;

  useEffect(() => {
    if (!isOpen) return;

    if (mode === "edit" && selectedRecord) {
      setTitle(selectedRecord.title);
      setTime(selectedRecord.time);
    }

    if (mode === "create") {
      setTitle("");
      setTime(0);
    }
  }, [isOpen, mode, selectedRecord]);

  const onSubmit = () => {
    if (mode === "create") {
      handleAdd(title, time);

    } else {
      if (!selectedRecord) return;
      handleUpdate(selectedRecord.id, title, time);
    }

    closeAll();
  }

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
      open={isOpen}
      onOpenChange={(e) => {
        if (!e.open) closeAll();
      }}
      motionPreset="slide-in-bottom"
      trapFocus={false}
    >
      <DialogContent
        pb={2}
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <DialogHeader>
          <DialogTitle>{pageTitle}</DialogTitle>
        </DialogHeader>

        <DialogBody mx={4}>
          <Field.Root>
            <Field.Label>学習内容</Field.Label>
            <Input
              value={title}
              onChange={onChangeTitle}
            />

            <Field.Label>学習時間</Field.Label>
            <Input
              value={time}
              onChange={onChangeTime}
            />
          </Field.Root>
        </DialogBody>

        <DialogFooter>
          <PrimaryButton onClick={onSubmit}>
            {buttonLabel}
          </PrimaryButton>
        </DialogFooter>

        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
});