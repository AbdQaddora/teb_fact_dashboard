// routing
import Router from './router';

// theming and style
import { ThemeProvider } from 'styled-components';
import defaultTheme from './style/theme';
import GlobalStyle from './style';
import LanguageContextProvider from './context/LanguageContext';
// tostas
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <div className="App">
        <ThemeProvider theme={defaultTheme}>
          <LanguageContextProvider>
            <GlobalStyle />
            <Router />
          </LanguageContextProvider>
        </ThemeProvider>
      </div>
      {/* for show notifications and error messages */}
      <ToastContainer
        position='bottom-right'
        theme='dark'
      />
    </>
  )
}

export default App
