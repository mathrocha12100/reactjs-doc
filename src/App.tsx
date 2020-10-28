import React, { useCallback, createContext } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/Main';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './hooks/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

interface AppContextProps {
  toggleTheme: () => void;
}

export const AppContext = createContext<AppContextProps>({
  toggleTheme: () => {},
});

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme]);

  return (
    <AppContext.Provider
      value={{
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        <MainPage />
        <GlobalStyle />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
