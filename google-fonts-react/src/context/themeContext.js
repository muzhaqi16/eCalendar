import React from 'react';

export const themes = {
    light: {
        foreground: '#000',
        background: '#fff',
    },
    dark: {
        foreground: '#fff',
        background: '#222',
    },
    fontSize: 40,
};

export const ThemeContext = React.createContext({
    theme: themes.light, // default value
    toggleTheme: () => { console.log("Theme Changed") },
}
);