import React, { Children } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeProvider({Childran}){
    const [theme , setTheme]=React.useState('Light');
    const toggleTheme=()=>{
        setTheme((PrevTheme)=>(PrevTheme==='Light'? 'dark':'Light'));
    };
    const value={theme,toggleTheme};

    return (
        <ThemeContext.Provider value={value}>
            {Children}
        </ThemeContext.Provider>
    )

} 

export default ThemeProvider;