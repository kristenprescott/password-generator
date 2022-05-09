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
  handleRadioChange: (nextValue: string) => void;
}

export const PasswordOptions = ({
  radioValue,
  _setRadioValue,
  handleRadioChange,
}: Props) => {
  return (
    <RadioGroup onChange={handleRadioChange} value={radioValue}>
      <Stack pl={6} mt={1} spacing={1}>
        <Radio value="1">
          <HStack direction="row" isInline>
            <Text>Easy to say</Text>
            <Tooltip label="Avoid numbers and symbols" hasArrow>
              <span>
                <Icon as={FiInfo} w={4} h={4} color="blue.500" />
              </span>
            </Tooltip>
          </HStack>
        </Radio>

        {/* <Radio value="2">
          <HStack direction="row" isInline>
            <Text>Easy to read</Text>
            <Tooltip
              label="Avoid ambigious chars like I, l, 1, O, and 0"
              hasArrow
            >
              <span>
                <Icon as={FiInfo} w={4} h={4} color="blue.500" />
              </span>
            </Tooltip>
          </HStack>
        </Radio> */}

        {/* <Radio value="3">
          <HStack direction="row" isInline>
            <Text>Easy to remember</Text>
            <Tooltip label="Use real words" hasArrow>
              <span>
                <Icon as={FiInfo} w={4} h={4} color="blue.500" />
              </span>
            </Tooltip>
          </HStack>
        </Radio> */}

        <Radio value="4">
          <HStack direction="row" isInline>
            <Text>All characters</Text>
            <Tooltip
              label="Include uppercase, lowercase, numbers, and symbols"
              hasArrow
            >
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
