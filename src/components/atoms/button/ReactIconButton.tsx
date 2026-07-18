import React, { memo } from "react";
import { IconButton } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
}

export const ReactIconButton: React.FC<Props>
= memo((props) => {
  const { children, onClick } = props;

  return (
    <IconButton
      size="sm"
      variant="plain"
      aria-label="メニューボタン"
      display={{ base: "block", md: "none" }}
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
});