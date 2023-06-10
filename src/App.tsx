// routing
import Router from './router';
// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

import LanguageContextProvider from './context/LanguageContext';
import AuthContextProvider from './context/AuthContext';

// theming and style
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style';

// tostas
import NotificationsContainer from './components/NotificationsContainer';
import { useTheme } from './context/ThemeContext';

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
