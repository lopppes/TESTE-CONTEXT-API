import React, { createContext, useState, useContext } from 'react';

export const themes = {
  light: {
    color: '#000',
    background: '#fff'
  },
  dark: {
    color: '#fff',
    background: '#000'
  }
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const [theme, setThemeState] = useState(themes.light);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
