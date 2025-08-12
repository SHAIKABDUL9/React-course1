import logo from './logo.svg';
import './App.css';
import Greeting from './welcome.jsx';
import Student from './Student';
import Counter from './Counter.js';
import {UserStatus, UserStatusLogicalAnd, UserStatusTernary } from './UserStatus.js';
import Products from './Products.js';
function App() {
    const products=[{name:'samsung',price:25000,description:'mobile'},{name:'moto',price:26000,description:'mobile'},{name:'HP i5',price:68000,description:'laptop'}]
    return ( <
        div className = 'App' >
         {<Student/>}
         {/*<Counter/>*/}
    
        <
        header className = 'header-App' >
        <
        img src = { logo }
        className = 'App-logo'
        alt = 'logo'/>
        <
        p >
        Edit < code> src / App.js </code>and save to reload.</p >
        < a className = 'App-link'
        href = 'https://reactjs.org'
        target = '_blank'
        rel = 'noopener noreferrer' > Learn react
         </a> 
        </header>  <Greeting / >
        <UserStatus isLoggedIn={false}/>
        <UserStatusTernary isLoggedIn={false}/>
        <UserStatusLogicalAnd isLoggedIn={true}/>
        <Products products ={products}/>
        </div>
    );
};

export default App;