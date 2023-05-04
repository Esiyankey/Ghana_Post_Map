import { useState } from 'react'
import Navbar from './Navbar'
import MainContainer from './MainContainer';
import FooterContainer from './FooterContainer';



export default function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar/>
      <MainContainer/>
      <FooterContainer/>
    </div>
 
  );
}