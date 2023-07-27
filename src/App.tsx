import { ThemeProvider } from "@mui/material";
import { AuthProvider } from "./context/authContext";
import theme from "./theme";
import Routes from "./routes";
import { GeneralProvider } from "./context/generalContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GeneralProvider>
          <Routes />
        </GeneralProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
