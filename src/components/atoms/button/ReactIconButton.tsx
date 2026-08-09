import React, { memo } from "react";
import { IconButton } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
}

export const ReactIconButton: React.FC<Props>
= memo((props) => {
  const { children, onClick, label = "メニューボタン" } = props;

  return (
    <IconButton
      size="sm"
      variant="plain"
      aria-label={label}
      display="block"
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
});