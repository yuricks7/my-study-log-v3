import React from "react";
import { Input } from "@chakra-ui/react";

type RegisterReturn = {
  name?: string;
  onChange?: (...args: any[]) => void;
  onBlur?: (...args: any[]) => void;
  ref?: (instance: any) => void;
};

type Props = {
  isInvalid?: boolean;
  type?: string;
  register: RegisterReturn;
};

export const ValidatedInput = React.forwardRef<HTMLInputElement, Props>(
  ({ isInvalid = false, type = "text", register }, ref) => {
    // register.ref がある場合はそれを優先して渡すために ref をマージする実装も可能
    return (
      <Input
        data-testid={`input-${type}`}
        type={type}
        isInvalid={isInvalid}               // ← Chakra に伝える
        borderColor={isInvalid ? "red.500" : "gray.300"}
        style={{ borderWidth: "1px", borderStyle: "solid" }}
        _focusVisible={{ borderColor: isInvalid ? "red.500" : "blue.500" }}
        {...register}                       // register の onChange/onBlur/name/ref を渡す
        ref={ref}                           // forwardRef を受け取る（必要なら register.ref と統合）
      />
    );
  }
);

ValidatedInput.displayName = "ValidatedInput";
