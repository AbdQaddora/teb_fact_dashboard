// routing
import Router from './router';

// theming and style
import { ThemeProvider } from 'styled-components';
import defaultTheme from './style/theme';
import GlobalStyle from './style';
import LanguageContextProvider from './context/LanguageContext';
// tostas
import NotificationsContainer from './components/NotificationsContainer';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <LanguageContextProvider>
          <GlobalStyle />
          <NotificationsContainer />
          <Router />
        </LanguageContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
