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
import { useState } from "react";
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
  const [value, _setValue] = useState("");
  const [copy, _setCopy] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    _setValue(event.target.value);

  const handleCopy = () => {
    _setCopy(value);
  };

  const handleGenerate = () => {
    console.log("hi");
  };

  return (
    <div style={styles.main}>
      <Stack spacing={4}>
        <Text>Value: {value}</Text>
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
                <Button variant="ghost" onClick={handleGenerate}>
                  <Icon as={FiRefreshCcw} w={5} h={5} color="gray.500" />
                </Button>
              </>
            }
          />
          <Input
            type="text"
            variant="flushed"
            onChange={handleChange}
            value={value}
            size="lg"
            focusBorderColor="tomato"
            isReadOnly
          />
        </InputGroup>

        <CopyToClipboard text={copy}>
          <Button onClick={handleCopy}>Copy</Button>
        </CopyToClipboard>
      </Stack>
    </div>
  );
};
