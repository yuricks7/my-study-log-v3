import { Input } from "@chakra-ui/react";

type Props = {
  isInvalid?: boolean;
  type?: string;
  register: any;
};

export const ValidatedInput: React.FC<Props> = ({
  isInvalid = false,
  type = "text",
  register,
}) => {
  return (
    <Input
      type={type}
      {...register}
      borderColor={isInvalid ? "red.500" : "gray.300"}
      style={{
        borderWidth: "1px",
        borderStyle: "solid",
      }}
      _focusVisible={{
        borderColor: isInvalid ? "red.500" : "blue.500",
      }}
    />
  );
};
