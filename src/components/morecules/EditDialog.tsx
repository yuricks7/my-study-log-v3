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
  record: Record;
  onClickButton: () => void;
}

export const EditDialog: React.FC<Props> = memo((props) => {
  const { pageTitle, buttonLabel, record } = props;
  const isAdmin = true;

  const {
    title, setTitle,
    time, setTime,
    handleAdd, handleUpdate,
    isDialogOpen, closeDialog
  } = useRecord();

  const onChangeTitle = (event: any) => {
    // @ts-ignore TS18047: 'event.target' is possibly 'null'.
    setTitle(event.target.value);
  };

  const onChangeTime = (event: any) => {
    // @ts-ignore TS18047: 'event.target' is possibly 'null'.
    setTime(Number(event.target.value));
  };

  const onClickAction = (id: string, title: string, time: number) => {
    switch (pageTitle) {
      case '新規登録':
        return handleAdd(title, time);

      case '記録編集':
        return handleUpdate(id, title, time);

      default:
        let m = '';
        m += '予期せぬエラーです。\n';
        m += 'ダイアログのタイトルを正しく入力してください。'
        alert(m);
    };
  }

  return (
    <DialogRoot
      lazyMount
      open={isDialogOpen}
      onOpenChange={(e) => {
        if (!e.open) closeDialog();
      }}
      motionPreset="slide-in-bottom"
      trapFocus={false}
    >
      <DialogContent pb={2}>
        <DialogHeader>
          <DialogTitle>{pageTitle}</DialogTitle>
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
                onClickAction(record.id, title, time);
                closeDialog();
              }}
            >
              {buttonLabel}
            </PrimaryButton>
          </DialogFooter>
        )}

        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
});