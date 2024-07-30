// routing
import Router from './router';
// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

import LanguageContextProvider from './context/LanguageContext';
import AuthContextProvider from './context/AuthContext';

// theming and style
import GlobalStyle from './style';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './context/ThemeContext';

// tostas
import NotificationsContainer from './components/NotificationsContainer';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LanguageContextProvider>
          <AuthContextProvider>
            <Provider store={store}>
              <GlobalStyle />
              <NotificationsContainer />
              <Router />
            </Provider>
          </AuthContextProvider>
        </LanguageContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
