import React from "react";
import styled from "styled-components";


function StyleTaggedComponent(){
    const Container=styled.div
    display: flex;
    flex_direction : column;
    align_items: center ;
    justify_content:center;
    height: 100;
    background_color: lightblue;
   
    const Title =styled.h1
    color:darkblue;
    font_size:24;
    font_weight:bold;


    const description=styled.p
    color:darkblue;
    font_size:18;

    return(
        <Container>
            <title>Welcome to My App</title>
            <description>This is a simple component with styles. </description>
        </Container>
    );

};
