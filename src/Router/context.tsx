import React from 'react';

export const AuthContext = React.createContext(
    toggleTheme: () => {
               setIsDarkTheme((isDarkTheme) => !isDarkTheme);
             },
);

