import React from "react";
import './StylingComponent.css';


function StylingComponent(){
    return(
        <div className="container">
            <h1 className="title">welcome to my App</h1>
            <p className="description">This is a simple components with styles</p>
        </div>
    );
}

function InlineStylingComponent(){
    // Inline Styling
    const containerStyle={
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height: '100vh';
        backgroundColor:'lightblue',

    };

    const titleStyle={
        color: 'darkblue',
        fontSize:'24px',
        fontWeight:'bold',
    };
    const descriptionStyle={
        color:'darkgrey',
        fontSize:'18px',
    };
    return(
        <div style={containerStyle}>
            <h1 style={titleStyle}>welcome to my App</h1>
            <p style={descriptionStyle}>This is a simple components. </p>
        </div>
    );
}

export {StylingComponent,InlineStylingComponent};