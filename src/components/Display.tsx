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
  const [passwordLength, _setPasswordLength] = useState(13);

  const passwordRef = useRef(null);

  const randomizePassword = () => {
    let randomPassword = "";
    let charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
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
      </Stack>
    </div>
  );
};
