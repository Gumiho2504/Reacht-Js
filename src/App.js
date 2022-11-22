import React from 'react';
import HomeScreen  from './screen/home/home';
import AboutScreen from './screen/about/about';
import ContactScreen from './screen/contact/contact';
import MainContainer from './screen/container/MainContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const App = () =>{
  return(
   <BrowserRouter>
    <MainContainer>
      <Routes>
        <Route path='/' element={<HomeScreen/>}></Route>
        <Route path='/about' element={<AboutScreen/>}></Route>
        <Route path='/contact' element={<ContactScreen />}></Route>
      </Routes>
    </MainContainer>
   </BrowserRouter>
  )
}
export default App;