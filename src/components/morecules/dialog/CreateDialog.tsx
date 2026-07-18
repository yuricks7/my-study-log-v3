import { memo } from 'react';
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
import type { Record } from '@/domain/record';

import { PrimaryButton } from '@/components/atoms/button/PrimaryButton';

import { useRecord } from '@/hooks/useRecord';

type Props = {
  pageTitle: string;
  buttonLabel: string;
  record: Record | null;
  onClickButton: () => void;
}

export const CreateDialog: React.FC<Props> = memo((props) => {
  const { pageTitle, buttonLabel, record } = props;
  const isAdmin = true;

  const {
    title, setTitle,
    time, setTime,
    handleAdd,
    isCreateOpen, closeAll
  } = useRecord();

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
      open={isCreateOpen}
      onOpenChange={(e) => {
        if (!e.open) closeAll();
      }}
      motionPreset="slide-in-bottom"
      trapFocus={false}
    >
      <DialogContent pb={2}>
        <DialogHeader>
          <DialogTitle>{'新規登録'}</DialogTitle>
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
                handleAdd(title, time);
                closeAll();
              }}
            >
              {'登録'}
            </PrimaryButton>
          </DialogFooter>
        )}

        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
});