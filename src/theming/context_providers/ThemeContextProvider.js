// Importing
import React, {useState} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import { useDispatch, useSelector } from "react-redux";

// Exporting context provider to provide it's values & methods globally
export const ThemeContextProvider = ({children}) => {
  // Local state
  const appReducer = useSelector(state => state);

  const {ThemeReducer} = appReducer

  const lightThemeColors = {
    primary: ThemeReducer.primary,
    secondary: ThemeReducer.secondary,
    secondaryDark: ThemeReducer.secondaryDark,
    accent: ThemeReducer.accent,
    accentLightest: ThemeReducer.accentLightest,
    textHighContrast: ThemeReducer.textHighContrast,
    textLowContrast: ThemeReducer.textLowContrast,
  };

  const [darkThemeColors,setDarkThemeColors] = useState({
    primary: '#191822',
    secondary: '#21202d',
    secondaryDark: '#1A1923',
    accent: '#588157',
    accentLightest: '#5881571A',
    textHighContrast: '#FFFFFF',
    textLowContrast: '#9EA3B9',
  });

  const [theme, setTheme] = useState({
    lightTheme: {
      primary: ThemeReducer.primary,
      secondary: ThemeReducer.secondary,
      secondaryDark: ThemeReducer.secondaryDark,
      accent: ThemeReducer.accent,
      accentLightest: ThemeReducer.accentLightest,
      textHighContrast: ThemeReducer.textHighContrast,
      textLowContrast: ThemeReducer.textLowContrast,
    },
    darkTheme: {
      primary: darkThemeColors.primary,
      secondary: darkThemeColors.secondary,
      secondaryDark: darkThemeColors.secondaryDark,
      accent: darkThemeColors.accent,
      accentLightest: darkThemeColors.accentLightest,
      textHighContrast: darkThemeColors.textHighContrast,
      textLowContrast: darkThemeColors.textLowContrast,
    },
    isLightTheme: true,
  });

  // Toggling theme mode(Light/Dark)
  const _toggleTheme = () => {
    // Updating local state
    setTheme({
      ...theme,
      lightTheme: lightThemeColors,
    });
  };

  // Returning context provider
  return (
    <ThemeContext.Provider value={{...theme, _toggleTheme: _toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
