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
    let pass = "";
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
    for (let i = 1; i <= passwordLength; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    _setPassword(pass);

    navigator.clipboard.writeText(pass);

    // const randomPassword =
    //   Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

    // _setPassword(randomPassword);

    // navigator.clipboard.writeText(randomPassword);
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
            type="text"
            variant="flushed"
            value={password}
            ref={passwordRef}
            size="lg"
            focusBorderColor="tomato"
            style={{ width: "300px" }}
            isReadOnly
          />
        </InputGroup>

        <Button onClick={randomizePassword}>
          Generate & copy to clipboard
        </Button>
      </Stack>
    </div>
  );
};
