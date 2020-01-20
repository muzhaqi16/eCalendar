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
    fontSize: 20,
    text: "Then came the night of the first falling star."
};

export const ThemeContext = React.createContext({
    theme: themes.light, // default value
    toggleTheme: () => { },
}
);