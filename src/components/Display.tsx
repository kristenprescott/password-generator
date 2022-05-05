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

  const generatePassword = () => {
    alert(`Generating password ${passwordLength}...`);
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
      <Stack spacing={4}>
        <Text>Uppercase: {isUppercase.toString()}</Text>
        <Text>Lowercase: {isLowercase.toString()}</Text>
        <Text>Numeric: {isNumeric.toString()}</Text>
        <Text>Symbolic: {isSymbolic.toString()}</Text>
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
