import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  Flex,
  SliderFilledTrack,
  Slider,
  SliderThumb,
  SliderTrack,
  Box,
} from "@chakra-ui/react";

interface Props {
  passwordLength: number;
  _setPasswordLength: (value: React.SetStateAction<number>) => void;
  handleNumberChange: (valueAsString: string, valueAsNumber: number) => void;
  handleSliderChange: (passwordLength: number) => void;
}

export const PasswordLengthInputs = ({
  passwordLength,
  _setPasswordLength,
  handleNumberChange,
  handleSliderChange,
}: Props) => {
  return (
    <>
      <Text>Password length: {passwordLength}</Text>
      <Flex>
        <NumberInput
          min={1}
          max={30}
          step={1}
          inputMode="numeric"
          defaultValue={passwordLength}
          value={passwordLength}
          onChange={handleNumberChange}
          mr="1rem"
          maxW={75}
          allowMouseWheel
          focusBorderColor="gray.300"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper bg="white" _active={{ bg: "gray.300" }} />
            <NumberDecrementStepper bg="white" _active={{ bg: "gray.300" }} />
          </NumberInputStepper>
        </NumberInput>

        <Slider
          flex="1"
          min={1}
          max={30}
          step={1}
          defaultValue={passwordLength}
          value={passwordLength}
          onChange={handleSliderChange}
          onChangeEnd={(val) => _setPasswordLength(val)}
          focusThumbOnChange={false}
        >
          <SliderTrack bg="red.100">
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="tomato" />
          </SliderTrack>
          <SliderThumb boxSize="16px" />
        </Slider>
      </Flex>
    </>
  );
};
