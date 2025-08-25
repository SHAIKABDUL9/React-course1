import React from 'react';
import { ThemeContext } from './ThemeContext';


function UserComponent(){
    const{theme,toggleTheme}=React.useContext(ThemeContext);

    const style={
        backgroundColor:theme=='light'?'#f0f0f0':'#444',
        color:theme==='light'?'#000':'#fff',
        padding:'20px',
        borderRadius:'5px',
        textAlign:'center',
    };
    return(
        <div style={style}>
            <h2>User Component</h2>
            <P>The cuurrent theme is: {theme}</P>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default UserComponent;