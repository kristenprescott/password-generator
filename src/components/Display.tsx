import { FiCopy, FiRefreshCcw } from "react-icons/fi";
import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack,
  Text,
  Flex,
  SliderFilledTrack,
  Slider,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { InlineStylesModel } from "models/InlineStylesModel";
import { useState, useRef } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const styles: InlineStylesModel = {
  main: {
    width: "100%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
};

export const Display = (): JSX.Element => {
  const [characters, _setCharacters] = useState(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()<>,.?/[]{}-=_+|/0123456789"
  );
  const [password, _setPassword] = useState("");
  const [passwordLength, _setPasswordLength] = useState(12);
  const [copy, _setCopy] = useState("");

  const passwordRef = useRef(null);

  const handleNumberChange = (
    valueAsString: string,
    valueAsNumber: number
  ): void => {
    _setPasswordLength(parseInt(valueAsString));
  };

  const handleSliderChange = (passwordLength: number) => {
    _setPasswordLength(passwordLength);
  };

  const handleCopy = () => {
    _setCopy(password);
  };

  const getRandomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const passwordCharacters = (
    characters: string,
    passwordLength: number
  ): string => {
    if (characters.length) {
      for (let i = 0; i < passwordLength; i++) {
        _setCharacters(characters[getRandomInteger(0, characters.length - 1)]);
        return characters;
      }
    }
    return "";
  };

  const generatePassword = () => {
    alert(`Generating password ${passwordLength}...`);
    _setPassword(passwordCharacters(characters, passwordLength));
  };

  const copyClipboard = () => {
    console.log("copying...");
  };

  return (
    <div style={styles.main}>
      <Stack spacing={4}>
        <Text>Copy: {copy}</Text>
        <InputGroup>
          <InputRightElement
            children={
              <>
                <CopyToClipboard text={copy}>
                  <Button variant="ghost" onClick={copyClipboard}>
                    <Icon as={FiCopy} w={5} h={5} color="gray.500" />
                  </Button>
                </CopyToClipboard>
                <Button variant="ghost" onClick={generatePassword}>
                  <Icon as={FiRefreshCcw} w={5} h={5} color="gray.500" />
                </Button>
              </>
            }
          />
          <Input
            type="text"
            variant="flushed"
            value={password}
            ref={passwordRef}
            size="lg"
            focusBorderColor="tomato"
            isReadOnly
          />
        </InputGroup>

        <CopyToClipboard text={copy}>
          <Button onClick={handleCopy}>Copy</Button>
        </CopyToClipboard>

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
            focusThumbOnChange={false}
            value={passwordLength}
            onChange={handleSliderChange}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb
              fontSize="sm"
              boxSize="32px"
              children={passwordLength}
            />
          </Slider>
        </Flex>
      </Stack>
    </div>
  );
};
