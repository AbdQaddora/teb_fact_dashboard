// routing
import Router from './router';

// theming and style
import { ThemeProvider } from 'styled-components';
import defaultTheme from './style/theme';
import GlobalStyle from './style';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </div>
  )
}

export default App
