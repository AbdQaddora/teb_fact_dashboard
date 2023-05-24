// routing
import Router from './router';
// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

import LanguageContextProvider from './context/LanguageContext';
import AuthContextProvider from './context/AuthContext';

// theming and style
import { ThemeProvider } from 'styled-components';
import defaultTheme from './style/theme';
import GlobalStyle from './style';

// tostas
import NotificationsContainer from './components/NotificationsContainer';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
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
