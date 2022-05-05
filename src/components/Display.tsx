import { FiCopy, FiRefreshCcw } from "react-icons/fi";
import {
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { InlineStylesModel } from "models/InlineStylesModel";
import { useState, useRef } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { PasswordLengthInputs } from "./PasswordLengthInputs";
import { PasswordCharsCheckboxes } from "./PasswordCharsCheckboxes";
import { PasswordOptions } from "./PasswordOptions";

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

  const [isUppercase, _setIsUppercase] = useState(true);
  const [isLowercase, _setIsLowercase] = useState(true);
  const [isNumeric, _setIsNumeric] = useState(true);
  const [isSymbolic, _setIsSymbolic] = useState(true);

  const [radioValue, _setRadioValue] = useState("3");

  const [copy, _setCopy] = useState("");

  const passwordRef = useRef(null);

  const handleNumberChange = (valueAsString: string): void => {
    _setPasswordLength(parseInt(valueAsString));
  };

  const handleSliderChange = (passwordLength: number) => {
    _setPasswordLength(passwordLength);
  };

  const handleUppercaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    _setIsUppercase(e.target.checked);
  };

  const handleLowercaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    _setIsLowercase(e.target.checked);
  };

  const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    _setIsNumeric(e.target.checked);
  };

  const handleSymbolicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    _setIsSymbolic(e.target.checked);
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

  const randomizePassword = () => {
    const randomPassword =
      Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

    _setPassword(randomPassword);

    navigator.clipboard.writeText(randomPassword);
  };

  const generateCharString = () => {
    let chars = "";
    if (isUppercase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    }
    if (isLowercase) {
      chars += "abcdefghijklmnopqrstuvwxyz ";
    }
    if (isSymbolic) {
      chars += "!@#$%^&*()<>,.?/[]{}-=_+|/";
    }
    if (isNumeric) {
      chars += "0123456789";
    }
    _setCharacters(chars);
  };

  const generateNewPassword = () => {
    generateCharString();
    _setPassword(passwordCharacters(characters, passwordLength));
  };

  const handleCopy = () => {
    _setCopy(password);
  };

  const copyClipboard = () => {
    console.log("copying...");
  };

  return (
    <div style={styles.main}>
      <Text>Copy: {copy}</Text>

      <Stack spacing={4}>
        <InputGroup>
          <InputRightElement
            children={
              <>
                <CopyToClipboard text={copy}>
                  <Button variant="ghost" onClick={copyClipboard}>
                    <Icon as={FiCopy} w={5} h={5} color="gray.500" />
                  </Button>
                </CopyToClipboard>
                <Button variant="ghost" onClick={generateNewPassword}>
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

        <Button onClick={randomizePassword}>
          Generate & copy to clipboard
        </Button>

        <CopyToClipboard text={copy}>
          <Button onClick={handleCopy} isDisabled={!password.length}>
            Copy
          </Button>
        </CopyToClipboard>

        <PasswordLengthInputs
          passwordLength={passwordLength}
          _setPasswordLength={_setPasswordLength}
          handleSliderChange={handleSliderChange}
          handleNumberChange={handleNumberChange}
        />

        <Flex justifyContent="center" alignItems="center">
          <PasswordOptions
            radioValue={radioValue}
            _setRadioValue={_setRadioValue}
          />
          <Spacer />
          <PasswordCharsCheckboxes
            isUppercase={isUppercase}
            isLowercase={isLowercase}
            isNumeric={isNumeric}
            isSymbolic={isSymbolic}
            handleUppercaseChange={handleUppercaseChange}
            handleLowercaseChange={handleLowercaseChange}
            handleNumericChange={handleNumericChange}
            handleSymbolicChange={handleSymbolicChange}
          />
          <Spacer />
        </Flex>
      </Stack>
    </div>
  );
};
