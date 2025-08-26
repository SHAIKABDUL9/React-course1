import logo from './logo.svg';
import './App.css';
//import Greeting from './welcome.jsx';
//import Student from './Student';
//import Counter from './Counter.js';
// import { UserStatus, UserStatusTernary, UserStatusLogicalAnd } from './UserStatus.js';
// import Products from './Products.js';
// import {UserForm, SingleForm} from './components/UserForm.js';
// import {Effect, PostFetcher} from './components/Effect.js';
//import  WelcomeNew from '/components/Welcome.js';
//import { Router, Routes, Route } from 'react-router-dom';
//import { SingleForm } from './components/UserForm.js';
// import ThemeProvider from './components/ThemeProvider.js';
// import ThemedComponent from './components/ThemedComponent.js';
// import UserComponent from './components/UserComponent.js';
// import {StylingComponent, InlineStylingComponent} from './components/StylingComponent.js';
// import StylingModuleComponent  from './components/StyleComponents/StylingModule.js';
// import StyleTaggedComponent from './components/StyleComponents/StyleTaggedComponent.js';
// import InputFocusWithButton from './components/UseRef/InputFocusWithButton.js';
//import RefCounter from './Components/UseRef/RefCounter.js';
//import UserForm from './Components/FormValidations/UserForm.js';
//import {GetRequest,AxiosGetRequest} from './Components/API/GetRequest.js';
//import {PostPutPatchDel ,PostPutPatchDelAxios} from './Components/API/PostPutPatchDel.js'

//import { LoginButton,LoginWithProps } from './Components/LoginTest/LoginButton';
//import UseMemo from './Components/Memoization/UseMemo';
import UseCallBackParent from './Components/Memoization/UseCallBackParent';


function App() {
  const products=[{name:'samsung',price:25000,description:'mobile'},
        {name:'moto',price:26000,description:'mobile'},
        {name:'HP i5',price:68000,description:'laptop'},
         {name: 'DELL', price: 70000, description: 'Laptop', id: 4}]




    return ( 
<>

   {/* <div className="container">Hi</div> */}
    {/* <StylingComponent />
    <InlineStylingComponent /> */}
    {/* <StylingModuleComponent /> */}
    {/* <StyleTaggedComponent /> */}
    {/* <InputFocusWithButton /> */}
    {/*<RefCounter />*/}
    {/* <GetRequest/> */}
    {/* <AxiosGetRequest/> */}
    {/* <PostPutPatchDel/>  */}

{/* <LoginWithProps isLoggedIn={true} /> */}
{/* <UseMemo/> */}
<UseCallBackParent/>


 </>





 // <ThemeProvider>
    //    <ThemedComponent />
    //    <UserComponent />
    // </ThemeProvider>
      // <Routes>
      //   <Route path="/" element={<MainLayout />}>
      //    {<Route path='/welcome' element={<WelcomeNew />} />}
      //    {<Route path="/student/*" element={<Student name="Harini" classText="React" grade="A" counter="0"/>} />}
      //    {<Route path="/form/*" element={<SingleForm/>} />}
      //   </Route>
      // </Routes>
    // <Routes>
    //   <Route path="/" element={<WelcomeNew />} />
    //   <Route path="/member" element={<Student name="Harini" classText="React" grade="A" counter="0"/>} />
    //   <Route path="/counter" element={<Counter />} />
    // </Routes>
   




    );

}

export default App;