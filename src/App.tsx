
import { ThemeProvider } from '@mui/material'
import theme from "./theme"
import MainView from './views/main'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <MainView />
    </ThemeProvider>
  )
}

export default App
