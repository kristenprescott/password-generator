import { InlineStylesModel } from "models/InlineStylesModel";

const styles: InlineStylesModel = {
  main: {
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
    padding: 20,
  },
  h1: {
    fontSize: "26px",
    fontWeight: "bolder",
  },
  p: {
    fontSize: "18px",
  },
};

export const Header = (): JSX.Element => {
  return (
    <div style={styles.main}>
      <h1 style={styles.h1}>Password Generator</h1>
      <p style={styles.p}>Make a strong password</p>
    </div>
  );
};
