import { Stack, Checkbox, Icon, Text, HStack, Tooltip } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

interface Props {
  includeUpper: boolean;
  includeLower: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  handleUpperChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLowerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNumbersChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSymbolsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CharacterOptions = ({
  includeUpper,
  includeLower,
  includeNumbers,
  includeSymbols,
  handleUpperChange,
  handleLowerChange,
  handleNumbersChange,
  handleSymbolsChange,
}: Props) => {
  return (
    <Stack pl={6} mt={1} spacing={1}>
      <Checkbox
        isChecked={includeUpper}
        onChange={handleUpperChange}
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
        isChecked={includeLower}
        onChange={handleLowerChange}
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
        isChecked={includeNumbers}
        onChange={handleNumbersChange}
        spacing="1rem"
        defaultChecked
      >
        <HStack direction="row" isInline>
          <Text>Numbers</Text>
          <Tooltip label="0123456789" hasArrow>
            <span>
              <Icon as={FiInfo} w={4} h={4} color="blue.500" />
            </span>
          </Tooltip>
        </HStack>
      </Checkbox>

      <Checkbox
        isChecked={includeSymbols}
        onChange={handleSymbolsChange}
        spacing="1rem"
        defaultChecked
      >
        <HStack direction="row" isInline>
          <Text>Symbols</Text>
          <Tooltip label="!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é" hasArrow>
            <span>
              <Icon as={FiInfo} w={4} h={4} color="blue.500" />
            </span>
          </Tooltip>
        </HStack>
      </Checkbox>
    </Stack>
  );
};
