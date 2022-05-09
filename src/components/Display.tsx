import { FiCopy, FiRefreshCcw } from "react-icons/fi";
import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { InlineStylesModel } from "models/InlineStylesModel";
import { useState, useRef } from "react";
import { PasswordLengthInputs } from "./PasswordLengthInputs";
import { uppercase, lowercase, numbers, symbols } from "../common/characters";
import { CharacterOptions } from "./CharacterOptions";

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
  const [password, _setPassword] = useState("");
  const [passwordLength, _setPasswordLength] = useState(16);

  const [includeUpper, _setIncludeUpper] = useState(true);
  const [includeLower, _setIncludeLower] = useState(true);
  const [includeNumbers, _setIncludeNumbers] = useState(true);
  const [includeSymbols, _setIncludeSymbols] = useState(true);

  const passwordRef = useRef(null);

  const handleUpperChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === false) _setIncludeUpper(false);
    if (e.target.checked === true) _setIncludeUpper(true);
  };
  const handleLowerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === false) _setIncludeLower(false);
    if (e.target.checked === true) _setIncludeLower(true);
  };
  const handleNumbersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === false) _setIncludeNumbers(false);
    if (e.target.checked === true) _setIncludeNumbers(true);
  };
  const handleSymbolsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === false) _setIncludeSymbols(false);
    if (e.target.checked === true) _setIncludeSymbols(true);
  };

  const randomizePassword = () => {
    if (!includeUpper && !includeLower && !includeNumbers && !includeSymbols)
      alert("Must check at least one option!");

    let randomPassword = "";
    let charset = "";

    if (includeUpper) charset = charset + uppercase;
    if (includeLower) charset = charset + lowercase;
    if (includeNumbers) charset = charset + numbers;
    if (includeSymbols) charset = charset + symbols;

    for (let i = 1; i <= passwordLength; i++) {
      const char = Math.floor(Math.random() * charset.length + 1);
      randomPassword += charset.charAt(char);
    }
    _setPassword(randomPassword);

    navigator.clipboard.writeText(randomPassword);
  };

  const generateNewPassword = () => {
    randomizePassword();
  };

  const copyClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div style={styles.main}>
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
            focusBorderColor="tomato"
            ref={passwordRef}
            size="lg"
            style={{ width: "400px" }}
            type="text"
            value={password}
            variant="flushed"
            isReadOnly
          />
        </InputGroup>

        <Button onClick={randomizePassword}>
          Generate & copy to clipboard
        </Button>

        <PasswordLengthInputs
          passwordLength={passwordLength}
          _setPasswordLength={_setPasswordLength}
        />

        <CharacterOptions
          includeUpper={includeUpper}
          includeLower={includeLower}
          includeNumbers={includeNumbers}
          includeSymbols={includeSymbols}
          handleUpperChange={handleUpperChange}
          handleLowerChange={handleLowerChange}
          handleNumbersChange={handleNumbersChange}
          handleSymbolsChange={handleSymbolsChange}
        />
      </Stack>
    </div>
  );
};
