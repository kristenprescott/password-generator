import "./App.css";
import { Header } from "components/Header";
import { InlineStylesModel } from "models/InlineStylesModel";
import { Display } from "components/Display";

const styles: InlineStylesModel = {
  App: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

function App() {
  return (
    <div style={styles.App}>
      <Header />
      <Display />
    </div>
  );
}

export default App;
