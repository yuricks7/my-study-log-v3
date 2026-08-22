import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import type { UseFormRegister, RegisterOptions } from "react-hook-form";

import { ValidatedInput } from "@/components/atoms/Form/ValidatedInput";
import { ValidationErrorMessage } from "@/components/atoms/Form/ValidationErrorMessage";

type Props = {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  error?: string;
};

export const FormField: React.FC<Props> = ({
  label,
  name,
  type = "text",
  register,
  rules,
  error,
}) => {
  // デバッグログ（必要なら残す）
  console.log("FormField error", error);

  const isInvalid = !!error;

  return (
    <FormControl isInvalid={isInvalid} mb={4}>
      <FormLabel>{label}</FormLabel>

      {/* register(name, rules) の戻り値を直接 ValidatedInput に渡す */}
      <ValidatedInput type={type} {...register(name, rules)} isInvalid={isInvalid} />

      {isInvalid && (
        <ValidationErrorMessage aria-live="polite">
          {error}
        </ValidationErrorMessage>
      )}
    </FormControl>
  );
};

FormField.displayName = "FormField";
