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
  // // 早期 return で閉じているときは何もマウントしない
  // if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState,
  } = useForm<FormValues>({
    mode: "onSubmit",
    defaultValues: { title: "", time: 0 },
  });

  // console.log("DialogForm mount - mode:", mode, "isOpen:", isOpen);

  // console.log("DialogForm register keys:", Object.keys(register || {})); // register が関数であれば無害
  // console.log("DialogForm initial selectedRecord id:", selectedRecord?.id ?? null);

  // console.log("DialogForm errors (initial):", errors); // フォームの formState.errors を監視

  useEffect(() => {
    if (!isOpen) return;

    // 先に前のエラーを消す（UI がエラー表示のままになるのを防ぐ）
    clearErrors();

    if (mode === "edit" && selectedRecord) {
      reset({ title: selectedRecord.title, time: selectedRecord.time });
    } else if (mode === "create") {
      reset({ title: "", time: 0 });
    }

  }, [isOpen, mode, selectedRecord, reset, clearErrors]);

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
      lazyMount={true}
      open={isOpen}
      onOpenChange={(e) => {
        if (!e.open) closeAll();
      }}
      motionPreset="slide-in-bottom"
      trapFocus={false}
    >
      {isOpen && (
        <DialogContent
          key={`${mode}-${isOpen ? "open" : "closed"}-${selectedRecord?.id ?? ""}`}
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
          <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <FormField
              label="学習内容"
              name="title"
              register={register}
              rules={{
                required: "学習内容は必須です",
                minLength: { value: 1, message: "1文字以上入力してください" },
              }}
              error={formState.isSubmitted
                ? formState.errors.title?.message
                : undefined
              }
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
              error={formState.isSubmitted
                ? formState.errors.time?.message
                : undefined
              }
            />

            <DialogFooter mt={4}>
              <PrimaryButton type="submit">{buttonLabel}</PrimaryButton>
            </DialogFooter>
          </form>
        </DialogBody>

        <DialogCloseTrigger />
      </DialogContent>
      )}
    </DialogRoot>
  );
});

DialogForm.displayName = "DialogForm";
export default DialogForm;
