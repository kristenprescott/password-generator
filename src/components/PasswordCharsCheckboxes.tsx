import { Stack, Checkbox } from "@chakra-ui/react";

interface Props {
  isUppercase: boolean;
  isLowercase: boolean;
  isNumeric: boolean;
  isSymbolic: boolean;
  handleUppercaseChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLowercaseChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNumericChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSymbolicChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordCharsCheckboxes = ({
  isUppercase,
  isLowercase,
  isNumeric,
  isSymbolic,
  handleUppercaseChange,
  handleLowercaseChange,
  handleNumericChange,
  handleSymbolicChange,
}: Props) => {
  return (
    <Stack pl={6} mt={1} spacing={1}>
      <Checkbox
        isChecked={isUppercase}
        onChange={handleUppercaseChange}
        spacing="1rem"
        defaultChecked
      >
        Uppercase
      </Checkbox>
      <Checkbox
        isChecked={isLowercase}
        onChange={handleLowercaseChange}
        spacing="1rem"
        defaultChecked
      >
        Lowercase
      </Checkbox>
      <Checkbox
        isChecked={isNumeric}
        onChange={handleNumericChange}
        spacing="1rem"
        defaultChecked
      >
        Numbers
      </Checkbox>
      <Checkbox
        isChecked={isSymbolic}
        onChange={handleSymbolicChange}
        spacing="1rem"
        defaultChecked
      >
        Symbols
      </Checkbox>
    </Stack>
  );
};
