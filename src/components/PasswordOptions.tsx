import {
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

interface Props {
  radioValue: string;
  _setRadioValue: React.Dispatch<React.SetStateAction<string>>;
}

export const PasswordOptions = ({ radioValue, _setRadioValue }: Props) => {
  return (
    <RadioGroup onChange={_setRadioValue} value={radioValue}>
      <Stack pl={6} mt={1} spacing={1}>
        <Radio value="1">
          <HStack direction="row" isInline>
            <Text>Easy to say</Text>
            <Tooltip
              label="Avoid numbers/special chars & include real words"
              hasArrow
            >
              <span>
                <Icon as={FiInfo} w={4} h={4} color="blue.500" />
              </span>
            </Tooltip>
          </HStack>
        </Radio>
        <Radio value="2">
          <HStack direction="row" isInline>
            <Text>East to read</Text>
            <Tooltip
              label="Avoid ambigious chars like I, l, 1, O, and 0"
              hasArrow
            >
              <span>
                <Icon as={FiInfo} w={4} h={4} color="blue.500" />
              </span>
            </Tooltip>
          </HStack>
        </Radio>
        <Radio value="3">
          <HStack direction="row" isInline>
            <Text>All characters</Text>
            <Tooltip label="Any char combos" hasArrow>
              <span>
                <Icon as={FiInfo} w={4} h={4} color="blue.500" />
              </span>
            </Tooltip>
          </HStack>
        </Radio>
      </Stack>
    </RadioGroup>
  );
};
