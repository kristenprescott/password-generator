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
} from "@chakra-ui/react";
import { InlineStylesModel } from "models/InlineStylesModel";
import { useState, useRef } from "react";
// import { useState, useRef, useEffect } from "react";
import { PasswordLengthInputs } from "./PasswordLengthInputs";
import { PasswordCharsCheckboxes } from "./PasswordCharsCheckboxes";
import { PasswordOptions } from "./PasswordOptions";
import { uppercase, lowercase, numbers, symbols } from "../common/characters";

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
  const [charset, _setCharset] = useState(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()<>,.?/[]{}-=_+|/0123456789"
  );
  const [password, _setPassword] = useState("");
  const [passwordLength, _setPasswordLength] = useState(12);
  const [isUppercase, _setIsUppercase] = useState(true);
  const [isLowercase, _setIsLowercase] = useState(true);
  const [isNumeric, _setIsNumeric] = useState(true);
  const [isSymbolic, _setIsSymbolic] = useState(true);
  const [radioValue, _setRadioValue] = useState("3");

  const passwordRef = useRef(null);

  const handleNumberChange = (valueAsString: string): void => {
    _setPasswordLength(parseInt(valueAsString));
  };

  const handleSliderChange = (passwordLength: number) => {
    _setPasswordLength(passwordLength);
  };

  const handleUppercaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    _setIsUppercase(e.target.checked);
    if (isUppercase === true)
      _setCharset(charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
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

  const randomizePassword = () => {
    const randomPassword =
      Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

    _setPassword(randomPassword);

    navigator.clipboard.writeText(randomPassword);
  };

  const generateNewPassword = () => {
    // generateCharset();
    // _setPassword(passwordCharacters(characters, passwordLength));

    randomizePassword();
  };

  const copyClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div style={styles.main}>
      <p>{uppercase}</p>
      <p>{lowercase}</p>
      <p>{numbers}</p>
      <p>{symbols}</p>
      <p>Charset: {charset ? charset : "N/A"}</p>
      <p>Length: {passwordLength}</p>
      <p>Uppercase: {isUppercase ? "true" : "false"}</p>
      <p>Lowercase: {isLowercase ? "true" : "false"}</p>
      <p>Numeric: {isNumeric ? "true" : "false"}</p>
      <p>Symbolic: {isSymbolic ? "true" : "false"}</p>
      <Stack spacing={4}>
        <InputGroup>
          <InputRightElement
            children={
              <>
                <Button variant="ghost" onClick={copyClipboard}>
                  <Icon as={FiCopy} w={5} h={5} color="gray.500" />
                </Button>
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
