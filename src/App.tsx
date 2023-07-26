import { ThemeProvider } from "@mui/material";
import { AuthProvider } from "./context/authContext";
import theme from "./theme";
import Routes from "./routes";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
  );
}

export default App;
