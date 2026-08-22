// src/components/organisms/dialog/DialogForm.tsx
import React, { memo, useEffect } from "react";
import {
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
  DialogRoot,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { useRecord } from "@/hooks/useRecord";
import { FormField } from "@/components/molecules/FormField";

type Props = {
  mode: "create" | "edit";
  pageTitle: string;
  buttonLabel: string;
};

type FormValues = {
  title: string;
  time: number;
};

export const DialogForm: React.FC<Props> = memo((props) => {
  const { mode, pageTitle, buttonLabel } = props;

  const {
    selectedRecord,
    handleAdd,
    handleUpdate,
    isCreateOpen,
    isEditOpen,
    closeAll,
  } = useRecord();

  const isOpen = mode === "create" ? isCreateOpen : isEditOpen;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { title: "", time: 0 },
  });

  useEffect(() => {
    if (!isOpen) return;

    if (mode === "edit" && selectedRecord) {
      reset({ title: selectedRecord.title, time: selectedRecord.time });
    } else if (mode === "create") {
      reset({ title: "", time: 0 });
    }
  }, [isOpen, mode, selectedRecord, reset]);

  const onValid = (values: FormValues) => {
    console.log("onSubmit called", values);
    if (mode === "create") {
      handleAdd(values.title, values.time);
    } else {
      if (!selectedRecord) return;
      handleUpdate(selectedRecord.id, values.title, values.time);
    }
    closeAll();
  };

  const onInvalid = (errs: any) => {
    console.log("onInvalid called", errs);
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onValid, onInvalid)(e);
            }}
          >
            <FormField
              label="学習内容"
              name="title"
              register={register}
              rules={{
                required: "学習内容は必須です",
                minLength: { value: 1, message: "1文字以上入力してください" },
              }}
              error={errors.title?.message}
            />

            <FormField
              label="学習時間"
              name="time"
              type="number"
              register={register}
              rules={{
                required: "学習時間は必須です",
                valueAsNumber: true,
                min: { value: 1, message: "1時間以上を入力してください" },
              }}
              error={errors.time?.message}
            />

            <DialogFooter mt={4}>
              <PrimaryButton type="submit">{buttonLabel}</PrimaryButton>
            </DialogFooter>
          </form>
        </DialogBody>

        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
});

DialogForm.displayName = "DialogForm";
export default DialogForm;
