import React, { memo } from "react";
import { Button } from "../../ui/button"

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

export const PrimaryButton: React.FC<Props>
= memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;

  return (
    <Button
      size={{ base: "xs", md: "lg" }}
      bg="blue.600"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled}
      loading={loading}
      onClick={onClick}>
        { children }
    </Button>
  );
});