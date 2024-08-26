import React from 'react'
import { Sidebar } from './Components/Sidebar';
// import { Menubar } from './Components/Menubar';
import { Profile } from './Components/Profile';
import { Main } from './Components/Main';
 const App = () => {
  return (
   <>
   <Sidebar></Sidebar>
   {/* <Menubar></Menubar> */}
   <Main></Main>
   <Profile></Profile>
   </>
  )
}
export default App;
