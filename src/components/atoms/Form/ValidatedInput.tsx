// ValidatedInput.tsx
import React from "react";
import { Input } from "@chakra-ui/react";
import type { InputProps } from "@chakra-ui/react";
import type { UseFormRegisterReturn } from "react-hook-form";

type RHFRegisterLike = Partial<UseFormRegisterReturn>;

// InputProps から ref を除いた上で、RHF のスプレッドを受けられるようにする
type Props = Omit<InputProps, "ref"> & RHFRegisterLike & {
  isInvalid?: boolean;
};

export const ValidatedInput = React.forwardRef<HTMLInputElement, Props>(
  ({ isInvalid = false, type = "text", ref: _maybeRef, ...rest }, forwardedRef) => {
    // react-hook-form の ref が rest.ref に入っている可能性がある
    const registerRef = (rest as any).ref;

    // register.ref と forwardedRef をコールバック ref でマージ
    const combinedRef = (node: HTMLInputElement | null) => {
      if (typeof registerRef === "function") {
        try { registerRef(node); } catch { /* ignore */ }
      } else if (registerRef && typeof registerRef === "object") {
        try { (registerRef as React.MutableRefObject<HTMLInputElement | null>).current = node; } catch { /* ignore */ }
      }

      if (typeof forwardedRef === "function") {
        try { forwardedRef(node); } catch { /* ignore */ }
      } else if (forwardedRef && typeof forwardedRef === "object") {
        try { (forwardedRef as React.MutableRefObject<HTMLInputElement | null>).current = node; } catch { /* ignore */ }
      }
    };

    // isInvalid はここで消費しているので、rest に含まれず Input に渡らない
    // Input には aria-invalid と _invalid（スタイル）を渡す
    return (
      <Input
        data-testid={`input-${type}`}
        type={type}
        aria-invalid={isInvalid}
        _invalid={{ borderColor: "red.500" }}
        borderColor={isInvalid ? "red.500" : "gray.300"}
        style={{ borderWidth: "1px", borderStyle: "solid" }}
        _focusVisible={{ borderColor: isInvalid ? "red.500" : "blue.500" }}
        {...(rest as InputProps)} // name/onChange/onBlur 等を渡す
        ref={combinedRef}
      />
    );
  }
);

ValidatedInput.displayName = "ValidatedInput";
export default ValidatedInput;
