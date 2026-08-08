import { FormErrorMessage } from "@chakra-ui/form-control";

type Props = {
  children: React.ReactNode;
};

export const ValidationErrorMessage: React.FC<Props> = ({ children }) => {
  return (
    <FormErrorMessage sx={{ color: "red", fontWeight: "medium" }}>
      {children}
    </FormErrorMessage>
  );
};
