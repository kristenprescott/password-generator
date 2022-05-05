import { FiCopy, FiRefreshCcw } from "react-icons/fi";
import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
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
  const [password, _setPassword] = useState("");
  const [copy, _setCopy] = useState("");

  const passwordRef = useRef(null);
  console.log(password, passwordRef);

  const handleCopy = () => {
    _setCopy(password);
  };

  const copyText = () => {
    navigator.clipboard.writeText("http://localhost:3000/");
    alert(`Copied ${password} to clipboard`);
  };
  console.log(copyText);

  const handleGenerate = () => {
    console.log("hi");
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
                  <Button variant="ghost" onClick={handleCopy}>
                    <Icon as={FiCopy} w={5} h={5} color="gray.500" />
                  </Button>
                </CopyToClipboard>
                <Button variant="ghost" onClick={copyText}>
                  <Icon as={FiCopy} w={5} h={5} color="red.500" />
                </Button>
                <Button variant="ghost" onClick={handleGenerate}>
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

        {/* <Icon viewBox="0 0 200 200" color="gray.500">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon> */}
      </Stack>
    </div>
  );
};
