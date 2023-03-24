// routing
import Router from './router';

// theming and style
import { ThemeProvider } from 'styled-components';
import defaultTheme from './style/theme';
import GlobalStyle from './style';
import LanguageContextProvider from './context/LanguageContext';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <LanguageContextProvider>
          <GlobalStyle />
          <Router />
        </LanguageContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
