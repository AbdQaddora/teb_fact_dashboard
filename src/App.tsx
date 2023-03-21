// routing
import { Routes } from 'react-router-dom';
import Router from './router';
// theming
import { ThemeProvider } from 'styled-components';
import defaultTheme from './style/theme';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Router />
      </ThemeProvider>
    </div>
  )
}

export default App
