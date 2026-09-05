// src/components/molecules/FormField.tsx
import React from "react";
import type { UseFormRegister, RegisterOptions } from "react-hook-form";

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
  // デバッグ用ログ（必要なら残す）
  console.log("FormField render - name:", name, "error:", error);

  return (
    <div style={{ marginBottom: 16 }}>
      <label htmlFor={name} style={{ display: "block", marginBottom: 6 }}>
        {label}
      </label>

      <input
        id={name}
        data-testid={type === "number" ? "input-number" : "input-text"}
        {...register(name, rules)}
        type={type}
        style={{
          width: "100%",
          padding: 8,
          border: "1px solid",
          borderColor: error ? "#E53E3E" : "#CBD5E0",
          borderRadius: 4,
        }}
      />

      {/* {error ? (
        <div role="alert" style={{ color: "#E53E3E", marginTop: 6 }}>
          {error}
        </div>
      ) : null} */}
      {error && <div role="alert" style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default FormField;
