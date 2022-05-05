let chars = "";
let passwordLength = 0;

export const setUpperCase = (isUpperCase: boolean) => {
  if (isUpperCase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  return "";
};

export const setLowerCase = (isLowerCase: boolean) => {
  if (isLowerCase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  return "";
};

export const setSymbols = (isSymbol: boolean) => {
  if (isSymbol) {
    chars += "!@#$%^&*()<>,.?/[]{}-=_+|/";
  }
  return "";
};

export const setNumber = (isNumeric: boolean) => {
  if (isNumeric) {
    chars += "0123456789";
  }
  return "";
};

export const getRandInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const passwordChars = (): any => {
  let password = "";
  if (chars.length) {
    for (let i = 0; i < passwordLength; i++) {
      password += chars[getRandInt(0, chars.length - 1)];
    }
    chars = "";
    passwordLength = 0;
    return password;
  }
};

export const setPasswordLength = (length: number) => {
  passwordLength = length;
  return passwordLength;
};

export const generatePassword = (
  passwordProps: any,
  passwordLength: number
) => {
  const { uppercase, lowercase, symbols, numbers } = passwordProps;

  setPasswordLength(passwordLength);
  setUpperCase(uppercase);
  setLowerCase(lowercase);
  setSymbols(symbols);
  setNumber(numbers);
  const password = passwordChars();
  return password;
};

export const copyToClipBoard = (elementRef: any) => {
  elementRef.select();
  document.execCommand("copy");
};
