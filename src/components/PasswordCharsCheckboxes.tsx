import { Stack, Checkbox, Icon, Text, HStack, Tooltip } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

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
        <HStack direction="row" isInline>
          <Text>Uppercase</Text>
          <Tooltip label="ABCDEFGHIJKLMNOPQRSTUVWXYZ" hasArrow>
            <span>
              <Icon as={FiInfo} w={4} h={4} color="blue.500" />
            </span>
          </Tooltip>
        </HStack>
      </Checkbox>
      <Checkbox
        isChecked={isLowercase}
        onChange={handleLowercaseChange}
        spacing="1rem"
        defaultChecked
      >
        <HStack direction="row" isInline>
          <Text>Lowercase</Text>
          <Tooltip label="abcdefghijklmnopqrstuvwxyz" hasArrow>
            <span>
              <Icon as={FiInfo} w={4} h={4} color="blue.500" />
            </span>
          </Tooltip>
        </HStack>
      </Checkbox>
      <Checkbox
        isChecked={isNumeric}
        onChange={handleNumericChange}
        spacing="1rem"
        defaultChecked
      >
        <HStack direction="row" isInline>
          <Text>Numeric</Text>
          <Tooltip label="01234567890" hasArrow>
            <span>
              <Icon as={FiInfo} w={4} h={4} color="blue.500" />
            </span>
          </Tooltip>
        </HStack>
      </Checkbox>
      <Checkbox
        isChecked={isSymbolic}
        onChange={handleSymbolicChange}
        spacing="1rem"
        defaultChecked
      >
        <HStack direction="row" isInline>
          <Text>Symbolic</Text>
          <Tooltip label="!@#$%^&*()<>,.?/[]{}-=_+|/" hasArrow>
            <span>
              <Icon as={FiInfo} w={4} h={4} color="blue.500" />
            </span>
          </Tooltip>
        </HStack>
      </Checkbox>
    </Stack>
  );
};
