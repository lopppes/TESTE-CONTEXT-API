import {ThemeProvider} from './contexts/theme-context'
import {ThemeToggleButton} from './components/theme-toggle/theme-toggle-button'
import { Card } from './components/card/card'

function App() {

  return (
    <>
      <ThemeProvider>
        <Card></Card>
        <ThemeToggleButton></ThemeToggleButton>
      </ThemeProvider>
    </>
  )
}

export default App
