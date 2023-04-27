// routing
import Router from './router';
// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

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
          <Provider store={store}>
            <GlobalStyle />
            <NotificationsContainer />
            <Router />
          </Provider>
        </LanguageContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
