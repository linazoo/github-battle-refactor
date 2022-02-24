import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import Battle from "./components/Battle";
import Popular from "./components/Popular";
import { ThemeProvider } from "./contexts/theme";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "dark" : "light",
        }));
      },
    };
  }
  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className="container">
          <Popular />
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
