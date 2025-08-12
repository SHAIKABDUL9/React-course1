import React from 'react';
import Counter from './Counter';

function UserStatus({isLoggedIn}){
    if (isLoggedIn){
        return(
        <div>
            <p>User LOgged in:</p>
           <Counter/> 
        </div>
        )
    }

return(
    <div>
       <p>User is not logged in</p>
    </div>
);
}
//Function using ternary operator
function UserStatusTernary({isLoggedIn}){
    return(
        <div>
            <p>User is {isLoggedIn ? "logged in" :"not logged in"}:</p>
            {isLoggedIn && <Counter/>}:<p>please log in to see the counter.</p>
        </div>
    );
}
//function userStatusLogicalAnd
function UserStatusLogicalAnd({isLoggedIn}){
    return(
        <div>
            {isLoggedIn&&<p>user is logged in</p>}
             {!isLoggedIn&&<p>user is not logged in</p>}
            {isLoggedIn && <Counter/>}
            {!isLoggedIn &&<p>please log in to see the counter.</p>}
        </div>
    );
}


export {UserStatus, UserStatusTernary,UserStatusLogicalAnd};



