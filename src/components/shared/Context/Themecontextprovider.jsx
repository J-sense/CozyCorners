// import { createContext, useEffect, useState } from "react";

import {  createContext, useEffect, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   useEffect(() => {
//     if (isDarkMode) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, [isDarkMode]);

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
import React from 'react'
export const ThemeContext = createContext()



const Themecontextprovider = ({ children }) => {
    const [isDarkMode,setIsDarkMode] = useState(false)
    const handleToggle = () =>{
        setIsDarkMode(!isDarkMode)
        
    }
    useEffect(()=>{
        if(isDarkMode){
            document.body.classList.add('dark')
        }
        else{
            document.body.classList.remove('dark')
        }
    },[isDarkMode])
  return (
    <ThemeContext.Provider value={{handleToggle,isDarkMode}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default Themecontextprovider

