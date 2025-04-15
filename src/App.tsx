import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GoblalStyles } from "./styles/global"
import { Transactions } from "./pages/trasanctions"

export function App() {
 
  return (
    <ThemeProvider theme={defaultTheme}>
      <GoblalStyles />

      <Transactions />
   </ThemeProvider>
  )
}


