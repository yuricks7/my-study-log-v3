import { FormControl, FormLabel } from "@chakra-ui/form-control";

import { ValidatedInput } from "@/components/atoms/Form/ValidatedInput";
import { ValidationErrorMessage } from "@/components/atoms/Form/ValidationErrorMessage";

type Props = {
  label: string;
  type?: string;
  register: any;
  error?: string;
};

export const FormField: React.FC<Props> = ({
  label,
  type = "text",
  register,
  error,
}) => {
  const isInvalid = !!error;

  return (
    <FormControl isInvalid={isInvalid} mb={4}>
      <FormLabel>{label}</FormLabel>

      <ValidatedInput
        type={type}
        register={register}
        isInvalid={isInvalid}
      />

      {isInvalid && (
        <ValidationErrorMessage>
          {error}
        </ValidationErrorMessage>
      )}
    </FormControl>
  );
};
